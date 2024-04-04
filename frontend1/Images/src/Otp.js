import React, { useState,useEffect } from 'react';
import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { Api_url } from './helper';
import {useMediaQuery} from '@mui/material';
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import 'typeface-inter';
import { useLocation } from 'react-router-dom/dist/umd/react-router-dom.development';
const CustomButton = styled(Button)`
  &:hover {
    background-color: #05445e; /* or specify the desired background color */
  }
`;
const Otp = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const fromReaderup = location.state && location.state.fromReaderup;
	const mobile = useMediaQuery('(max-width:600px)');
  const handleSubmit = async (e) => {
	  e.preventDefault();
	  setIsLoading(true);
    try {
      const { data: res } = await axios.post(`${Api_url}/Otp/Otp1`, { Otp});
      // Handle response from the backend
		// console.log(res);
		setIsLoading(false);
      navigate('/Entries',{ state: { fromReaderup } })
	} catch (error) {
		setIsLoading(false);
      console.error(error);
    }
   

   setOtp('');
  
	};
	const gotoLogin = () => { 
		navigate('/signup')
	}

    const [Otp,setOtp] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [remainingTime, setRemainingTime] = useState(30);

  useEffect(() => {
    let interval = null;

    if (remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setIsButtonDisabled(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [remainingTime]);

  const handleResendClick = async (e)=> {
    setRemainingTime(30);
	  setIsButtonDisabled(true);
	  const Email = localStorage.getItem('email1');
	  try {
		const { data: res } = await axios.post(`${Api_url}/sign/sign1`, { Email});
		// Handle response from the backend
		//   console.log(res);
	  } catch (error) {
		  
		console.error(error);
	  }
  };
  return (
    <div>
     <Grid container lg={12} justifyContent="center" alignItems="center" sx={{backgroundColor:'skyblue',     height: '100vh'}}>
<Grid item lg={12} sx={{justifyContent:'center',display:'flex',alignItems:'center'}}>
    <Paper sx={{ width: mobile?"85%":'478px', height: mobile?'288px':'336px',borderRadius:'26px',justifyContent:'center',display:'flex',alignItems:'center'}}>
      <Grid container lg={11} justifyContent="center" alignItems="center">
        <Grid item lg={5} sx={{textAlign:'center',marginTop:mobile?"32px":"0px"}}>
        <Typography sx={{fontSize:mobile?"20px":'26px',fontFamily:'Inter',fontWeight:'600'}}>Almost there !</Typography>
      </Grid>
						  <Grid item lg={12} xs={10} sx={{textAlign:'center'}} >
        <Typography sx={{fontSize:mobile?"12px":'12px',fontFamily:'Inter',fontWeight:'400' }}>Discover top notes at gorailstech
with just one click!</Typography>
      </Grid>
      <Grid item lg={10} xs={11} sx={{marginTop:'20px'}}>
  <Typography sx={{textAlign:'left', fontSize:'16px', fontWeight:'700', fontFamily:'Inter'}}>One Time Password</Typography>
  <TextField
    required
    fullWidth
    variant="outlined"
  
    placeholder="Enter OTP"
    value={Otp}
    size="small"
    onChange={(e) => setOtp(e.target.value)}
    sx={{ mb: mobile?"12px":2, borderRadius: '6px',backgroundColor:  '#F4F1F1' }} 
  />
</Grid>
<Grid container lg={10} xs={11} sx={{marginTop:'-20px',margin:mobile?"auto":'0px'}} >
<Grid item lg={6} xs={8}>
<Button onClick={gotoLogin}

  sx={{
    mt: 0,
    mb: mobile?"0px":2,
  
    borderRadius: '12px',
    textTransform: 'none',

    fontSize: '12px',
    fontFamily:'Inter',
    fontWeight:'400',color:'#07b0f5'
  }}
>
Didn’t receive the OTP?
								  </Button>
								  {remainingTime > 0 && (
        <Typography sx={{fontSize: '12px',
		fontFamily:'Inter',fontWeight:'400',color:'#07b0f5',marginBottom:mobile?"0px":'10px'}}>
           Resend the Otp after - <strong>{remainingTime}s</strong>
        </Typography>
      )}
							  </Grid>
						
<Grid item lg={6} xs={4} sx={{display:'flex',justifyContent:'end'}} >

								  <Button onClick={handleResendClick}
	                                 disabled={isButtonDisabled}
									  sx={{
										  mt: '-6px',
										  mb:mobile?"12px": 2,
  
										  borderRadius: '12px',
										  textTransform: 'none',

										  fontSize: '12px',
										  fontFamily: 'Inter',
										  fontWeight: '400', color: '#07b0f5'
									  }}
								  >
									  Resend OTP
								  </Button>
</Grid>
</Grid>
						  <Grid item lg={10} xs={11}>
<CustomButton  onClick={handleSubmit}
      type="submit"
      variant="contained"
      sx={{
        mt: 0,
        mb: 0,
        background: '#07b0f5',
        borderRadius:mobile?"8px": '12px',
        textTransform: 'none',
        width: mobile?"100%":'366px',
        height:  mobile?"39px":'56px',
        fontSize:  mobile?"14px":'20px',
        fontFamily:'Inter',
		  fontWeight: '500',
		marginBottom:mobile?"32px":'0px'
        
      }}
    >
  {isLoading ? <CircularProgress style={{color:"#ffffff"}} />: 'Verify'} 
    </CustomButton>

    </Grid>
      </Grid>
    </Paper>
    </Grid>
</Grid>
    </div>
  )
}

export default Otp