import React, { useState } from 'react';
import axios from 'axios';
import {Api_url} from './helper';
const PDFToTextConverter = () => {
	const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState('');

  

	const handleUpload = async () => {
		// console.log('lkl')
    if (!file) {
      return;
    }

    try {
      const response = await axios.get(`${Api_url}/Otp/files`, {
        headers: { 'Content-Type': 'multipart/form-data' },
	  });
		// console.log(response.data)
      setExtractedText(response.data.text);
    } catch (error) {
      console.error('Error uploading PDF:', error);
    }
  };
  

  return (
    <div>
     
      <button onClick={handleUpload}>Upload and Extract</button>
      <div>
			  <h2>Extracted Text:</h2>
			<div style={{background:'red'}}>
				  <pre style={{ textAlign: 'center', fontSize: '14px',color:'white' }}>{extractedText}</pre>
				  </div>  
      </div>
    </div>
  );
};

export default PDFToTextConverter;
