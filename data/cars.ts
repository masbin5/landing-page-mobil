export type Car = {
  slug: string;
  brand: "BYD" | "DENZA";
  name: string;
  category: string;
  price: string;
  image: string;
  range: string;
  description: string;
};

export const cars: Car[] = [
  {
    slug: "atto-1",
    brand: "BYD",
    name: "ATTO 1",
    category: "Compact EV",
    price: "Mulai Rp199.000.000",
    image: "/images/cars/atto-1.jpg",
    range: "Hingga ±380 km",
    description:
      "Compact EV modern untuk mobilitas harian yang praktis, lincah, dan efisien.",
  },
  {
    slug: "m6-dm",
    brand: "BYD",
    name: "M6 DM",
    category: "MPV DM-i",
    price: "Mulai Rp298.000.000",
    image: "/images/cars/m6-dm.jpg",
    range: "Hybrid family MPV",
    description:
      "MPV keluarga dengan teknologi DM untuk perjalanan fleksibel dan kebutuhan keluarga.",
  },
  {
    slug: "atto-3",
    brand: "BYD",
    name: "ATTO 3",
    category: "SUV EV",
    price: "Rp415.000.000",
    image: "/images/cars/atto-3.jpg",
    range: "±410 km",
    description:
      "SUV listrik yang nyaman, modern, dan cocok untuk penggunaan harian maupun perjalanan jauh.",
  },
  {
    slug: "m6",
    brand: "BYD",
    name: "M6",
    category: "MPV EV",
    price: "Mulai Rp395.000.000",
    image: "/images/cars/m6.jpg",
    range: "Hingga ±600 km",
    description:
      "MPV listrik dengan kabin lega untuk keluarga modern dan perjalanan yang lebih nyaman.",
  },
  {
    slug: "seal",
    brand: "BYD",
    name: "SEAL",
    category: "Sedan EV",
    price: "Rp869.000.000",
    image: "/images/cars/seal.jpg",
    range: "±650 km",
    description:
      "Sedan listrik premium dengan desain elegan, kabin modern, dan performa bertenaga.",
  },
  {
    slug: "sealion-7",
    brand: "BYD",
    name: "SEALION 7",
    category: "SUV EV",
    price: "Rp879.000.000",
    image: "/images/cars/sealion-7.jpg",
    range: "±567 km",
    description:
      "SUV listrik premium dengan desain sporty dan ruang kabin yang modern.",
  },
  {
    slug: "denza-d9",
    brand: "DENZA",
    name: "D9",
    category: "Premium MPV",
    price: "Mulai Rp950.000.000",
    image: "/images/cars/denza-d9.jpg",
    range: "Premium electric MPV",
    description:
      "Premium MPV dengan fokus pada kenyamanan, kemewahan, dan teknologi modern.",
  },
];