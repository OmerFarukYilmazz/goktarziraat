import axios from 'axios';

export const productService = {
  async getProducts() {
    const response = await axios.get('/api/products');
    return response.data;
  },

  async updateProducts(excelFile) {
    const formData = new FormData();
    formData.append('file', excelFile);
    const response = await axios.post('/api/products/upload', formData);
    return response.data;
  }
}; 