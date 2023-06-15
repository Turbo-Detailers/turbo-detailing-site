export default function Brands() {
  return (
    <div className="flex-row-responsive flex-space-evenly wrap brands">
      <img
        loading="lazy"
        src="/images/brands/lm.png"
        style={{ filter: "invert()" }}
        alt="Luxury Microfiber Logo"
      ></img>
      <img
        loading="lazy"
        src="/images/brands/carpro.png"
        style={{
          filter: "invert()",
          //   maxWidth: "30%",
          //   objectFit: "contain",
          //   width: "300px",
        }}
        alt="CarPro Logo"
      ></img>
      <img
        loading="lazy"
        src="/images/brands/kc.png"
        style={{
          filter: "invert()",
          // width: "300px",
          // objectFit: "contain"
        }}
        alt="KochChemie Logo"
      ></img>
      <img
        loading="lazy"
        src="/images/brands/gyeon.png"
        // style={{ width: "250px", objectFit: "contain" }}
        alt="Gyeon Logo"
      ></img>
    </div>
  );
}
