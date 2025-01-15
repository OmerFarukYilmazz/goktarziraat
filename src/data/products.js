// Tüm markalar listesi
export const allBrands = [
  "2000 Tarım", "Ada Tarım", "Ag Tohum", "Agraforum", "Agri Sciences",
  "Agrikem", "Agrobest", "Agronutrition", "Alga Energy", "Amarko",
  "Antpaş", "Armeta", "Astranova", "Atlántica Agrícola", "Aydın Kimya", "Bayer",
  "Bigempark", "Bionova", "Brandt", "Bursa Tohum", "Casada",
  "Cifo", "Codiagro", "Demir Organik", "Doğa Tarım", "Doktor Tarsa",
  "Dorado Natural", "Ekolojik Tarım", "Enza Zaden", "Ertar Kimya", "Farmactory",
  "Farmpack", "Gautier", "Genta", "Gübretas", "Gürgen Ziraat",
  "Hefe Fertilizer", "Hekagro Actagro", "Hekagro Growth Products", "Hekagro Innovak Global",
  "Hekagro UAS of America", "Hektaş", "Italpollina - Hello Nature", "Klasmann-Deilmann",
  "Kulsan", "Makro Tarım", "Mega Mineral", "Novichem", "Odak Tarım",
  "Poltar", "RootAgro", "Sakata", "Sanagro Herogra Especiales", "Sanagro Omex",
  "Seminis", "SML (Sulphur Mills Limited)", "Süpersol", "Symborg", "Syngenta",
  "Syngenta Biologicals - Valagro", "Targisan", "Tekron", "Tessenderlo Kerley",
  "Timac Agro", "Yasuta", "Zeruva", "Zorzi"
];

// Ana kategoriler
export const mainCategories = [
  {
    id: "bitki-koruma",
    name: "Bitki Koruma",
    description: "Zirai mücadele ilaçları ve koruma ürünleri",
    image: "/images/categories/bitki-koruma.jpeg",
    subCategories: ["fungisitler", "herbisitler", "insektisitler"]
  },
  {
    id: "bitki-besleme",
    name: "Bitki Besleme",
    description: "Gübre ve besleyici ürünler",
    image: "/images/categories/bitki-besleme.jpeg",
    brands: ["Hektaş", "Bayer", "Syngenta"]
  },
  {
    id: "tohumlar",
    name: "Tohumlar",
    description: "Sertifikalı tohum çeşitleri",
    image: "/images/categories/tohumlar.jpeg",
    brands: ["Syngenta", "Pioneer", "May"]
  }
];

// Bitki Koruma alt kategorileri
export const protectionCategories = [
  {
    id: "fungisitler",
    name: "Fungisitler",
    description: "Mantar hastalıklarına karşı koruma",
    brands: ["Bayer", "Syngenta", "Basf"]
  },
  {
    id: "herbisitler",
    name: "Herbisitler",
    description: "Yabancı ot mücadelesi",
    brands: ["Bayer", "Syngenta"]
  },
  {
    id: "insektisitler",
    name: "İnsektisitler",
    description: "Zararlı böceklere karşı koruma",
    brands: ["Bayer", "Syngenta", "Gübretas"]
  }

  // Diğer alt kategoriler...
];

// Örnek ürün yapısı
export const products = [
  {
    id: 1,
    name: "Byzme TF",
    brand: "Hektaş",
    category: "bitki-besleme",
    description: "Bitki gelişim düzenleyici",
    features: [
      "Çiçeklenmeyi ve meyve bağlamayı teşvik eder",
      "Bitki gelişimini hızlandırır",
      "Büyümeye yardımcı olur"
    ],
    usage: {
      dosage: "50-100 ml/da veya 100 lt su",
      application: "Yapraktan püskürtme veya damlamadan kullanım",
      compatibility: "İnsektisit, herbisit ve yaprak gübreleri ile karıştırılabilir"
    },
    crops: [
      {
        name: "Bağ",
        dosage: "50-75 ml/100 lt su",
        timing: "İlk uygulama çiçeklenme başlangıcında"
      }
    ],
    image: "/images/products/algazer.webp",
    isPopular: true,
    isNew: false
  },
  {
    id: 2,
    name: "Fungusit Pro",
    brand: "Bayer",
    category: "bitki-koruma",
    subCategory: "fungisitler",
    description: "Güçlü mantar hastalıkları koruma ilacı",
    features: [
      "Hızlı etki",
      "Uzun süre koruma",
      "Yağmura dayanıklı"
    ],
    usage: {
      dosage: "75-100 ml/da",
      application: "Yapraktan püskürtme",
      compatibility: "Diğer tarım ilaçlarıyla karıştırılabilir"
    },
    crops: [
      {
        name: "Domates",
        dosage: "75 ml/da",
        timing: "İlk belirtiler görüldüğünde"
      }
    ],
    image: "/images/products/algazer.webp",
    isPopular: true,
    isNew: true
  },
  {
    id: 3,
    name: "Hibrit Domates",
    brand: "Pioneer",
    category: "tohumlar",
    description: "Yüksek verimli domates tohumu",
    features: [
      "Yüksek verim",
      "Hızlı çözünme",
      "Kaliteli hasat"
    ],
    usage: {
      dosage: "10-15 kg/da",
      application: "Topraktan uygulama",
      compatibility: "Tüm tohumlarla uyumlu"
    },
    crops: [
      {
        name: "Genel kullanım",
        dosage: "10-15 kg/da",
        timing: "Vejetasyon başlangıcı"
      }
    ],
    image: "/images/products/algazer.webp",
    isPopular: true,
    isNew: false
  },
  {
    id: 4,
    name: "Fungusit ",
    brand: "Bayer",
    category: "bitki-koruma",
    subCategory: "herbisitler",
    description: "Güçlü mantar hastalıkları koruma ilacı",
    features: [
      "Hızlı etki",
      "Uzun süre koruma",
      "Yağmura dayanıklı"
    ],
    usage: {
      dosage: "75-100 ml/da",
      application: "Yapraktan püskürtme",
      compatibility: "Diğer tarım ilaçlarıyla karıştırılabilir"
    },
    crops: [
      {
        name: "Domates",
        dosage: "75 ml/da",
        timing: "İlk belirtiler görüldüğünde"
      }
    ],
    image: "/images/products/algazer.webp",
    isPopular: true,
    isNew: false
  },
  {
    id: 5,
    name: "Fungusit Cr",
    brand: "Bayer",
    category: "bitki-koruma",
    subCategory: "herbisitler",
    description: "Güçlü mantar hastalıkları koruma ilacı",
    features: [
      "Hızlı etki",
      "Uzun süre koruma",
      "Yağmura dayanıklı"
    ],
    usage: {
      dosage: "75-100 ml/da",
      application: "Yapraktan püskürtme",
      compatibility: "Diğer tarım ilaçlarıyla karıştırılabilir"
    },
    crops: [
      {
        name: "Domates",
        dosage: "75 ml/da",
        timing: "İlk belirtiler görüldüğünde"
      }
    ],
    image: "/images/products/algazer.webp",
    isPopular: true,
    isNew: true
  }
];