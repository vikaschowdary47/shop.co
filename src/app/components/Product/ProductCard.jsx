import CustomRating from "../CustomRating";

const ProductCard = ({
  imagePath,
  name,
  rating,
  originalPrice,
  discountedPrice,
}) => {
  return (
    <div>
      <img src={imagePath} alt={name} />
      <h3 className="font-bold mt-3 ml-1">{name}</h3>
      <CustomRating rating={rating} />
      <p className="font-bold">
        {discountedPrice ? (
          <>
            ${discountedPrice}
            <del className="ml-2 text-gray-500">${originalPrice}</del>
          </>
        ) : (
          originalPrice
        )}
      </p>
      {/* {originalPrice}
      {discountedPrice} */}
    </div>
  );
};

export default ProductCard;
