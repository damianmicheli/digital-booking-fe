import React, { useState } from "react";
/* import GalleryMobile from "./GalleryMobile"; */
import ImagesGallery from "./ImagesGallery";
import GalleryDesktop from "./GalleryDesktop";
import useMediaQuery from "../../hooks/useMediaQuery";



const GalleryContainer = ({ images }) => {
 
  const isMobileOrTablet = useMediaQuery(1024);

  return isMobileOrTablet ? (
    <ImagesGallery />
  ) : (
    <GalleryDesktop images={images} />
  );
};

export default GalleryContainer;

