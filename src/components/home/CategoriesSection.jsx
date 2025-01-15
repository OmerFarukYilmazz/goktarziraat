import { mainCategories } from "../../data/products";

function CategoriesSection() {
  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold mb-12">Kategoriler</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mainCategories.map((category) => (
          <div key={category.id} className="group cursor-pointer">
            <div className="aspect-video rounded-xl overflow-hidden mb-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
            <p className="font-medium">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesSection;
