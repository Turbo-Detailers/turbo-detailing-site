import Image from "next/image";
import lmLogo from "../public/images/brands/lm.png";
import carproLogo from "../public/images/brands/carpro.png";
import kcLogo from "../public/images/brands/kc.png";
import gyeonLogo from "../public/images/brands/gyeon.png";

export default function Brands() {
  return (
    <div className="flex-row-responsive flex-space-evenly wrap brands">
      <Image
        priority
        src={lmLogo}
        style={{ filter: "invert()", objectFit: "contain" }}
        alt="Luxury Microfiber Logo"
        width={lmLogo.width}
        height={lmLogo.height > 100 ? 100 : lmLogo.height}
      />
      <Image
        priority
        src={carproLogo}
        style={{ filter: "invert()", objectFit: "contain" }}
        alt="CarPro Logo"
        width={carproLogo.width}
        height={carproLogo.height > 100 ? 100 : carproLogo.height}
      />
      <Image
        priority
        src={kcLogo}
        style={{ filter: "invert()", objectFit: "contain" }}
        alt="KochChemie Logo"
        width={kcLogo.width}
        height={kcLogo.height > 100 ? 100 : kcLogo.height}
      />
      <Image
        priority
        src={gyeonLogo}
        style={{ objectFit: "contain" }}
        alt="Gyeon Logo"
        width={gyeonLogo.width}
        height={gyeonLogo.height > 100 ? 100 : gyeonLogo.height}
      />
    </div>
  );
}
