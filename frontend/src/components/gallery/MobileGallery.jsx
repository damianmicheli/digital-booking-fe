import React, { useState, useEffect } from "react";
import "./image-gallery.css";
import ImageGallery from "react-image-gallery";

const MobileGallery = ({ images }) => {
  const [imagesGallery, setImagesGallery] = useState(null);

  useEffect(() => {
    setImagesGallery(
      images.map((image) => ({
        original: `${image.URL}=w100`,
        thumbnail: `${image.URL}=w100`,
      }))
    );
  }, [images]);

  return imagesGallery ? (
    <ImageGallery
      items={imagesGallery}
      thumbnailHeight={"10px"}
      showIndex={true}
      autoPlay={true}
      slideInterval={3000}
      indexSeparator={" | "}
    />
  ) : null;
};

export default MobileGallery;

