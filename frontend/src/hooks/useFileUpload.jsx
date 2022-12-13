import { useState } from "react";

import URL_BASE from "../components/global/getUrlBase";

const useFileUpload = () => {
  // const [selectedFile, setSelectedFile] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);
  const [urlImagesAws, setUrlImagesAws] = useState([]);
  // const [uploadSuccess, setUploadSuccess] = useState(null);
  const [files, setFiles] = useState("");
  const [fileUploadProgress, setFileUploadProgress] = useState(false);
  //for displaying response message
  const [fileUploadResponse, setFileUploadResponse] = useState(null);

  const changeHandler = (e) => {
    setFiles(e.target.files);
  };

  console.log(files);

  const formData = new FormData();

  const uploadImage = async (i) => {
    const response = await fetch(`${URL_BASE}/s3/subir`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      alert("No se pudo generar la url de aws");
    } 
    const data = await response.json();
    if (data) {
      setUrlImagesAws([...urlImagesAws, data]);
      console.log("se cargó imagen " + i);
      //setUploadSuccess("Carga de imagen finalizada");
    }
  };

  const handleSubmission = () => {
    console.log("Se disparó el submission");

    setFileUploadProgress(true);
    setFileUploadResponse(null);

    //setUploadSuccess("Cargando imagen...");

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
      uploadImage(i);
    }
  };

  return {
    files,
    fileUploadProgress,
    fileUploadResponse,
    urlImagesAws,
    handleSubmission,
    changeHandler,
  };
};

export default useFileUpload;

/* const uploadImage = async (i) => {
    await fetch(`${URL_BASE}/s3/subir`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          alert("No se pudo generar la url de aws");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        if (data) {
          setUrlImagesAws([...urlImagesAws, data]);
          console.log("se cargó imagen " + i);
          //setUploadSuccess("Carga de imagen finalizada");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }; */
