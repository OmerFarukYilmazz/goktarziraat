import { useEffect, useRef } from "react";

function PartnersSection() {
  const containerRef = useRef(null);

  const partners = Array(8).fill({
    id: 1,
    image: "/images/partners/hektas.png",
    name: "Hektas",
  });

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const animationDuration = 30; // saniye cinsinden

    const keyframes = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${scrollWidth / 2}px);
        }
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold mb-12">Çözüm Ortaklarımız</h2>
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlay'ler */}
        <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-slate-bg-light to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-slate-bg-light to-transparent"></div>

        {/* Slider container */}
        <div
          ref={containerRef}
          className="flex animate-scroll"
          style={{
            animation: "scroll 30s linear infinite",
          }}
        >
          {/* İlk set logolar */}
          <div className="flex min-w-max items-center gap-16 px-8">
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex h-24 w-[180px] items-center justify-center"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-16 w-auto object-contain transition-all duration-300"
                  style={{
                    filter: "grayscale(1) opacity(0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "none";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(1) opacity(0.5)";
                  }}
                />
              </div>
            ))}
          </div>

          {/* İkinci set logolar (sonsuz döngü için) */}
          <div className="flex min-w-max items-center gap-16 px-8">
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex h-24 w-[180px] items-center justify-center"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-16 w-auto object-contain transition-all duration-300"
                  style={{
                    filter: "grayscale(1) opacity(0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "none";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(1) opacity(0.5)";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
