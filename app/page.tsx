"use client";

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CarFront,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Gauge,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const cars = [
  {
    name: "Toyota Fortuner GR Sport",
    type: "SUV",
    price: "Rp 726 Juta",
    installment: "Mulai Rp 12,8 jt / bulan",
    transmission: "Automatic",
    fuel: "Diesel",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Honda CR-V Turbo",
    type: "SUV",
    price: "Rp 749 Juta",
    installment: "Mulai Rp 13,2 jt / bulan",
    transmission: "Automatic",
    fuel: "Bensin",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Toyota Camry Hybrid",
    type: "Sedan",
    price: "Rp 937 Juta",
    installment: "Mulai Rp 16,5 jt / bulan",
    transmission: "Automatic",
    fuel: "Hybrid",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85",
  },
];

const benefits = [
  {
    icon: BadgeCheck,
    title: "Unit Berkualitas",
    description:
      "Pilihan kendaraan terbaik dengan proses pengecekan kondisi dan dokumen yang transparan.",
  },
  {
    icon: Banknote,
    title: "Kredit Fleksibel",
    description:
      "Pilihan DP dan tenor menyesuaikan kebutuhan dengan proses pengajuan yang praktis.",
  },
  {
    icon: ShieldCheck,
    title: "Transaksi Aman",
    description:
      "Pendampingan dari konsultasi, pemesanan, pembayaran, sampai kendaraan diterima.",
  },
  {
    icon: Clock3,
    title: "Respon Cepat",
    description:
      "Konsultasi langsung dengan sales untuk cek stok, promo, simulasi kredit, dan test drive.",
  },
];

const testimonials = [
  {
    name: "Rizky Pratama",
    role: "Pembeli Toyota Fortuner",
    text: "Pelayanannya cepat dan jelas. Dari tanya promo sampai unit dikirim semuanya dibantu dan tidak ribet.",
  },
  {
    name: "Nadia Putri",
    role: "Pembeli Honda HR-V",
    text: "Simulasi kreditnya transparan, jadi saya bisa pilih tenor yang paling nyaman untuk kebutuhan bulanan.",
  },
  {
    name: "Andi Saputra",
    role: "Pembeli Toyota Innova Zenix",
    text: "Respons sales cepat, penjelasan detail, dan proses test drive sampai delivery sangat profesional.",
  },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-950 text-white shadow-lg shadow-black/10">
        <CarFront className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-black tracking-tight text-neutral-950">
          AUTODRIVE
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
          Premium Auto Sales
        </p>
      </div>
    </a>
  );
}

