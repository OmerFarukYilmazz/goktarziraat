import * as XLSX from 'xlsx';

function normalizeGroupName(group) {
  if (!group) return 'diger';

  // Önce büyük I/İ harflerini küçük ı/i'ye çevirelim
  const turkishMap = {
    'İ': 'i',
    'I': 'ı',
    'Ğ': 'ğ',
    'Ü': 'ü',
    'Ş': 'ş',
    'Ö': 'ö',
    'Ç': 'ç'
  };

  // Türkçe karakterleri düzgün şekilde küçült
  const normalized = group
    .split('')
    .map(char => turkishMap[char] || char.toLowerCase())
    .join('')
    .trim();

  // Yaygın yazım hatalarını düzelt
  const groupMap = {
    'zıraı ılaç': 'zirai ilaç',
    'zirai ilac': 'zirai ilaç',
    'fungısıt': 'fungisit',
    'fungusıt': 'fungisit',
    'ınsektısıt': 'insektisit',    
    'herbısıt': 'herbisit',
    'akarısıt': 'akarisit',
    'nematosıt': 'nematosit',
    'mollussısıt': 'mollussisit',
    'mollusısıt': 'mollussisit',
    'fumigant': 'fumigant',
    'fumıgant': 'fumigant',
    'feromon tuzak': 'feromon tuzak',
    'bgd': 'bgd',
    'yaprak gübresy': 'yaprak gübresi',
    'yaprak gübresı': 'yaprak gübresi',
    'üst gübresı': 'üst gübresi',
    'taban gübresı': 'taban gübresi',
    'kımyevı gübre': 'kimyevi gübre',
    'damlama gübresy': 'damlama gübresi',
    'damlama gübresi': 'damlama gübresi',
    'tohum': 'tohum',
    'fyde': 'fide',
    'fıde': 'fide',
    'fide': 'fide',
    'rodentisit': 'rodentisit',
    'rodentısıt': 'rodentisit',
    'çevre sağlığı': 'çevre sağlığı',
    'yok': 'diger'
  };

  return groupMap[normalized] || normalized;
}

export async function processExcelFile(file) {
  try {
    const data = await readExcelFile(file);
    const processedData = {
      products: [],
      brands: new Set(),
      groups: new Set()
    };

    // Filtrelenecek ürün isimleri
    const excludedProducts = [
      'FİYAT FARKI',
      'KDV FİYAT FARKI',
      'FİYAT FARKI FATURASI'
    ];

    data.forEach(row => {
      // Boş satırları ve istenmeyen ürünleri atla
      if (!row['MalKod'] || !row['Mal Adı'] || 
          excludedProducts.some(term => 
            row['Mal Adı'].toLowerCase().includes(term.toLowerCase())
          )) return;

      // Markayı ekle
      if (row['Firma']) {
        processedData.brands.add(row['Firma'].trim());
      }

      // Grubu normalize et ve ekle
      const normalizedGroup = row['Grubu'] ? normalizeGroupName(row['Grubu']) : 'diger';
      processedData.groups.add(normalizedGroup);

      // Ürünü ekle
      processedData.products.push({
        id: parseInt(row['MalKod']),
        name: row['Mal Adı'].trim(),
        brand: row['Firma']?.trim() || 'Belirtilmemiş',
        group: normalizedGroup,
        image: `/images/brands/${row['Firma']?.trim().toLowerCase().replace(/\s+/g, '-')}.jpg` || '/images/brands/default.jpg'
      });
    });

    return {
      products: processedData.products,
      brands: Array.from(processedData.brands).sort(),
      groups: Array.from(processedData.groups).sort()
    };
  } catch (error) {
    console.error('Excel işleme hatası:', error);
    throw error;
  }
}

function readExcelFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const workbook = XLSX.read(e.target.result, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        resolve(jsonData);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
} 