import React, { useState, useEffect } from "react";
/* import axios from "axios"; */
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
  }, []);

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

/* React.useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
      const response = await axios.get(
        "(endpoint)"
      );
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(
          response.data.map((url) => ({
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`,
          }))
          
        );
        console.log(response.data);
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []); */
