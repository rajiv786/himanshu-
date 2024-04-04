import React from 'react';
import './Testing.css'; // Make sure to import your CSS file
import { useMediaQuery } from '@mui/material';
const YourComponent = () => {
	const mobile = useMediaQuery('(max-width:600px)');
  return (
    
      <div className="card">
        <div className="wrapper">
          <img
            src={mobile?'https://drive.google.com/uc?export=view&id=1n_RLLtUwrkcCwcy-7Ayg-aDOC10Lj6xA':'https://drive.google.com/uc?export=view&id=1EmJ6pv2tSP2sVGyGNjRPZlDVma2F0w6L'}
            className="cover-image"
            alt="Cover"
          />
        </div>
        <img
          src="https://drive.google.com/uc?export=view&id=1NTn22JwHq-e2MASWfUruErpEbAyAcLMg"
          className="title"
			  alt="Title"
			  width= {mobile ? "" : "317px"}
		  height={mobile ? "" : "439px"}
        />
        <img
          src="https://drive.google.com/uc?export=view&id="
          className="character"
          alt="Character"
        />
      </div>
   
  );
};

export default YourComponent;
