import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Ram = () => {
  const [files, setFiles] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfArrayBuffer, setPdfArrayBuffer] = useState(null); // State to store the array buffer of the selected PDF

  useEffect(() => {
    axios.get('http://localhost:5000/Otp/filest/64d229135cde1de974da576f').then((response) => {
      setFiles(response.data.ra);
    //   console.log(response.data.ra, 'files');
    });
  }, []);

  useEffect(() => {
    if (selectedFile) {
      axios.get(`http://localhost:5000/Otp/filest/64d229135cde1de974da576f`, { responseType: 'arraybuffer' }).then((response) => {
        setPdfArrayBuffer(response.data);
      });
    }
  }, [selectedFile]);

  const handleFileClick = (filePath) => {
    setSelectedFile(filePath);
    // console.log(filePath, 'filepath');
  };

  return (
    <div>
      <h1>PDF Files</h1>
      <ul>
        {Object.keys(files).map((key) => (
          <li key={key} onClick={() => handleFileClick(files[key])}>
            PDF File {key}
          </li>
        ))}
      </ul>
      {selectedFile && pdfArrayBuffer && (
        <div>
          <h2>Selected PDF File</h2>
          <Document file={{ data: pdfArrayBuffer }}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default Ram;
