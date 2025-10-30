"use client";

// import Rating from "react-rating";
import dynamic from "next/dynamic";
import { IoIosStarOutline } from "react-icons/io";

const Rating = dynamic(() => import("react-rating"), {
  ssr: false,
});

const SVGIcon = (props) => (
  <svg className={props.className} pointerEvents="none">
    <use xlinkHref={props.href} />
  </svg>
);

const CustomRating = () => {
  return (
    <div>
      <Rating
        emptySymbol={
          <IoIosStarOutline href="#icon-star-empty" className="icon" />
        }
        fullSymbol={
          <IoIosStarOutline href="#icon-star-full" className="icon" />
        }
        initialRating={2.4}
        readonly
      />
    </div>
  );
};

export default CustomRating;
