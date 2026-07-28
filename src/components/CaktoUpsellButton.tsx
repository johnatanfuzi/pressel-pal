import { useEffect, useRef } from "react";

const CAKTO_HTML = `<div> <meta charset="UTF-8">   <cakto-upsell-buttons>      <cakto-upsell-accept        bg-color="#0f7865"        text-color="#ffffff"        upsell-accept-url="members_area"        offer-id="nqt8oc7"        app-base-url="https://app.cakto.com.br"        offer-type="upsell"        upsell-reject-url="members_area"         >        SIM! Quero meu plano de 30 dias      </cakto-upsell-accept>      <cakto-upsell-reject        upsell-reject-url="members_area"             >        Nao, prefiro decidir o que cozinhar todo dia      </cakto-upsell-reject>    </cakto-upsell-buttons>           <!-- Descomente o código abaixo para estilzar o css dos botões -->      <!-- <style>          /* Botão de aceitar upsell */          cakto-upsell-accept::part(button) {              background-color: red;              color: white;              /* Ajuste do tamanho do botão               Descomente o código abaixo para definir um tamanho customizado para o botão */              /* width: 100vw; */          }          /* Botão de rejeitar upsell */          cakto-upsell-reject::part(button) {              background-color: blue;              color: white;          }      </style> --> </div>`;

const SCRIPT_SRC = "https://caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js";

export function CaktoUpsellButton() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    host.innerHTML = CAKTO_HTML;

    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = SCRIPT_SRC;
      script.async = true;
      // Nao envia a URL completa (com eventuais parametros) para o CDN de terceiros.
      script.referrerPolicy = "no-referrer";
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, []);

  return <div ref={ref} />;
}
