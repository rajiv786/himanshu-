import React from 'react'
import Image from 'mui-image';
import { Grid,Typography, useMediaQuery } from '@mui/material';
import Footer from './Footer';
import Header from './Header';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Mobileheader from './Mobileheader';
import 'typeface-inter';
const Privacy = () => {

  const mobile = useMediaQuery('(max-width:600px)');

  return (
    <>
    {mobile?<Mobileheader/>:<Header/>}
    <Grid container lg={12} xs={12} sx={{justifyContent:'center',alignItems:'center',marginTop:'80px',marginBottom:'100px'}}>
<Grid container lg={6.3} xs={10}  sx={{backgroundColor:'#05445e',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'16px'}}>
 
  <Grid item lg={12} sx={{marginTop:"56px"}}>
    <Typography sx={{fontFamily: 'Inter',color:"#FFF",textAlign:'center',
fontSize:mobile?'20px': '26px',
fontWeight: 600,
lineHeight: 'normal'}}>This is My Personal Project</Typography>
<Typography sx={{fontFamily: 'Inter',color:"#FFF",textAlign:'center',marginTop:'16px',
fontSize: mobile?'12px':'16px',
fontWeight: 400,
lineHeight: 'normal'}}>There is not a Privacy Policy.</Typography>
  </Grid>
  
  <Grid container lg={5}  xs={9} sx={{background:'#FFF',marginBottom:'56px',borderRadius:'12px',marginTop:'36px'}}>
    <Grid item lg={12} xs={12} sx={{justifyContent:'center',display:'flex'}}>
  <EmailOutlinedIcon sx={{marginTop:'26px',marginBottom:mobile?'14px':'16px',width:mobile?'30px':'36px',height:mobile?'30px':'36px',color:'#07b0f5'}}/>
  </Grid>
  
  <Grid item lg={12} xs={12}>
  <Typography sx={{fontFamily: 'Inter',color:"#07b0f5",textAlign:'center',marginTop:mobile?'14px':'16px',
fontSize: '20px',marginBottom:'16px',
fontWeight: 500,
lineHeight: 'normal'}}> sales@gorails.tech</Typography>
    </Grid>
   




  </Grid>
</Grid>
    </Grid>
        <Footer/>
    </>
  )
}

export default Privacy