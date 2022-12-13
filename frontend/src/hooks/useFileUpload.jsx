import { useState } from "react";

import URL_BASE from "../components/global/getUrlBase";

const useFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [urlImageAws, setUrlImageAws] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(null);

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };

  console.log({ selectedFile, isFilePicked, uploadSuccess });

  const handleSubmission = () => {
    console.log("Se disparó el submission");
    const formData = new FormData();
    formData.append("file", selectedFile);

    setUploadSuccess("Cargando imagen...");

    fetch(`${URL_BASE}/s3/subir`, {
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
          setUrlImageAws(data);
          setUploadSuccess("Carga de imagen finalizada");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return {
    selectedFile,
    isFilePicked,
    urlImageAws,
    uploadSuccess,
    handleSubmission,
    changeHandler,
  };
};

export default useFileUpload;
