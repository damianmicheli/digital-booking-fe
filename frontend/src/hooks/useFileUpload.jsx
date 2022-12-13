import { useState } from "react";

import URL_BASE from "../components/global/getUrlBase";

const useFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [urlImageAws, setUrlImageAws] = useState("");

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };

  console.log({ selectedFile, isFilePicked });

  const handleSubmission = () => {
	console.log("Se disparó el submission");
    const formData = new FormData();
    formData.append("file", selectedFile);

    fetch(`${URL_BASE}/s3/subir`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          alert("No se pudo generar la url de aws");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          setUrlImageAws(data);
          return data;
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
    handleSubmission,
    changeHandler,
  };
};

export default useFileUpload;
