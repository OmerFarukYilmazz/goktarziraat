import { useCallback } from 'react';
import { loadProductsFromExcel } from '../../data/products';

function ExcelUploader() {
  const handleFileUpload = useCallback(async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        await loadProductsFromExcel(file);
        console.log('Veriler başarıyla yüklendi');
      } catch (error) {
        console.error('Veri yükleme hatası:', error);
      }
    }
  }, []);

  return (
    <div className="p-4">
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-primary file:text-white
          hover:file:bg-primary-dark"
      />
    </div>
  );
}

export default ExcelUploader; 