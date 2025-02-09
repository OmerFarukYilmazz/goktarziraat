import { processExcelFile } from '../utils/processExcelData';

// Ana kategoriler
export const mainCategories = [
  {
    id: "bitki-koruma",
    name: "Bitki Koruma",
    description: "Zirai mücadele ilaçları ve koruma ürünleri",
    image: "/images/categories/bitki-koruma.jpeg",
    hasSubCategories: true
  },
  {
    id: "bitki-besleme",
    name: "Bitki Besleme",
    description: "Gübre ve besleyici ürünler",
    image: "/images/categories/bitki-besleme.jpeg",
    hasSubCategories: true
  },
  {
    id: "tohumlar",
    name: "Tohumlar",
    description: "Sertifikalı tohum çeşitleri",
    image: "/images/categories/tohumlar.jpeg",    
  },
  {
    id: "fideler",
    name: "Fideler",
    description: "Kaliteli fide çeşitleri",
    image: "/images/categories/fideler.jpeg",
  },
  {
    id: "cevre-sagligi",
    name: "Çevre Sağlığı",
    description: "Çevre sağlığı ürünleri",
    image: "/images/categories/cevre-sagligi.jpeg",
  },
  {
    id: "diger",  
    name: "Diğer",
    description: "Diğer ürünler",
    image: "/images/categories/diger.jpeg",
  }
];

// Alt kategoriler
export const protectionCategories = [
  {
    id: "fungisitler",
    name: "Fungisitler",
    description: "Mantar hastalıklarına karşı koruma"
  },
  {
    id: "herbisitler",
    name: "Herbisitler",
    description: "Yabancı ot mücadelesi"
  },
  {
    id: "insektisitler",
    name: "İnsektisitler",
    description: "Zararlı böceklere karşı koruma"
  },
  {
    id: "akarisitler",
    name: "Akarisitler",
    description: "Kırmızı örümcek mücadelesi"
  },
  {
    id: "nematositler",
    name: "Nematositler",
    description: "Nematod mücadelesi"
  },
  {
    id: "mollussisitler",
    name: "Mollussisitler",
    description: "Sümüklü böcek mücadelesi"
  },
  {
    id: "bgd",
    name: "Bitki Gelişim Düzenleyiciler",
    description: "Bitki gelişimini düzenleyen ürünler"
  },
  {
    id: "feromon-tuzak",
    name: "Feromon Tuzaklar",
    description: "Zararlı böcek tuzakları"
  }
];

// Bitki besleme alt kategorileri
export const nutritionCategories = [
  {
    id: "yaprak-gubresi",
    name: "Yaprak Gübresi",
    description: "Yapraktan uygulanan gübreler"
  },
  {
    id: "damlama-gubresi",
    name: "Damlama Gübresi",
    description: "Damlamadan uygulanan gübreler"
  },
  {
    id: "ust-gubresi",
    name: "Üst Gübresi",
    description: "Üstten uygulanan gübreler"
  },
  {
    id: "taban-gubresi",
    name: "Taban Gübresi",
    description: "Tabandan uygulanan gübreler"
  },
  {
    id: "kimyevi-gubre",
    name: "Kimyevi Gübre",
    description: "Kimyevi gübreler"
  }
];

// Başlangıç durumu için boş veri yapısı
const productsData = {
  products: [],
  brands: [],
  groups: []
};

// Doğrudan products array'ini export et
export const products = productsData.products;
export const allBrands = productsData.brands;

// Excel'den veri yükleme fonksiyonu
export async function loadProductsFromExcel(file) {
  try {
    const data = await processExcelFile(file);
    
    // Verileri güncelle
    productsData.products.length = 0; // Array'i temizle
    productsData.products.push(...data.products.map(p => ({
      ...p,
      category: mapGroupToCategory(p.group),
      subCategory: mapGroupToSubCategory(p.group),
      description: p.name,
      image: "/images/products/default.webp",
      isPopular: false,
      isNew: false
    })));
    
    productsData.brands = data.brands;
    productsData.groups = data.groups;

    return productsData;
  } catch (error) {
    console.error('Veri yükleme hatası:', error);
    throw error;
  }
}

// Getter fonksiyonları
export function getProducts() {
  return productsData.products;
}

export function getBrands() {
  return productsData.brands;
}

export function getGroups() {
  return productsData.groups;
}

// Mapping fonksiyonları aynı kalacak
function mapGroupToCategory(group) {
  const groupMap = {
    'zirai ilaç': 'diger',    
    'fungisit': 'bitki-koruma',
    'insektisit': 'bitki-koruma',
    'herbisit': 'bitki-koruma',
    'akarisit': 'bitki-koruma',
    'nematosit': 'bitki-koruma',
    'mollussisit': 'bitki-koruma',    
    'fumigant': 'bitki-koruma',
    'feromon tuzak': 'bitki-koruma',
    'bgd': 'bitki-koruma',
    'yaprak gübresi': 'bitki-besleme',
    'damlama gübresi': 'bitki-besleme',
    'kimyevi gübre': 'bitki-besleme',
    'üst gübresi': 'bitki-besleme',
    'taban gübresi': 'bitki-besleme',
    'tohum': 'tohumlar',
    'fide': 'fideler',
    'rodentisit': 'cevre-sagligi',
    'çevre sağlığı': 'cevre-sagligi'
  };

  return groupMap[group.toLowerCase()] || 'diger';
}

function mapGroupToSubCategory(group) {
  const subGroupMap = {
    'fungisit': 'fungisitler',
    'fungusit': 'fungisitler',
    'insektisit': 'insektisitler',
    'herbisit': 'herbisitler',
    'akarisit': 'akarisitler',
    'nematosit': 'nematositler',
    'mollussisit': 'mollussisitler',
    'mollusisit': 'mollussisitler',
    'fumigant': 'fumigant',
    'feromon tuzak': 'feromon-tuzak',
    'bgd': 'bgd',
    'yaprak gübresi': 'yaprak-gubresi',
    'yaprak-gübresi': 'yaprak-gubresi',
    'damlama gübresi': 'damlama-gubresi',
    'damlama-gübresi': 'damlama-gubresi',
    'kimyevi gübre': 'kimyevi-gubre',
    'üst gübresi': 'ust-gubresi',
    'taban gübresi': 'taban-gubresi'
  };

  return subGroupMap[group.toLowerCase()] || null;
}