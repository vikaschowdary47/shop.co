"use client";

import slugify from "slugify";
import ProductCard from "./ProductCard";
import { useRouter } from "next/navigation";

const ProductScroll = ({ heading, linkToNextPage }) => {
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

  const router = useRouter();
  return (
    <div className="w-dvw">
      <div className="layout-container">
        {heading && (
          <h2 className="text-center font-bold uppercase text-4xl mt-6 mb-8">
            {heading}
          </h2>
        )}
        <div
          className="flex space-x-4 overflow-x-auto py-4
 lg:grid grid-cols-4  justify-between gap-4"
        >
          {products.map((product, i) => (
            <ProductCard {...product} key={slugify(product.name) + i} />
          ))}
        </div>
        {linkToNextPage && (
          <div className="flex-center my-10">
            <button
              onClick={() => router.push(linkToNextPage)}
              className="w-[250px] h-[52px] rounded-full border-1"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductScroll;
