import slugify from "slugify";
import { products } from "../../constant";
import ProductCard from "../Product/ProductCard";
import Filter from "./Filter";

const index = () => {
  return (
    <div>
      <div className="layout-container">
        <Filter />
        <div>
          <h1>Casual</h1>
          <div className="grid grid-cols-3 gap-4">
            {products.map((product, i) => (
              <ProductCard {...product} key={slugify(product.name) + i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
