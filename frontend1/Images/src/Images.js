import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Api_url } from './helper';

const Images = () => {
  const [images, setImages] = useState([]);
  const [extractedText, setExtractedText] = useState('');
  useEffect(() => {
    axios.get(`${Api_url}/Otp/api/images`).then((response) => {
    //   console.log(response.data);
      setImages(response.data);
    });
  }, []);
  const handleImageClick = (fileId) => {
    // Send the fileId to the backend using a GET request
	window.location.href = `/file-viewer?fileId=${fileId}`;
	};
	

  return (
    <div>
      <h1>Images Grid</h1>
      <div className="grid">
        {images.map((image) => (
          <div key={image._id} className="image-container">
				<img src={`${image.imageData}`} alt={image.pdfName} width='100px' height='100px'
					onClick={() => handleImageClick(image._id)}
				/>
				
          </div>
		))}
			  <h2>Extracted Text:</h2>
			<div style={{background:'red'}}>
				  <pre style={{ textAlign: 'center', fontSize: '14px',color:'white' }}>{extractedText}</pre>
				  </div> 
      </div>
    </div>
  );
}

export default Images;
