import { FaLeaf, FaHandshake, FaChartLine } from "react-icons/fa";

function AboutPage() {
  const values = [
    {
      icon: <FaLeaf className="text-4xl text-primary" />,
      title: "Sürdürülebilir Tarım",
      description:
        "Çevre dostu ürünler ve sürdürülebilir tarım çözümleri sunuyoruz.",
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Güvenilir Ortaklık",
      description:
        "20 yılı aşkın tecrübemizle çiftçilerimizin güvenilir çözüm ortağıyız.",
    },
    {
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: "Verim Odaklı",
      description:
        "Modern tarım teknikleri ve kaliteli ürünlerle verimi artırıyoruz.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden rounded-2xl mx-4 shadow-xl">
        {/* Ana background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/about/hero.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.8)",
          }}
        />

        {/* Gradient overlay - Farklı bir stil */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/90 via-transparent to-secondary-dark/80" />

        {/* Dekoratif elementler - Yeni stil */}
        <div className="absolute inset-0">
          {/* Üst kısımdaki yarım daire */}
          <div className="absolute -top-1/4 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full border-2 border-white/10" />
          <div className="absolute -top-1/3 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] rounded-full border border-white/5" />
        </div>

        {/* İçerik - Yeni düzen */}
        <div className="relative h-full container mx-auto px-4">
          <div className="flex flex-col justify-center items-center h-full text-center">
            {/* Üst çizgi dekorasyon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-white/30" />
              <span className="text-white/80 uppercase tracking-[0.2em] text-sm">
                2005'den beri
              </span>
              <div className="w-12 h-[1px] bg-white/30" />
            </div>

            {/* Ana başlık */}
            <h1 className="text-7xl font-bold text-white mb-6 relative">
              Göktar Ziraat
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></span>
            </h1>

            {/* Alt başlık */}
            <p className="text-xl text-white/90 max-w-xl">
              Modern tarımın güvenilir çözüm ortağı
            </p>

            {/* İstatistikler */}
            <div className="flex gap-12 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">20+</div>
                <div className="text-white/70 text-sm">Yıllık Tecrübe</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">1000+</div>
                <div className="text-white/70 text-sm">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-white/70 text-sm">Ürün Çeşidi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt kısımdaki dalga efekti */}
        <div
          className="absolute bottom-0 left-0 w-full h-24"
          style={{
            background: 'url("/images/patterns/wave.svg") repeat-x bottom',
            backgroundSize: "100% 100%",
            opacity: 0.1,
          }}
        />
      </div>

      {/* Hikaye Bölümü */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Hikayemiz
            </h2>
            <div className="space-y-6 text-base md:text-lg">
              <p className="leading-relaxed">
                2005 yılında Burdur Bucak'ta kurulan Göktar Tarım, tarım
                sektöründe güvenilir ve yenilikçi çözümler sunma misyonuyla yola
                çıktı. Kurucularımız Gökhan Gök ve Melek Gök'ün tarım tutkusu ve
                sektör tecrübesi, firmamızın temelini oluşturdu.
              </p>
              <p className="leading-relaxed">
                Bugün, Türkiye'nin önde gelen zirai ilaç ve tarım kimyasalları
                bayilerinden biri olarak, çiftçilerimize en kaliteli ürünleri ve
                en iyi teknik desteği sunmaya devam ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Değerlerimiz */}
      <div className="bg-rich-bg-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-primary-bg/10"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-rich-dark/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Görsel Grid */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tesislerimiz</h2>
          <p className="text-lg text-rich-dark/80">
            Modern tesislerimiz ve profesyonel ekibimizle çiftçilerimize en iyi
            hizmeti sunuyoruz
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/about/office.jpg"
              alt="Göktar Ziraat Ofis"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">Merkez Ofisimiz</p>
            </div>
          </div>
          <div className="group relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/about/warehouse.jpg"
              alt="Göktar Ziraat Depo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">Modern Depomuz</p>
            </div>
          </div>
          <div className="group relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/about/field.jpeg"
              alt="Göktar Ziraat Saha"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">
                Saha Çalışmalarımız
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
