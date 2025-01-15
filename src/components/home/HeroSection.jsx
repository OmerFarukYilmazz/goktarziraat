import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function HeroSection() {
  return (
    <div
      className="shadow-md relative min-h-[480px] rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(/images/home/banner.jpeg)` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative flex flex-col items-center justify-center h-full text-center p-4 space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-[2px] bg-secondary" />
          <span className="text-rich-light text-2xl md:text-3xl font-bold tracking-wider">
            Göktar Ziraat
          </span>
          <div className="w-12 h-[2px] bg-secondary" />
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-rich-light max-w-3xl leading-tight">
          Tarım Kimyasalları, Kimyevi Gübreler ve Tohumlar
        </h1>

        <div className="w-full max-w-2xl">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary px-8 py-4 rounded-xl text-white font-bold overflow-hidden relative hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Tüm Ürünlerimiz</span>
            <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
