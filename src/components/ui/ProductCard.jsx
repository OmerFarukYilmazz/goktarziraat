import PropTypes from "prop-types";
import { FaShareAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { id, name, brand, description, image, isNew } = product;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${id}`)}
      className="bg-rich-bg-light rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      {/* Resim Alanı */}
      <div className="relative aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
          onClick={(e) => {
            e.stopPropagation(); // Kartın click event'ini engelle
            navigator.clipboard.writeText(window.location.href);
          }}
        >
          <FaShareAlt className="text-primary" />
        </button>
      </div>

      {/* İçerik Alanı */}
      <div className="p-4">
        {/* Üst Kısım: Marka ve İsim */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-rich-dark line-clamp-1">
            {name}
          </h3>
          <span className="text-sm font-medium text-primary-dark">{brand}</span>
        </div>

        {/* Açıklama */}
        <p className="text-sm text-rich-dark/80 line-clamp-2 mb-4">
          {description}
          <br />
          <br />          
        </p>

        {/* Detay Butonu */}
        <Link
          to={`/products/${id}`}
          onClick={(e) => e.stopPropagation()}
          className="block w-full py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-rich-light transition-colors duration-300 text-center"
        >
          Ürün Detayı
        </Link>
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
  }).isRequired,
};

export default ProductCard;
