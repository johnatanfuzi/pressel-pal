import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection, LegalList } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/components/SiteFooter";

export const Route = createFileRoute("/reembolso")({
  head: () => ({
    meta: [
      { title: "Política de Reembolso — Receitas na Air Fryer" },
      {
        name: "description",
        content:
          "Reembolso em até 7 dias corridos a partir da compra, conforme o artigo 49 do Código de Defesa do Consumidor, sem necessidade de justificar.",
      },
      { property: "og:title", content: "Política de Reembolso" },
      {
        property: "og:description",
        content: "Como pedir reembolso do material digital dentro do prazo de 7 dias corridos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Reembolso,
});

function Reembolso() {
  return (
    <LegalPage title="Política de Reembolso" updated="28 de julho de 2026">
      <p>
        Esta política descreve como funciona o cancelamento da compra do material digital vendido
        neste site, com pagamento processado pela Cakto.
      </p>

      <LegalSection title="1. Prazo de 7 dias">
        <p>
          Você tem 7 dias corridos, contados a partir da data da compra, para solicitar o reembolso
          integral. Esse prazo corresponde ao direito de arrependimento previsto no artigo 49 do
          Código de Defesa do Consumidor, aplicável às compras feitas fora do estabelecimento
          comercial, como as realizadas pela internet.
        </p>
      </LegalSection>

      <LegalSection title="2. Não é preciso justificar">
        <p>
          Dentro dos 7 dias corridos não é necessário apresentar motivo, explicação ou comprovação de
          qualquer tipo. Basta solicitar o cancelamento, e o valor pago é devolvido integralmente.
        </p>
      </LegalSection>

      <LegalSection title="3. Como pedir">
        <LegalList
          items={[
            `Envie um e-mail para ${CONTACT_EMAIL} com o nome usado na compra e o e-mail do pedido.`,
            "Ou solicite diretamente pela Cakto, plataforma que processou o pagamento, usando o e-mail de confirmação da compra.",
          ]}
        />
        <p>
          Pedidos enviados por e-mail são respondidos em até 48 horas úteis. Você não precisa
          devolver nem apagar nada: por se tratar de material digital, o acesso é simplesmente
          encerrado.
        </p>
      </LegalSection>

      <LegalSection title="4. Prazo do estorno">
        <p>
          Após a aprovação do cancelamento, o estorno é processado pela plataforma de pagamento e o
          prazo até o valor aparecer para você depende da operadora usada na compra. Em cartão de
          crédito, o estorno costuma aparecer em uma ou duas faturas seguintes, conforme a data de
          fechamento. Em Pix ou boleto, a devolução é feita para os dados bancários informados.
        </p>
      </LegalSection>

      <LegalSection title="5. Após os 7 dias">
        <p>
          Passado o prazo de 7 dias corridos, o direito de arrependimento não se aplica mais. Ainda
          assim, se houver problema técnico de acesso ou falha na entrega do material, escreva para{" "}
          <a className="font-bold text-orange underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          que a situação será resolvida.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
