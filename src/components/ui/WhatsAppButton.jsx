import { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed right-6 transition-all duration-500 ${isVisible ? 'bottom-6' : '-bottom-20'}`}>
      <div className="relative">
        {/* Ana Buton */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-20 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all group"
        >
          {isOpen ? (
            <FaTimes className="text-2xl text-white transition-transform group-hover:rotate-90" />
          ) : (
            <FaWhatsapp className="text-3xl text-white transition-transform group-hover:scale-110" />
          )}
        </button>

        {/* Mesaj Balonu */}
        <div
          className={`absolute right-0 bottom-20 bg-white rounded-2xl shadow-xl p-4 w-72 transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="relative">
            {/* Dekoratif Üçgen */}
            <div className="absolute -bottom-7 right-6 w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-white border-r-[10px] border-r-transparent" />
            
            <h3 className="font-bold text-lg mb-2 text-rich-dark">
              Size nasıl yardımcı olabiliriz?
            </h3>
            <p className="text-sm text-rich-dark/70 mb-4">
              7/24 WhatsApp üzerinden bize ulaşabilirsiniz.
            </p>
            <a
              href="https://wa.me/905413582680"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white text-center py-3 rounded-xl font-medium hover:bg-green-600 transition-colors"
            >
              Mesaj Gönder
            </a>
          </div>
        </div>

        {/* Animasyonlu Halkalar */}
        <div className={`absolute inset-0 z-10 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          <div className="absolute inset-0 animate-ping-slow bg-green-500/30 rounded-full" />
          <div className="absolute inset-0 animate-ping-slower bg-green-500/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default WhatsAppButton; 