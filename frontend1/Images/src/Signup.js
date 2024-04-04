import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Api_url } from './helper';
import CircularProgress from '@mui/material/CircularProgress';
import 'typeface-inter';
import { styled } from '@mui/system';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom/dist/umd/react-router-dom.development';
const CustomButton = styled(Button)`
  &:hover {
    background-color: #05445e; /* or specify the desired background color */
  }
`;
const CenteredContainer = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
  });
  
const Signup = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const mobile = useMediaQuery('(max-width:600px)');
	const [isLoading, setIsLoading] = useState(false);
	const fromReaderup = location.state && location.state.fromReaderup;
	const[Error,setError] = useState('');
  const handleSubmit = async (e) => {
	  e.preventDefault();
	  
	  const email1 = localStorage.setItem('email1', Email);
	  setIsLoading(true);
    try {
      const { data: res } = await axios.post(`${Api_url}/sign/sign1`, { Email});
      // Handle response from the backend
	  
		// console.log(res);
		toast.success('Email Verified!');
		setIsLoading(false);
      navigate('/Otp',{ state: { fromReaderup } })
	} catch (error) {
		setIsLoading(false);
		toast.error('Email Already Exists !');
		setError(error.response.data.error);
     
    }
   

    setEmail('')
  
  };

    const [Email,setEmail] = useState('');
  return (
    <div>
		  <Grid container lg={12} justifyContent="center" alignItems="center" sx={{ backgroundColor: 'skyblue', height: '100vh' }}>
		  <ToastContainer />
		  <Helmet>
		  <meta name="title" content="Sign Up for GorailsTech - Get the Engineering Notes" />
     
         
        <meta name="description" content="Create your Slushie account and become a part of the thriving author community. Sign up today and start sharing your literary works with the world." />
      </Helmet>
    <Paper sx={{ width: mobile?"85%":'478px', height: mobile?"263px":'315px',borderRadius:'26px',justifyContent:'center',display:'flex',alignItems:'center'}}>
      <Grid container lg={11} justifyContent="center" alignItems="center">
        <Grid item lg={12} sx={{textAlign:'center'}}>
        <Typography sx={{fontSize:mobile?"20px":'26px',fontFamily:'Inter',fontWeight:'600'}}>Sign Up with GorailsTech!</Typography>
      </Grid>
						  <Grid item lg={12} xs={8.2} sx={{textAlign:'center'}} >
        <Typography sx={{fontSize:'12px',fontFamily:'Inter',fontWeight:'400' }}>Discover top notes at gorailstech
with just one click!</Typography>
      </Grid>
      <Grid item lg={10} xs={11} sx={{marginTop:'20px'}}>
  <Typography sx={{textAlign:'left', fontSize:'16px', fontWeight:'700', fontFamily:'Inter'}}>Email</Typography>
  <TextField
    required
    fullWidth
    variant="outlined"
  
    placeholder="Enter your email"
    value={Email}
    size="small"
    onChange={(e) => setEmail(e.target.value)}
    sx={{ mb:mobile?"12px": 2, borderRadius: '6px',backgroundColor:  '#F4F1F1', }} 
  />
					  </Grid>
					  <Grid item lg={10} xs={11}>
<CustomButton onClick={handleSubmit}
      type="submit"
      variant="contained"
      sx={{
        mt: 0,
            mb: 0,
            background: '#07b0f5',
            borderRadius:mobile?"8px": '12px',
            textTransform: 'none',
            width: mobile?"100%":'100%',
            height: mobile?"39px":'56px',
            fontSize: mobile?"14px":'20px',
            fontFamily: 'Inter',
            fontWeight: '500'
        
      }}
    >
							  {isLoading ? <CircularProgress style={{ color: "#FFFFFF" }} />: 'Submit'}    
						  </CustomButton>
						  </Grid>
	{Error && <Typography>{Error}</Typography>} 
      </Grid>
				  </Paper>
				
    
</Grid>

    </div>
  )
}

export default Signup