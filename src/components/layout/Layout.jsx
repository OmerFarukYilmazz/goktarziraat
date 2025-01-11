import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="font-lora min-h-screen flex flex-col bg-slate-bg-light">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-10 ">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
