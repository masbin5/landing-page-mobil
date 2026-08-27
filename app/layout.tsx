import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BYD Harmoni Palmerah | Sales BYD Jakarta - Rara",
    template: "%s | BYD Harmoni Palmerah",
  },

  description:
    "Konsultasi mobil BYD dan DENZA bersama Rara di BYD Harmoni Palmerah. Cek harga terbaru, promo, simulasi kredit, stok unit, spesifikasi, dan booking test drive.",

  keywords: [
    "BYD Harmoni Palmerah",
    "BYD Palmerah",
    "Sales BYD Jakarta",
    "Sales BYD Palmerah",
    "Rara BYD",
    "Harga BYD Jakarta",
    "Promo BYD Jakarta",
    "BYD ATTO 1",
    "BYD ATTO 3",
    "BYD M6",
    "BYD M6 DM",
    "BYD Seal",
    "BYD Sealion 7",
    "DENZA D9",
    "Test Drive BYD Jakarta",
    "Kredit BYD Jakarta",
  ],

  authors: [
    {
      name: "BYD Harmoni Palmerah",
    },
  ],

  creator: "BYD Harmoni Palmerah",
  publisher: "BYD Harmoni Palmerah",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "BYD Harmoni Palmerah",
    title: "BYD Harmoni Palmerah | Sales BYD Jakarta - Rara",
    description:
      "Cek model, harga, promo, spesifikasi, simulasi kredit dan booking test drive BYD bersama Rara.",
    images: [
      {
        url: "/images/logo/logo-byd-harmoni.png",
        width: 1200,
        height: 630,
        alt: "BYD Harmoni Palmerah",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BYD Harmoni Palmerah | Rara",
    description:
      "Harga, promo, spesifikasi, simulasi kredit dan test drive BYD Harmoni Palmerah.",
    images: ["/images/logo/logo-byd-harmoni.png"],
  },

  category: "automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${poppins.className} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}