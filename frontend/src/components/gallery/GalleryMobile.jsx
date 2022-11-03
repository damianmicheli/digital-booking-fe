import React, { useEffect, useState } from "react";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
/* import styles from "./gallery.module.css"; */

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/'

const GalleryMobile = (/* { images } */) => {
  const images = [
    {
        thumbnail: `${PREFIX_URL}4v.jpg`,
        original: `${PREFIX_URL}4v.jpg`,
        embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
        description: 'Render custom slides (such as videos)',
        renderItem: this._renderVideo.bind(this)
      },
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1t.jpg`,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: 'Custom class for slides & thumbnails',
      },
      {
        thumbnail: `${PREFIX_URL}4v.jpg`,
        original: `${PREFIX_URL}4v.jpg`,
        embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
        description: 'Render custom slides (such as videos)',
        renderItem: this._renderVideo.bind(this)
      },
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1t.jpg`,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: 'Custom class for slides & thumbnails',
      },
      {
        thumbnail: `${PREFIX_URL}4v.jpg`,
        original: `${PREFIX_URL}4v.jpg`,
        embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
        description: 'Render custom slides (such as videos)',
        renderItem: this._renderVideo.bind(this)
      }
    
  ];

  const [imagesMobile, setImagesMobile] = useState(null);

  useEffect(() => {
    setImagesMobile(
      images.map((image) => ({
        original: `${image}=w1024`,
        thumbnail: `${image}=w100`,
      }))
    );
    console.log(imagesMobile);
  }, []);

  return images ? <ImageGallery items={imagesMobile} /> : null;
  /* (
    <section className={styles.blockImages}>
      {images ? <ImageGallery items={imagesMobile} /> : null}
    </section>
  ); */
};

export default GalleryMobile;
