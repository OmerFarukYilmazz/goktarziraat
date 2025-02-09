import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import { useEffect } from "react";
import { loadInitialData } from "./utils/loadInitialData";

function App() {
  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products/:category/detail/:id"
          element={<ProductDetailPage />}
        />
        <Route
          path="/products/:category/:subcategory/detail/:id"
          element={<ProductDetailPage />}
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route
          path="/products/:category/:subcategory"
          element={<ProductsPage />}
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <WhatsAppButton />
    </Layout>
  );
}

export default App;
