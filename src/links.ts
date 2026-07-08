// Destino oficial do CTA final. Mantido fixo no bundle para evitar que
// qualquer config.js antigo em cache redirecione para o checkout anterior.
export const CTA_LINK = "https://igreja.space/pagina1";

export function getCtaLink(): string {
  return CTA_LINK;
}
