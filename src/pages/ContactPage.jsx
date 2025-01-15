import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { contactInfo } from "../data/contactData";

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section - container kaldırıldı */}
      <div className="relative bg-gradient-to-br from-secondary-light to-primary-dark py-12 shadow-md rounded-xl">
        <div className="absolute inset-0 bg-[url('/images/patterns/dots.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              İletişim
            </h1>
            <p className="text-lg text-white/80">
              Sorularınız için bize ulaşın, en kısa sürede dönüş yapalım.
            </p>
          </div>
        </div>
      </div>

      {/* İçerik Bölümü */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* İletişim Formu */}
            <div className="bg-rich-bg-light p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Bize Ulaşın</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-xl border border-secondary-bg focus:outline-none focus:border-primary bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-xl border border-secondary-bg focus:outline-none focus:border-primary bg-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Konu</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-xl border border-secondary-bg focus:outline-none focus:border-primary bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mesaj
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 rounded-xl border border-secondary-bg focus:outline-none focus:border-primary bg-white resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
                >
                  Gönder
                </button>
              </form>
            </div>

            {/* İletişim Bilgileri */}
            <div className="space-y-8">
              {/* Bilgi Kartları */}
              <div className="space-y-4">
                <a
                  href={contactInfo.address.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-rich-bg-light rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <FaMapMarkerAlt className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Adres</h3>
                    <p className="text-rich-dark/80">
                      {contactInfo.address.text}
                    </p>
                  </div>
                </a>

                <a
                  href={contactInfo.phone.link}
                  className="flex items-start gap-4 p-6 bg-rich-bg-light rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <FaPhone className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telefon</h3>
                    <p className="text-rich-dark/80">
                      {contactInfo.phone.text}
                    </p>
                  </div>
                </a>

                <a
                  href={contactInfo.email.link}
                  className="flex items-start gap-4 p-6 bg-rich-bg-light rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <FaEnvelope className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">E-posta</h3>
                    <p className="text-rich-dark/80">
                      {contactInfo.email.text}
                    </p>
                  </div>
                </a>
              </div>

              {/* Sosyal Medya */}
              <div>
                <h3 className="font-bold mb-4">Sosyal Medya</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/goktartarim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-bg rounded-lg hover:bg-primary-bg/80 transition-colors"
                  >
                    <FaFacebook className="text-2xl text-primary" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-bg rounded-lg hover:bg-primary-bg/80 transition-colors"
                  >
                    <FaTwitter className="text-2xl text-primary" />
                  </a>

                  <a
                    href="https://www.instagram.com/goktartarim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-bg rounded-lg hover:bg-primary-bg/80 transition-colors"
                  >
                    <FaInstagram className="text-2xl text-primary" />
                  </a>
                </div>
              </div>

              {/* Harita */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.2081523650713!2d30.591374!3d37.45580699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c4413bd70619bf%3A0x7f628921f4d24136!2sG%C3%96KTAR%20TARIM!5e0!3m2!1str!2str!4v1736874292185!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
