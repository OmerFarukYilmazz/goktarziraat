import { Link } from "react-router-dom";
import { contactInfo } from "../../data/contactData";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-secondary-bg-light shadow-inner">
      <div className="container mx-auto px-10 pt-16 pb-16">
        {/* Ana Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Hakkımızda */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-light">
              Göktar Tarım
            </h3>
            <p className="leading-relaxed">
              Kaliteli tarım ürünleri ve profesyonel hizmet anlayışıyla 20 yılı
              aşkın süredir sizlerleyiz.
            </p>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">İletişim</h3>
            <div className="space-y-3 [&>a]:flex [&>a]:items-center [&>a]:gap-2">
              <a
                href={contactInfo.address.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaMapMarkerAlt className="text-primary-light" />
                <p>{contactInfo.address.text}</p>
              </a>
              <a
                href={contactInfo.phone.link}
                className="hover:text-primary transition-colors"
              >
                <FaPhone className="text-primary-light" />
                <p>{contactInfo.phone.text}</p>
              </a>
              <a
                href={contactInfo.email.link}
                className="hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-primary-light" />
                <p>{contactInfo.email.text}</p>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Hızlı Linkler</h3>
            <nav className="grid grid-cols-1 gap-2 [&>a]:relative [&>a]:w-fit [&>a]:after:absolute [&>a]:after:bottom-0 [&>a]:after:left-0 [&>a]:after:h-[2px] [&>a]:after:w-0 [&>a]:after:bg-primary [&>a]:after:transition-all [&>a]:after:duration-300 [&>a:hover]:after:w-full">
              <Link to="/">Ana Sayfa</Link>
              <Link to="/products">Ürünler</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/about">Hakkımızda</Link>
              <Link to="/contact">İletişim</Link>
            </nav>
          </div>

          {/* Bülten */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Bültenimize Katılın</h3>
            <p>En son haberler ve kampanyalardan haberdar olun</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-2 rounded-lg border border-secondary-bg focus:outline-none focus:border-primary bg-rich-light"
              />
              <button className="px-4 py-2 bg-primary-bg-dark text-rich-light rounded-lg hover:bg-primary-dark transition-colors">
                Katıl
              </button>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="mt-12 pt-8 border-t border-secondary-bg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2024 Göktar Ziraat. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              {contactInfo.social.facebook && (
                <a
                  href={contactInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors"
                >
                  <FaFacebook size={20} />
                </a>
              )}
              {contactInfo.social.twitter && (
                <a
                  href={contactInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
              )}
              {contactInfo.social.instagram && (
                <a
                  href={contactInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
