"use client";

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BatteryCharging,
  CheckCircle2,
  ChevronRight,
  ImageIcon,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

import { useState } from "react";

import Footer from "@/components/Footer";
import MediaImage from "@/components/MediaImage";
import Navbar from "@/components/Navbar";
import { cars } from "@/data/cars";
import { testimonials } from "@/data/testimonials";

const whatsapp =
  "https://wa.me/6281934703372?text=Halo%20Mba%20Rara%2C%20saya%20ingin%20konsultasi%20mobil%20BYD";

const testDriveWhatsapp =
  "https://wa.me/6281934703372?text=Halo%20Mba%20Rara%2C%20saya%20ingin%20booking%20test%20drive%20BYD";

const features = [
  {
    icon: BatteryCharging,
    title: "Teknologi EV Terdepan",
    description:
      "Pilihan kendaraan listrik dan plug-in hybrid BYD untuk mobilitas yang lebih modern dan efisien.",
  },
  {
    icon: Banknote,
    title: "Kredit Fleksibel",
    description:
      "Konsultasikan DP, tenor, cicilan, dan program pembiayaan yang sedang berjalan bersama Rara.",
  },
  {
    icon: BadgeCheck,
    title: "Sales BYD Harmoni Palmerah",
    description:
      "Dapatkan bantuan mulai dari pemilihan model, promo, test drive, hingga proses serah terima kendaraan.",
  },
  {
    icon: ShieldCheck,
    title: "Proses Lebih Praktis",
    description:
      "Booking, test drive, pengajuan kredit, pengecekan dokumen, dan delivery dibantu dalam satu layanan.",
  },
];

function getImageCandidates(src: string) {
  const dotIndex = src.lastIndexOf(".");

  const base =
    dotIndex === -1
      ? src
      : src.substring(0, dotIndex);

  return Array.from(
    new Set([
      src,
      `${base}.JPG`,
      `${base}.jpg`,
      `${base}.jpeg`,
      `${base}.JPEG`,
      `${base}.png`,
      `${base}.PNG`,
    ])
  );
}

function TestimonialImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const candidates = getImageCandidates(src);

  const [candidateIndex, setCandidateIndex] =
    useState(0);

  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex(
        (current) => current + 1
      );
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return (
      <div className="flex min-h-[280px] w-full flex-col items-center justify-center bg-gradient-to-br from-[#eef4fb] to-[#dce9f7] p-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d3c78] text-white">
          <ImageIcon className="h-5 w-5" />
        </div>

        <p className="mt-4 text-sm font-bold text-[#31567e]">
          Foto belum tersedia
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-white">
      <img
        src={candidates[candidateIndex]}
        alt={alt}
        onError={handleError}
        className="block h-auto w-full object-contain"
      />
    </div>
  );
}
const promoMarqueeItems = [
  "Nikmati program promo eksklusif, pilihan paket kredit fleksibel, serta penawaran spesial untuk pembelian mobil listrik BYD bulan ini.",
  "Tanyakan harga terbaru, simulasi kredit, dan booking test drive langsung bersama Rara.",
  "Dapatkan informasi stok unit BYD dan DENZA dengan fast response dari Rara.",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <Navbar />
      
      {/* HERO */}
      <section className="px-4 pb-12 pt-28 sm:px-6 lg:pb-20 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          {/* BYD HARMONY AUTO LOGO */}
<img
  src="/images/hero/harmony-auto.png"
  alt="BYD Harmony Auto"
  className="mb-8 h-auto w-[260px] object-contain sm:w-[320px] lg:w-[380px]"
/>
          <div className="relative min-h-[680px] overflow-hidden rounded-[34px] bg-[#0d3c78]">
            <img
              src="/images/hero/hero-byd.jpg"
              alt="BYD Harmoni Palmerah"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#071c42]/95 via-[#0b2f68]/78 to-[#0b2f68]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a3d]/70 via-transparent to-transparent" />

            <div className="relative z-10 flex min-h-[680px] flex-col justify-between p-7 sm:p-10 lg:p-14">
              <div className="max-w-3xl pt-8 lg:pt-14">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  <Sparkles className="h-4 w-4" />
                  BYD & DENZA — Harmoni Palmerah
                </div>
                  
                <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-[82px]">
                  One lineup.

                  <span className="block text-white/60">
                    Endless possibilities.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                  Temukan kendaraan BYD dan DENZA
                  yang sesuai kebutuhan Anda. Cek
                  model, harga, promo, simulasi
                  kredit, test drive, dan konsultasi
                  langsung bersama Rara dari BYD
                  Harmoni Palmerah.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/model"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#0d3c78] transition hover:-translate-y-0.5"
                  >
                    Lihat Model Kendaraan
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Konsultasi Rara
                  </a>
                </div>
              </div>

              <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 lg:grid-cols-4">
                {[
                  ["7+", "Pilihan Model"],
                  ["EV & DM", "Teknologi"],
                  ["Test Drive", "By Appointment"],
                  ["Fast Response", "Rara"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <p className="text-lg font-black text-white">
                      {value}
                    </p>

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
<section className="overflow-hidden bg-white py-4">
  <div className="marquee-wrapper border-y border-slate-200 bg-white">
    <div className="marquee-track py-3">
      {[...promoMarqueeItems, ...promoMarqueeItems].map(
        (text, index) => (
          <div
            key={index}
            className="marquee-item text-sm font-medium text-slate-700"
          >
            {text}
          </div>
        )
      )}
    </div>
  </div>
</section>
      {/* LINEUP */}
      <section
        id="lineup"
        className="px-4 py-20 sm:px-6 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
                Our Lineup
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Pilih BYD yang paling cocok untuk
                gaya hidup Anda.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-500">
                Lihat pilihan model BYD dan DENZA,
                harga, spesifikasi, varian, serta
                fitur unggulan masing-masing
                kendaraan.
              </p>
            </div>

            <a
              href="/model"
              className="inline-flex items-center gap-2 text-sm font-black text-[#0d3c78]"
            >
              Lihat semua model
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => (
              <article
                key={car.slug}
                className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-3 shadow-[0_10px_35px_rgba(20,43,77,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,43,77,0.10)]"
              >
                <a href={`/model/${car.slug}`}>
                  <MediaImage
                    src={car.image}
                    alt={car.name}
                    fallbackLabel={`${car.name} — ${car.slug}.jpg`}
                    className="h-72 rounded-[22px]"
                  />
                </a>

                <div className="p-4 pb-3 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4777a9]">
                        {car.brand} ·{" "}
                        {car.category}
                      </p>

                      <a
                        href={`/model/${car.slug}`}
                      >
                        <h3 className="mt-1 text-2xl font-black tracking-tight transition hover:text-[#0d3c78]">
                          {car.name}
                        </h3>
                      </a>
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
                      href={`/model/${car.slug}`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0d3c78] text-white transition group-hover:translate-x-1"
                      aria-label={`Lihat spesifikasi ${car.name}`}
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

      {/* WHY US */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-6 shadow-[0_12px_40px_rgba(20,43,77,0.05)] sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
                Why Harmoni Palmerah
              </p>

              <h2 className="text-4xl font-black tracking-[-0.04em]">
                Lebih mudah dari konsultasi sampai
                delivery.
              </h2>

              <p className="mt-5 max-w-md leading-7 text-slate-500">
                Konsultasikan kebutuhan kendaraan
                Anda bersama Rara dan dapatkan
                pendampingan mulai dari pemilihan
                model hingga serah terima unit.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map(
                ({
                  icon: Icon,
                  title,
                  description,
                }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-100 bg-[#f8fbff] p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d3c78] text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-lg font-black">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section
        id="promo"
        className="px-4 py-20 sm:px-6 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_0.92fr]">
          <div className="rounded-[32px] bg-[#0d3c78] p-8 text-white sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white/75">
              <Zap className="h-4 w-4" />
              Current Promotion
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Cek promo dan simulasi kredit
              terbaru.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/65">
              Konsultasikan tipe kendaraan,
              rencana DP, tenor, dan budget bulanan
              bersama Rara. Dapatkan simulasi
              pembelian yang sesuai kebutuhan Anda.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Informasi harga OTR terbaru",
                "Simulasi DP & cicilan",
                "Jadwal test drive",
                "Cek stok unit",
                "Estimasi delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-white/80"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/6281934703372?text=Halo%20Mba%20Rara%2C%20saya%20ingin%20tanya%20promo%20BYD%20terbaru"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#0d3c78] transition hover:-translate-y-0.5"
            >
              Tanya Promo Rara
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <MediaImage
            src="/images/promo/promo-lineup.jpg"
            alt="Promo BYD Harmoni Palmerah"
            fallbackLabel="Poster promo — promo-lineup.jpg"
            className="min-h-[520px] rounded-[32px]"
          />
        </div>
      </section>

      {/* SALES PROFILE */}
      <section
        id="sales"
        className="px-4 py-16 sm:px-6 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-[0_12px_45px_rgba(20,43,77,0.06)] lg:grid-cols-2">
          <div className="relative min-h-[560px] overflow-hidden bg-[#eef3f8] lg:min-h-[660px]">
            <img
              src="/images/sales/sales-rara.jpg"
              alt="Rara - Sales Consultant BYD Harmoni Palmerah"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071c42]/85 via-[#071c42]/20 to-transparent p-7 pt-28 lg:hidden">
              <p className="text-2xl font-black text-white">
                Rara
              </p>

              <p className="mt-1 text-sm font-medium text-white/70">
                Sales Consultant · BYD Harmoni
                Palmerah
              </p>
            </div>
          </div>
              
          <div className="flex items-center p-8 sm:p-10 lg:p-14">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
                Your BYD Consultant
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Konsultasi BYD bersama Rara.
              </h2>

              <div className="mt-7">
                <p className="text-2xl font-black text-[#0d3c78]">
                  Rara
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-400">
                  Sales Consultant · BYD Harmoni
                  Palmerah
                </p>
              </div>
                {/* SOCIAL MEDIA RARA */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://www.tiktok.com/@rara.bydpalmerah?_r=1&_t=ZS-99Dx3SJI3NI"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#0d3c78] hover:text-[#0d3c78]"
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
                </div>
              <p className="mt-6 max-w-xl leading-7 text-slate-500">
                Siap membantu Anda untuk informasi
                model BYD dan DENZA, harga terbaru,
                promo, simulasi kredit,
                ketersediaan unit, test drive,
                hingga proses pemesanan dan serah
                terima kendaraan.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Konsultasi langsung via WhatsApp",
                  "Informasi promo & harga terbaru",
                  "Simulasi DP dan cicilan",
                  "Booking test drive",
                  "Cek stok dan estimasi delivery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0d3c78]" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0d3c78] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#092f62]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat Rara
                </a>

                <a
                  href={testDriveWhatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-black text-[#0d3c78] transition hover:border-[#0d3c78]"
                >
                  Booking Test Drive
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONI PREVIEW */}
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
                Customer Stories
              </p>

              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Apa kata mereka setelah memilih
                BYD.
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

          <div className="mt-10 grid items-start gap-5 lg:grid-cols-3">
            {testimonials
              .slice(0, 3)
              .map((item) => (
                <article
                  key={item.image}
                  className="overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <TestimonialImage
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="p-6">
                    <div className="flex gap-1">
                      {Array.from({
                        length: 5,
                      }).map((_, index) => (
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
                      <p className="font-black">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Customer{" "}
                        {item.vehicle} dari{" "}
                        {item.area}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-8 pt-12 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#dfeeff] p-8 sm:p-12 lg:p-16">
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
                Ready to drive?
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Sudah punya BYD incaran? Tanya Mba
                Rara hari ini.
              </h2>
            </div>

            <div className="lg:text-right">
              <p className="mb-5 text-sm font-semibold leading-6 text-slate-600 lg:ml-auto lg:max-w-sm">
                Kirim tipe mobil, budget, dan
                rencana DP. Rara akan bantu cek
                stok, promo, dan buatkan simulasi
                pembelian.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#0d3c78] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#092f62]"
              >
                Chat Rara
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0d3c78] text-white shadow-[0_12px_30px_rgba(13,60,120,0.35)] transition hover:-translate-y-1 hover:bg-[#092f62]"
        aria-label="Chat Rara via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}