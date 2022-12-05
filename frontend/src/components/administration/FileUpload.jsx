import {useState} from 'react';

import URL_BASE from "../global/getUrlBase";

function FileUpload(){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (e) => {
		setSelectedFile(e.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();
		formData.append('file', selectedFile);

		fetch(
			`${URL_BASE}/s3/subir`,
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => {
				return response.json()})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};


	return{
		selectedFile,
		isFilePicked,
		handleSubmission,
		changeHandler
	}
};

export default FileUpload;