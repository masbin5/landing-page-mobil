import {
  ArrowRight,
  BatteryCharging,
  Gauge,
  MessageCircle,
} from "lucide-react";

import Footer from "@/components/Footer";
import MediaImage from "@/components/MediaImage";
import Navbar from "@/components/Navbar";
import { cars } from "@/data/cars";

export default function ModelPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <Navbar />

      <section className="px-4 pb-20 pt-32 sm:px-6 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
              Model Kendaraan
            </p>

            <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-6xl">
              Temukan BYD yang sesuai dengan Anda.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
              Jelajahi pilihan kendaraan listrik dan plug-in hybrid BYD serta
              DENZA. Klik model untuk melihat spesifikasi, pilihan varian, fitur,
              dan harga.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => (
              <a
                key={car.slug}
                href={`/model/${car.slug}`}
                className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-3 shadow-[0_10px_35px_rgba(20,43,77,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(20,43,77,0.10)]"
              >
                <MediaImage
                  src={car.image}
                  alt={car.name}
                  fallbackLabel={`${car.slug}.jpg`}
                  className="h-72 rounded-[22px]"
                />

                <div className="p-4 pb-3 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#4777a9]">
                        {car.brand} · {car.category}
                      </p>

                      <h2 className="mt-1 text-2xl font-black tracking-tight">
                        {car.name}
                      </h2>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf4fb] text-[#0d3c78]">
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-500">
                    {car.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#f2f6fa] px-3 py-2 text-xs font-bold text-slate-600">
                      <BatteryCharging className="h-3.5 w-3.5" />
                      {car.range}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full bg-[#f2f6fa] px-3 py-2 text-xs font-bold text-slate-600">
                      <Gauge className="h-3.5 w-3.5" />
                      {car.category}
                    </span>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-xs font-semibold text-slate-400">
                      Harga mulai
                    </p>

                    <p className="mt-1 text-lg font-black text-[#0d3c78]">
                      {car.price}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-14 rounded-[30px] bg-[#0d3c78] p-8 text-white sm:p-10">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
              <div>
                <p className="text-sm font-bold text-white/60">
                  Masih bingung pilih model?
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  Konsultasikan kebutuhan Anda bersama sales.
                </h2>
              </div>

              <a
                href="https://wa.me/6281934703372?text=Halo%20saya%20ingin%20konsultasi%20pilihan%20mobil%20BYD"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#0d3c78]"
              >
                <MessageCircle className="h-4 w-4" />
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}