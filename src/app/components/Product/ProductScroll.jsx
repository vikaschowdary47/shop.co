import slugify from "slugify";
import ProductCard from "./ProductCard";

const ProductScroll = () => {
  const products = [
    {
      name: "T-shirt with Tape Details",
      rating: 4.5,
      originalPrice: 120,
      discountedPrice: null,
      imagePath: "/images/products/shirt1.png",
    },
    {
      name: "Skinny fit Jeans",
      rating: 3.5,
      originalPrice: 240,
      discountedPrice: 260,
      imagePath: "/images/products/jeans1.png",
    },
    {
      name: "T-shirt with Tape Details",
      rating: 4.5,
      originalPrice: 120,
      discountedPrice: null,
      imagePath: "/images/products/shirt1.png",
    },
    {
      name: "Skinny fit Jeans",
      rating: 3.5,
      originalPrice: 240,
      discountedPrice: 260,
      imagePath: "/images/products/jeans1.png",
    },
  ];
  return (
    <div className="w-dvw">
      <div className="layout-container">
        <h2>New Arrivals</h2>
        <div className="grid grid-cols-4 flex justify-between gap-4">
          {products.map((product) => (
            <ProductCard {...product} key={slugify(product.name)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductScroll;
