import { getProducts } from "../../data/products";
import ProductCard from "../ui/ProductCard";

function PopularProducts() {
  // Tüm ürünleri al ve son 4 ürünü göster
  const products = getProducts()
    ?.slice(-4) // Son 4 ürün
    .reverse(); // En son eklenenler başta olsun

  // Eğer ürün yoksa komponenti gösterme
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-rich-bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Öne Çıkan Ürünlerimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
