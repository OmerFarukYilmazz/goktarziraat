import { FaSearch } from "react-icons/fa";
import background from "../../assets/background.jpg";

function HeroSection() {
  return (
    <div
      className="relative min-h-[480px] rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative flex flex-col items-center justify-center h-full text-center p-4 space-y-6">
        <h1 className="text-4xl md:text-5xl font-black text-rich-light max-w-3xl leading-tight">
          Taze ve organik tarım ürünleri
        </h1>

        <div className="w-full max-w-2xl">
          <div className="flex bg-rich-light rounded-xl">
            <div className="flex items-center pl-4">
              <FaSearch className="text-gray" />
            </div>
            <input
              type="text"
              placeholder="Ürün ara..."
              className="bg-rich-light w-full p-4 rounded-l-xl focus:outline-none"
            />
            <button className="px-6 py-4 bg-secondary text-rich-light font-bold rounded-r-xl hover:bg-secondary/90 transition-colors">
              Ara
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
