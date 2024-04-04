import React, { useState } from 'react';
import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import {useMediaQuery} from '@mui/material';
import { Api_url } from './helper';
import 'typeface-inter';
const CustomButton = styled(Button)`
  &:hover {
    background-color: #086266; /* or specify the desired background color */
  }
`;
const Forgot = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const mobile = useMediaQuery('(max-width:600px)');
    const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
        const email = localStorage.setItem('email',Email);
        try {
          const { data: res } = await axios.post(`${Api_url}/sign/forgot`, { Email,});
          // Handle response from the backend
          console.log(res);
		  setIsLoading(false);
          navigate('/Onetime')
        } catch (error) {
			console.error(error);
			setIsLoading(false);
        }
    }
    const [Email,setEmail] = useState('');
  return (
    <div>
       <Grid container lg={12} justifyContent="center" alignItems="center" sx={{backgroundColor:'#07b0f5', minheight:"100vh",height: '100vh'}}>
<Grid item lg={12} sx={{justifyContent:'center',display:'flex',alignItems:'center'}}>
    <Paper sx={{ width: mobile?"85%":'478px', height: mobile?'300px':'324px',borderRadius: mobile?"16px":'26px',justifyContent:'center',display:'flex',alignItems:'center'}}>
      <Grid container lg={11}  justifyContent="center" alignItems="center">
        <Grid item lg={12} xs={12}  sx={{textAlign:'center'}}>
        <Typography sx={{fontSize:mobile?"20px":'26px',fontFamily:'Inter',fontWeight:'600'}}>Forgot Password?</Typography>
      </Grid>
      {/* <Grid item lg={12}sx={{textAlign:'center'}} >
        <Typography sx={{fontSize:'12px',fontFamily:'Inter',fontWeight:'400' }}>Lorem ipsum amet, dipi. Ut ligula consectetur, ultrices mauris.</Typography>
      </Grid> */}
      <Grid item lg={10} xs={11} sx={{marginTop:'20px'}}>
  <Typography sx={{textAlign:'left', fontSize:mobile?"14px":'16px', fontWeight:'700', fontFamily:'Inter'}}>Email</Typography>
  <TextField
    required
    fullWidth
    variant="outlined"
  
    placeholder="Enter your email"
    value={Email}
    size="small"
    onChange={(e) => setEmail(e.target.value)}
    sx={{ mb: mobile?"12px":2, borderRadius: '6px',backgroundColor:  '#F4F1F1', }} 
  />
</Grid>
<Grid item lg={10} xs={11} sx={{marginTop:mobile?"12px":'20px'}}>
<CustomButton onClick={handleSubmit}
      type="submit"
      variant="contained"
      sx={{
        mt: 0,
        mb: 0,
        background: '#07b0f5',
        borderRadius: '12px',
        textTransform: 'none',
        width: mobile?"100%":'366px',
        height: mobile?"39px":'56px',
        fontSize: mobile?"14px":'20px',
        fontFamily:'Inter',
        fontWeight:'500'
        
      }}
    >
       {isLoading ? <CircularProgress style={{ color: "#FFFFFF" }} />: 'Submit'} 
    </CustomButton>
	</Grid>
    <Grid item lg={10}  sx={{textAlign:'center',marginTop:'12px'}}>
<Button

  sx={{
    mt: 0,
    mb: 2,
  
    borderRadius: '12px',
    textTransform: 'none',

    fontSize: '12px',
    fontFamily:'Inter',
    fontWeight:'400',color:'#07b0f5'
  }}
  component={Link}  
      to="/Login" 
>

Back to Login
</Button>
</Grid>
      </Grid>
    </Paper>
    </Grid>
</Grid>
    </div>
  )
}

export default Forgot