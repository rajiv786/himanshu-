import { Password } from '@mui/icons-material';
import { Typography, Grid, Paper,  Button } from '@mui/material';
import { TextField, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate , useLocation} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import {  FormControlLabel, Checkbox } from '@mui/material';
import 'typeface-inter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Api_url } from './helper';
import { styled } from '@mui/system';
import {  Link,  } from 'react-router-dom';
import {useMediaQuery} from '@mui/material';
const CustomButton = styled(Button)`
  &:hover {
    background-color: #05445e; /* or specify the desired background color */
  }
`;
const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const mobile = useMediaQuery('(max-width:600px)');
	const fromReaderup = location.state && location.state.fromReaderup;
	const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
	  e.preventDefault();
	  setIsLoading(true);
    try {
      const { data: res } = await axios.post(`${Api_url}/Login/Login1`, { Email,Password});
      // Handle response from the backend
    //   console.log(res);
		localStorage.setItem("token", res.data);
		toast.success('One More Step to Get Out for Slush');
		setIsLoading(false);
		if (location.state && location.state.fromSignup) {
			navigate('/Welcome', { state: { fromReaderup } }); // Redirect to the home page if coming from signup
		  } else {
			navigate('/home'); // Redirect to the welcome page if not from signup
		  }
    } catch (error) {
		console.error(error);
		
		setIsLoading(false);
		toast.error('Invalid Email and Password!');
    }
  
  };
  
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
  
  return (
    <div>
     <Grid container lg={12} justifyContent="center" alignItems="center" sx={{ backgroundColor: 'skyblue', height: '100vh' }}>
	 <ToastContainer />
 
    <Paper sx={{ width: mobile?"85%":'478px', height: mobile?'359px':'400px', borderRadius: mobile?"16px":'26px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
      <Grid container lg={12} justifyContent="center" alignItems="center">
        <Grid item lg={10} xs={12} sx={{ textAlign: 'center' ,}}>
          <Typography sx={{ fontSize: mobile?"20px":'26px', fontFamily: 'Inter', fontWeight: '600', marginTop: '10px' }}>Login</Typography>
        </Grid>
        <Grid item lg={10} xs={8.2} sx={{ textAlign: 'center',marginBottom:'16px' }}>
          <Typography sx={{ fontSize:mobile?"12px": '12px', fontFamily: 'Inter', fontWeight: '400' }}>Discover top notes at gorailstech
with just one click!</Typography>
        </Grid>
    
        <Grid item lg={10} xs={11} >
          <Typography sx={{ textAlign: 'left', fontSize:mobile?"14px": '16px', fontWeight: '700', fontFamily: 'Inter' }}>Email</Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Enter your email"
            value={Email}
            size="small"
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: mobile?"12px":2, borderRadius: '6px', backgroundColor: '#F4F1F1',border:'1px solid #1E1E1E' }}
          />
        </Grid>
        <Grid item lg={10} xs={11}>
          <Typography sx={{ textAlign: 'left', fontSize: mobile?"14px":'16px', fontWeight: '700', fontFamily: 'Inter' }}>Password</Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Enter password"
            value={Password}
            size="small"
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 0, borderRadius: '6px', backgroundColor: '#F4F1F1',border:'1px solid #1E1E1E' }}
          />
        </Grid>
			
        <Grid item lg={10} xs={11} sx={{textAlign:'right'}} >
<Button

  sx={{
    mt: 0,
    mb:mobile?"0px": 2,
  
    borderRadius: '12px',
    textTransform: 'none',

    fontSize: '12px',
    fontFamily:'Inter',
    fontWeight:'400',color:'#07b0f5'
  }}
  component={Link}  
      to="/Forget" 
>
Forgot Password?
</Button>
					  </Grid>
				
        
  

<Grid item lg={10} xs={11} sx={{marginTop:mobile?"12px":'0px'}}>

        <CustomButton onClick={handleSubmit}
          type="submit"
          variant="contained"
          sx={{
            mt: 0,
            mb: 0,
            background: '#07b0f5',
            borderRadius:mobile?"8px": '12px',
            textTransform: 'none',
            width: mobile?"100%":'400px',
            height: mobile?"39px":'56px',
            fontSize: mobile?"14px":'20px',
            fontFamily: 'Inter',
            fontWeight: '500'
          }}
        >
          {isLoading ? <CircularProgress style={{ color: "#FFFFFF" }} />: 'Submit'}      
        </CustomButton>
     
					  </Grid>
					  <Grid item lg={10} xs={11} sx={{marginTop:mobile?"10px":'10px'}} >
					  <Typography sx={{ textAlign: 'center', fontSize: mobile?"12px":'12px', fontWeight: '400', fontFamily: 'Inter',fontWeight:'500',color:'#5B5A5A' }}>Don't have an account?<Link to='/' style={{textDecoration:'none',color:'#07b0f5',fontWeight:600}}>Sign Up</Link></Typography>		  
	   </Grid>
         </Grid>
        
    </Paper>
   
</Grid>

    </div>
  );
};

export default Login;