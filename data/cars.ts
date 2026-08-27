export type CarSpec = {
  label: string;
  value: string;
};

export type CarVariant = {
  name: string;
  price: string;
};

export type Car = {
  slug: string;
  brand: "BYD" | "DENZA";
  name: string;
  category: string;
  price: string;
  image: string;
  range: string;
  description: string;
  longDescription: string;
  specs: CarSpec[];
  variants: CarVariant[];
  features: string[];
};

export const cars: Car[] = [
  {
    slug: "atto-1",
    brand: "BYD",
    name: "ATTO 1",
    category: "Compact EV",
    price: "Mulai Rp199.000.000",
    image: "/images/cars/atto-1.jpg",
    range: "Hingga 380 km NEDC",

    description:
      "Compact EV modern untuk mobilitas perkotaan yang praktis, lincah, dan efisien.",

    longDescription:
      "BYD ATTO 1 merupakan city car listrik kompak yang dirancang untuk mobilitas perkotaan. Dimensinya ringkas, menggunakan BYD Blade Battery, serta menawarkan jarak tempuh hingga 380 km NEDC pada varian Premium.",

    specs: [
      {
        label: "Motor",
        value: "Permanent Magnet Synchronous Motor",
      },
      {
        label: "Penggerak",
        value: "Front-Wheel Drive",
      },
      {
        label: "Daya Maksimum",
        value: "55 kW",
      },
      {
        label: "Torsi Maksimum",
        value: "135 Nm",
      },
      {
        label: "Baterai",
        value: "30,08 / 38,88 kWh Blade Battery",
      },
      {
        label: "Jarak Tempuh",
        value: "300 – 380 km NEDC",
      },
      {
        label: "Akselerasi",
        value: "0–50 km/jam 4,9 detik",
      },
      {
        label: "Kapasitas",
        value: "5 Penumpang",
      },
      {
        label: "Dimensi",
        value: "3.925 × 1.720 × 1.590 mm",
      },
      {
        label: "Wheelbase",
        value: "2.500 mm",
      },
      {
        label: "DC Charging",
        value: "30 / 40 kW",
      },
      {
        label: "AC Charging",
        value: "6,6 kW",
      },
    ],

    variants: [
      {
        name: "Standard",
        price: "Rp199.000.000",
      },
      {
        name: "Dynamic",
        price: "Rp210.000.000",
      },
      {
        name: "Premium",
        price: "Rp245.000.000",
      },
    ],

    features: [
      "BYD Blade Battery",
      "Automatic LED Headlamp",
      "Apple CarPlay & Android Auto",
      "Digital Instrument Cluster",
      "V2L Function",
      "Rear Camera",
      "Parking Sensor",
      "Hingga 6 Airbags",
    ],
  },

  {
    slug: "atto-3",
    brand: "BYD",
    name: "ATTO 3",
    category: "SUV EV",
    price: "Rp415.000.000",
    image: "/images/cars/atto-3.jpg",
    range: "410 km NEDC",

    description:
      "SUV listrik modern dengan performa responsif, kabin nyaman, dan teknologi pintar.",

    longDescription:
      "BYD ATTO 3 merupakan SUV listrik berbasis e-Platform 3.0 dengan Blade Battery. Model ini menggabungkan performa, teknologi, kenyamanan kabin, dan karakter SUV untuk penggunaan sehari-hari.",

    specs: [
      {
        label: "Motor",
        value: "Permanent Magnet Synchronous Motor",
      },
      {
        label: "Penggerak",
        value: "Front-Wheel Drive",
      },
      {
        label: "Daya Maksimum",
        value: "150 kW",
      },
      {
        label: "Torsi Maksimum",
        value: "310 Nm",
      },
      {
        label: "Baterai",
        value: "49,92 kWh Blade Battery",
      },
      {
        label: "Jarak Tempuh",
        value: "410 km NEDC",
      },
      {
        label: "Akselerasi",
        value: "0–100 km/jam 7,9 detik",
      },
      {
        label: "Kapasitas",
        value: "5 Penumpang",
      },
      {
        label: "Dimensi",
        value: "4.455 × 1.875 × 1.615 mm",
      },
      {
        label: "Wheelbase",
        value: "2.720 mm",
      },
      {
        label: "Ground Clearance",
        value: "175 mm",
      },
      {
        label: "Bagasi",
        value: "440 – 1.340 Liter",
      },
    ],

    variants: [
      {
        name: "Advanced Plus",
        price: "Rp415.000.000",
      },
    ],

    features: [
      "e-Platform 3.0",
      "BYD Blade Battery",
      "Rotating Touchscreen",
      "Panoramic Sunroof",
      "Wireless Charging",
      "V2L Mobile Power Station",
      "Adaptive Cruise Control",
      "Automatic Emergency Braking",
      "Blind Spot Detection",
    ],
  },

  {
    slug: "m6",
    brand: "BYD",
    name: "M6",
    category: "Electric MPV",
    price: "Mulai Rp395.000.000",
    image: "/images/cars/m6.jpg",
    range: "Hingga 530 km",

    description:
      "MPV listrik keluarga dengan konfigurasi 6 atau 7 penumpang dan ruang kabin yang luas.",

    longDescription:
      "BYD M6 dirancang sebagai Multi Purpose Electric Vehicle untuk keluarga. Kabinnya menawarkan konfigurasi enam maupun tujuh penumpang dengan Blade Battery, layar infotainment berputar, serta kemampuan fast charging.",

    specs: [
      {
        label: "Motor",
        value: "AC Permanent Magnet Synchronous Motor",
      },
      {
        label: "Penggerak",
        value: "Front-Wheel Drive",
      },
      {
        label: "Daya Maksimum",
        value: "120 kW Standard",
      },
      {
        label: "Torsi Maksimum",
        value: "310 Nm",
      },
      {
        label: "Baterai Standard",
        value: "55,4 kWh Blade Battery",
      },
      {
        label: "Jarak Standard",
        value: "420 km NEDC",
      },
      {
        label: "Jarak Superior",
        value: "Hingga 530 km",
      },
      {
        label: "Akselerasi Standard",
        value: "0–100 km/jam 10,1 detik",
      },
      {
        label: "Kapasitas",
        value: "6 / 7 Penumpang",
      },
      {
        label: "Dimensi",
        value: "4.710 × 1.810 × 1.690 mm",
      },
      {
        label: "Wheelbase",
        value: "2.800 mm",
      },
      {
        label: "Ground Clearance",
        value: "170 mm",
      },
      {
        label: "DC Charging",
        value: "89 kW Standard / 115 kW Superior",
      },
    ],

    variants: [
      {
        name: "Standard 2026 - 7 Seater",
        price: "Rp395.000.000",
      },
      {
        name: "Superior - 7 Seater",
        price: "Rp423.000.000",
      },
      {
        name: "Superior Captain - 6 Seater",
        price: "Rp433.000.000",
      },
    ],

    features: [
      "BYD Blade Battery",
      "6 / 7 Seat Configuration",
      "12,8-inch Rotating Touchscreen",
      "Apple CarPlay & Android Auto",
      "Panoramic Roof",
      "Ventilated Front Seat",
      "V2L Function",
      "6 Airbags",
      "ADAS",
    ],
  },

  {
    slug: "m6-dm",
    brand: "BYD",
    name: "M6 DM",
    category: "Plug-in Hybrid MPV",
    price: "Mulai Rp298.000.000",
    image: "/images/cars/m6-dm.jpg",
    range: "Bensin Bisa. Listrik Bisa.",

    description:
      "MPV Plug-in Hybrid dengan teknologi Dual Mode untuk penggunaan listrik maupun bensin.",

    longDescription:
      "BYD M6 DM menggabungkan motor listrik dengan mesin bensin 1.5 liter melalui teknologi Dual Mode. Sistem ini memungkinkan mobil digunakan sebagai kendaraan listrik untuk perjalanan pendek sekaligus memiliki fleksibilitas mesin bensin untuk perjalanan lebih jauh.",

    specs: [
      {
        label: "Teknologi",
        value: "BYD Dual Mode Plug-in Hybrid",
      },
      {
        label: "Mesin",
        value: "1.5 Liter",
      },
      {
        label: "Penggerak",
        value: "Front-Wheel Drive",
      },
      {
        label: "Daya Maksimum",
        value: "120 kW",
      },
      {
        label: "Torsi Maksimum",
        value: "210 Nm",
      },
      {
        label: "Baterai Classic",
        value: "7,4 kWh",
      },
      {
        label: "EV Range Classic",
        value: "Hingga ±45 km NEDC",
      },
      {
        label: "Baterai Cross",
        value: "18,3 kWh",
      },
      {
        label: "EV Range Cross",
        value: "Sekitar 100 km NEDC",
      },
      {
        label: "Kapasitas",
        value: "6 / 7 Penumpang",
      },
      {
        label: "Wheelbase",
        value: "2.800 mm",
      },
      {
        label: "Ground Clearance",
        value: "170 mm",
      },
    ],

    variants: [
      {
        name: "Classic Standard",
        price: "Rp298.000.000",
      },
      {
        name: "Classic Dynamic",
        price: "Rp318.000.000",
      },
      {
        name: "Cross Advance",
        price: "Rp360.000.000",
      },
      {
        name: "Cross Superior",
        price: "Rp380.000.000",
      },
      {
        name: "Cross Superior Captain Seat",
        price: "Rp390.000.000",
      },
    ],

    features: [
      "BYD DM Technology",
      "Plug-in Hybrid",
      "Blade Battery",
      "6 / 7 Seat Configuration",
      "12,8-inch Touchscreen",
      "Apple CarPlay & Android Auto",
      "360° Camera",
      "ADAS pada varian tertentu",
      "V2L pada varian tertentu",
    ],
  },

  {
    slug: "seal",
    brand: "BYD",
    name: "SEAL",
    category: "Electric Sport Sedan",
    price: "Mulai Rp639.000.000",
    image: "/images/cars/seal.jpg",
    range: "Hingga 650 km NEDC",

    description:
      "Sedan listrik premium dengan performa tinggi, desain aerodinamis, dan teknologi CTB.",

    longDescription:
      "BYD SEAL merupakan sedan listrik berbasis e-Platform 3.0 dengan teknologi Cell-to-Body. Varian Performance menawarkan sistem AWD dengan akselerasi sangat cepat, sementara Premium menonjolkan jarak tempuh hingga 650 km NEDC.",

    specs: [
      {
        label: "Penggerak",
        value: "RWD / AWD",
      },
      {
        label: "Daya Premium",
        value: "230 kW",
      },
      {
        label: "Torsi Premium",
        value: "360 Nm",
      },
      {
        label: "Daya Performance",
        value: "390 kW",
      },
      {
        label: "Torsi Performance",
        value: "670 Nm",
      },
      {
        label: "Baterai",
        value: "82,56 kWh Blade Battery",
      },
      {
        label: "Range Premium",
        value: "650 km NEDC",
      },
      {
        label: "Akselerasi Premium",
        value: "0–100 km/jam 5,9 detik",
      },
      {
        label: "Akselerasi Performance",
        value: "0–100 km/jam 3,8 detik",
      },
      {
        label: "Dimensi",
        value: "4.800 × 1.875 × 1.460 mm",
      },
      {
        label: "Wheelbase",
        value: "2.920 mm",
      },
      {
        label: "DC Fast Charging",
        value: "Hingga 150 kW",
      },
    ],

    variants: [
      {
        name: "Premium Extended Range",
        price: "Rp639.000.000",
      },
      {
        name: "Performance AWD",
        price: "Rp750.000.000",
      },
    ],

    features: [
      "Cell-to-Body Technology",
      "e-Platform 3.0",
      "Blade Battery",
      "DiSus-C pada Performance",
      "15,6-inch Rotating Touchscreen",
      "Head-up Display",
      "Panoramic Glass Roof",
      "Dynaudio Audio",
      "Advanced Driver Assistance System",
    ],
  },

  {
    slug: "sealion-7",
    brand: "BYD",
    name: "SEALION 7",
    category: "Premium Electric SUV",
    price: "Mulai Rp629.000.000",
    image: "/images/cars/sealion-7.jpg",
    range: "Hingga 567 km NEDC",

    description:
      "SUV listrik premium dengan desain coupe, performa tinggi, dan teknologi Cell-to-Body.",

    longDescription:
      "BYD SEALION 7 memadukan karakter SUV dengan desain coupe dan performa EV tinggi. Tersedia dalam konfigurasi RWD Premium dan AWD Performance dengan baterai Blade 82,56 kWh.",

    specs: [
      {
        label: "Penggerak",
        value: "RWD / AWD",
      },
      {
        label: "Daya Premium",
        value: "230 kW",
      },
      {
        label: "Torsi Premium",
        value: "380 Nm",
      },
      {
        label: "Daya Performance",
        value: "390 kW",
      },
      {
        label: "Torsi Performance",
        value: "690 Nm",
      },
      {
        label: "Baterai",
        value: "82,56 kWh Blade Battery",
      },
      {
        label: "Range Premium",
        value: "567 km NEDC",
      },
      {
        label: "Range Performance",
        value: "542 km NEDC",
      },
      {
        label: "0–100 Premium",
        value: "6,7 detik",
      },
      {
        label: "0–100 Performance",
        value: "4,5 detik",
      },
      {
        label: "Dimensi",
        value: "4.830 × 1.925 × 1.620 mm",
      },
      {
        label: "Wheelbase",
        value: "2.930 mm",
      },
      {
        label: "DC Charging",
        value: "150 kW",
      },
    ],

    variants: [
      {
        name: "Premium",
        price: "Rp629.000.000",
      },
      {
        name: "Performance",
        price: "Rp719.000.000",
      },
    ],

    features: [
      "Cell-to-Body Technology",
      "Blade Battery",
      "e-Platform 3.0",
      "Double Wishbone Suspension",
      "Multi-link Rear Suspension",
      "15,6-inch Rotating Touchscreen",
      "Dynaudio Sound System",
      "Panoramic Glass Roof",
      "50W Wireless Charging",
      "Advanced Driver Assistance System",
    ],
  },

  {
    slug: "denza-d9",
    brand: "DENZA",
    name: "D9",
    category: "Luxury Electric MPV",
    price: "Hubungi Sales",
    image: "/images/cars/denza-d9.jpg",
    range: "600 km NEDC",

    description:
      "Luxury electric MPV tujuh penumpang dengan Blade Battery dan kabin premium.",

    longDescription:
      "DENZA D9 merupakan luxury electric MPV tujuh penumpang yang dibangun dengan teknologi elektrifikasi BYD. Kabinnya menonjolkan kenyamanan kelas premium, konfigurasi 2+2+3, serta Blade Battery berkapasitas besar.",

    specs: [
      {
        label: "Motor",
        value: "Permanent Magnet Synchronous Motor",
      },
      {
        label: "Penggerak",
        value: "Front-Wheel Drive",
      },
      {
        label: "Daya Maksimum",
        value: "230 kW",
      },
      {
        label: "Torsi Maksimum",
        value: "360 Nm",
      },
      {
        label: "Baterai",
        value: "103,36 kWh Blade Battery",
      },
      {
        label: "Jarak Tempuh",
        value: "600 km NEDC",
      },
      {
        label: "Akselerasi",
        value: "0–100 km/jam 9,5 detik",
      },
      {
        label: "Kapasitas",
        value: "7 Penumpang",
      },
      {
        label: "Dimensi",
        value: "5.250 × 1.960 × 1.920 mm",
      },
      {
        label: "Wheelbase",
        value: "3.110 mm",
      },
      {
        label: "DC Charging",
        value: "Hingga 166 kW",
      },
      {
        label: "AC Charging",
        value: "Hingga 11 kW",
      },
    ],

    variants: [
      {
        name: "D9 Advanced",
        price: "Hubungi Sales",
      },
    ],

    features: [
      "BYD Blade Battery",
      "e-Platform 3.0",
      "7 Seat 2+2+3",
      "Power Captain Seats",
      "Seat Massage",
      "Panoramic Roof",
      "Dynaudio 14 Speaker",
      "ADAS",
      "9 SRS Airbags",
      "V2L",
    ],
  },
];

export function getCarBySlug(slug: string) {
  return cars.find((car) => car.slug === slug);
}