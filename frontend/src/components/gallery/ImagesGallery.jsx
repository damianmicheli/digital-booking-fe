import React from "react";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const ImagesGallery = () => {
  const [images, setImages] = React.useState(null);

  const arrayImages = [
    {
      original:
        "https://images.pexels.com/photos/5661016/pexels-photo-5661016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      thumbnail:
        "https://images.pexels.com/photos/5661016/pexels-photo-5661016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      original:
        "https://images.pexels.com/photos/10366181/pexels-photo-10366181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      thumbnail:
        "https://images.pexels.com/photos/10366181/pexels-photo-10366181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      original:
        "https://images.pexels.com/photos/2764182/pexels-photo-2764182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      thumbnail:
        "https://images.pexels.com/photos/2764182/pexels-photo-2764182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      original:
        "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      thumbnail:
        "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      original:
        "https://images.pexels.com/photos/6908372/pexels-photo-6908372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      thumbnail:
        "https://images.pexels.com/photos/6908372/pexels-photo-6908372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  React.useEffect(() => {
    setImages(
      arrayImages.map((image) => ({
        original: `${image.original}=w100`,
        thumbnail: `${image.thumbnail}=w100`,
      }))
    );
  }, []);

  return images ? (
    <ImageGallery
      items={images}
      thumbnailHeight={"10"}
      showIndex={true}
      autoPlay={true}
    />
  ) : null;
};

export default ImagesGallery;

/* React.useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
      const response = await axios.get(
        "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
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
