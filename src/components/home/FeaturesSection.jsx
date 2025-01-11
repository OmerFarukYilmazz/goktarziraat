function FeaturesSection() {
  const features = [
    {
      title: "3000+ ürün",
      subtitle: "Organik",
      description: "Sertifikalı organik ürünler",
    },
    {
      title: "250+ çiftlik",
      subtitle: "Yerel",
      description: "Yerel üreticilerden taze ürünler",
    },
    {
      title: "100% doğal",
      subtitle: "Sürdürülebilir",
      description: "Çevre dostu üretim",
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Neden Göktar Tarım?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="bg-slate-bg-light rounded-xl p-8">
            <p className="font-bold">{feature.subtitle}</p>
            <h3 className="text-primary-dark text-4xl font-bold mt-2">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
