"use client";

import { ArrowLeft, MessageCircle, Star } from "lucide-react";
import Footer from "@/components/Footer";
import MediaImage from "@/components/MediaImage";
import Navbar from "@/components/Navbar";
import { testimonials } from "@/data/testimonials";

export default function TestimoniPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <Navbar />

      <section className="px-4 pb-14 pt-32 sm:px-6 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0d3c78]"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke beranda
          </a>

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#31689f]">
              Testimoni Customer
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-[-0.045em] sm:text-6xl">
              Apa kata mereka.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
              Dokumentasi customer BYD dan DENZA yang telah dibantu dalam proses
              konsultasi, pembelian, hingga serah terima unit.
            </p>
          </div>

          <div className="mt-12 columns-1 gap-5 md:columns-2 xl:columns-3">
            {testimonials.map((item) => (
              <article
                key={item.image}
                className="mb-5 break-inside-avoid overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(20,43,77,0.05)]"
              >
                <MediaImage
                  src={item.image}
                  alt={item.name}
                  fallbackLabel={item.image.split("/").pop()}
                  className="aspect-[4/3] w-full"
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

      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#0d3c78] p-8 text-white sm:p-10 lg:p-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-bold text-white/60">
                Mau jadi customer berikutnya?
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Konsultasikan mobil BYD pilihan Anda.
              </h2>
            </div>

            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20BYD"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#0d3c78]"
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
