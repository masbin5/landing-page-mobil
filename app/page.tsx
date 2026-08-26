"use client";

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BatteryCharging,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

import Footer from "@/components/Footer";
import MediaImage from "@/components/MediaImage";
import Navbar from "@/components/Navbar";
import { cars } from "@/data/cars";
import { testimonials } from "@/data/testimonials";

const whatsapp =
  "https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20mobil%20BYD";

const features = [
  {
    icon: BatteryCharging,
    title: "Teknologi EV Terdepan",
    description:
      "Pilihan kendaraan listrik dan hybrid BYD untuk mobilitas yang lebih modern dan efisien.",
  },
  {
    icon: Banknote,
    title: "Kredit Fleksibel",
    description:
      "Konsultasikan DP, tenor, cicilan, dan program pembiayaan yang sedang berjalan.",
  },
  {
    icon: BadgeCheck,
    title: "Sales Harmoni Auto",
    description:
      "Dapatkan bantuan mulai dari pemilihan model sampai proses serah terima kendaraan.",
  },
  {
    icon: ShieldCheck,
    title: "Proses Praktis",
    description:
      "Booking, test drive, pengajuan kredit, cek dokumen, dan delivery dibantu satu pintu.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <Navbar />

      <section className="px-4 pb-12 pt-28 sm:px-6 lg:pb-20 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative min-h-[680px] overflow-hidden rounded-[34px] bg-[#0d3c78]">
            <MediaImage
              src="/images/hero/hero-byd.jpg"
              alt="BYD Harmoni Auto"
              className="absolute inset-0 h-full w-full"
              fallbackLabel="Hero BYD — nanti taruh hero-byd.jpg"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#071c42]/95 via-[#0b2f68]/78 to-[#0b2f68]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a3d]/70 via-transparent to-transparent" />

            <div className="relative z-10 flex min-h-[680px] flex-col justify-between p-7 sm:p-10 lg:p-14">
              <div className="max-w-3xl pt-8 lg:pt-14">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  <Sparkles className="h-4 w-4" />
                  BYD & DENZA — Harmoni Auto
                </div>

                <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-[82px]">
                  One lineup.
                  <span className="block text-white/60">
                    Endless possibilities.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                  Temukan kendaraan BYD dan DENZA yang sesuai kebutuhan Anda.
                  Cek model, harga, promo, simulasi kredit, test drive, dan
                  konsultasi langsung bersama sales Harmoni Auto.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#lineup"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#0d3c78] transition hover:-translate-y-0.5"
                  >
                    Lihat Lineup
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-md"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Konsultasi WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 lg:grid-cols-4">
                {[
                  ["7+", "Pilihan Model"],
                  ["EV & DM", "Teknologi"],
                  ["Test Drive", "By Appointment"],
                  ["Fast Response", "Sales Support"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <p className="text-lg font-black text-white">{value}</p>
                    <p className="mt-1 text-xs font-medium text-white/55">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lineup" className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
                Our Lineup
              </p>
              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Pilih BYD yang paling cocok untuk gaya hidup Anda.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-500">
                Harga dapat diperbarui kapan saja dari file data agar mudah
                mengikuti price list terbaru.
              </p>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-black text-[#0d3c78]"
            >
              Tanya stok terbaru
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => (
              <article
                key={car.slug}
                className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-3 shadow-[0_10px_35px_rgba(20,43,77,0.06)]"
              >
                <MediaImage
                  src={car.image}
                  alt={car.name}
                  fallbackLabel={`${car.name} — ${car.slug}.jpg`}
                  className="h-72 rounded-[22px]"
                />

                <div className="p-4 pb-3 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4777a9]">
                        {car.brand} · {car.category}
                      </p>
                      <h3 className="mt-1 text-2xl font-black tracking-tight">
                        {car.name}
                      </h3>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf4fb] text-[#0d3c78]">
                      <Zap className="h-4 w-4" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {car.description}
                  </p>

                  <p className="mt-4 text-xs font-bold text-[#4777a9]">
                    {car.range}
                  </p>

                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-slate-100 pt-5">
                    <div>
                      <p className="text-xs font-semibold text-slate-400">
                        Harga
                      </p>
                      <p className="mt-1 text-lg font-black text-[#0d3c78]">
                        {car.price}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20${encodeURIComponent(
                        car.name
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0d3c78] text-white transition group-hover:translate-x-1"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-6 shadow-[0_12px_40px_rgba(20,43,77,0.05)] sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
                Why Harmoni Auto
              </p>
              <h2 className="text-4xl font-black tracking-[-0.04em]">
                Lebih mudah dari konsultasi sampai delivery.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-slate-500">
                Semua proses dibuat ringkas supaya Anda bisa fokus memilih
                kendaraan yang paling sesuai dengan kebutuhan dan budget.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-100 bg-[#f8fbff] p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d3c78] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="promo" className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_0.92fr]">
          <div className="rounded-[32px] bg-[#0d3c78] p-8 text-white sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white/75">
              <Zap className="h-4 w-4" />
              Current Promotion
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Cek promo dan simulasi kredit terbaru.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/65">
              Konsultasikan tipe kendaraan, rencana DP, tenor, dan budget
              bulanan. Sales akan membantu membuat simulasi yang sesuai.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Informasi harga OTR terbaru",
                "Simulasi DP & cicilan",
                "Jadwal test drive",
                "Cek stok dan estimasi delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-white/82"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#0d3c78]"
            >
              Tanya Promo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <MediaImage
            src="/images/promo/promo-lineup.jpg"
            alt="Promo BYD Harmoni Auto"
            fallbackLabel="Poster promo — promo-lineup.jpg"
            className="min-h-[520px] rounded-[32px]"
          />
        </div>
      </section>

      <section id="sales" className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-[0_12px_45px_rgba(20,43,77,0.06)] lg:grid-cols-2">
          <MediaImage
            src="/images/sales/sales-profile.jpg"
            alt="Sales BYD Harmoni Auto"
            fallbackLabel="Foto sales — sales-profile.jpg"
            className="min-h-[520px]"
          />

          <div className="flex items-center p-8 sm:p-10 lg:p-14">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
                Your BYD Consultant
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Konsultasi langsung dengan sales Harmoni Auto.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-500">
                Saya siap membantu untuk informasi model, harga, promo,
                simulasi kredit, trade-in, test drive, dan proses pemesanan unit
                BYD maupun DENZA.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Fast response via WhatsApp",
                  "Konsultasi tanpa biaya",
                  "Bisa bantu booking test drive",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#0d3c78]" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-2xl bg-[#0d3c78] px-6 py-4 text-sm font-black text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Chat Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
                Customer Stories
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Apa kata mereka setelah memilih BYD.
              </h2>
            </div>

            <a
              href="/testimoni"
              className="inline-flex items-center gap-2 text-sm font-black text-[#0d3c78]"
            >
              Lihat semua testimoni
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((item) => (
              <article
                key={item.image}
                className="overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-sm"
              >
                <MediaImage
                  src={item.image}
                  alt={item.name}
                  fallbackLabel={item.image.split("/").pop()}
                  className="h-72"
                />

                <div className="p-6">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 fill-[#0d3c78] text-[#0d3c78]"
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    “{item.quote}”
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="font-black">{item.name}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Customer {item.vehicle} dari {item.area}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 pt-12 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#dfeeff] p-8 sm:p-12 lg:p-16">
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
                Ready to drive?
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Sudah punya BYD incaran? Tanya promo terbaik hari ini.
              </h2>
            </div>

            <div className="lg:text-right">
              <p className="mb-5 text-sm font-semibold leading-6 text-slate-600 lg:ml-auto lg:max-w-sm">
                Kirim tipe mobil, budget, dan rencana DP. Sales akan bantu cek
                stok dan buatkan simulasi pembelian.
              </p>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#0d3c78] px-6 py-4 text-sm font-black text-white"
              >
                Chat WhatsApp Sekarang
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0d3c78] text-white shadow-[0_12px_30px_rgba(13,60,120,0.35)] transition hover:-translate-y-1"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
