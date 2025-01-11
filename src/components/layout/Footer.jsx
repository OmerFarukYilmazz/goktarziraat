import { Link } from "react-router-dom";
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
    <footer className="bg-secondary-bg-light">
      <div className="container mx-auto px-10 pt-16 pb-8">
        {/* Ana Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Hakkımızda */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-light">Göktar Ziraat</h3>
            <p className="leading-relaxed">
              Kaliteli tarım ürünleri ve profesyonel hizmet anlayışıyla 20 yılı
              aşkın süredir sizlerleyiz.
            </p>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">İletişim</h3>
            <div className="space-y-3 [&>div]:flex [&>div]:items-center [&>div]:gap-2">
              <div>
                <FaMapMarkerAlt className="text-primary-light" />
                <p className="hover:text-primary transition-colors">
                  İzmir, Türkiye
                </p>
              </div>
              <div>
                <FaPhone className="text-primary-light " />
                <p className="hover:text-primary transition-colors">
                  +90 123 456 7890
                </p>
              </div>
              <div>
                <FaEnvelope className="text-primary-light" />
                <p className="hover:text-primary transition-colors">
                  info@goktarziraat.com
                </p>
              </div>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Hızlı Linkler</h3>
            <nav className="grid grid-cols-2 gap-2 [&>a]:relative [&>a]:w-fit [&>a]:after:absolute [&>a]:after:bottom-0 [&>a]:after:left-0 [&>a]:after:h-[2px] [&>a]:after:w-0 [&>a]:after:bg-primary [&>a]:after:transition-all [&>a]:after:duration-300 [&>a:hover]:after:w-full">
              <Link to="/">Ana Sayfa</Link>
              <Link to="/products">Ürünler</Link>
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
              <a href="#" className="hover:text-primary-light transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-light transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary-light transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
