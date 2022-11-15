import React, { useState, useEffect } from "react";
import "./image-gallery.css";
import ImageGallery from "react-image-gallery";

const MobileGallery = ({ images }) => {
  const [imagesGallery, setImagesGallery] = useState(null);

  useEffect(() => {
    setImagesGallery(
      images && images.map((image) => ({
        original: `${image.url ? image.url : "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/placeholder.jpeg"}`,
        thumbnail: `${image ? image.url : "https://0521ptc3n1-grupo4-img.s3.us-east-2.amazonaws.com/categorias/placeholder.jpeg"}`,
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

