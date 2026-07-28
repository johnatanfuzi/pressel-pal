import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/components/SiteFooter";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Suporte | Receitas na Air Fryer" },
      {
        name: "description",
        content:
          "Fale com o suporte por e-mail. Resposta em até 48 horas úteis. Dúvidas de pagamento também podem ser tratadas pela Cakto.",
      },
      { property: "og:title", content: "Contato e Suporte" },
      {
        property: "og:description",
        content: "E-mail de suporte com resposta em até 48 horas úteis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <LegalPage title="Contato" updated="28 de julho de 2026">
      <p>
        Dúvidas sobre o material, acesso, pagamento ou reembolso podem ser enviadas pelo e-mail de
        suporte abaixo.
      </p>

      <LegalSection title="E-mail de suporte">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex w-fit rounded-2xl bg-cream px-5 py-4 text-lg font-black text-brand-dark underline-offset-4 hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </LegalSection>

      <LegalSection title="Prazo de resposta">
        <p>
          Todas as mensagens são respondidas em até 48 horas úteis, na ordem em que chegam. Para
          agilizar, informe o nome e o e-mail usados na compra.
        </p>
      </LegalSection>

      <LegalSection title="Dúvidas sobre pagamento">
        <p>
          O pagamento é processado pela Cakto. Questões como cobrança, estorno, comprovante ou status
          da transação também podem ser tratadas diretamente com a Cakto, usando o e-mail de
          confirmação recebido no momento da compra.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
