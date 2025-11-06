import slugify from "slugify";
import { products } from "../../constant";
import ProductCard from "../Product/ProductCard";

const index = () => {
  return (
    <div>
      <div className="layout-container"></div>
      <h1>Casual</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, i) => (
          <ProductCard {...product} key={slugify(product.name) + i} />
        ))}
      </div>
    </div>
  );
};

export default index;
