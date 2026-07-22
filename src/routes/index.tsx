import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-uniclinic.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Entrar | UniClinic" },
      {
        name: "description",
        content:
          "Acesse o painel da sua clínica no UniClinic: pacientes, agenda, contratos e financeiro em um único ambiente profissional.",
      },
      { property: "og:title", content: "Entrar | UniClinic" },
      {
        property: "og:description",
        content:
          "Painel profissional da clínica — organize pacientes, agenda, contratos e financeiro em um único lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col text-[#101828] font-sans bg-[linear-gradient(180deg,#f8fafc_0%,#eef4ff_100%)]">
      {/* Topbar */}
      <header className="bg-white border-b border-[rgba(16,24,40,0.10)]">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
          <a href="/" className="flex items-center gap-3 font-extrabold text-lg text-[#101828]">
            <img src={logo} alt="UniClinic" className="w-[42px] h-[42px] rounded-xl" />
            <span>UniClinic</span>
          </a>
          <a
            href="/"
            className="hidden sm:inline-flex items-center rounded-full border border-[#d0d5dd] px-4 py-2 text-sm font-semibold text-[#344054] hover:bg-slate-50 transition-colors"
          >
            Conhecer a plataforma
          </a>
        </div>
      </header>

      {/* Shell */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[960px] overflow-hidden rounded-[28px] border border-[rgba(16,24,40,0.10)] bg-white shadow-[0_20px_40px_rgba(16,24,40,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Aside */}
            <aside className="hidden lg:block lg:col-span-5 p-9 text-white bg-[linear-gradient(160deg,#0f6a37_0%,#175cd3_100%)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-xs font-bold tracking-wide">
                Painel profissional da clínica
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight">
                Entre no painel da sua clínica com segurança.
              </h2>
              <p className="mt-3 opacity-90">
                Organize pacientes, agenda, contratos e financeiro em um único ambiente com
                aparência profissional e fluxo pronto para operação.
              </p>
              <ul className="mt-6 grid gap-3 list-none p-0">
                {[
                  "Trial rápido para demonstração comercial",
                  "Onboarding simples para a clínica começar logo",
                  "Base pronta para crescimento e upgrade",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-2xl border border-white/15 bg-white/10 px-3.5 py-3 opacity-90"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </aside>

            {/* Form */}
            <section className="lg:col-span-7 p-6 sm:p-9">
              <div className="text-xs font-semibold uppercase tracking-wide text-[#667085]">
                Acesso
              </div>
              <h1 className="mt-2 text-2xl sm:text-3xl font-bold">Entrar no UniClinic</h1>
              <p className="mt-2 text-[#667085]">
                Use seu usuário e senha para acessar o painel da clínica.
              </p>

              <form
                method="post"
                action="/accounts/login/"
                className="mt-6 flex flex-col gap-4"
              >
                <div>
                  <label
                    htmlFor="id_username"
                    className="text-[13px] font-extrabold uppercase tracking-wide"
                  >
                    Usuário
                  </label>
                  <input
                    id="id_username"
                    name="username"
                    type="text"
                    autoFocus
                    autoCapitalize="none"
                    autoComplete="username"
                    maxLength={150}
                    required
                    className="mt-1.5 w-full min-h-[54px] rounded-2xl border border-[#d0d5dd] bg-[#f8fbff] px-4 text-base outline-none focus:border-[#84adff] focus:bg-white focus:ring-4 focus:ring-[#175cd3]/15 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="id_password"
                    className="text-[13px] font-extrabold uppercase tracking-wide"
                  >
                    Senha
                  </label>
                  <input
                    id="id_password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="mt-1.5 w-full min-h-[54px] rounded-2xl border border-[#d0d5dd] bg-[#f8fbff] px-4 text-base outline-none focus:border-[#84adff] focus:bg-white focus:ring-4 focus:ring-[#175cd3]/15 transition-colors"
                  />
                </div>

                <input type="hidden" name="next" value="/clinic/" />

                <div className="mt-2 grid gap-2">
                  <button
                    type="submit"
                    className="min-h-[52px] rounded-full bg-[#0f6a37] px-6 font-bold text-white hover:bg-[#0c5a2f] transition-colors"
                  >
                    Entrar
                  </button>
                  <a
                    href="/"
                    className="min-h-[52px] flex items-center justify-center rounded-full border border-[#d0d5dd] px-6 font-bold text-[#344054] hover:bg-slate-50 transition-colors"
                  >
                    Criar clínica grátis
                  </a>
                </div>
              </form>

              <p className="mt-6 text-[15px] text-[#667085]">
                Ao continuar, você concorda com a nossa{" "}
                <a
                  href="/politica-de-privacidade/"
                  className="text-[#175cd3] font-semibold hover:underline"
                >
                  Política de Privacidade
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
