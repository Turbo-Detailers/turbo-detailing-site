export default function Brands() {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <img
        loading="lazy"
        src="/images/brands/lm.png"
        style={{ filter: "invert()" }}
      ></img>
      <img
        loading="lazy"
        src="/images/brands/carpro.png"
        style={{ filter: "invert()", maxWidth: "30%", objectFit: "contain" }}
      ></img>
    </div>
  );
}
