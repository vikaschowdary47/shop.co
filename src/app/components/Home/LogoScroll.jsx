const LogoScroll = () => {
  const logos = [
    { brand: "versace", imagePath: "/images/versace.png" },
    { brand: "zara", imagePath: "/images/zara.png" },
    { brand: "gucci", imagePath: "/images/gucci.png" },
    { brand: "prada", imagePath: "/images/prada.png" },
    { brand: "ck", imagePath: "/images/ck.png" },
  ];
  return (
    <div className="bg-black flex items-center  w-dvw min-h-[122px]  layout-container gap-4 flex-wrap justify-evenly md:justify-around lg:justify-between">
      {logos.map((logo) => (
        <img
          src={logo.imagePath}
          key={logo.brand}
          id={logo.brand}
          className="h-[34px] object-contain"
        />
      ))}
    </div>
  );
};

export default LogoScroll;
