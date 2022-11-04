import React, { useState } from "react";
/* import GalleryMobile from "./GalleryMobile"; */
import MobileGallery from "./MobileGallery";
import DesktopGallery from "./DesktopGallery";
import useMediaQuery from "../../hooks/useMediaQuery";



const GalleryContainer = ({ images }) => {
 
  const isMobileOrTablet = useMediaQuery(1024);

  return isMobileOrTablet ? (
    <MobileGallery images={images} />
  ) : (
    <DesktopGallery images={images} />
  );
};

export default GalleryContainer;

