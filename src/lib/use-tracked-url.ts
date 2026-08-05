import { useEffect, useState } from "react";

/**
 * Preserva os parametros UTM (e afins) recebidos na URL desta pagina
 * e repassa para os links do site do UniClinic.
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

export function useTrackedUrl(baseUrl: string) {
  const [url, setUrl] = useState(baseUrl);

  useEffect(() => {
    const current = new URLSearchParams(window.location.search);
    const forward = new URLSearchParams();
    for (const key of FORWARDED) {
      const value = current.get(key);
      if (value) forward.set(key, value);
    }
    if ([...forward.keys()].length === 0) return;

    try {
      const next = new URL(baseUrl);
      forward.forEach((value, key) => next.searchParams.set(key, value));
      setUrl(next.toString());
    } catch {
      /* mantem a URL original */
    }
  }, [baseUrl]);

  return url;
}
