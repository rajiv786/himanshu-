import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Api_url } from './helper';
function Experient() {
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState(null);

  useEffect(() => {
    // Fetch uploaded files from the server
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`${Api_url}/Otp/files`);
        setUploadedFiles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFiles();
  }, []);

  const handlePdfChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleUpload = async () => {
	const formData = new FormData();
	formData.append('pdf', pdfFile);
	formData.append('image', imageFile);

	try {
		const response1 = await axios.post(`${Api_url}/Otp/upload`, formData, {
			headers: {
			  'Content-Type': 'multipart/form-data',
			
			  },
		});
		console.log(response1.data)
	  alert('File uploaded successfully!');
	  
	  setImageFile(null);
		
	} catch (error) {
	  console.error(error);
	  alert('File upload failed.');
	}
	};
	const getfiles = async () => {
		try {
		  const response = await axios.get(`${Api_url}/Otp/files/64b665b4e7eef9165dd7be2a`);
		  const { imagePath, pdfPath } = response.data;
	  
		 
	  
		  const imageUrl = `data:image/jpeg;base64,${imagePath}`;
		  const pdfUrl = `data:application/pdf;base64,${pdfPath}`;
	  
		  setUploadedFiles(imageUrl);
		  setPdfFile(pdfUrl);
		  window.open(pdfUrl, '_blank');
		} catch (error) {
		  console.error(error);
		  alert('File fetch failed.');
		}
	  };
	  
	  
	// const getfiles = async () => { 
	// 	try {
	// 		const response = await axios.get(`${Api_url}/Otp/files/64b665b4e7eef9165dd7be2a`, {
	// 			responseType: 'arraybuffer',
	// 			headers: {
	// 				Accept: 'image/png, image/jpeg',
	// 			},
	// 		});
	// 		console.log(response, 'sss')
	// 		const blob = new Blob([response.data], { type: response.headers['content-type'] });
	// 		const url = URL.createObjectURL(blob);
	// 		console.log(url)
	// 	  setUploadedFiles(url);
	// 	}
	// 	catch (error){ 
	// 		console.error(error);
	// 		alert('File upload failed.');
	// 	}
	// }
	const getfiles1 = async () => {
		try {
			const response = await axios.get(`${Api_url}/Otp/file/64b665b4e7eef9165dd7be2a`, { responseType: 'blob' });
			const file = new Blob([response.data], { type: 'application/pdf' });
			const fileUrl = URL.createObjectURL(file);
			console.log(fileUrl)
			setPdfFile(fileUrl);
			window.open(fileUrl, '_blank');
		} catch (error) {
			console.error(error);
		}
	}
  return (
    <div>
      <h1>File Upload</h1>
      <div>
        <label htmlFor="pdf">Upload PDF:</label>
        <input type="file" id="pdf" accept="application/pdf" onChange={handlePdfChange} />
      </div>
      <div>
        <label htmlFor="image">Upload Image:</label>
        <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
      </div>
      <button onClick={handleUpload} disabled={!pdfFile || !imageFile}>
        Upload
      </button>
      <h2>Uploaded Files:</h2>
		  <button onClick={getfiles}>files</button>
		  <img src={uploadedFiles} />
		  <button onClick={getfiles1}>fil1es</button>
    </div>
  );
}

export default Experient;
