// Audi A4 Imports
import a4InteriorRear from "../public/images/details/a4/a4-interior-rear.jpeg";
import a4InteriorWheel from "../public/images/details/a4/a4-interior-wheel.jpeg";
import a4InteriorDoorPanel from "../public/images/details/a4/a4-interior-door-panel.jpeg";
import a4SteeringWheel from "../public/images/details/a4/a4-steering-wheel.jpeg";
import a4InteriorDoorPanelSide from "../public/images/details/a4/a4-interior-door-panel-side.jpeg";

// Tesla Model Y Imports
import modelYFrontSoap from "../public/images/details/model-y/model-y-front-soap.jpg";
import modelYFrontClean from "../public/images/details/model-y/model-y-front-clean.jpg";
import modelYIsometricClean from "../public/images/details/model-y/model-y-isometric-clean.jpg";
import modelYRearClean from "../public/images/details/model-y/model-y-rear-clean.jpg";
import modelYSideRearClean from "../public/images/details/model-y/model-y-side-rear-clean.jpg";
import modelYWheelClean from "../public/images/details/model-y/model-y-wheel-clean.jpg";

interface LocalPhoto {
  src: string;
  width: number;
  height: number;
}

export const localImages = [
  modelYWheelClean,
  a4InteriorWheel,
  modelYFrontSoap,
  a4InteriorDoorPanel,
  modelYRearClean,
  a4SteeringWheel,
  modelYIsometricClean,
  a4InteriorDoorPanelSide,
  modelYSideRearClean,
  a4InteriorRear,
];

export const photos: LocalPhoto[] = [
  {
    src: modelYWheelClean.src,
    width: modelYWheelClean.width,
    height: modelYWheelClean.height,
  },
  {
    src: a4InteriorWheel.src,
    width: a4InteriorWheel.width,
    height: a4InteriorWheel.height,
  },
  {
    src: modelYSideRearClean.src,
    width: modelYSideRearClean.width,
    height: modelYSideRearClean.height,
  },
  {
    src: a4InteriorDoorPanel.src,
    width: a4InteriorDoorPanel.width,
    height: a4InteriorDoorPanel.height,
  },
  {
    src: modelYFrontClean.src,
    width: modelYFrontClean.width,
    height: modelYFrontClean.height,
  },
  {
    src: a4SteeringWheel.src,
    width: a4SteeringWheel.width,
    height: a4SteeringWheel.height,
  },
  {
    src: modelYIsometricClean.src,
    width: modelYIsometricClean.width,
    height: modelYIsometricClean.height,
  },
  {
    src: a4InteriorDoorPanelSide.src,
    width: a4InteriorDoorPanelSide.width,
    height: a4InteriorDoorPanelSide.height,
  },
  {
    src: modelYFrontSoap.src,
    width: modelYFrontSoap.width,
    height: modelYFrontSoap.height,
  },

  {
    src: modelYRearClean.src,
    width: modelYRearClean.width,
    height: modelYRearClean.height,
  },

  {
    src: a4InteriorRear.src,
    width: a4InteriorRear.width,
    height: a4InteriorRear.height,
  },
];

import carPro from "../public/images/logos/carpro.png";
import luxuryMicrofibers from "../public/images/logos/lm.png";
import kochChemie from "../public/images/logos/kc.png";
import ps from "../public/images/logos/ps.png";

export const brandImages: LocalPhoto[] = [
  {
    src: carPro.src,
    width: carPro.width,
    height: carPro.height,
  },
  {
    src: luxuryMicrofibers.src,
    width: luxuryMicrofibers.width,
    height: luxuryMicrofibers.height,
  },
  {
    src: kochChemie.src,
    width: kochChemie.width,
    height: kochChemie.height,
  },
  {
    src: ps.src,
    width: ps.width,
    height: ps.height,
  },
];