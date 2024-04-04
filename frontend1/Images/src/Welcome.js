import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import React, { useState,useEffect } from 'react';
import jwt_decode from "jwt-decode";
import Image from 'mui-image';
import logo from './Images/logo.png'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from '@mui/system';
import 'typeface-inter';
import {useMediaQuery} from '@mui/material';
import { Api_url } from './helper';
const CustomButton = styled(Button)`
  &:hover {
    background-color: #05445e; /* or specify the desired background color */
  }
`;
const Welcome = () => {
	const [userData, setUserData] = useState(null);
	const mobile = useMediaQuery('(max-width:600px)');
	const [error, setError] = useState('');
	const location = useLocation();
	const fromReaderup = location.state && location.state.fromReaderup;
  const navigate = useNavigate();
    useEffect(() => {// sbse phle useeffect hi call hoyega
        const token = localStorage.getItem("token");
        if (token) {
          try {
            const decoded = jwt_decode(token);
          
            setUserData(decoded);
          } catch (error) {
            console.error(error);
          }
        } else {
          navigate('/landing');
        }
    
        // Fetch user data from the backend API
        fetchUserData();
      }, []);
      const fetchUserData = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            setError('Token not found.');
            return;
          }
      
          const decoded = jwt_decode(token);
          const userId = decoded._id;
      
          const response = await fetch(`${Api_url}/sign/user/${userId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
           
          setUserData(data);
        } else {
          // Handle error response
          const errorData = await response.json();
          setError(errorData.error);
        }
      } catch (error) {
        console.error(error);
        setError('Failed to fetch user data.');
      }
    };
    
  
    if (!userData) {
      return <div>Loading...</div>;
    }
    const handleSubmit = async (e) => {

		e.preventDefault();
		navigate('/Selected',{ state: { fromReaderup } })
		
    }

   
  return (
    <div>
		  <Grid container lg={12} justifyContent="center" alignItems="center" sx={{ backgroundColor:'skyblue',height:'100vh'}}>
<Grid item lg={12} sx={{justifyContent:'center',display:'flex',alignItems:'center'}}>
    <Paper sx={{ width: mobile?"85%":'432px', height: '368px',borderRadius:'26px',justifyContent:'center',display:'flex',alignItems:'center'}}>
      <Grid container lg={12} justifyContent="center" alignItems="center">
        
      <Grid item lg={12}  sx={{textAlign:'center',marginTop:'16px',marginBottom:'16px'}}>
	  <Image
      Duration={0}
      src={logo}
      style={{
       
        width: '73px',
		  height: '73px',
		borderRadius:'73px',
        transitionDuration: '0',
        animation: '0',
      }}
    />
      </Grid>
      <Grid item lg={12} xs={12} sx={{textAlign:'center'}}>
        <Typography sx={{fontSize:mobile?"20px":'26px',fontFamily:'Inter',fontWeight:'600',color:'#1E1E1E'}}> Hi {location.state && location.state.fromReaderup ? 'Student' : 'Teacher'}{' '},</Typography>
      </Grid>
      <Grid item lg={7.8} xs={8.5} sx={{textAlign:'center',}}>
        <Typography sx={{fontSize:mobile?"12px":'16px',fontFamily:'Inter',fontWeight:'500',color:'#1E1E1E'}}>Welcome to the GorailsTech community. We are excited to give you the best of our platform.<br/>
<br/>Let’s get to know you a little more!</Typography>
      </Grid>

      <Grid item lg={9} sx={{marginTop:'20px'}}>

<CustomButton onClick={handleSubmit}
  type="submit"
  variant="contained"
  sx={{
    mt: 0,
    mb: 0,
    background: '#07b0f5',
	borderRadius:mobile?"8px": '12px',
    textTransform: 'none',
	width: mobile?"36.5vh":'340px',
	height: mobile?"39px":'56px',
	fontSize: mobile?"14px":'20px',
    fontFamily: 'Inter',
    fontWeight: '500'
  }}
>
  Next
</CustomButton>

</Grid>

      </Grid>
    </Paper>
    </Grid>
</Grid>

    </div>
  )
}

export default Welcome