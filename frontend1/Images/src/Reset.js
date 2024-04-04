import React, { useState } from 'react';
import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios';
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import 'typeface-inter';
import {useMediaQuery} from '@mui/material';
import { Api_url } from './helper';
const CustomButton = styled(Button)`
  &:hover {
    background-color: #086266; /* or specify the desired background color */
  }
`;
const Reset = () => {
	const navigate = useNavigate();
	const mobile = useMediaQuery('(max-width:600px)');
	const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
        const email = localStorage.getItem('email');
        try {
          const { data: res } = await axios.post(`${Api_url}/Otp/update-pass`, { NewPassword,email});
          // Handle response from the backend
			// console.log(res);
			setIsLoading(false);
			navigate('/Login');
			localStorage.removeItem('email')
        } catch (error) {
			console.error(error);
			setIsLoading(false);
        }
    }
    const [NewPassword, setPassword] = useState('');
    const[ConfirmPassword,setConfirmPassword]=useState('');
  return (
    <div>
      <Grid container lg={12} justifyContent="center" alignItems="center" sx={{ backgroundColor: '#07b0f5', height: '100vh' }}>
 
 
 <Paper sx={{ width: mobile?"85%":'478px', height: mobile?'350px':'405px', borderRadius: mobile?"16px":'26px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
   <Grid container lg={12} justifyContent="center" alignItems="center">
     <Grid item lg={10} xs={12} sx={{ textAlign: 'center'}}>
       <Typography sx={{ fontSize: mobile?"20px":'26px', fontFamily: 'Inter', fontWeight: '600', marginTop: '10px' }}>Reset Password</Typography>
     </Grid>
     {/* <Grid item lg={10} sx={{ textAlign: 'center' }}>
       <Typography sx={{ fontSize: '12px', fontFamily: 'Inter', fontWeight: '400' }}>Lorem ipsum amet, dipi. Ut ligula consectetur, ultrices mauris.</Typography>
     </Grid> */}
 
     <Grid item lg={10} xs={11}  sx={{marginTop:'20px'}}>
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>New Password</Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Enter password"
            value={NewPassword}
            size="small"
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: mobile?"12px":2, borderRadius: '6px', backgroundColor: '#F4F1F1' }}
          />
        </Grid>
					  <Grid item lg={10} xs={11}>
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>Confirm Password</Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Enter password"
            value={ConfirmPassword}
            size="small"
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1' }}
          />
        </Grid>
    
     
     


<Grid item lg={10} xs={11} sx={{marginTop:'10px'}}>

     <CustomButton onClick={handleSubmit}
       type="submit"
       variant="contained"
       sx={{
         mt: 0,
         mb: 0,
         background: '#07b0f5',
         borderRadius: '12px',
         textTransform: 'none',
         width: mobile?"100%":'400px',
         height: mobile?"39px":'56px',
         fontSize: mobile?"14px":'20px',
         fontFamily: 'Inter',
         fontWeight: '500'
       }}
     >
 {isLoading ? <CircularProgress style={{ color: "#FFFFFF" }} />: 'Reset Password'}
     </CustomButton>
     <Grid item lg={12}  sx={{textAlign:'center',marginTop:'12px'}}>
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
      </Grid>
     
 </Paper>

</Grid>
    </div>
  )
}

export default Reset