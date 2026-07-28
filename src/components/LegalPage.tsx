import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "./SiteFooter";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <main className="flex-1 px-5 py-10">
        <div className="mx-auto w-full max-w-[720px]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-muted-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>

          <h1 className="mt-5 text-3xl font-black leading-tight text-brand-dark">{title}</h1>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Última atualização: {updated}
          </p>

          <div className="legal mt-8 flex flex-col gap-5 text-[15px] leading-relaxed text-foreground/85">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-2 text-lg font-black text-brand-dark">{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
