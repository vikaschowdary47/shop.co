import HeroSection from "./components/Home/HeroSection";
import LogoScroll from "./components/Home/LogoScroll";

import ProductScroll from "./components/Product/ProductScroll";
import BrowseCard from "./components/Home/BrowseCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <LogoScroll />
      <ProductScroll heading="New Arrivals" linkToNextPage="/page" />
      <div className="layout-container">
        <div className="h-[0.2px] bg-black w-full" />
      </div>
      <ProductScroll heading="Top Selling" linkToNextPage="/page" />
      <BrowseCard />
      <Footer />
    </div>
  );
}
