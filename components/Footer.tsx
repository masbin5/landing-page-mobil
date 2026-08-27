import { MessageCircle } from "lucide-react";

const whatsapp =
  "https://wa.me/6281934703372?text=Halo%20Rara%2C%20saya%20ingin%20konsultasi%20mobil%20BYD";

const tiktok =
  "https://www.tiktok.com/@rara.bydpalmerah?_r=1&_t=ZS-99Dx3SJI3NI";

export default function Footer() {
  return (
    <footer className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl border-t border-slate-200 pt-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/images/logo/logo-byd-harmoni.png"
              alt="BYD Harmoni Palmerah"
              className="h-11 w-auto object-contain"
            />

            <div>
              <p className="text-sm font-black tracking-tight text-[#0d3c78]">
                BYD HARMONI PALMERAH
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Sales Consultant Rara
              </p>
            </div>
          </a>

          {/* SALES SOCIAL MEDIA */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Follow Rara
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {/* TIKTOK */}
              <a
                href={tiktok}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#0d3c78] hover:text-[#0d3c78]"
                aria-label="TikTok Rara BYD Palmerah"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-3.77V2h-3.486v13.672a2.896 2.896 0 1 1-2-2.756V9.358a6.37 6.37 0 1 0 5.486 6.314V8.738a8.256 8.256 0 0 0 4.84 1.55V6.817a4.85 4.85 0 0 1-1.07-.131Z" />
                </svg>

                @rara.bydpalmerah
              </a>

              {/* INSTAGRAM - LINK MENYUSUL */}
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                  />

                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

                  <line
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                  />
                </svg>

                @rara.chantik
              </div>

              {/* WHATSAPP */}
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d3c78] text-white transition hover:bg-[#092f62]"
                aria-label="WhatsApp Rara"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium text-slate-400">
            © 2026 BYD Harmoni Palmerah. All rights reserved.
          </p>

          <p className="text-xs font-medium text-slate-400">
            Sales Consultant: Rara
          </p>
        </div>
      </div>
    </footer>
  );
}