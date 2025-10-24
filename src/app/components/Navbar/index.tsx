import { FaCartPlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 0">
      <img src="/images/logo.png" />
      <div className="display-none">
        <ul className="flex items-center">
          <li>Shop</li>
          <li>
            <a href="#">On Sale</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
        </ul>
      </div>
      <div className="display-none rounded-[999px] border-1 flex items-center p-1">
        <IoSearchOutline className="h-[24] w-[24] mr-2" />
        <input
          className="border-0 focus-visible:ring-0"
          placeholder="Search for products..."
        />
      </div>
      <div className="flex items-center">
        <FaCartPlus className="h-[24] w-[24] mr-2" />
        <CgProfile className="h-[24] w-[24]" />
      </div>
    </div>
  );
};

export default Navbar;
