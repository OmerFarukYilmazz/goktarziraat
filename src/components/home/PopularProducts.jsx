import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background from "../../assets/background.jpg";

function PopularProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      title: "Organik Domates",
      image: background,
      description: "Taze ve doğal yetiştirilmiş organik domatesler",
    },
    {
      id: 2,
      title: "Taze Salatalık",
      image: background,
      description: "Serada özenle yetiştirilen taze salatalıklar",
    },
    {
      id: 3,
      title: "Yeşil Biber",
      image: background,
      description: "Yerli tohum ile üretilen doğal biberler",
    },
    {
      id: 4,
      title: "Kırmızı Elma",
      image: background,
      description: "Amasya'nın meşhur kırmızı elmaları",
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold mb-12">
        Öne Çıkan Ürünler
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="bg-rich-bg-light rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-rich-dark text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-rich-dark text-sm">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PopularProducts;
