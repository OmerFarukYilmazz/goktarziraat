import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import CategoriesSection from "../components/home/CategoriesSection";
import PopularProducts from "../components/home/PopularProducts";
import VideoSection from "../components/home/VideoSection";
import BlogSection from "../components/home/BlogSection";
import PartnersSection from "../components/home/PartnersSection";

function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <PopularProducts />
      <VideoSection />
      <BlogSection />
      <PartnersSection />
    </div>
  );
}

export default HomePage;
