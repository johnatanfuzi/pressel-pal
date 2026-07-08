// Link do checkout. Editável em runtime através de /public/config.js
// (window.CTA_LINK). Se por algum motivo o config.js não carregar,
// usamos o fallback abaixo.
const FALLBACK_CTA = "https://igreja.space/pagina1";

declare global {
  interface Window {
    CTA_LINK?: string;
  }
}

export function getCtaLink(): string {
  if (typeof window !== "undefined" && typeof window.CTA_LINK === "string" && window.CTA_LINK) {
    return window.CTA_LINK;
  }
  return FALLBACK_CTA;
}

// Mantido para compatibilidade com imports antigos.
export const CTA_LINK = FALLBACK_CTA;
