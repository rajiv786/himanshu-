import  React,{useState,useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Header from './Header';
import Dialog from '@mui/material/Dialog';
import hero from './Images/Hero.png';
import Image from 'mui-image'
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Close from '@mui/icons-material/Close';
import axios from 'axios';
import Footer from './Footer';
import { Grid,Typography,Button,Divider, DialogTitle } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import DialogContentText from "@mui/material/DialogContentText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoneIcon from '@mui/icons-material/Done';
import Mobileheader from './Mobileheader';
import {useMediaQuery} from '@mui/material';

import { Api_url } from './helper';
import jwt_decode from 'jwt-decode';
import 'typeface-inter';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const CustomButton = styled(Button)`
  &:hover {
    background-color: #05445e; /* or specify the desired background color */
  }
`;

 function Pro() {
    const mobile=useMediaQuery('(max-width:600px)')

	const [openForm, setOpenForm] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState('');
	const handleGetNowClick = () => {
	  setOpenForm(true);
	 };
	 const [loading, setLoading] = useState(false);
	 const [openForm2, setOpenForm2] = useState(false);
	 const handleGetNowClick2 = () => {
		setOpenForm2(true);
	 };
	 const [openForm3, setOpenForm3] = useState(false);
	 const handleGetNowClick3 = () => {
		setOpenForm3(true);
	   };
	 const[user,setUser]=useState({})
	 useEffect(() => {
		// Fetch user data on component mount
		fetchUserData();
	  }, []);
	
	  const fetchUserData = async () => {
		try {
			const token = localStorage.getItem("token");
			if (!token) {
			  
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
			//   console.log(data)
			setUser(data);
		  } else {
			// Handle error response
			const errorData = await response.json();	
		  }
		} catch (error) {
		  console.error(error);
		
		}
	 };
	 const handleClose = () => {
		 setOpenForm2(false);
		 setLoading(false);
		 setPhoneNumber('');
		 
	 }
	 const handleClose2 = () => {
		setOpenForm(false);
		 setLoading(false);
		 setPhoneNumber('');
	 }
	 const handleClose3 = () => {
		setOpenForm3(false);
		 setLoading(false);
		 setPhoneNumber('');
	}

	 const handleEmail = async (value) => {
		const phoneNumberValue = phoneNumber; // Get the phone number from your state
		 setLoading(true);
		 const token = localStorage.getItem("token");
		 const decoded = jwt_decode(token);
		 const userId = decoded._id;
		 console.log(userId, 'userId');
		// Create a data object to send to the server
		const data = {
		  name: user.Name, // Replace with your name value
		  email: user.Email, // Replace with your email value
			phone: phoneNumberValue,
			value:value// Use the phone number value
		 };
		 try {
			const response = await axios.put(`${Api_url}/Otp/update-status/${userId}`, { newStatus: 'pro' });
		
			// Handle success, update your state or UI accordingly
			console.log(response.data.message);
			console.log(response.data.user);
		  } catch (error) {
			// Handle error
			console.error(error.response.data.error);
		  }
		//  console.log(data, 'handleEMail');
		 try {
			// Set loading to true before making the API call
		
			const response = await axios.post(`${Api_url}/otp/sendEmail`, { data });
			setLoading(true); 
			// console.log('Email sent:', response.data);
		
			// Handle the API response or perform any other actions here
		
		  } catch (error) {
			console.error('Error sending email:', error);
			setLoading(true); 
			// Handle the error here
		
		  } 
	 }

   const[basic,setbasic]=useState(false)
   const[basic1,setbasic1]=useState(false)
   const[basic2,setbasic2]=useState(false)
   const handleClick=()=>{
    setbasic(!basic)
   }
   const handleClick1=()=>{
    setbasic1(!basic1)
   }
   const handleClick2=()=>{
    setbasic2(!basic2)
   }
  return (
   
    <>
        {mobile?<Mobileheader/>: <Header/>}
         <Grid container lg={12} xs={12}>
<Grid container lg={9} xs={12} sx={{margin:'auto'}}>
<Grid item lg={12 } xs={9.5} sx={{marginTop:'80px',marginBottom:'62px',textAlign:'center',margin:mobile?'auto':'0px'}} >
    <Typography sx={{fontFamily:'Inter',fontWeight:mobile?'700':'800',fontSize:mobile?'26px':'48px',textAlign:mobile?'initial':'center',marginTop:mobile?'26px':'80px',marginBottom:mobile?'36px':'62px'}}>Pricing Plans For <span style={{fontFamily:'Inter',fontWeight:mobile?'700':'800',fontSize:mobile?'26px':'48px',color:'#07b0f5'}}>Gorails Pro</span> </Typography>
</Grid>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        style={{ alignItems:mobile?'center':'' }}
      >
        <Item sx={{borderRadius:'4px',border:'1px solid #DBDBDB',height:basic?mobile?'750px':'820px':mobile?'390px':'552px',width:mobile?'80%':'100%'}}>
            <Grid container lg={12} xs={12}>
                <Grid container lg={6} xs={12} sx={{margin:'auto',display:mobile?'flex':'0',justifyContent:mobile?'center':'0'}}>
								  <Grid item lg={12} xs={12}>
								  <Image
  duration={0}
  src={hero}
  style={{
    width:mobile?"90px":'426px',
    height:mobile?'90px': '426px',
    marginTop: mobile ? '6px' : '0px',
    transitionDuration: '0',
    animation: '0',
    zIndex: 1,
    borderRadius: '50%',
  // To maintain the aspect ratio of the image within the circle
  }}
/>
                   </Grid>
                    
							  </Grid>
							  <Grid container lg={6} xs={12} sx={{margin:'auto',display:mobile?'flex':'0',justifyContent:mobile?'center':'0'}}>
                   <Grid item lg={12} xs={12}>
                        <Typography sx={{color:'#000',fontWeight:'700',fontSize:mobile?'16px':'24px',fontFamily:'Inter',marginTop:mobile?"5px":'56px'}}>Package details</Typography>
                    </Grid>
                    <Grid item lg={12} xs={12}>
                        <Typography sx={{fontFamily:'Inter',fontSize:mobile?'32px':'64px',fontWeight:'700',color:'#1e1e1e',marginTop:mobile?'6px':'0px'}}>Free</Typography>
                    </Grid>
                    {/* <Grid item lg={12}>
                        <Typography sx={{fontFamily:'Inter',fontSize:'14px',fontWeight:'500',color:'#747474',}}>per user</Typography>
                    </Grid> */}
                    {mobile?'':<Grid item lg={12} >
                    <Divider sx={{ margin: 'auto', width:'18%',marginTop:'22px', }} />
                    </Grid>}
                    <Grid item lg={12} xs={12}>
                        <Typography sx={{color:'#000',fontWeight:'600',fontSize:mobile?'14px':'18px',fontFamily:'Inter',marginTop:mobile?'26px':'22px',display:'flex',justifyContent:'center',alignItems:'center',marginRight:mobile?'55px':'0px'}}><DoneIcon style={{color:'#07b0f5',width:mobile?'18px':'28px',height:'28px',strokeWidth:'3px',marginRight:'16px'}}/>Get Free Coaching Notes</Typography>
								  </Grid>
								  <Grid item lg={12} sx={{width:'300px'}}>
                    {basic?<>
                     
                    <Grid item lg={8.5} xs={8} sx={{margin:'auto'}} >
                        <Typography sx={{fontSize:mobile?'12px':'14px',marginTop:'26px',fontWeight:'500',color:'#000',textAlign:'initial'}} > <CircleIcon style={{width:mobile?'6px':'8px',height:mobile?'6px':'8px',marginRight:'8px'}}/>Gorailstech offers a rich repository of comprehensive study materials, including detailed notes, practice problems, and visual aids.  </Typography>
                    </Grid>
                    
                  
                    <Grid item lg={8.5}  xs={8} sx={{margin:'auto'}} >
                        <Typography sx={{fontSize:mobile?'12px':'14px',fontWeight:'500',color:'#000',textAlign:'initial',marginTop:'16px',}}> <CircleIcon style={{width:mobile?'6px':'8px',height:mobile?'6px':'8px',marginRight:'8px'}}/>Our website boasts a user-friendly interface designed for seamless navigation and an optimal learning experience.</Typography>
                    </Grid>
                    <Grid item lg={8.5} xs={8} sx={{margin:'auto'}} >
                        <Typography sx={{fontSize:mobile?'12px':'14px',fontWeight:'500',color:'#000',textAlign:'initial',marginTop:'16px',}}> <CircleIcon style={{width:mobile?'6px':'8px',height:mobile?'6px':'8px',marginRight:'8px'}}/>We are committed to continuous improvement. Gorailstech regularly updates its content to align with the latest curriculum and technological advancements.</Typography>
                    </Grid>
                   
                    <Grid item lg={12}>
                        <Button onClick={handleClick} sx={{fontWeight:'600',fontSize:mobile?'10px':'14px',fontFamily:'Inter',color:'#07b0f5',textTransform:'none',marginTop:'26px'}}>See less</Button>
                    </Grid></>:
                    <Grid item lg={12} xs={12}>
                        <Button onClick={handleClick} sx={{fontWeight:'600',fontSize:mobile?'10px':'14px',fontFamily:'Inter',color:'#07b0f5',textTransform:'none',marginTop:mobile?'20px':'26px'}}>See more</Button>
										  </Grid>}
										  </Grid>
                    <Grid item lg={12} xs={12}>
                        <CustomButton onClick={()=>handleGetNowClick2()}  variant='contained' sx={{backgroundColor:'#07b0f5',color:'#fff',textTransform:'none',width:'220px',padding:'12px 20px',marginTop:mobile?'36px':'56px',fontSize:mobile?'14px':'16px',fontWeight:'500',marginBottom:mobile?'36px':'56px',borderRadius:'8px'}}>Get Now</CustomButton>
                    </Grid>
                </Grid>
						  </Grid>
						  <Dialog open={openForm2} onClose={() => setOpenForm2(false)}>
							  <DialogTitle sx={{ display: 'flex', justifyContent: 'end', height: '5px' }} ><Close onClick={() => handleClose()} /></DialogTitle>
  <DialogContent>
								  {loading ? <>
									  <DialogContentText id="alert-dialog-description">
										  <Grid container lg={12} sx={{justifyContent:'center'}}>
											  <Grid item lg={12} sx={{ alignItems:'center',display:'flex',justifyContent:'center'}}>
											  <CheckCircleOutlineIcon style={{width:"47px",height:'47px',color:"#07b0f5"}} /> 
											  </Grid>
											  <Grid item lg={12}>
											  <Typography sx={{color: '#000',

textAlign: 'center',
fontFamily: 'Inter',
											  fontSize:'20px',
fontStyle: 'normal',
fontWeight: 500,
											  lineHeight: 'normal'
												  }}>Your request has been submitted.</Typography>	
												  <Typography sx={{color: '#000',

textAlign: 'center',
fontFamily: 'Inter',
											  fontSize:'16px',
fontStyle: 'normal',
fontWeight: 400,
											  lineHeight: '22.4px'
										  }}>Our team will contact you soon for further processing.</Typography>
												  </Grid>
										  </Grid>
           
            </DialogContentText></> :
									  <>
										  <Typography sx={{color: '#000',marginTop:'26px',

textAlign: 'center',
fontFamily: 'Inter',
											  fontSize:'20px',
fontStyle: 'normal',
fontWeight: 500,
											  lineHeight: 'normal'
										  }}>To continue, please enter your phone number.</Typography>
										  <Grid container lg={12} sx={{marginTop:'26px'}}>
											  <Grid item lg={8}>
											  <TextField placeholder="Phone Number" variant="outlined" size="small" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{width:mobile?"273px":"295px",height:"39px",borderRadius: '8px',
border: '1px solid #07b0f5'}} />
   			  
											  </Grid>
											  <Grid item lg={4}>
	 <CustomButton variant="contained" color="primary" onClick={()=>handleEmail(20000)}  sx={{backgroundColor:'#07b0f5',height:"39px",color:'#fff',textTransform:'none',width:mobile?"273px":'180px',padding:'12px 20px',marginTop:mobile?'36px':'0px',fontSize:mobile?'14px':'16px',fontWeight:'500',marginBottom:'0px',borderRadius:'8px'}}>
													  
													  {loading ? <CircularProgress style={{ color: "#FFFFFF" }} />: 'Continue'} 
												  </CustomButton>	  
												  </Grid>
										  </Grid>
										 
									
									  </>}
									  </DialogContent>
</Dialog>
        </Item>
       
      </Stack>
      </Grid>
      </Grid>
      <Footer/>
    </>
   
  );
}

export default Pro