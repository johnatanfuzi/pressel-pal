import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection, LegalList } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/components/SiteFooter";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso e de Compra — Receitas na Air Fryer" },
      {
        name: "description",
        content:
          "Condições de uso e de compra do material digital de receitas na air fryer: entrega, acesso individual e uso permitido.",
      },
      { property: "og:title", content: "Termos de Uso e de Compra" },
      {
        property: "og:description",
        content: "Regras de compra, entrega e uso do material digital de receitas na air fryer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Termos;
});

function Termos() {
  return (
    <LegalPage title="Termos de Uso e de Compra" updated="28 de julho de 2026">
      <p>
        Ao comprar ou utilizar o material oferecido neste site, você concorda com os termos abaixo.
        A venda é realizada por pessoa física no Brasil e o pagamento é processado pela Cakto.
      </p>

      <LegalSection title="1. O que é o produto">
        <p>
          O produto é um material digital, entregue em arquivos PDF, com acesso liberado por área de
          membros. Não há envio de nenhum item físico e nenhum custo de frete.
        </p>
      </LegalSection>

      <LegalSection title="2. Entrega">
        <p>
          A entrega é imediata após a confirmação do pagamento pela plataforma. Os dados de acesso
          são enviados para o e-mail informado na compra. Formas de pagamento como boleto podem levar
          mais tempo para serem confirmadas pela instituição financeira, e a entrega ocorre assim que
          a confirmação chega.
        </p>
        <p>
          Se o e-mail não chegar, verifique as caixas de spam e promoções e, em seguida, escreva para{" "}
          <a className="font-bold text-orange underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="3. Acesso individual e intransferível">
        <p>
          O acesso é pessoal, individual e intransferível, concedido para uso próprio do comprador.
          O compartilhamento de login, senha ou arquivos com terceiros não é permitido e pode causar
          o bloqueio do acesso, sem reembolso, fora do prazo de arrependimento previsto na política
          de reembolso.
        </p>
      </LegalSection>

      <LegalSection title="4. Direitos autorais e uso proibido">
        <p>Todo o conteúdo é protegido por direito autoral. É expressamente proibido:</p>
        <LegalList
          items={[
            "Revender, sublicenciar ou comercializar o material, no todo ou em parte.",
            "Redistribuir, publicar ou disponibilizar os arquivos em grupos, sites, redes sociais ou plataformas de compartilhamento.",
            "Reproduzir o conteúdo em cursos, e-books ou materiais próprios, com ou sem alteração.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Natureza do conteúdo">
        <p>
          O conteúdo é informativo e de culinária. Não constitui orientação médica, nutricional ou
          terapêutica e não promete resultado de saúde, perda de peso ou emagrecimento. Cada pessoa
          tem necessidades e condições próprias; em caso de restrição alimentar, alergia ou condição
          de saúde, consulte um profissional habilitado antes de adotar qualquer receita.
        </p>
      </LegalSection>

      <LegalSection title="6. Responsabilidade do comprador">
        <p>
          É responsabilidade do comprador informar dados corretos na compra, manter suas credenciais
          em sigilo e seguir as instruções de preparo, incluindo cuidados básicos de segurança no uso
          da air fryer e no manuseio de alimentos.
        </p>
      </LegalSection>

      <LegalSection title="7. Cancelamento e reembolso">
        <p>
          O cancelamento segue a política de reembolso deste site, com prazo de 7 dias corridos a
          partir da compra, conforme o artigo 49 do Código de Defesa do Consumidor.
        </p>
      </LegalSection>

      <LegalSection title="8. Alterações e contato">
        <p>
          Estes termos podem ser atualizados a qualquer momento, valendo a versão publicada nesta
          página. Dúvidas podem ser enviadas para{" "}
          <a className="font-bold text-orange underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
