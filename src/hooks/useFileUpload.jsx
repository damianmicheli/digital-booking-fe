import { useEffect, useState } from "react";

import URL_BASE from "../components/global/getUrlBase";

const useFileUpload = () => {
  const [urlImagesAws, setUrlImagesAws] = useState([]);
  const [files, setFiles] = useState([]);
  const [fileUploadProgress, setFileUploadProgress] = useState(null);
  const [fileUploadResponse, setFileUploadResponse] = useState(null);
  const [errorImages, setErrorImages] = useState(null);

  const changeHandler = (e) => {
    setFiles(e.target.files);
  };

  const blurHandler = (e) => {
    e.target.files === null && setErrorImages(true);
  };
  console.log(files);

  const uploadImage = async (i, formData) => {
    const response = await fetch(`${URL_BASE}/s3/subir`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      alert("No se pudo generar la url de aws");
    }
    const data = await response.json();
    console.log(typeof data);
    if (data) {
      setUrlImagesAws((urlImagesAws) => [...urlImagesAws, data]);
      return data;
    }
  };

  const handleSubmission = () => {
    console.log("Se disparó el submission");

    setFileUploadProgress(true);
    setFileUploadResponse(null);

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("file", files[i]);
      console.log(files[i]);
      uploadImage(i, formData);
    }
  };

  //console.log({ urlImagesAws });

  useEffect(() => {
    setErrorImages(files === []);
  }, [files]);

  return {
    files,
    fileUploadProgress,
    fileUploadResponse,
    urlImagesAws,
    errorImages,
    setErrorImages,
    setFileUploadProgress,
    setFileUploadResponse,
    handleSubmission,
    changeHandler,
    blurHandler,
  };
};

export default useFileUpload;