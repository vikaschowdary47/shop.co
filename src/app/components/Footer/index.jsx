const Footer = () => {
  const linkStyle =
    "flex flex-col text-[16px] [&>h4]:uppercase [&>h4]:mb-4 [&>a]:opacity-[60%] [&>a]:mb-3";
  return (
    <div className="layout-container bg-[#F0F0F0] mt-30">
      <div className="relative w-full">
        <div className="pt-60 lg:pt-30 pb-20">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5 mb-5">
            <div className="1">
              <img src="/images/logo.png" alt="shop.co" className="mb-4" />
              <p className="text-[14px] opacity-60">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="social"></div>
            </div>
            <div className={`${linkStyle}`}>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Works</a>
              <a href="#">Career</a>
            </div>
            <div className={`${linkStyle}`}>
              <h4>Help</h4>
              <a href="#">Customer Support</a>
              <a href="#">Delivery Details</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className={`${linkStyle}`}>
              <h4>FAQ</h4>
              <a href="#">Account</a>
              <a href="#">Manage Deliveries</a>
              <a href="#">Orders</a>
              <a href="#">Payments</a>
            </div>
            <div className={`${linkStyle}`}>
              <h4>Resources</h4>
              <a href="#">Free e-books</a>
              <a href="#">Development Tutorial</a>
              <a href="#">How to - Blog</a>
              <a href="#">Youtube Playlist</a>
            </div>
          </div>

          <div className="divide" />
          <div className="flex items-center justify-between mt-4">
            <p>Shop.co © 2000-2021, All rights reserved</p>
            payment
          </div>
        </div>
        <div className="min-h-[180px] bg-black text-white rounded-[20px] p-4 flex items-center justify-between flex-col lg:flex-row absolute top-[-100px] left-0 right-0">
          <h3 className="text-[32px] md:text-[40px] font-bold uppercase mb-4 lg:mb-0">
            stay upto date about
            <br className="hidden md:block" />
            our latest offers
          </h3>
          <div className="min-w-[180px]">
            <div className="flex items-center h-[48px] bg-white rounded-[999px] px-3">
              <img className="" src="/images/email-icon.png" />
              <input
                type="email"
                name="email"
                id="newsletter-email"
                aria-label="email"
                placeholder="Enter your email address"
                className="placeholder-black text-[16px] opacity-40 ml-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="cursor-pointer h-[46px] rounded-[99px] bg-white text-black w-full mt-3">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