export default function CarSalesLandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f7f5] text-neutral-950">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/85 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl">
          <Logo />

          <nav className="hidden items-center gap-8 text-sm font-semibold text-neutral-600 lg:flex">
            <a href="#mobil" className="transition hover:text-neutral-950">
              Pilihan Mobil
            </a>
            <a href="#keunggulan" className="transition hover:text-neutral-950">
              Keunggulan
            </a>
            <a href="#kredit" className="transition hover:text-neutral-950">
              Kredit
            </a>
            <a href="#testimoni" className="transition hover:text-neutral-950">
              Testimoni
            </a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#kontak"
              className="rounded-xl px-4 py-2.5 text-sm font-bold text-neutral-700 transition hover:bg-neutral-100"
            >
              Hubungi Sales
            </a>
            <a
              href="#mobil"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Lihat Mobil
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button className="rounded-xl p-2 text-neutral-700 sm:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative min-h-[690px] overflow-hidden rounded-[32px] bg-neutral-950">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=90"
              alt="Premium car"
              className="absolute inset-0 h-full w-full object-cover opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="relative z-10 flex min-h-[690px] flex-col justify-between p-7 sm:p-10 lg:p-14">
              <div className="max-w-3xl pt-10 lg:pt-16">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  <Sparkles className="h-4 w-4" />
                  Promo mobil terbaru & konsultasi gratis
                </div>

                <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[84px]">
                  Mobil impian,
                  <span className="block text-white/55">
                    proses lebih mudah.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                  Temukan mobil yang sesuai kebutuhan dan budget Anda. Dapatkan
                  rekomendasi unit, promo terbaik, simulasi kredit, hingga
                  bantuan proses pembelian dari awal sampai serah terima.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#mobil"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-neutral-950 transition hover:-translate-y-0.5"
                  >
                    Cari Mobil Sekarang
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#kontak"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Konsultasi via WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 lg:grid-cols-4">
                {[
                  ["150+", "Unit Pilihan"],
                  ["98%", "Customer Puas"],
                  ["15+", "Partner Leasing"],
                  ["7 Hari", "Support Sales"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <p className="text-xl font-black text-white">{value}</p>
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

      {/* Brands */}
      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-neutral-400">
            Pilihan brand favorit
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {["Toyota", "Honda", "Mitsubishi", "Hyundai", "Mazda", "Suzuki"].map(
              (brand) => (
                <div
                  key={brand}
                  className="flex h-16 items-center justify-center rounded-2xl border border-neutral-200/70 bg-white text-sm font-black text-neutral-500 shadow-sm"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured cars */}
      <section id="mobil" className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-neutral-400">
                Featured Cars
              </p>
              <h2 className="max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Pilihan mobil yang paling banyak dicari.
              </h2>
            </div>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 text-sm font-black text-neutral-950"
            >
              Tanya stok lainnya
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {cars.map((car) => (
              <article
                key={car.name}
                className="group overflow-hidden rounded-[28px] border border-neutral-200/70 bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="relative h-72 overflow-hidden rounded-[22px] bg-neutral-100">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black backdrop-blur">
                    {car.type}
                  </div>
                </div>

                <div className="p-4 pb-3 pt-5">
                  <h3 className="text-xl font-black tracking-tight">
                    {car.name}
                  </h3>

                  <div className="mt-4 flex gap-2 text-xs font-semibold text-neutral-500">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-2">
                      <Gauge className="h-3.5 w-3.5" />
                      {car.transmission}
                    </span>
                    <span className="rounded-full bg-neutral-100 px-3 py-2">
                      {car.fuel}
                    </span>
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-neutral-100 pt-5">
                    <div>
                      <p className="text-xs font-semibold text-neutral-400">
                        Harga mulai
                      </p>
                      <p className="mt-1 text-lg font-black">{car.price}</p>
                      <p className="mt-1 text-xs font-medium text-neutral-500">
                        {car.installment}
                      </p>
                    </div>

                    <a
                      href="#kontak"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white transition group-hover:translate-x-1"
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

      {/* Benefits */}
      <section id="keunggulan" className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-neutral-400">
                Kenapa pilih kami
              </p>
              <h2 className="text-4xl font-black tracking-[-0.04em]">
                Beli mobil tanpa dibuat ribet.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-neutral-500">
                Satu sales untuk membantu seluruh proses, dari cari unit,
                hitung kredit, pengajuan dokumen, sampai kendaraan siap Anda
                bawa pulang.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-neutral-100 bg-[#fafaf8] p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section id="kredit" className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <div className="rounded-[32px] bg-neutral-950 p-7 text-white sm:p-10 lg:p-12">
            <div className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white/70">
              Simulasi Kredit
            </div>
            <h2 className="mt-6 max-w-xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Atur DP dan cicilan sesuai kemampuan Anda.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/55">
              Kami bantu bandingkan skema pembiayaan dari beberapa partner
              leasing agar Anda mendapat pilihan yang lebih sesuai.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Pilihan tenor hingga 60 bulan",
                "DP fleksibel sesuai program berjalan",
                "Bantuan pengajuan dan pengecekan dokumen",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-white/80"
                >
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#kontak"
              className="mt-9 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-neutral-950"
            >
              Minta Simulasi Kredit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[32px]">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=90"
              alt="Sports car"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
              <div className="flex items-center gap-2 text-sm font-bold text-white/70">
                <MapPin className="h-4 w-4" />
                Jabodetabek & sekitarnya
              </div>
              <p className="mt-3 max-w-md text-2xl font-black">
                Bisa konsultasi online atau jadwalkan test drive langsung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimoni" className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400">
              Customer Stories
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Dipercaya untuk membantu proses beli mobil.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[26px] border border-neutral-200/70 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-neutral-950 text-neutral-950"
                    />
                  ))}
                </div>
                <p className="mt-5 text-[15px] leading-7 text-neutral-600">
                  “{item.text}”
                </p>
                <div className="mt-7 flex items-center gap-3 border-t border-neutral-100 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                    <Users className="h-4 w-4 text-neutral-500" />
                  </div>
                  <div>
                    <p className="text-sm font-black">{item.name}</p>
                    <p className="text-xs text-neutral-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="px-4 pb-8 pt-14 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#d7ff57] p-8 sm:p-12 lg:p-16">
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/8 px-4 py-2 text-sm font-bold">
                <MessageCircle className="h-4 w-4" />
                Konsultasi gratis
              </div>
              <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Sudah punya mobil incaran? Tanya promo terbaik hari ini.
              </h2>
            </div>

            <div className="lg:text-right">
              <p className="mb-5 text-sm font-semibold leading-6 text-neutral-700 lg:ml-auto lg:max-w-sm">
                Kirim tipe mobil, budget, dan rencana DP. Sales akan bantu cek
                stok dan buatkan simulasi pembelian.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-neutral-950 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5"
              >
                Chat WhatsApp Sekarang
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <p className="text-xs font-medium text-neutral-400">
            © 2026 AutoDrive. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
