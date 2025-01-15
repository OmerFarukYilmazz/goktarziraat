import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../../data/products";
import ProductCard from "../ui/ProductCard";

function PopularProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const popularProducts = products.filter((product) => product.isPopular);

  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold mb-12">Öne Çıkan Ürünler</h2>
      <Slider {...settings}>
        {popularProducts.map((product) => (
          <div key={product.id} className="px-2">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PopularProducts;
