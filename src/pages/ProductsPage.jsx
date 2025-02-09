import { useState, useEffect } from "react";
import {
  getProducts,
  mainCategories,
  protectionCategories,
  allBrands,
  nutritionCategories,
} from "../data/products";
import ProductCard from "../components/ui/ProductCard";
import { FaFilter, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { category, subcategory } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  // İlk yüklemede verilerin hazır olmasını bekle
  useEffect(() => {
    const checkProducts = () => {
      const products = getProducts();
      if (products && products.length > 0) {
        setIsLoading(false);
      } else {
        setTimeout(checkProducts, 100); // 100ms sonra tekrar kontrol et
      }
    };

    checkProducts();
  }, []);

  // URL parametrelerini takip et
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
      if (!subcategory) {
        setSelectedSubCategory(null);
      }
    } else {
      setSelectedCategory(null);
      setSelectedSubCategory(null);
    }

    if (subcategory) {
      setSelectedSubCategory(subcategory);
    }
  }, [category, subcategory]);

  // Markaları filtrele
  useEffect(() => {
    const initializeMarks = () => {
      const products = getProducts();
      if (!products || products.length === 0) {
        setTimeout(initializeMarks, 100);
        return;
      }

      let filteredProducts = products;

      if (selectedCategory) {
        filteredProducts = products.filter(
          (p) => p.category === selectedCategory
        );

        if (selectedSubCategory) {
          filteredProducts = filteredProducts.filter(
            (p) => p.subCategory === selectedSubCategory
          );
        }
      }

      // Filtrelenmiş ürünlerden benzersiz markaları al
      const brands = [...new Set(filteredProducts.map((p) => p.brand))].sort();
      setAvailableBrands(brands);

      // Seçili markalar artık mevcut değilse, seçimlerini kaldır
      setSelectedBrands((prev) =>
        prev.filter((brand) => brands.includes(brand))
      );
    };

    initializeMarks();
  }, [selectedCategory, selectedSubCategory]);

  // Türkçe karakterleri normalize eden yardımcı fonksiyon
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .replace(/ı/g, 'i')
      .replace(/i̇/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c');
  };

  // Ürünleri filtrele
  const filteredProducts = getProducts().filter((product) => {
    // Önce arama sorgusunu kontrol et
    if (searchQuery) {
      const normalizedQuery = normalizeText(searchQuery);
      const normalizedName = normalizeText(product.name);
      const normalizedBrand = normalizeText(product.brand);

      if (!normalizedName.includes(normalizedQuery) && 
          !normalizedBrand.includes(normalizedQuery)) {
        return false;
      }
    }

    // Diğer filtreler
    if (!selectedCategory && selectedBrands.length === 0) return true;
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (selectedSubCategory && product.subCategory !== selectedSubCategory) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;

    return true;
  });

  const getSubCategories = (categoryId) => {
    const category = mainCategories.find((c) => c.id === categoryId);
    if (!category?.hasSubCategories) return [];

    switch (categoryId) {
      case "bitki-koruma":
        return protectionCategories;
      case "bitki-besleme":
        return nutritionCategories;
      default:
        return [];
    }
  };

  // Breadcrumb path'i oluştur
  const breadcrumbPath = [
    { name: "Anasayfa", path: "/" },
    { name: "Tüm Ürünler", path: "/products" },
  ];

  if (selectedCategory) {
    const categoryObj = mainCategories.find((c) => c.id === selectedCategory);
    if (categoryObj) {
      breadcrumbPath.push({
        name: categoryObj.name,
        path: `/products/${categoryObj.id}`,
      });
    }
  }

  if (selectedSubCategory) {
    const subCategory = getSubCategories(selectedCategory).find(
      (sc) => sc.id === selectedSubCategory
    );
    if (subCategory) {
      breadcrumbPath.push({
        name: subCategory.name,
        path: `/products/${selectedCategory}/${subCategory.id}`,
      });
    }
  }

  // Breadcrumb tıklama işleyicisi
  const handleBreadcrumbClick = (path) => {
    navigate(path);
    if (path === "/products") {
      setSelectedCategory(null);
      setSelectedSubCategory(null);
    }
  };

  // Kategori seçimi
  const handleCategorySelect = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      setSelectedSubCategory(null);
      navigate("/products");
    } else {
      setSelectedCategory(categoryId);
      setSelectedSubCategory(null);
      navigate(`/products/${categoryId}`);
    }
  };

  // Alt kategori seçimi
  const handleSubCategorySelect = (subCategoryId) => {
    if (selectedSubCategory === subCategoryId) {
      setSelectedSubCategory(null);
      navigate(`/products/${selectedCategory}`);
    } else {
      setSelectedSubCategory(subCategoryId);
      navigate(`/products/${selectedCategory}/${subCategoryId}`);
    }
  };

  // Loading durumunu kontrol et
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          <p className="mt-4 text-secondary">Ürünler yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-secondary-dark mb-6">
        {breadcrumbPath.map((item, index) => (
          <div key={item.name} className="flex items-center">
            <button
              onClick={() => handleBreadcrumbClick(item.path)}
              className="hover:text-primary transition-colors"
            >
              {item.name}
            </button>
            {index < breadcrumbPath.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </div>
        ))}
      </div>

      {/* Başlık, Arama ve Ürün Adeti */}
      <div className="flex justify-between items-center gap-8 mb-8">
        <h1 className="text-3xl font-bold shrink-0">Ürünlerimiz</h1>
        
        {/* Arama kutusu */}
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Ürün veya marka ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-primary/60 text-primary"
          />
        </div>

        <span className="text-secondary font-medium shrink-0">
          {filteredProducts.length} Ürün
        </span>
      </div>

      <div className="flex gap-6">
        <div className="w-64 bg-rich-bg-light rounded-xl shadow-md h-fit sticky top-8">
          <div className="p-3">
            <h3 className="font-bold text-rich-dark mb-3">Tüm Ürünler</h3>

            <div className="categories-section text-sm space-y-1">
              {mainCategories.map((category) => (
                <div key={category.id} className="category-item">
                  <button
                    onClick={() => handleCategorySelect(category.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors hover:bg-primary-bg/10 ${
                      selectedCategory === category.id
                        ? "bg-primary text-rich-light"
                        : ""
                    }`}
                  >
                    <span>{category.name}</span>
                    {category.hasSubCategories && (
                      <FaChevronRight
                        className={`transition-transform ${
                          selectedCategory === category.id ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </button>

                  {category.hasSubCategories &&
                    selectedCategory === category.id && (
                      <div className="ml-3 mt-1 space-y-1">
                        {getSubCategories(category.id).map((subCategory) => (
                          <button
                            key={subCategory.id}
                            onClick={() =>
                              handleSubCategorySelect(subCategory.id)
                            }
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-primary-bg/10 rounded-lg"
                          >
                            <span
                              className={
                                selectedSubCategory === subCategory.id
                                  ? "text-primary"
                                  : ""
                              }
                            >
                              {subCategory.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 border-t border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-rich-dark">Markalar</h3>
              {selectedBrands.length > 0 && (
                <button
                  onClick={() => setSelectedBrands([])}
                  className="text-sm text-primary hover:text-primary-dark"
                >
                  Temizle
                </button>
              )}
            </div>

            <div className="space-y-1 max-h-[300px] overflow-y-auto pr-2">
              {availableBrands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 hover:bg-primary-bg/20 px-2 py-1 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedBrands([...selectedBrands, brand]);
                      } else {
                        setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                      }
                    }}
                    className="text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <span className="text-sm">{brand}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          {/* Ürün Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-gray-500">
                Bu kriterlere uygun ürün bulunamadı.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
