import React, { useState,useEffect } from 'react';
import { Typography, Grid, Paper, TextField, Button } from '@mui/material'
import Image from 'mui-image'
import 'typeface-inter';
// import { green, blue, grey, red,yellow,common} from "@mui/material/colors";
import logo from './Images/logo.png'
import jwt_decode from "jwt-decode";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useMediaQuery} from '@mui/material';
import { Api_url } from './helper';
import { styled } from '@mui/system';
import sm1 from './Images/1.png';
import sm2 from './Images/2.png';
import sm3 from './Images/3.png';
import sm4 from './Images/4.png';
import sm5 from './Images/5.png';
import sm6 from './Images/6.png';
import sm7 from './Images/7.png';
import sm8 from './Images/8.png';
import sm9 from './Images/9.png';
import sm10 from './Images/10.png';
import sm11 from './Images/11.png';
import sm12 from './Images/12.png';
const CustomButton = styled(Button)`
  &:hover {
    background-color: #05445e; /* or specify the desired background color */
  }
`;

const Selected = () => {

	const [userData, setUserData] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const mobile = useMediaQuery('(max-width:600px)');
	const fromReader = location.state && location.state.fromReaderup;
	
	useEffect(() => {// sbse phle useeffect hi call hoyega
        const token = localStorage.getItem("token");
        if (token) {
          try {
			  const decoded = jwt_decode(token);
            // console.log(decoded);
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
			// console.log(userId);
      
          const response = await fetch(`${Api_url}/sign/user/${userId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            // console.log(data)
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
	

	const [error, setError] = useState('');
	const [values, setValues] = useState([]);
	const [buttonDisabled, setButtonDisabled] = useState(true);
  // Function to handle adding/removing values from the array
  const handleValueToggle = (value) => {
    setValues((prevValues) => {
      if (prevValues.includes(value)) {
        return prevValues.filter((item) => item !== value);
      } else {
        return [...prevValues, value];
      }
	});
	//   console.log(values)
	};
	useEffect(() => {
		if (values.length === 3) {
		  setButtonDisabled(false);
		} else {
		  setButtonDisabled(true);
		}
	  }, [values]);
const handleSubmit = async (e) => {

		e.preventDefault();
		const userId = userData._id;
		const Email = userData.Email;
		const Name=userData.Name
		navigate('/done')
		try {
			// Make the POST request to the backend endpoint
			const response = await axios.post(`${Api_url}/Otp/api/selected-values`, {
			  userId,Email,Name,
			  values: values,
			});
	  
			// Handle the response if needed
			// console.log(response.data);
		  } catch (error) {
			// Handle errors if any
			console.error(error);
		  }
		
    }
  return (
    <div>
     <Grid container lg={12} justifyContent="center" alignItems="center" sx={{backgroundColor:'skyblue', minHeight:"100vh"}}>
<Grid item lg={12} sx={{justifyContent:'center',display:'flex',alignItems:'center'}}>
    <Paper sx={{ width: mobile?"85%":'776px', height: mobile?"":'688px',borderRadius:'26px',justifyContent:'center',display:'flex',alignItems:'center',marginTop:mobile?'54px':'31px'}}>
      <Grid container lg={12} justifyContent="center" alignItems="center">
        
      <Grid item lg={12} xs={12} sx={{textAlign:'center',marginTop:mobile?'16px':''}}>
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
      <Grid item lg={12} xs={12} sx={{textAlign:'center',marginTop:'20px'}}>
	  {location.state && location.state.fromReaderup ? (
          <Typography sx={{ fontSize: '20px', fontFamily: 'Inter', fontWeight: '600', color: '#1E1E1E' }}>
									 
		  {userData ? ` Hi Student ${userData.Name}` : 'Hi Student'}
          </Typography>
        ) : (
          <Typography sx={{ fontSize: '20px', fontFamily: 'Inter', fontWeight: '600', color: '#1E1E1E' }}>
            {userData ? `Hi Teacher, ${userData.Name}` : 'Hi Teacher'}
          </Typography>
							  )}
						  </Grid>
      <Grid item lg={12}xs={12} sx={{textAlign:'center',marginTop:'10px'}}>
        <Typography sx={{fontSize:'16px',fontFamily:'Inter',fontWeight:'500',color:'#1E1E1E'}}>What do you like to read from these below Subjects?<br/>
</Typography>
      </Grid>
      <Grid container lg={12} xs={12}>

     <Grid container lg={11} xs={12} sx={{margin:'auto'}}>
     <Grid container lg={4} xs={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Button sx={{ background:values.includes('Adventorous') ?'#07b0f5' :'#FAF7F7',width: mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
         backgroundColor: '#07b0f5'
									  },
									  }}
									  onClick={() => handleValueToggle('Adventorous')}
									  >
  <Grid container lg={10} xs={12} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm1} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}}  />
    </Grid>
    <Grid container lg={5} xs={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: mobile?"10px":'16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
        Compiler
      </Typography>
    </Grid>
  </Grid>
</Button>






<Button sx={{ background:values.includes('Algorithm') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5', 
									  },
									  }}
									  onClick={() => handleValueToggle('Algorithm')}>
  <Grid container lg={10}xs={12} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm2} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}}/>
    </Grid>
    <Grid container lg={5} xs={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize:mobile?"10px": '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
       Digital Electronics
      </Typography>
    </Grid>
  </Grid>
</Button>
      
<Button sx={{background:values.includes('DigitalElectronics') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5', 
									  },
									  }}
									  onClick={() => handleValueToggle('DigitalElectronics')}>
  <Grid container lg={10} xs={12} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm3} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
    </Grid>
    <Grid container lg={5} xs={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: mobile?"10px":'16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
       Computer Networks
      </Typography>
    </Grid>
  </Grid>
</Button>
<Button sx={{ backgroundColor:values.includes('Math') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5', 
									  },
									  }}
									  onClick={() => handleValueToggle('Math')}>
<Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Grid container lg={5} xs={5}>
    <img src={sm4} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
  </Grid>
  <Grid container lg={5} xs={5} sx={{ whiteSpace: 'nowrap' }}>
    <Typography sx={{ fontFamily: 'Inter', fontSize: mobile?"10px":'16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      System
    </Typography>
  </Grid>
</Grid>

</Button>
     
      

     
      </Grid>
      <Grid container lg={4} xs={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Button sx={{  backgroundColor:values.includes('Teen DataStructure') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5', 
        },}}  onClick={() => handleValueToggle('Teen DataStructure')}>
<Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Grid container lg={5} xs={5}>
    <img src={sm5} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
  </Grid>
  <Grid container lg={5} xs={5} sx={{ whiteSpace: 'nowrap' }}>
    <Typography sx={{ fontFamily: 'Inter', fontSize: mobile?"10px":'16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
       Aptitude
    </Typography>
  </Grid>
</Grid>

</Button>
<Button sx={{  backgroundColor:values.includes('Romance') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5', 
        },}} onClick={() => handleValueToggle('Romance')}>
<Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Grid container lg={5} xs={5}>
    <img src={sm6} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
  </Grid>
  <Grid container lg={5} xs={5} sx={{ whiteSpace: 'nowrap' }}>
    <Typography sx={{ fontFamily: 'Inter', fontSize: mobile?"10px":'16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
    Mathematics
    </Typography>
  </Grid>
</Grid>

</Button>
      
<Button sx={{backgroundColor:values.includes('DBMS') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5', 
        },}}  onClick={() => handleValueToggle('DBMS')}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm7} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
    </Grid>
    <Grid container lg={5} xs={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: mobile?"10px":'16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      Programming 
      </Typography>
    </Grid>
  </Grid>
</Button>
<Button sx={{ backgroundColor:values.includes('Sci-Fi') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5', 
        },}} onClick={() => handleValueToggle('Sci-Fi')}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm8} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
    </Grid>
    <Grid container lg={5} xs={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize:mobile?"10px": '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      DBMS
      </Typography>
    </Grid>
  </Grid>
</Button>
     
      

     
      </Grid>
								  {mobile ? <>
									<Grid container lg={4} xs={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
									<Button sx={{
										  backgroundColor: values.includes('Non-DataStructure') ? '#07b0f5' : '#FAF7F7', width: mobile ? "119px" : '204px', height: mobile ? "50px" : '70px', marginTop: '26px', borderRadius: '10px', '&:hover': {
          backgroundColor: '#07b0f5', 
        },}} onClick={() => handleValueToggle('Non-DataStructure')}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm9} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
    </Grid>
    <Grid container lg={5} xs={5} sx={{ whiteSpace: 'nowrap' }}>
      <Typography sx={{ fontFamily: 'Inter', fontSize:mobile?"10px": '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
    TOC
      </Typography>
    </Grid>
  </Grid>
										  </Button>






										  <Button sx={{ backgroundColor: values.includes('OperatingSystem') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5',
        },}} onClick={() => handleValueToggle('OperatingSystem')}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm10} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
    </Grid>
    <Grid container lg={5} xs={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: mobile?"10px":'16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
     Algorithm
      </Typography>
    </Grid>
  </Grid>
										  </Button>
      

     
      

     
									  </Grid>
									  <Grid container lg={4} xs={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
									  <Button sx={{ backgroundColor:values.includes('Poetry') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5', 
        },}} onClick={() => handleValueToggle('Poetry')}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm12} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
    </Grid>
    <Grid container lg={5} xs={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: mobile?"10px":'16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      COA
      </Typography>
    </Grid>
  </Grid>
</Button>






<Button sx={{ backgroundColor: values.includes('Thriller') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5', // Change to desired green color
        },}} onClick={() => handleValueToggle('Thriller')}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm11} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
    </Grid>
    <Grid container lg={5} xs={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: mobile?"10px":'16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      Thriller
      </Typography>
    </Grid>
  </Grid>
										  </Button>
      

     
      

     
      </Grid>
									  
									  <Grid container lg={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									  
									  <Grid container lg={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  	  
									  <Grid item xs={6}>

										  </Grid>
									  
									  
									 
     
      
</Grid>
     
									  </Grid>
									  </>: <Grid container lg={4} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button sx={{ backgroundColor:values.includes('Non-DataStructure') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5', 
        },}} onClick={() => handleValueToggle('Non-DataStructure')}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm10} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
    </Grid>
    <Grid container lg={5} xs={5} sx={{ whiteSpace: 'nowrap' }}>
      <Typography sx={{ fontFamily: 'Inter', fontSize:mobile?"10px": '16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
    TOC
      </Typography>
    </Grid>
  </Grid>
</Button>
<Button sx={{ backgroundColor:values.includes('Poetry') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5', 
        },}} onClick={() => handleValueToggle('Poetry')}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm11} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
    </Grid>
    <Grid container lg={5} xs={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: mobile?"10px":'16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      Algorithm
      </Typography>
    </Grid>
  </Grid>
</Button>
      
<Button sx={{ backgroundColor: values.includes('OperatingSystem') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5',
        },}} onClick={() => handleValueToggle('OperatingSystem')}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm12} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
    </Grid>
    <Grid container lg={5} xs={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: mobile?"10px":'16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
     COA
      </Typography>
    </Grid>
  </Grid>
</Button>
<Button sx={{ backgroundColor: values.includes('Thriller') ?'#07b0f5' :'#FAF7F7',width:mobile?"119px":'204px' ,height:mobile?"50px":'70px',marginTop:'26px',borderRadius:'10px','&:hover': {
          backgroundColor: '#07b0f5', // Change to desired green color
        },}} onClick={() => handleValueToggle('Thriller')}>
  <Grid container lg={10} alignItems="center" sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid container lg={5} xs={5}>
      <img src={sm12} alt="My Image" style={{width:mobile?"26px":'50px',height:mobile?"26px":'50px'}} />
    </Grid>
    <Grid container lg={5} xs={5}>
      <Typography sx={{ fontFamily: 'Inter', fontSize: mobile?"10px":'16px', fontWeight: '600', color: '#1E1E1E', textTransform: 'none' }}>
      DSA
      </Typography>
    </Grid>
  </Grid>
</Button>
     
      

     
      </Grid>}
      </Grid>
      </Grid>
      <Grid item lg={12}>
        <Typography sx={{fontSize:mobile?'10px':'13px',fonWeight:500,color:'#1e1e1e',lineHeight:'24px',marginTop:mobile?'10px':'20px',textAlign:'center'}}>* Choose Only Three Genre</Typography>
      </Grid>
      <Grid item lg={9} sx={{marginTop:mobile?"20px":'40px',textAlign:'center',marginBottom:mobile?"20px":'0px'}}>

<CustomButton onClick={handleSubmit}
  type="submit"
  variant="contained"
  sx={{
    mt: 0,
    mb: 0,
    background: '#07b0f5',
    borderRadius: '8px',
    textTransform: 'none',
    width: mobile?"36.5vh":'177px',
    height: mobile?"38px":'48px',
    fontSize: mobile?"14px":'16px',
    fontFamily: 'Inter',
    fontWeight: '500'
								  }}
								  disabled={buttonDisabled}
>
 Finish
</CustomButton>

</Grid>

      </Grid>
    </Paper>
    </Grid>
</Grid>
    </div>
  )
}

export default Selected