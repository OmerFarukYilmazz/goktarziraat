import { Link } from "react-router-dom";
import { mainCategories } from "../../data/products";

function CategoriesSection() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Ürün Kategorilerimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCategories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg"
            >
              {/* Resim */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm line-clamp-2">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesSection;
