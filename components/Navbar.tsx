"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

const whatsapp =
  "https://wa.me/6281934703372?text=Halo%20saya%20ingin%20konsultasi%20mobil%20BYD";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/70 bg-white/90 shadow-[0_10px_40px_rgba(16,52,91,0.08)] backdrop-blur-xl">
        <div className="flex items-center justify-between px-5 py-3">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/images/logo/logo-byd-harmoni.png"
              alt="BYD Harmoni Palmerah"
              className="h-10 w-auto object-contain sm:h-11"
            />

            <div className="hidden sm:block">
              <p className="text-sm font-black tracking-tight text-[#0d3c78]">
                BYD HARMONI PALMERAH
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Sales & Consultant
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
            <a
              href="/"
              className="transition hover:text-[#0d3c78]"
            >
              Beranda
            </a>

            <a
              href="/model"
              className="transition hover:text-[#0d3c78]"
            >
              Model Kendaraan
            </a>

            <a
              href="/#promo"
              className="transition hover:text-[#0d3c78]"
            >
              Promo
            </a>

            <a
              href="/testimoni"
              className="transition hover:text-[#0d3c78]"
            >
              Testimoni
            </a>
          </nav>

          {/* WHATSAPP DESKTOP */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-[#0d3c78] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#092f62] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Sales
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl p-2 text-slate-700 sm:hidden"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {open && (
          <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:hidden">
            <div className="flex flex-col gap-4 text-sm font-bold text-slate-700">
              <a
                href="/"
                onClick={() => setOpen(false)}
              >
                Beranda
              </a>

              <a
                href="/model"
                onClick={() => setOpen(false)}
              >
                Model Kendaraan
              </a>

              <a
                href="/#promo"
                onClick={() => setOpen(false)}
              >
                Promo
              </a>

              <a
                href="/testimoni"
                onClick={() => setOpen(false)}
              >
                Testimoni
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d3c78] px-5 py-3 text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Sales
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}