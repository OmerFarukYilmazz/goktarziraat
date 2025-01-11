import HeroSection from "../components/home/HeroSection";
import PopularProducts from "../components/home/PopularProducts";
import FeaturesSection from "../components/home/FeaturesSection";
import CategoriesSection from "../components/home/CategoriesSection";
import VideoSection from "../components/home/VideoSection";
import BlogSection from "../components/home/BlogSection";
import PartnersSection from "../components/home/PartnersSection";

function Home() {
  return (
    <>
      <HeroSection />
      <PopularProducts />
      <FeaturesSection />
      <CategoriesSection />
      <VideoSection />
      <BlogSection />
      <PartnersSection />
    </>
  );
}

export default Home;
