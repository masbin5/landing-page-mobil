import {
  ArrowLeft,
  BatteryCharging,
  Check,
  Gauge,
  MessageCircle,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import MediaImage from "@/components/MediaImage";
import Navbar from "@/components/Navbar";
import { cars, getCarBySlug } from "@/data/cars";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

export default async function CarDetailPage({ params }: Props) {
  const { slug } = await params;

  const car = getCarBySlug(slug);

  if (!car) {
    notFound();
  }

  const whatsapp = `https://wa.me/6281934703372?text=${encodeURIComponent(
    `Halo, saya tertarik dengan ${car.brand} ${car.name}. Saya ingin tanya harga, promo, dan simulasi kredit.`
  )}`;

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <Navbar />

      {/* HERO DETAIL */}
      <section className="px-4 pb-12 pt-32 sm:px-6 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <a
            href="/model"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0d3c78]"
          >
            <ArrowLeft className="h-4 w-4" />
            Semua Model
          </a>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <MediaImage
              src={car.image}
              alt={`${car.brand} ${car.name}`}
              fallbackLabel={`${car.slug}.jpg`}
              className="min-h-[480px] rounded-[32px] lg:min-h-[610px]"
            />

            <div className="flex flex-col justify-between rounded-[32px] bg-[#0d3c78] p-8 text-white sm:p-10 lg:p-12">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-white/55">
                  {car.brand} · {car.category}
                </p>

                <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-6xl">
                  {car.name}
                </h1>

                <p className="mt-6 text-base leading-7 text-white/65">
                  {car.longDescription}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <BatteryCharging className="h-5 w-5 text-white/70" />

                    <p className="mt-4 text-xs font-semibold text-white/45">
                      Jarak / Teknologi
                    </p>

                    <p className="mt-1 font-black">
                      {car.range}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <Gauge className="h-5 w-5 text-white/70" />

                    <p className="mt-4 text-xs font-semibold text-white/45">
                      Kategori
                    </p>

                    <p className="mt-1 font-black">
                      {car.category}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-xs font-semibold text-white/45">
                  Harga mulai
                </p>

                <p className="mt-1 text-3xl font-black">
                  {car.price}
                </p>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#0d3c78]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Tanya Promo {car.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPEC */}
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
              Technical Specification
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Spesifikasi utama {car.name}.
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {car.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-2xl border border-slate-200/80 bg-white p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  {spec.label}
                </p>

                <p className="mt-2 text-base font-black text-slate-900">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VARIAN */}
      <section className="px-4 py-12 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-7 shadow-[0_10px_40px_rgba(20,43,77,0.05)] sm:p-10 lg:p-12">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d3c78] text-white">
              <Zap className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4777a9]">
                Variant & Price
              </p>

              <h2 className="text-2xl font-black">
                Pilihan varian
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {car.variants.map((variant) => (
              <div
                key={variant.name}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5"
              >
                <p className="font-black">
                  {variant.name}
                </p>

                <p className="mt-3 text-xl font-black text-[#0d3c78]">
                  {variant.price}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  Harga dapat berubah mengikuti program berjalan.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d3c78] text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <p className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
              Highlights
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
              Fitur unggulan.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {car.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e7f1fb] text-[#0d3c78]">
                  <Check className="h-4 w-4" />
                </div>

                <p className="text-sm font-bold text-slate-700">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-10 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-[#dfeeff] p-8 sm:p-12 lg:p-14">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-bold text-[#4777a9]">
                Tertarik dengan {car.name}?
              </p>

              <h2 className="mt-2 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                Tanya harga, promo, cicilan, dan jadwalkan test drive.
              </h2>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#0d3c78] px-6 py-4 text-sm font-black text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Chat Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}