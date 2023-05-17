// Audi A4 Imports
import a4InteriorRear from "../public/images/details/a4/a4-interior-rear.jpeg";
import a4InteriorWheel from "../public/images/details/a4/a4-interior-wheel.jpeg";
import a4InteriorDoorPanel from "../public/images/details/a4/a4-interior-door-panel.jpeg";
import a4SteeringWheel from "../public/images/details/a4/a4-steering-wheel.jpeg";
import a4InteriorDoorPanelSide from "../public/images/details/a4/a4-interior-door-panel-side.jpeg";

// Tesla Model Y Imports
import modelYFrontSoap from "../public/images/details/model-y-exterior/model-y-front-soap.jpg";
import modelYFrontClean from "../public/images/details/model-y-exterior/model-y-front-clean.jpg";
import modelYIsometricClean from "../public/images/details/model-y-exterior/model-y-isometric-clean.jpg";
import modelYRearClean from "../public/images/details/model-y-exterior/model-y-rear-clean.jpg";
import modelYSideRearClean from "../public/images/details/model-y-exterior/model-y-side-rear-clean.jpg";
import modelYWheelClean from "../public/images/details/model-y-exterior/model-y-wheel-clean.jpg";

// BMW X5 Imports
import x5DoorPanelButtons from "../public/images/details/x5-interior/x5-door-panel-buttons.jpg";
import x5DriverSideInstrumentCluster from "../public/images/details/x5-interior/x5-driver-side-instrument-cluster.jpg";
import x5FrontSeatsRear from "../public/images/details/x5-interior/x5-front-seats-rear.jpg";
import x5Indicator from "../public/images/details/x5-interior/x5-indicator.jpg";

// 2023 Acura MDX
import mdx2023BroadDashboardDriverSide from "../public/images/details/mdx-2023/mdx-broad-dashboard-driver-side.jpg";
import mdx2023BroadDashboard from "../public/images/details/mdx-2023/mdx-broad-dashboard.jpg";
import mdx2023PassengerDoorCloseUp from "../public/images/details/mdx-2023/mdx-passenger-door-close-up.jpg";
import mdx2023SteeringCloseUp from "../public/images/details/mdx-2023/mdx-steering-close-up.jpg";

import { StaticImageData } from "next/image";

type PhotoData = {
  src: string;
  width: number;
  height: number;
};

export const localImages = [
  x5DoorPanelButtons,
  modelYWheelClean,
  a4InteriorWheel,
  mdx2023BroadDashboardDriverSide,
  modelYFrontSoap,
  a4InteriorDoorPanel,
  mdx2023SteeringCloseUp,
  modelYRearClean,
  a4SteeringWheel,
  modelYIsometricClean,
  mdx2023PassengerDoorCloseUp,
  a4InteriorDoorPanelSide,
  modelYSideRearClean,
  a4InteriorRear,
  mdx2023BroadDashboard,
];

function getPhotosObject(images: StaticImageData[]): PhotoData[] {
  var photosObject: PhotoData[] = [];

  for (var i = 0; i < images.length; i++) {
    photosObject.push({
      src: images[i].src,
      width: images[i].width,
      height: images[i].height,
    });
  }

  return photosObject;
}

export const photos = getPhotosObject(localImages);

// export const photos: PhotoData[] = [
//   {
//     src: x5DoorPanelButtons.src,
//     width: x5DoorPanelButtons.width,
//     height: x5DoorPanelButtons.height,
//   },
//   {
//     src: modelYWheelClean.src,
//     width: modelYWheelClean.width,
//     height: modelYWheelClean.height,
//   },

//   {
//     src: a4InteriorWheel.src,
//     width: a4InteriorWheel.width,
//     height: a4InteriorWheel.height,
//   },
//   {
//     src: x5FrontSeatsRear.src,
//     width: x5FrontSeatsRear.width,
//     height: x5FrontSeatsRear.height,
//   },
//   {
//     src: modelYSideRearClean.src,
//     width: modelYSideRearClean.width,
//     height: modelYSideRearClean.height,
//   },

//   {
//     src: x5Indicator.src,
//     width: x5Indicator.width,
//     height: x5Indicator.height,
//   },
//   {
//     src: a4InteriorDoorPanel.src,
//     width: a4InteriorDoorPanel.width,
//     height: a4InteriorDoorPanel.height,
//   },

//   {
//     src: modelYFrontClean.src,
//     width: modelYFrontClean.width,
//     height: modelYFrontClean.height,
//   },
//   {
//     src: a4SteeringWheel.src,
//     width: a4SteeringWheel.width,
//     height: a4SteeringWheel.height,
//   },
//   {
//     src: modelYIsometricClean.src,
//     width: modelYIsometricClean.width,
//     height: modelYIsometricClean.height,
//   },

//   {
//     src: a4InteriorDoorPanelSide.src,
//     width: a4InteriorDoorPanelSide.width,
//     height: a4InteriorDoorPanelSide.height,
//   },
//   {
//     src: modelYFrontSoap.src,
//     width: modelYFrontSoap.width,
//     height: modelYFrontSoap.height,
//   },

//   {
//     src: modelYRearClean.src,
//     width: modelYRearClean.width,
//     height: modelYRearClean.height,
//   },

//   {
//     src: a4InteriorRear.src,
//     width: a4InteriorRear.width,
//     height: a4InteriorRear.height,
//   },
//   {
//     src: x5DriverSideInstrumentCluster.src,
//     width: x5DriverSideInstrumentCluster.width,
//     height: x5DriverSideInstrumentCluster.height,
//   },
// ];
