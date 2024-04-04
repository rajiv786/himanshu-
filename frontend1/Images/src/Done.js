import React from 'react'
import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import Image from 'mui-image'
import 'typeface-inter';
import { styled } from '@mui/system';
import logo from './Images/logo.png';
import doe from './Images/do.png';
import { useNavigate } from 'react-router-dom';
import {useMediaQuery} from '@mui/material';
const CustomButton = styled(Button)`
  &:hover {
    background-color: #05445e; /* or specify the desired background color */
  }
`;
const Done = () => {
	const navigate = useNavigate();
	const mobile = useMediaQuery('(max-width:600px)');
    const handleSubmit = async (e) => {

		e.preventDefault();
		navigate('/home')
    }

  return (
    <div>
     <Grid container lg={12} justifyContent="center" alignItems="center" sx={{backgroundColor:'skyblue',height:'100vh'}}>
<Grid item lg={12} sx={{justifyContent:'center',display:'flex',alignItems:'center'}}>
    <Paper sx={{ width:mobile?"85%":'432px', height: mobile?'374px':'595px',borderRadius:'26px',justifyContent:'center',display:'flex',alignItems:'center'}}>
      <Grid container lg={12} justifyContent="center" alignItems="center">
        
      <Grid item lg={12} sx={{textAlign:'center',marginTop:mobile?"10px":'26px'}}>
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
        <Typography sx={{fontSize:mobile?"20px":'26px',fontFamily:'Inter',fontWeight:'600',color:'#1E1E1E',marginTop:'11px'}}>All Done !</Typography>
      </Grid>
      <Grid item lg={12} xs={12} sx={{textAlign:'center',}}>
        <Typography sx={{fontSize:mobile?"12px":'16px',fontFamily:'Inter',fontWeight:'500',color:'#1E1E1E',}}>Your next read is a click away!
</Typography>
      </Grid>
<Grid item lg={10}>
<Image
        Duration={0}
        src={doe}
        style={{ width: mobile?'161px':'291px', height: mobile?'161px':'291px', transitionDuration: '0', animation: '0',   }}
      />
</Grid>
      <Grid item lg={7} sx={{marginTop:mobile?"10px":'26px'}}>

<CustomButton onClick={handleSubmit}
  type="submit"
  variant="contained"
  sx={{
    mt: 0,
    mb: 0,
    background: '#07b0f5',
    borderRadius: '8px',
    textTransform: 'none',
    width: mobile?"36.5vh":'253px',
    height:mobile?"38px": '48px',
    fontSize:mobile?"14px": '16px',
    fontFamily: 'Inter',
    fontWeight: '500'
  }}
>
Start exploring
</CustomButton>

</Grid>

      </Grid>
    </Paper>
    </Grid>
</Grid>
    </div>
  )
}

export default Done