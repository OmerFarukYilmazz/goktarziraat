import { useState, useEffect } from "react";
import {
  products,
  mainCategories,
  protectionCategories,
  allBrands,
} from "../data/products";
import ProductCard from "../components/ui/ProductCard";
import { FaFilter, FaChevronRight } from "react-icons/fa";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [currentPath, setCurrentPath] = useState(["Ana Sayfa", "Tüm Ürünler"]);

  useEffect(() => {
    if (selectedCategory) {
      const category = mainCategories.find(
        (cat) => cat.id === selectedCategory
      );
      const newPath = ["Ana Sayfa", "Tüm Ürünler", category.name];
      if (selectedSubCategory) {
        const subCategory = protectionCategories.find(
          (sub) => sub.id === selectedSubCategory
        );
        newPath.push(subCategory.name);
      }
      setCurrentPath(newPath);
    } else {
      setCurrentPath(["Ana Sayfa", "Tüm Ürünler"]);
    }
  }, [selectedCategory, selectedSubCategory]);

  useEffect(() => {
    if (selectedCategory) {
      const category = mainCategories.find(
        (cat) => cat.id === selectedCategory
      );

      if (category) {
        if (category.brands) {
          setAvailableBrands(category.brands);
        } else if (category.subCategories) {
          if (selectedSubCategory) {
            const subCategory = protectionCategories.find(
              (sub) => sub.id === selectedSubCategory
            );
            setAvailableBrands(subCategory?.brands || []);
          } else {
            const allBrands = new Set();
            protectionCategories.forEach((sub) => {
              sub.brands.forEach((brand) => allBrands.add(brand));
            });
            setAvailableBrands(Array.from(allBrands));
          }
        }
      }
    } else {
      setAvailableBrands(allBrands);
    }
  }, [selectedCategory, selectedSubCategory]);

  const toggleBrandSelection = (brand) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((b) => b !== brand)
        : [...prevSelectedBrands, brand]
    );
  };

  const filteredProducts = products.filter((product) => {
    if (!selectedCategory && selectedBrands.length === 0) return true;

    if (selectedCategory && product.category !== selectedCategory) return false;

    if (selectedSubCategory && product.subCategory !== selectedSubCategory)
      return false;

    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand))
      return false;

    return true;
  });

  return (
    <div className="min-h-screen">
      <div className="flex items-center gap-2 text-sm text-secondary mb-4">
        {currentPath.map((item, index) => (
          <div key={item} className="flex items-center">
            <span
              className={index === currentPath.length - 1 ? "font-medium" : ""}
            >
              {item}
            </span>
            {index < currentPath.length - 1 && (
              <span className="mx-2">&gt;</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Ürünlerimiz</h1>
        <span className="text-secondary font-medium">
          {filteredProducts.length} Ürün
        </span>
      </div>

      <div className="flex gap-8">
        <div className="w-64 flex-shrink-0">
          <div className="bg-rich-bg-light rounded-xl p-6 shadow-md sticky top-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <FaFilter className="text-primary" />
                <h2 className="text-lg font-bold">Filtreler</h2>
              </div>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedSubCategory(null);
                  setSelectedBrands([]);
                }}
                className="text-sm text-primary hover:text-primary-dark"
              >
                Tümünü Göster
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Kategoriler</h3>
              <div className="space-y-1">
                {/*}
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSubCategory(null);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    !selectedCategory
                      ? "bg-primary text-rich-light"
                      : "hover:bg-primary-bg"
                  }`}
                >
                  Tüm Ürünler
                </button>
                */}

                {mainCategories.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setSelectedSubCategory(null);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category.id
                          ? "bg-primary text-rich-light"
                          : "hover:bg-primary-bg"
                      }`}
                    >
                      <span>{category.name}</span>
                      {category.subCategories && (
                        <FaChevronRight
                          className={`transition-transform ${
                            selectedCategory === category.id ? "rotate-90" : ""
                          }`}
                        />
                      )}
                    </button>

                    {category.subCategories &&
                      selectedCategory === category.id && (
                        <div className="mt-1 ml-4 space-y-1">
                          {protectionCategories.map((subCategory) => (
                            <button
                              key={subCategory.id}
                              onClick={() =>
                                setSelectedSubCategory(subCategory.id)
                              }
                              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                selectedSubCategory === subCategory.id
                                  ? "bg-primary text-rich-light"
                                  : "hover:bg-primary-bg"
                              }`}
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  selectedSubCategory === subCategory.id
                                    ? "bg-rich-light"
                                    : "bg-primary"
                                }`}
                              />
                              {subCategory.name}
                            </button>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Markalar</h3>
                {selectedBrands.length > 0 && (
                  <button
                    onClick={() => setSelectedBrands([])}
                    className="text-sm text-primary hover:text-primary-dark"
                  >
                    Filtreleri Temizle
                  </button>
                )}
              </div>
              <div className="space-y-1 max-h-80 overflow-y-auto">
                {(selectedCategory ? availableBrands : allBrands).map(
                  (brand) => (
                    <label
                      key={brand}
                      className="flex items-center gap-2 hover:bg-primary-bg/20 px-2 py-1 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrandSelection(brand)}
                        className="form-checkbox text-primary rounded border-gray-300 focus:ring-primary accent-primary-light"
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
