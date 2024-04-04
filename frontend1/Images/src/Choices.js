
import { Typography,Grid,Paper,TextField ,Button} from '@mui/material'
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
const Choices = () => {
	
    const [userData, setUserData] = useState(null);
    
    const handleSubmit = async (e) => {

        e.preventDefault();
    }
  return (
  
       <Grid container lg={12} justifyContent="center" alignItems="center" sx={{backgroundImage:'url(https://drive.google.com/uc?export=view&id=14GrzuLdhJEJmdoiwuB55rexlYG1bXN62)',height:'750px',width:'1440px'}}>
<Grid item lg={12} sx={{justifyContent:'center',display:'flex',alignItems:'center'}}>
    <Paper sx={{ width: '776px', height: '688px',borderRadius:'26px',justifyContent:'center',display:'flex',alignItems:'center'}}>
      <Grid container lg={12} justifyContent="center" alignItems="center">
        
      <Grid item lg={12} sx={{textAlign:'center',}}>
        <Typography sx={{fontSize:'32px',fontFamily:'Inter',fontWeight:'800',color:'#07b0f5'}}>LOGO</Typography>
      </Grid>
      <Grid item lg={12} sx={{textAlign:'center',marginTop:'20px'}}>
        <Typography sx={{fontSize:'20px',fontFamily:'Inter',fontWeight:'600',color:'#1E1E1E'}}>Hi Author</Typography>
      </Grid>
      <Grid item lg={12} sx={{textAlign:'center',marginTop:'10px'}}>
        <Typography sx={{fontSize:'16px',fontFamily:'Inter',fontWeight:'500',color:'#1E1E1E'}}>What do you like to read?<br/>
</Typography>
      </Grid>
      <Grid container lg={12}>

     <Grid container lg={11} sx={{margin:'auto'}}>
     <Grid container lg={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Button sx={{ backgroundColor: '#FAF7F7',width:'204px' ,height:'70px',marginTop:'26px',borderRadius:'10px'}}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5}>
      <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
    </Grid>
    <Grid container lg={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
        COA
      </Typography>
    </Grid>
  </Grid>
</Button>






<Button sx={{ backgroundColor: '#FAF7F7',width:'204px' ,height:'70px',marginTop:'26px',borderRadius:'10px'}}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5}>
      <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
    </Grid>
    <Grid container lg={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
       Algorithm
      </Typography>
    </Grid>
  </Grid>
</Button>
      
<Button sx={{ backgroundColor: '#FAF7F7',width:'204px' ,height:'70px',marginTop:'26px',borderRadius:'10px'}}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5}>
      <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
    </Grid>
    <Grid container lg={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
       DigitalElectronics
      </Typography>
    </Grid>
  </Grid>
</Button>
<Button sx={{ backgroundColor: '#FAF7F7',width:'204px' ,height:'70px',marginTop:'26px',borderRadius:'10px'}}>
<Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Grid container lg={5}>
    <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
  </Grid>
  <Grid container lg={5} sx={{ whiteSpace: 'nowrap' }}>
    <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      Math
    </Typography>
  </Grid>
</Grid>

</Button>
     
      

     
      </Grid>
      <Grid container lg={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Button sx={{ backgroundColor: '#FAF7F7',width:'204px' ,height:'70px',marginTop:'26px',borderRadius:'10px'}}>
<Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Grid container lg={5}>
    <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
  </Grid>
  <Grid container lg={5} sx={{ whiteSpace: 'nowrap' }}>
    <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      Teen DataStructure
    </Typography>
  </Grid>
</Grid>

</Button>
<Button sx={{ backgroundColor: '#FAF7F7',width:'204px' ,height:'70px',marginTop:'26px',borderRadius:'10px'}}>
<Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Grid container lg={5}>
    <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
  </Grid>
  <Grid container lg={5} sx={{ whiteSpace: 'nowrap' }}>
    <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      OperatingSystem
    </Typography>
  </Grid>
</Grid>

</Button>
      
<Button sx={{ backgroundColor: '#FAF7F7',width:'204px' ,height:'70px',marginTop:'26px',borderRadius:'10px'}}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5}>
      <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
    </Grid>
    <Grid container lg={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      DBMS
      </Typography>
    </Grid>
  </Grid>
</Button>
<Button sx={{ backgroundColor: '#FAF7F7',width:'204px' ,height:'70px',marginTop:'26px',borderRadius:'10px'}}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5}>
      <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
    </Grid>
    <Grid container lg={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      Sci-Fi
      </Typography>
    </Grid>
  </Grid>
</Button>
     
      

     
      </Grid>
      <Grid container lg={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Button sx={{ backgroundColor: '#FAF7F7',width:'204px' ,height:'70px',marginTop:'26px',borderRadius:'10px'}}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5}>
      <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
    </Grid>
    <Grid container lg={5} sx={{ whiteSpace: 'nowrap' }}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
    Non-DataStructure
      </Typography>
    </Grid>
  </Grid>
</Button>
<Button sx={{ backgroundColor: '#FAF7F7',width:'204px' ,height:'70px',marginTop:'26px',borderRadius:'10px'}}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5}>
      <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
    </Grid>
    <Grid container lg={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      Poetry
      </Typography>
    </Grid>
  </Grid>
</Button>
      
<Button sx={{ backgroundColor: '#FAF7F7',width:'204px' ,height:'70px',marginTop:'26px',borderRadius:'10px'}}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5}>
      <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
    </Grid>
    <Grid container lg={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
     Romance
      </Typography>
    </Grid>
  </Grid>
</Button>
<Button sx={{ backgroundColor: '#FAF7F7',width:'204px' ,height:'70px',marginTop:'26px',borderRadius:'10px'}}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5}>
      <img src="https://drive.google.com/uc?export=view&id=13jy5mLYscdJlCWt3HFY_VqjX-gWypORp" alt="My Image" />
    </Grid>
    <Grid container lg={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      Thriller
      </Typography>
    </Grid>
  </Grid>
</Button>
     
      

     
      </Grid>
      </Grid>
      </Grid>
      <Grid item lg={9} sx={{marginTop:'40px',textAlign:'center'}}>

<Button onClick={handleSubmit}
  type="submit"
  variant="contained"
  sx={{
    mt: 0,
    mb: 0,
    background: '#07b0f5',
    borderRadius: '8px',
    textTransform: 'none',
    width: '177px',
    height: '48px',
    fontSize: '16px',
    fontFamily: 'Inter',
    fontWeight: '500'
  }}
>
 Finish
</Button>

</Grid>

      </Grid>
    </Paper>
    </Grid>
</Grid>
   
  )
}

export default Choices
