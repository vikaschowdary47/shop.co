"use client";

// import Rating from "react-rating";
import dynamic from "next/dynamic";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const Rating = dynamic(() => import("react-rating"), {
  ssr: false,
});

const CustomRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      <Rating
        emptySymbol={
          <IoIosStarOutline
            href="#icon-star-empty"
            className="empty-icon"
            color="gold"
          />
        }
        fullSymbol={
          <IoIosStar href="#icon-star-full" className="icon" color="FFC633" />
        }
        initialRating={rating}
        readonly
      />
      <p className="ml-1 mt-[-4px]">{rating}/5</p>
    </div>
  );
};

export default CustomRating;
