"use client";

import {
  ArrowLeft,
  ImageIcon,
  MessageCircle,
  Star,
} from "lucide-react";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const whatsapp =
  "https://wa.me/6281934703372?text=Halo%20Mba%20Rara%2C%20saya%20ingin%20konsultasi%20mobil%20BYD";

const testimonials = [
  {
    image: "/images/testimoni/testimoni-001.png",
    name: "Customer BYD",
    area: "Jakarta",
    vehicle: "BYD ATTO 3",
    quote:
      "Pelayanan cepat, jelas, dan dibantu mulai dari konsultasi sampai serah terima unit.",
  },
  {
    image: "/images/testimoni/testimoni-002.JPG",
    name: "Customer BYD",
    area: "Tangerang",
    vehicle: "BYD M6",
    quote:
      "Informasi promo dan simulasi kredit dijelaskan dengan jelas dan mudah dipahami.",
  },
  {
    image: "/images/testimoni/testimoni-003.JPG",
    name: "Customer BYD",
    area: "Jakarta",
    vehicle: "BYD SEALION 7",
    quote:
      "Proses test drive dan pembelian dibantu dengan cepat dan profesional.",
  },
  {
    image: "/images/testimoni/testimoni-004.JPG",
    name: "Customer BYD",
    area: "Bekasi",
    vehicle: "BYD ATTO 1",
    quote:
      "Respons sales cepat dan sangat membantu menentukan mobil yang sesuai kebutuhan.",
  },
  {
    image: "/images/testimoni/testimoni-005.JPG",
    name: "Customer BYD",
    area: "Depok",
    vehicle: "BYD M6",
    quote:
      "Mulai dari booking sampai delivery semuanya berjalan lancar dan komunikasinya jelas.",
  },
  {
    image: "/images/testimoni/testimoni-006.JPG",
    name: "Customer BYD",
    area: "Jakarta",
    vehicle: "BYD SEAL",
    quote:
      "Sangat terbantu dengan penjelasan fitur kendaraan dan pilihan pembiayaannya.",
  },
  {
    image: "/images/testimoni/testimoni-007.JPG",
    name: "Customer BYD",
    area: "Tangerang",
    vehicle: "BYD ATTO 3",
    quote:
      "Proses pembelian berjalan lancar dan selalu diberikan update sampai kendaraan diterima.",
  },
  {
    image: "/images/testimoni/testimoni-008.JPG",
    name: "Customer BYD",
    area: "Bogor",
    vehicle: "BYD M6",
    quote:
      "Recommended untuk yang ingin konsultasi BYD secara cepat dan tidak ribet.",
  },
  {
    image: "/images/testimoni/testimoni-009.JPG",
    name: "Customer BYD",
    area: "Jakarta",
    vehicle: "DENZA D9",
    quote:
      "Pelayanan ramah, detail, dan proses serah terima kendaraan juga sangat baik.",
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

function CustomerImage({
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
      <div className="flex min-h-[300px] w-full flex-col items-center justify-center bg-gradient-to-br from-[#eef4fb] to-[#dce9f7] p-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d3c78] text-white">
          <ImageIcon className="h-5 w-5" />
        </div>

        <p className="mt-4 text-sm font-bold text-[#31567e]">
          Foto belum tersedia
        </p>

        <p className="mt-1 text-xs text-slate-400">
          {src.split("/").pop()}
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

export default function TestimoniPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <Navbar />

      {/* HEADER */}
      <section className="px-4 pb-14 pt-32 sm:px-6 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0d3c78] transition hover:opacity-70"
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
              Dokumentasi customer BYD dan DENZA
              yang telah kami bantu mulai dari
              konsultasi, test drive, proses
              pembelian, hingga serah terima
              kendaraan.
            </p>
          </div>

          {/* TESTIMONI GRID */}
          <div className="mt-12 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map(
              (item, index) => (
                <article
                  key={`${item.image}-${index}`}
                  className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_10px_35px_rgba(20,43,77,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(20,43,77,0.10)]"
                >
                  <CustomerImage
                    src={item.image}
                    alt={`Testimoni ${item.name}`}
                  />

                  <div className="p-6">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(
                        (star) => (
                          <Star
                            key={star}
                            className="h-4 w-4 fill-[#0d3c78] text-[#0d3c78]"
                          />
                        )
                      )}
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      “{item.quote}”
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="font-black text-slate-900">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs font-medium text-slate-400">
                        {item.vehicle} •{" "}
                        {item.area}
                      </p>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#0d3c78] p-8 text-white sm:p-10 lg:p-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-bold text-white/60">
                Mau jadi customer berikutnya?
              </p>

              <h2 className="mt-2 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                Konsultasikan mobil BYD pilihan
                Anda bersama Rara.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
                Tanya harga, promo, simulasi
                kredit, ketersediaan unit, atau
                jadwalkan test drive.
              </p>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#0d3c78] transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Chat Rara
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}