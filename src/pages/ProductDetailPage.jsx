import { useParams, Link, useNavigate } from "react-router-dom";
import {
  getProducts,
  mainCategories,
  protectionCategories,
  nutritionCategories,
} from "../data/products";
import ProductCard from "../components/ui/ProductCard";
import { useEffect, useState } from "react";

function ProductDetailPage() {
  const { id, category, subcategory } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = () => {
      const products = getProducts();
      if (!products || products.length === 0) {
        setTimeout(loadProduct, 100);
        return;
      }
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
      setIsLoading(false);
    };

    loadProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          <p className="mt-4 text-secondary">Ürün yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Ürün Bulunamadı
          </h2>
          <Link
            to="/products"
            className="text-primary hover:text-primary-dark transition-colors"
          >
            Tüm Ürünlere Dön
          </Link>
        </div>
      </div>
    );
  }

  // Aynı markaya ait diğer ürünler
  const brandProducts = getProducts()
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4); // En fazla 4 ürün göster

  // Benzer kategorideki ürünler
  const relatedProducts = getProducts()
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4); // En fazla 4 ürün göster

  // Breadcrumb path'i oluştur
  const breadcrumbPath = [
    { name: "Anasayfa", path: "/" },
    { name: "Tüm Ürünler", path: "/products" },
  ];

  // Kategori ekle
  const categoryObj = mainCategories.find((c) => c.id === product.category);
  if (categoryObj) {
    breadcrumbPath.push({
      name: categoryObj.name,
      path: `/products/${product.category}`,
    });

    // Alt kategori sadece hasSubCategories true olan kategoriler için
    if (categoryObj.hasSubCategories && product.subCategory) {
      const subCategories =
        product.category === "bitki-koruma"
          ? protectionCategories
          : nutritionCategories;

      const subCategoryObj = subCategories.find(
        (sc) => sc.id === product.subCategory
      );
      if (subCategoryObj) {
        breadcrumbPath.push({
          name: subCategoryObj.name,
          path: `/products/${product.category}/${product.subCategory}`,
        });
      }
    }
  }

  // Ürün adını ekle
  breadcrumbPath.push({
    name: product.name,
    path: categoryObj?.hasSubCategories
      ? `/products/${product.category}/${product.subCategory}/${product.id}`
      : `/products/${product.category}/${product.id}`,
  });

  return (
    <div className="min-h-screen py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-secondary-dark mb-6">
        {breadcrumbPath.map((item, index) => (
          <div key={item.name} className="flex items-center">
            {index === breadcrumbPath.length - 1 ? (
              // Son öğe (ürün adı) için sadece text göster
              <span className="text-secondary">{item.name}</span>
            ) : (
              // Diğer öğeler için tıklanabilir buton
              <button
                onClick={() => navigate(item.path)}
                className="hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            )}
            {index < breadcrumbPath.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </div>
        ))}
      </div>

      {/* Ürün detayları */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sol - Marka Logosu */}
        <div className="lg:col-span-1">
          <img
            src={`/images/brands/${product.brand
              .toLowerCase()
              .replace(/\s+/g, "-")}.jpg`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/brands/default.jpg";
            }}
            alt={product.brand}
            className="w-full rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* Orta - Ürün Bilgileri */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="space-y-4">
            <p className="text-lg text-gray-600">{product.description}</p>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Marka:</span>
              <span className="text-sm text-gray-600">{product.brand}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Kategori:</span>
              <span className="text-sm text-gray-600">{categoryObj?.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* İlgili Ürünler */}
      {(brandProducts.length > 0 || relatedProducts.length > 0) && (
        <div className="mt-16 space-y-12">
          {/* Aynı Markanın Diğer Ürünleri */}
          {brandProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {product.brand} Markalı Diğer Ürünler
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {brandProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

          {/* Benzer Kategorideki Ürünler */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Benzer Ürünler</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductDetailPage;
