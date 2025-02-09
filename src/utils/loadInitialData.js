import { loadProductsFromExcel } from '../data/products';
import excelFile from '../data/Ürün_Listesi_1.xlsx?url';

export async function loadInitialData() {
  try {
    const response = await fetch(excelFile);
    const arrayBuffer = await response.arrayBuffer();
    const file = new File([arrayBuffer], 'Ürün_Listesi_1.xlsx', {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    
    await loadProductsFromExcel(file);
    console.log('Başlangıç verileri yüklendi');
  } catch (error) {
    console.error('Veri yükleme hatası:', error);
  }
} 