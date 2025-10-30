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
      <h3>{name}</h3>
      <CustomRating />
      {rating}
      {originalPrice}
      {discountedPrice}
    </div>
  );
};

export default ProductCard;
