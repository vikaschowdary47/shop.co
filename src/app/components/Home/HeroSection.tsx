export default function HeroSection() {
  return (
    <section className="grid sm:grid-cols-3 grid-cols-1">
      <div className="col-span-2 layout-container">
        <h1 className="text-4xl font-bold uppercase">
          FIND CLOTHES <br /> That MATCHES
          <br />
          YOUR STYLE
        </h1>
        <p className="text-[14px] text-gray-500">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black  rounded-[999px] text-white p-3 mt-4 font-[16px] w-[200px]">
          Shop Now
        </button>
        <div className="grid grid-cols-2 flex place-items-center justify-center">
          <div>
            <p>200+</p>
            <p>International brands</p>
          </div>
          <div>
            <p className="font-[24px] font-bold">200+</p>
            <p className="text-[14px] text-gray-500">International brands</p>
          </div>
          <div className="col-span-2">
            <p>200+</p>
            <p>International brands</p>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/banner_mobile.png" className="w-full" />
      </div>
    </section>
  );
}
