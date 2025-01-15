import { useParams, Link, useNavigate } from "react-router-dom";
import {
  products,
  mainCategories,
  protectionCategories,
} from "../data/products";

import ProductCard from "../components/ui/ProductCard";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  // Aynı markaya ait diğer ürünler
  const brandProducts = products.filter(
    (p) => p.brand === product.brand && p.id !== product.id
  );

  // Benzer kategorideki ürünler
  const relatedProducts = products.filter((p) => {
    if (product.subCategory) {
      return p.subCategory === product.subCategory && p.id !== product.id;
    }
    return p.category === product.category && p.id !== product.id;
  });

  // Breadcrumb path'i oluştur
  const category = mainCategories.find((c) => c.id === product.category);
  if (!category) {
    return <div>Kategori bulunamadı.</div>;
  }

  const subCategory = product.subCategory
    ? protectionCategories.find((sc) => sc.id === product.subCategory)
    : null;

  const breadcrumbPath = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Tüm Ürünler", path: "/products" },
    { name: category.name, path: `/products?category=${category.id}` },
    ...(subCategory
      ? [
          {
            name: subCategory.name,
            path: `/products?category=${category.id}&subcategory=${subCategory.id}`,
          },
        ]
      : []),
    { name: product.name, path: null },
  ];

  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-secondary mb-6">
        {breadcrumbPath.map((item, index) => (
          <div key={item.name} className="flex items-center">
            {item.path ? (
              <Link
                to={item.path}
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="font-medium">{item.name}</span>
            )}
            {index < breadcrumbPath.length - 1 && (
              <span className="mx-2 text-primary">&gt;</span>
            )}
          </div>
        ))}
      </div>

      {/* Üst Kısım */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Sol - Ürün Detayları */}
        <div className="lg:col-span-2 bg-rich-bg-light rounded-xl overflow-hidden shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Ürün Görseli */}
            <div className="aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Ürün Bilgileri */}
            <div className="p-8 space-y-6 bg-gradient-to-br from-primary-bg/20 to-transparent">
              <div>
                <span className="text-xl font-medium text-primary">
                  {product.brand}
                </span>
                <h1 className="text-3xl font-bold mt-1 text-rich-dark">
                  {product.name}
                </h1>
              </div>

              <p className="text-rich-dark/80">{product.description}</p>

              <div className="space-y-4">
                <h2 className="font-bold text-secondary-dark">Özellikler</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Alt Kısım - Kullanım Detayları */}
          <div className="border-t border-primary-bg/20">
            <div className="grid grid-cols-1 md:grid-cols-1">
              {/* Kullanım Bilgileri */}
              <div className="p-8 border-b border-primary-bg/20">
                <div className="space-y-4">
                  <h2 className="font-bold text-secondary-dark">
                    Kullanım Bilgileri
                  </h2>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-primary-bg/20">
                        <td className="py-3 font-medium">Doz</td>
                        <td className="py-3">{product.usage.dosage}</td>
                      </tr>
                      <tr className="border-b border-primary-bg/20">
                        <td className="py-3 font-medium">Uygulama</td>
                        <td className="py-3">{product.usage.application}</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">Uyumluluk</td>
                        <td className="py-3">{product.usage.compatibility}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Kullanım Alanları */}
              <div className="p-8">
                <h2 className="font-bold text-secondary-dark mb-4">
                  Kullanım Alanları
                </h2>
                <div className="space-y-4">
                  {product.crops.map((crop, index) => (
                    <div
                      key={index}
                      className="shadow-md p-4 bg-secondary-bg-light rounded-lg hover:bg-primary-bg/30 transition-colors"
                    >
                      <h3 className="font-medium text-primary-dark mb-2">
                        {crop.name}
                      </h3>
                      <div className="text-sm space-y-1">
                        <p>
                          <span className="font-medium">Doz:</span>{" "}
                          {crop.dosage}
                        </p>
                        <p>
                          <span className="font-medium">Zamanlama:</span>{" "}
                          {crop.timing}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ - Aynı Markanın Diğer Ürünleri */}
        <div className="bg-rich-bg-light rounded-xl p-6 shadow-md">
          <h2 className="text-lg font-bold mb-4 text-secondary-dark">
            {product.brand} Diğer Ürünleri
          </h2>
          <div className="space-y-4">
            {brandProducts.map((brandProduct) => (
              <button
                key={brandProduct.id}
                onClick={() => navigate(`/products/${brandProduct.id}`)}
                className="w-full p-4 bg-rich-bg rounded-lg hover:bg-primary-bg/20 transition-colors"
              >
                <div className="flex gap-4">
                  <img
                    src={brandProduct.image}
                    alt={brandProduct.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="text-left">
                    <h3 className="font-medium text-primary-dark">
                      {brandProduct.name}
                    </h3>
                    <p className="text-sm text-rich-dark/80 line-clamp-2">
                      {brandProduct.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Alt Kısım - Benzer Ürünler */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Benzer Ürünler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.slice(0, 8).map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
          {relatedProducts.length === 0 && (
            <div className="col-span-full text-center py-8 text-gray-500">
              Bu kategoride başka ürün bulunamadı.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
