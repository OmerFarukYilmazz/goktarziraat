import PropTypes from "prop-types";
import { FaShareAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { mainCategories } from "../../data/products";
import { useToast } from '../../context/ToastContext';

function ProductCard({ product }) {
  const { id, name, brand, isNew, category } = product;
  const navigate = useNavigate();
  const categoryObj = mainCategories.find((c) => c.id === category);
  const { showToast } = useToast();

  const handleClick = () => {
    if (categoryObj?.hasSubCategories) {
      navigate(`/products/${category}/${product.subCategory}/detail/${id}`);
    } else {
      navigate(`/products/${category}/detail/${id}`);
    }
  };

  const handleShare = async (e) => {
    e.stopPropagation();

    const shareData = {
      title: name,
      text: `${brand} - ${name}`,
      url: window.location.href,
    };

    try {
      if (navigator.share && /mobile|android|iphone/i.test(navigator.userAgent)) {
        await navigator.share(shareData);
        showToast('Başarıyla paylaşıldı', 'success');
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link kopyalandı', 'success');
      }
    } catch (err) {
      showToast('Paylaşım başarısız oldu', 'error');
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-rich-bg-light rounded-xl overflow-hidden shadow-md group hover:shadow-lg hover:border-white hover:scale-[1.02] transition-all duration-300 cursor-pointer w-full border border-transparent"
    >
      {/* Resim Alanı */}
      <div className="relative" style={{ height: "280px" }}>
        <img
          src={
            brand
              ? `/images/brands/${brand.toLowerCase().replace(/\s+/g, "-")}.jpg`
              : "/images/products/default.jpg"
          }
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/products/default.jpg";
          }}
          alt={brand || name}
          className="w-full h-full object-cover"
        />
        {/* Yeni Ürün Badge */}
        {isNew && (
          <span className="absolute top-2 left-2 bg-primary text-rich-light text-xs font-medium px-2 py-1 rounded-lg">
            Yeni
          </span>
        )}
        {/* Paylaş Butonu */}
        <button
          className="absolute top-2 right-2 bg-rich-bg-light/80 hover:bg-rich-bg-light p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handleShare}
        >
          <FaShareAlt className="text-primary" />
        </button>
      </div>

      {/* İçerik Alanı */}
      <div className="p-3 flex flex-col h-[140px] text-center">
        {/* Ürün Adı ve Marka */}
        <div className="mb-auto">
          <h3 className="text-base font-bold text-rich-dark line-clamp-2">
            {name}
          </h3>
          <span className="block text-sm font-medium text-secondary mt-1">
            {brand}
          </span>
        </div>

        {/* Ürün Detay Butonu - Ortalı */}
        <div className="flex items-center justify-center">
          <Link
            to={
              categoryObj?.hasSubCategories
                ? `/products/${category}/${product.subCategory}/detail/${id}`
                : `/products/${category}/detail/${id}`
            }
            onClick={(e) => e.stopPropagation()}
            className="inline-block px-4 py-1.5 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-rich-light transition-colors duration-300"
          >
            Ürün Detayı
          </Link>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isNew: PropTypes.bool,
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
