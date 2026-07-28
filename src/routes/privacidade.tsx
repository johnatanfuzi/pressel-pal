import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection, LegalList } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Receitas na Air Fryer" },
      {
        name: "description",
        content:
          "Como coletamos, usamos e protegemos seus dados pessoais conforme a LGPD, incluindo pagamentos processados pela Cakto.",
      },
      { property: "og:title", content: "Política de Privacidade" },
      {
        property: "og:description",
        content: "Tratamento de dados pessoais conforme a LGPD no site de receitas na air fryer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <LegalPage title="Política de Privacidade" updated="28 de julho de 2026">
      <p>
        Esta política explica como os dados pessoais são tratados neste site, em conformidade com a
        Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD). A venda é feita por pessoa
        física, e o produto comercializado é um material digital.
      </p>

      <LegalSection title="1. Quais dados são coletados">
        <LegalList
          items={[
            "Nome, informado no momento da compra.",
            "E-mail, usado para enviar o acesso ao material e responder ao suporte.",
            "Respostas do quiz, como tempo disponível para cozinhar, número de pessoas e preferências de receitas.",
            "Dados técnicos de navegação, como páginas visitadas, tipo de dispositivo e origem do acesso.",
          ]}
        />
      </LegalSection>

      <LegalSection title="2. Para que os dados são usados">
        <LegalList
          items={[
            "Entregar o material digital comprado e liberar o acesso à área de membros.",
            "Prestar suporte e responder às solicitações enviadas por e-mail.",
            "Personalizar as recomendações de receitas exibidas com base nas respostas do quiz.",
            "Medir o desempenho das páginas e melhorar a experiência de navegação.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Pagamentos">
        <p>
          O pagamento é processado integralmente pela Cakto, responsável pela transação e pelo
          tratamento dos dados financeiros. O vendedor não coleta, não visualiza e não armazena
          números de cartão de crédito, código de segurança ou qualquer dado bancário. Para saber
          como a Cakto trata esses dados, consulte a política de privacidade da própria plataforma.
        </p>
      </LegalSection>

      <LegalSection title="4. Compartilhamento">
        <p>
          Os dados podem ser compartilhados apenas com a plataforma de pagamento, com o serviço de
          envio de e-mails e com a área de membros usada para entregar o material, sempre no limite
          necessário para executar a compra. Não vendemos dados pessoais a terceiros.
        </p>
      </LegalSection>

      <LegalSection title="5. Por quanto tempo os dados são guardados">
        <LegalList
          items={[
            "Dados de compra e de contato: até 5 anos após a transação, para fins fiscais e de defesa em eventual processo.",
            "Respostas do quiz: até 12 meses, ou até a solicitação de exclusão.",
            "Dados de navegação e análise: até 26 meses.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Cookies e ferramentas de análise">
        <p>
          Este site usa cookies próprios e de terceiros para lembrar suas respostas do quiz
          (armazenadas também no seu navegador) e para medir audiência e desempenho de anúncios,
          podendo incluir ferramentas como Google Analytics e Meta Pixel. Você pode bloquear ou
          apagar cookies a qualquer momento nas configurações do seu navegador, ciente de que isso
          pode afetar o funcionamento de partes do site.
        </p>
      </LegalSection>

      <LegalSection title="7. Direitos do titular">
        <p>Como titular dos dados, você pode solicitar a qualquer momento:</p>
        <LegalList
          items={[
            "Acesso aos dados pessoais que temos sobre você.",
            "Correção de dados incompletos, inexatos ou desatualizados.",
            "Exclusão dos dados tratados com base no seu consentimento.",
            "Portabilidade dos dados a outro fornecedor.",
            "Informação sobre com quem os dados foram compartilhados e revogação do consentimento.",
          ]}
        />
        <p>
          Para exercer qualquer um desses direitos, escreva para{" "}
          <a className="font-bold text-orange underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . O pedido é respondido em até 48 horas úteis.
        </p>
      </LegalSection>

      <LegalSection title="8. Segurança">
        <p>
          Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acesso
          não autorizado, perda ou divulgação indevida. Nenhum sistema é totalmente imune a
          incidentes, e em caso de evento relevante os titulares afetados serão comunicados.
        </p>
      </LegalSection>

      <LegalSection title="9. Alterações desta política">
        <p>
          Esta política pode ser atualizada. A data de última atualização no topo da página indica a
          versão vigente.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
