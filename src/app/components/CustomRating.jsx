"use client";

// import Rating from "react-rating";
import dynamic from "next/dynamic";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const Rating = dynamic(() => import("react-rating"), {
  ssr: false,
});

const CustomRating = ({ rating }) => {
  return (
    <div>
      <Rating
        // emptySymbol={null}
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
      <p>{rating}/5</p>
    </div>
  );
};

export default CustomRating;
