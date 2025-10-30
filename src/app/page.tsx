import HeroSection from "./components/Home/HeroSection";
import LogoScroll from "./components/Home/LogoScroll";
import ProductScroll from "./components/Product/ProductScroll";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <LogoScroll />
      <ProductScroll />
    </div>
  );
}
