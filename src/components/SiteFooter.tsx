import { Link } from "@tanstack/react-router";

export const CONTACT_EMAIL = "contato@meuairfryer.shop";

const LINKS = [
  { to: "/privacidade", label: "Privacidade" },
  { to: "/termos", label: "Termos" },
  { to: "/reembolso", label: "Reembolso" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted px-5 py-8 text-center text-xs text-muted-foreground">
      <nav className="mx-auto flex max-w-[720px] flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {LINKS.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <p className="mt-3">
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline-offset-2 hover:underline">
          {CONTACT_EMAIL}
        </a>
      </p>
      <p className="mt-2">Este site não é afiliado ao Google, Meta ou YouTube.</p>
      <p className="mt-2">© {new Date().getFullYear()} Todos os direitos reservados.</p>
    </footer>
  );
}
