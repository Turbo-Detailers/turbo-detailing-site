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
import mdx2023BroadDashboardDriverSide from "../public/images/details/mdx-2023/mdx-broad-dashboard-driver.jpg";
import mdx2023BroadDashboard from "../public/images/details/mdx-2023/mdx-broad-dashboard-passenger.jpg";
import mdx2023PassengerDoorCloseUp from "../public/images/details/mdx-2023/mdx-passenger-door-close.jpg";
import mdx2023SteeringCloseUp from "../public/images/details/mdx-2023/mdx-steering-close.jpg";

// Mercedes ML350
import ml350CenterConsole from "../public/images/details/ml350/ml350-center-console.jpg";
import ml350Indicator from "../public/images/details/ml350/ml350-indicator.jpg";
import ml350SteeringClose from "../public/images/details/ml350/ml350-steering-close.jpg";

// Audi Q5
import q5 from "../public/images/details/q5-interior/q5_0053.jpg";
import q52 from "../public/images/details/q5-interior/q5_0054.jpg";
import q53 from "../public/images/details/q5-interior/q5_0056.jpg";
import q54 from "../public/images/details/q5-interior/q5_0060.jpg";
import q55 from "../public/images/details/q5-interior/q5_0064.jpg";
import q56 from "../public/images/details/q5-interior/q5_0077.jpg";
import q57 from "../public/images/details/q5-interior/q5_0102.jpg";
import q58 from "../public/images/details/q5-interior/q5_0118.jpg";
import q59 from "../public/images/details/q5-interior/q5_0122.jpg";
import q510 from "../public/images/details/q5-interior/q5_0138.jpg";
import q511 from "../public/images/details/q5-interior/q5_0160.jpg";

// Range Rover Velar
import velar1 from "details/images/velar/DSC_0611.jpg";
import velar2 from "details/images/velar/DSC_0638.jpg";
// import velar3 from "details/images/velar/DSC_0642.jpg";
import velar4 from "details/images/velar/DSC_0673.jpg";
import velar5 from "details/images/velar/DSC_0675.jpg";
import velar6 from "details/images/velar/DSC_0686.jpg";
import velar7 from "details/images/velar/DSC_0712.jpg";
import velar8 from "details/images/velar/DSC_0718.jpg";
import velar9 from "details/images/velar/DSC_0723.jpg";

import { StaticImageData } from "next/image";

import { exoticImages } from "./exotic-images";

type PhotoData = {
  src: string;
  width: number;
  height: number;
};

const q5Images = [q5, q52, q53, q54, q55, q56, q57, q58, q59, q510];
const velarImages = [
  velar1,
  velar2,
  // velar3,
  velar4,
  velar5,
  velar6,
  velar7,
  velar8,
  velar9,
];

export const carouselImages: StaticImageData[] = [
  x5DoorPanelButtons,
  modelYWheelClean,
  a4InteriorWheel,
  mdx2023BroadDashboardDriverSide,
  // modelYFrontSoap,
  a4InteriorDoorPanel,
  ml350Indicator,
  mdx2023SteeringCloseUp,
  modelYRearClean,
  x5Indicator,
  x5DriverSideInstrumentCluster,
  a4SteeringWheel,
  modelYIsometricClean,
  mdx2023PassengerDoorCloseUp,
  a4InteriorDoorPanelSide,
  a4InteriorRear,
  ml350SteeringClose,
  mdx2023BroadDashboard,
  ml350CenterConsole,
  x5FrontSeatsRear,
  q511,
  ...randomizeAmount(q5Images, 5),
  ...randomizeAmount(velarImages, 5),
];

export const allImages = [
  x5DoorPanelButtons,
  modelYWheelClean,
  a4InteriorWheel,
  mdx2023BroadDashboardDriverSide,
  // modelYFrontSoap,
  a4InteriorDoorPanel,
  ml350Indicator,
  mdx2023SteeringCloseUp,
  modelYRearClean,
  x5Indicator,
  x5DriverSideInstrumentCluster,
  a4SteeringWheel,
  modelYIsometricClean,
  mdx2023PassengerDoorCloseUp,
  a4InteriorDoorPanelSide,
  a4InteriorRear,
  ml350SteeringClose,
  mdx2023BroadDashboard,
  ml350CenterConsole,
  x5FrontSeatsRear,
  q511,
  ...randomizeAmount(q5Images, 5),
  ...randomizeAmount(velarImages, 5),
  ...exoticImages,
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

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function randomizeAmount(
  images: StaticImageData[],
  amount: number
): StaticImageData[] {
  images = shuffle(images);
  return images.splice(0, amount);
}

export const photos = shuffle(getPhotosObject(allImages));

export function getShuffledPhotos(): StaticImageData[] {
  return shuffle(getPhotosObject(allImages));
}
