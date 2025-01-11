import { Link } from "react-router-dom";
import logo from "../../assets/logo_Gok1.png";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="bg-primary-bg-light border-b border-secondary-bg-dark">
      <div className="container mx-auto px-10 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="w-16 h-16">
            <img
              src={logo}
              alt="Göktar Ziraat Logo"
              className="w-full h-full"
            />
          </Link>

          {/* Ana Menü */}
          <div className="flex flex-1 justify-end gap-2">
            <nav className="flex items-center gap-9 text-m font-medium">
              {/* Link stilleri nav'a taşındı */}
              <div className="flex gap-6 [&>a]:relative [&>a]:after:absolute [&>a]:after:bottom-0 [&>a]:after:left-0 [&>a]:after:h-[2px] [&>a]:after:w-0 [&>a]:after:bg-primary [&>a]:after:transition-all [&>a]:after:duration-300 [&>a:hover]:after:w-full [&>a:hover]:text-secondary">
                <Link to="/">Ana Sayfa</Link>
                <Link to="/products">Ürünler</Link>
                <Link to="/about">Hakkımızda</Link>
                <Link to="/contact">İletişim</Link>
              </div>
            </nav>

            {/* E-Mağaza Butonu */}
            <a
              href="https://magaza.goktarziraat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-6 rounded-xl bg-primary-bg-dark text-rich-light text-xm font-medium hover:bg-primary-dark transition-colors flex items-center"
            >
              E-Mağaza
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-secondary-bg-dark transition-colors"
            >
              {darkMode ? (
                <FaSun className="text-rich-light" />
              ) : (
                <FaMoon className="text-rich-dark" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
