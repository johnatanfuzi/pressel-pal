import { useEffect, useState } from "react";

/**
 * Preserva os parametros UTM (e afins) recebidos na URL desta pagina
 * e repassa para os links do site do Uniclinic.
 *
 * Os parametros da URL sao lidos uma unica vez por sessao de pagina
 * (cache em modulo), e as URLs finais tambem sao memorizadas, evitando
 * trabalho repetido quando varios componentes usam o mesmo link.
 */
const FORWARDED = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "gclid",
  "fbclid",
];

let forwardCache: URLSearchParams | null = null;
const urlCache = new Map<string, string>();

function getForwardParams(): URLSearchParams {
  if (forwardCache) return forwardCache;
  const forward = new URLSearchParams();
  if (typeof window !== "undefined") {
    const current = new URLSearchParams(window.location.search);
    for (const key of FORWARDED) {
      const value = current.get(key);
      if (value) forward.set(key, value);
    }
  }
  forwardCache = forward;
  return forward;
}

function buildTrackedUrl(baseUrl: string): string {
  const cached = urlCache.get(baseUrl);
  if (cached) return cached;

  const forward = getForwardParams();
  let result = baseUrl;
  if ([...forward.keys()].length > 0) {
    try {
      const next = new URL(baseUrl);
      forward.forEach((value, key) => next.searchParams.set(key, value));
      result = next.toString();
    } catch {
      /* mantem a URL original */
    }
  }
  urlCache.set(baseUrl, result);
  return result;
}

export function useTrackedUrl(baseUrl: string) {
  const [url, setUrl] = useState(baseUrl);

  useEffect(() => {
    const next = buildTrackedUrl(baseUrl);
    setUrl((current) => (current === next ? current : next));
  }, [baseUrl]);

  return url;
}
