import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl border-t border-slate-200 pt-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
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
                Sales & Consultant
              </p>
            </div>
          </a>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-3">
            
            {/* INSTAGRAM */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-[#0d3c78] hover:text-[#0d3c78]"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-[#0d3c78] hover:text-[#0d3c78]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 border-t border-slate-100 pt-6">
          <p className="text-xs font-medium text-slate-400">
            © 2026 BYD Harmoni Palmerah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}