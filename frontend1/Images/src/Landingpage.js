import React from 'react'
import { styled } from '@mui/system';
import { Button,Grid, Typography,Paper} from '@mui/material';
import Image from 'mui-image'
import {useMediaQuery} from '@mui/material';
import Header from './Header';
import { motion } from 'framer-motion';
import Footer from './Footer';
import hero from './Images/Hero.png';
import s1 from './Images/s1.png';
import s2 from './Images/s2.png';
import sect1 from './Images/sect1.png';
import bgf from './Images/bgf.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import 'typeface-inter';
import { Link, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { LoginSocialFacebook,LoginSocialGoogle } from 'reactjs-social-login'
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';
import { Helmet } from 'react-helmet';
import ImageSlider from './Slider';
import './loading.css';
import Mobileheader from './Mobileheader';
const StyledImage = styled(Image)(({ theme }) => ({
  '& .mui-image-wrapper': {
   backgroundColor:'red',

  },
}));
const CustomButton = styled(Button)`
  &:hover {
    background-color:  #2980b9; /* or specify the desired background color */
  }
`;
const CustomButton1 = styled(Button)`
  &:hover {
    background-color: #F4F1F1; /* or specify the desired background color */
  }
`;
const FeatureCard = ({ iconSrc, title, description }) => (
	<Grid item xs={10} md={4} lg={3.85} sx={{ margin:'auto'}}>
	  <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', borderRadius: '12px', margin: '20px' }}>
		<img src={iconSrc} alt={title} style={{ width: '80px', height: '80px', marginBottom: '20px' }} />
		<Typography variant="h6" gutterBottom>
		  {title}
		</Typography>
		<Typography variant="body1" color="textSecondary">
		  {description}
		</Typography>
	  </Paper>
	</Grid>
  );
function Landingpage() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [anchorEl2, setArchorEl2]=useState(null)
  const mobile = useMediaQuery('(max-width:600px)');
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	const [open, setOpen] = useState(false);
	const [open1, setOpen1] = useState(false);
	const handleSignup = () => { 
		navigate('/signup')
	}
  const handleClose = () => {
    setAnchorEl(null);
   
	};
	const Gotopage = () => { 
		navigate('/signup')
	}
	const Gotopage1 = () => { 
		navigate('/login')
	}
	const handleClose2 = () => {
		setArchorEl2(null);
	   
		};
		const Gotopage2 = () => { 
			navigate('/signup', { state: { fromReaderup: true } })
		}
		const Gotopage3 = () => { 
			navigate('/login', { state: { fromReaderup: true } })
		}
  const handleClosepopup =() =>{
    setOpen(false)
    // console.log('yess')
	}
	const handleClosepopup1 =() =>{
		setOpen1(false)
		// console.log('yess')
		}
	useEffect(() => {
		window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
	  }, []);
  return (
	  <>
		  <Helmet>
		  <meta name="title" content="Jump the Slush at Slushie - Upload and Publish Your Manuscript with Ease" />
     
         
        <meta name="description" content="Join GorailsTech, the premier platform for authors, and effortlessly upload, share, and publish your manuscripts. Take the next step in your writing journey and jump the slush with us today." />
      </Helmet>
 {mobile?<Mobileheader/>:<Header/>}
     <Grid container lg={12}  sx={{marginTop:mobile?'39px':'56px'}}  >
						<Grid container lg={10} xs={12} sx={{margin:'auto'}}>
              <Grid container lg={7} xs={9.5} sx={{margin:mobile?'auto':''}}>
							<Grid item  lg={12} sx={{margin:mobile?'':''}} >
							<Typography  sx={{ fontWeight:mobile?'800': '800', fontSize:mobile?'32px': '61px', color:'#1E1E1E',  lineHeight:mobile?'normal': '77px', fontFamily:mobile?'Inter':'Inter',fontStyle:'normal'}}>
              Discover {mobile?'':<br/>}
			  The{mobile?<br/>:""} Smart Study!
</Typography>
					</Grid>
							<Grid item  lg={12}  >
						
								
										<Grid item  lg={9.5} sx={{marginTop:'36px'}} >
							  <Typography sx={{ fontWeight: mobile ? '400' : '400', fontSize: mobile ? '14px' : '20px', fontFamily: mobile ? 'Inter' : 'Inter', fontStyle: 'normal', lineHeight: '130%' }}>
							  Simplify your engineering studies with our meticulously crafted notes, designed to make learning both effective and enjoyable
</Typography>
							</Grid>
              <Grid item lg={11}sx={{marginTop:'16px'}} >
									<Typography  sx={{ fontWeight: '400', fontSize:mobile?'14px': '20px',  fontFamily:'Inter',fontStyle:'normal',lineHeight: '130%'  }}>Our mission is simple: to make top-notch   <span style={{fontWeight:'600'}}>engineering notes</span> accessible to all. Start your journey to excellence today</Typography>
								</Grid>
								<Grid item lg={10.5}sx={{marginTop:'16px'}} >
									<Typography  sx={{ fontWeight: '400', fontSize:mobile?'14px': '20px',  fontFamily:'Inter',fontStyle:'normal',lineHeight: '130%'  }}> Look no further. Our platform provides the resources you need for  <span style={{fontWeight:'600'}}>academic excellence.</span> </Typography>
								</Grid>
								
		
					  </Grid>	
					  {token ?"":
					  	 <Grid container direction="row"  lg={8} xs={10}  sx={{marginTop:'32px'}}>
  <Grid item lg={5.8} xs={6} >
							  <CustomButton onClick={() => setOpen1(true)} variant='contained' sx={{ borderRadius: '8px', textTransform: 'none',fontFamily:'Inter' ,fontSize:mobile?'12px': '20px', fontWeight: "500", lineHeight: "24px", width:mobile?'100px':  '188px', height:mobile?'36px': "54px" , backgroundColor: '#07b0f5', color: '#fff',fontStyle:'normal' }}>
      Student
							  </CustomButton>
							  <Dialog open={open} PaperProps={{
										style: {
										  display: "flex",
										  justifyContent: "flex-end",
                      width: "382px", 
      height: "455px",borderRadius:'26px'
										  
										}
									  }}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
								>
							
        
              <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' , fontSize: '26px',fontWeight:'700',fontFamily:'Inter', color: '#333333',marginTop: '20px' }}>
      {"Join GorailsTech"}
      <IconButton onClick={handleClosepopup} color="primary" style={{ position: 'absolute', right: 20, top: 20 }}>
        <CloseIcon style={{ color: '#1e1e1e' }} />
      </IconButton>
    </DialogTitle>
    <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' ,fontSize: '12px',fontWeight:'500',fontFamily:'Inter',marginTop: '-25px'  }}>
      Discover top notes at gorailstech <br/> with just one click
    </DialogTitle>
          <DialogContent style={{overflow:'clip'}}>
          <Grid container lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
											  
		
											  <LoginSocialFacebook
												 
		appId="305111921952755"
		onResolve={(response) => {
			// console.log(response);
			// console.log(response.data);
					  
		
			localStorage.setItem('user', response.data.name);
			localStorage.setItem('useremail', response.data.email);
		// console.log(response.data, 'kiki');
		navigate('/Entries')
		
		}}
		onReject={(error) => {
		  console.log(error);
		}}
	  >
		<FacebookLoginButton  text="Sign up with Facebook" style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px'}} />
										  </LoginSocialFacebook>
										  </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
										  <LoginSocialGoogle client_id='823185166658-6v66lgg49in63v0q10rtl0rel6ap63l9.apps.googleusercontent.com' scope='profile email'
				  onResolve={(response) => {
					//   console.log(response.data);
					  
		
					  localStorage.setItem('user', response.data.name);
					  localStorage.setItem('useremail', response.data.email);
		// console.log(response.data, 'kiki');
		navigate('/Entries')
					
				  }}
				  onReject={(error) => {
					console.log(error);
				  }}>
					  <GoogleLoginButton text="Sign up with Google" style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px'}}/>
											  </LoginSocialGoogle>
											  </Grid>
    </Grid>
  
    
        <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
      <Typography variant="body1" style={{ fontSize: '12px',fontFamily:'Inter', color: '#333333' }}>
        OR
      </Typography>
    </Grid>
        <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
        <Button
      variant="contained"
      color="primary"
											  onClick={Gotopage}
      style={{ borderRadius: '36px', backgroundColor: '#000000',textTransform: 'none',fontSize:'16px',fontFamily:'Inter',fontWeight:600,width:'271px',height:'46px' }}
    >
      Sign up with Email
    </Button>
        </Grid>
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'12px'}}>
       
		<Typography onClick={Gotopage1 } sx={{fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500',color:'#5B5A5A'}}> Already have an account? <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Login</span></Typography>
        </Grid>
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'26px'}}>
          <Typography style={{ fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500' }}>By continuing, you agree to our <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Terms of <br/> Service</span>   and <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Privacy Policy.</span></Typography>
        </Grid>
      </DialogContent>
          <DialogActions style={{ justifyContent: "space-between"}}>
										
          
			
						
          </DialogActions>
								  </Dialog>
								  <Dialog open={open1} PaperProps={{
										style: {
										  display: "flex",
										  justifyContent: "flex-end",
                      width: "382px", 
      height: "455px",borderRadius:'26px'
										  
										}
									  }}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
								>
							
        
              <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' , fontSize: '26px',fontWeight:'700',fontFamily:'Inter', color: '#333333',marginTop: '20px' }}>
      {"Join GorailsTech"}
      <IconButton onClick={handleClosepopup1} color="primary" style={{ position: 'absolute', right: 20, top: 20 }}>
        <CloseIcon style={{ color: '#1e1e1e' }} />
      </IconButton>
    </DialogTitle>
    <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' ,fontSize: '12px',fontWeight:'500',fontFamily:'Inter',marginTop: '-25px'  }}>
      Discover top notes at gorailstech <br/> with just one click
    </DialogTitle>
          <DialogContent style={{overflow:'clip'}}>
          <Grid container lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
											  
		
											  <LoginSocialFacebook
												 
		appId="305111921952755"
		onResolve={(response) => {
			// console.log(response);
			// console.log(response.data);
					  
		
			localStorage.setItem('user', response.data.name);
			localStorage.setItem('useremail', response.data.email);
		// console.log(response.data, 'kiki');
		navigate('/Entries', { state: { fromReaderup: true } })
		
		}}
		onReject={(error) => {
		  console.log(error);
		}}
	  >
		<FacebookLoginButton  text="Sign up with Facebook" style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px'}} />
										  </LoginSocialFacebook>
										  </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
										  <LoginSocialGoogle client_id='823185166658-6v66lgg49in63v0q10rtl0rel6ap63l9.apps.googleusercontent.com' scope='profile email'
				  onResolve={(response) => {
					//   console.log(response.data);
					  
		
					  localStorage.setItem('user', response.data.name);
					  localStorage.setItem('useremail', response.data.email);
		// console.log(response.data, 'kiki');
		navigate('/Entries', { state: { fromReaderup: true } })
					
				  }}
				  onReject={(error) => {
					console.log(error);
				  }}>
					  <GoogleLoginButton text="Sign up with Google" style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px'}}/>
											  </LoginSocialGoogle>
											  </Grid>
    </Grid>
  
    
        <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
      <Typography variant="body1" style={{ fontSize: '12px',fontFamily:'Inter', color: '#333333' }}>
        OR
      </Typography>
    </Grid>
        <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
        <Button
      variant="contained"
      color="primary"
											  onClick={Gotopage2}
      style={{ borderRadius: '36px', backgroundColor: '#000000',textTransform: 'none',fontSize:'16px',fontFamily:'Inter',fontWeight:600,width:'271px',height:'46px' }}
    >
      Sign up with Email
    </Button>
        </Grid>
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'12px'}}>
       
		<Typography onClick={Gotopage3 } sx={{fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500',color:'#5B5A5A'}}> Already have an account? <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Login</span></Typography>
        </Grid>
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'26px'}}>
          <Typography style={{ fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500' }}>By continuing, you agree to our <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Terms of <br/> Service</span>   and <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Privacy Policy.</span></Typography>
        </Grid>
      </DialogContent>
          <DialogActions style={{ justifyContent: "space-between"}}>
										
          
			
						
          </DialogActions>
          </Dialog>
  </Grid>	
  <Grid item lg={5.8} xs={6} >
    <CustomButton onClick={() => setOpen(true)}variant='contained' sx={{ borderRadius: '8px', textTransform: 'none',fontFamily:'Inter', fontSize:mobile?'12px': '20px', fontWeight: "500", lineHeight: "24px", width: mobile?'100px': '188px', height:mobile?'36px': "54px", backgroundColor: '#07b0f5', color: '#fff',fontStyle:'normal' }}>
      Teacher
							  </CustomButton>
						
  </Grid>
</Grid>  }			  
				
</Grid>
<Grid container lg={5} xs={12}  >
							<Grid item  lg={12}  xs={12} sx={{marginTop:'-80px'}} >	
								
								
             
      {/* <Image
        duration={0}
        src="https://drive.google.com/uc?export=view&id=12Krz59BrmVX6APRgDE5YzM6vck2zHWwS"
        style={{ width: '456px', height: '456px', transitionDuration: '0', animation: '0', position: 'absolute', zIndex: 0 }}
      /> */}
                
                <Image
  duration={0}
  src={hero}
  style={{
    width:mobile?"290px":'426px',
    height:mobile?'290px': '426px',
    marginTop: mobile ? '156px' : '64px',
    transitionDuration: '0',
    animation: '0',
    zIndex: 1,
    borderRadius: '50%',
  // To maintain the aspect ratio of the image within the circle
  }}
/>
      
   
									
									
</Grid>			
						
				</Grid>
				

       
      <Grid container spacing={2} sx={{backgroundColor:'#ecf0f1', borderRadius:'26px',marginTop:mobile?'67px':'147px'}}>
	  <Grid item xs={12} lg={12}>
          <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>
            What We Offer
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph style={{textAlign:'center'}}>
            GoRails Tech provides a comprehensive platform for all your engineering notes needs. Here are some key features:
          </Typography>

        
        </Grid>	
					  <FeatureCard
              iconSrc={s1}
              title="Quality Content"
              description="Access high-quality engineering notes crafted by experts in the field."
            />
            <FeatureCard
              iconSrc={s2}
              title="Interactive Learning"
              description="Engage with interactive content to enhance your learning experience."
            />
            <FeatureCard
              iconSrc={s2}
              title="Collaborative Environment"
              description="Collaborate with fellow learners and share your knowledge."
            />
          </Grid>
		  <Grid container lg={12} xs={12} sx={{marginTop:mobile?'27px':'116px',marginBottom:'16px'}}>
  
  <Grid item lg={12} xs={12}>
  <Typography sx={{ textAlign: 'center',marginTop:'48px',color:'#1E1E1E',fontFamily:mobile?'Inter':'Inter' ,fontSize: mobile?'26px':'48px', fontWeight:mobile?'700': "700", }}>Single Page Notes</Typography>
  </Grid>
  <Grid item lg={12} xs={12}>
  <Typography sx={{ textAlign: 'center',marginTop:'0px',color:'#1E1E1E',fontFamily:'Inter' ,fontSize:mobile?'14px': '26px', fontWeight: "400", }}>Notes We Have Present With</Typography>
				  </Grid>
  <Grid container lg={10} xs={10} sx={{margin:'auto',}} >
				  <ImageSlider />
		
      
				  {/* <Grid item lg={1.7} sx={{marginTop:'63px'}} >
          <Image
          duration={0}
          src="https://drive.google.com/uc?export=view&id=1ALo4GanQJOsZM9XkaXMIQM0Yv5sjo_Tt"
          style={{ width: '72px', height: '90px', transitionDuration: '0', animation: '0', }}
        />
          </Grid> */}
          {/* <Grid item lg={1.7}  sx={{marginTop:'63px'}}>
          <Image
          duration={0}
          src="https://drive.google.com/uc?export=view&id=1rQQSZVoW6QRlotSY5CQgHt-r-GNEkKEX"
          style={{ width: '106px', height: '103px', transitionDuration: '0', animation: '0', }}
        />
</Grid>
<Grid item lg={1.7} sx={{marginTop:'63px'}} >
<Image
          duration={0}
          src="https://drive.google.com/uc?export=view&id=1CTsjPJg3DnjfU8RaTxlmkM1aA_ZSA0vL"
          style={{ width: '106px', height: '103px', transitionDuration: '0', animation: '0', }}
        />
</Grid>
<Grid item lg={1.7}  sx={{marginTop:'63px'}}>
<Image
          duration={0}
          src="https://drive.google.com/uc?export=view&id=1sdd7TzUHvpQA_vWdHk16DdSOYlyHnmzU"
          style={{ width: '106px', height: '103px', transitionDuration: '0', animation: '0', }}
        />
</Grid>
<Grid item lg={1.7} sx={{marginTop:'63px'}} >
<Image
          duration={0}
          src="https://drive.google.com/uc?export=view&id=1vxG9uPSOxvOLuOsSfu2TuCRlTGkDszeR"
          style={{ width: '79px', height: '77px', transitionDuration: '0', animation: '0', }}
        />
</Grid>
<Grid item lg={1.7} sx={{marginTop:'63px'}}>
<Image
          duration={0}
          src="https://drive.google.com/uc?export=view&id=1baDiiZu06dZ5JgiH5vcduuA1WQDOLuZ2"
          style={{ width: '106px', height: '103px', transitionDuration: '0', animation: '0', }}
        />
</Grid>
<Grid item lg={1.7} sx={{marginTop:'63px'}}>
<Image
          duration={0}
          src="https://drive.google.com/uc?export=view&id=1baDiiZu06dZ5JgiH5vcduuA1WQDOLuZ2"
          style={{ width: '106px', height: '103px', transitionDuration: '0', animation: '0', }}
        />
</Grid> */}

</Grid>

				  </Grid>
				  

{mobile?<Grid container lg={6} xs={9} sx={{margin:mobile?'auto':'',}}  >
  <Grid item lg={10} xs={12} sx={{marginTop:mobile?'35px':'0px'}}>
    <Typography sx={{textAlign:"initial", marginTop: '32px', fontFamily: mobile?'Inter': 'Inter', fontSize: mobile?'16px':'26px', fontWeight: mobile?'600': "600", color: '#07b0f5' }}>Single Page Revisions</Typography>
  </Grid>
  <Grid item lg={10} xs={12}>
    <Typography sx={{textAlign:mobile?'left':'left', fontFamily: mobile?'Inter': 'Inter', fontSize: mobile?'26px': '48px', fontWeight:mobile?'700':"700", color: '#1E1E1E' }}>Last Night Notes</Typography>
  </Grid>
  {/* <Grid item lg={11.5} xs={10.5} >
    <Typography sx={{textAlign:'left', fontFamily:mobile?'Inter': 'Inter', fontSize:mobile?'14px':'20px', fontWeight: mobile?'400': "400", color: '#1E1E1E',lineHeight:'146%' }}>Streamline your study with our<span style={{fontWeight:'600'}}> single-page revision notes </span>- the key to quick and effective exam preparation! <br/>
    Written by Harsha, published by Nu Voice Press, distributed by Simon and Schuster.<br/> </Typography>
  </Grid>
  <Grid item lg={12} xs={12} >
    <Typography sx={{textAlign:'left', fontFamily: mobile?'Inter': 'Inter', fontSize: mobile?'14px': '16px', fontWeight: mobile?'400': "400", color: '#766A6A' ,marginTop:'12px'}}>Published by:</Typography>
  </Grid>
  <Grid item lg={1.5} xs={10} sx={{ marginTop: '8px', display: mobile?'flex':'', justifyContent: mobile ? 'left' : '',  }}>
  <img
    duration={0}
    src="https://drive.google.com/uc?export=view&id=1ALo4GanQJOsZM9XkaXMIQM0Yv5sjo_Tt"
    style={{
      width: mobile ? '46px' : '63px',
      height: mobile ? '56px' : '77px',
      transitionDuration: '0',
      animation: '0',
      alignItems:'initial',
    }}
  />
</Grid> */}

</Grid>:''}





<Grid container lg={12} xs={12}>
  <Grid container lg={12} xs={12} sx={{marginTop:mobile?'20px':'166px',justifyContent:mobile?'center':''}}>
    <Grid container lg={6} xs={10}>
<Grid item lg={12} xs={12} >

<Image
          duration={0}
          src={sect1}
          style={{ width: mobile?'auto':'auto', height:mobile?'270px': '250px', transitionDuration: '0', animation: '0', zIndex: 1,borderRadius:'10px'}}
									  />
									 
</Grid>    


    </Grid>
   {mobile?'': <Grid container lg={6} xs={9} >
  <Grid item lg={10} xs={12}>
    <Typography sx={{textAlign:"initial", marginTop: '32px', fontFamily: 'Inter', fontSize: '26px', fontWeight: "600", color: '#07b0f5' }}>Single Page Revisions</Typography>
  </Grid>
  <Grid item lg={10} xs={12}>
    <Typography sx={{textAlign:'left', fontFamily: 'Inter', fontSize: '48px', fontWeight: "700", color: '#1E1E1E' }}>Last Night Notes</Typography>
  </Grid>
  <Grid item lg={11} xs={12}>
    <Typography sx={{textAlign:'left', fontFamily: 'Inter', fontSize: '20px', fontWeight: "400", color: '#1E1E1E',lineHeight:'146%' }}> Streamline your study with our<span style={{fontWeight:'600'}}> single-page revision notes </span>- the key to quick and effective exam preparation! <br/>
     </Typography>
  </Grid>
  {/* <Grid item lg={12} xs={12} >
    <Typography sx={{textAlign:'left', fontFamily: 'Inter', fontSize: '16px', fontWeight: "400", color: '#766A6A' ,marginTop:'12px'}}>Published by:</Typography>
  </Grid> */}
  {/* <Grid item lg={1.5} sx={{marginTop:'8px'}} >
  <Image
    duration={0}
    src="https://drive.google.com/uc?export=view&id=1ALo4GanQJOsZM9XkaXMIQM0Yv5sjo_Tt"
    style={{
   
      width: '63px',
      height: '77px',
      transitionDuration: '0',
      animation: '0',
    }}

  />
  </Grid> */}
</Grid>}

  </Grid>
</Grid>
<Grid container lg={12} xs={9} sx={{margin:mobile?'auto':'',}} >
  <Grid container lg={12} sx={{marginTop:'75px'}}>
  <Grid container lg={6} sx={{marginTop:mobile?'-60px':"0px"}}>
  <Grid item lg={10} xs={12}>
    <Typography sx={{textAlign:"initial", marginTop: '32px', fontFamily: mobile?'Inter': 'Inter', fontSize: mobile?'16px':'26px', fontWeight: mobile?'600': "600", color: '#07b0f5' }}>Single Page Revisions</Typography>
  </Grid>
  <Grid item lg={10} xs={12}>
    <Typography sx={{textAlign:mobile?'left':'left', fontFamily: mobile?'Inter': 'Inter', fontSize: mobile?'26px': '48px', fontWeight:mobile?'700':"700", color: '#1E1E1E' }}>Last Night Notes</Typography>
  </Grid>
  <Grid item lg={12} xs={12}>
    <Typography sx={{textAlign:'left', fontFamily:mobile?'Inter': 'Inter', fontSize:mobile?'14px':'20px', fontWeight: mobile?'400': "400", color: '#1E1E1E',lineHeight:'146%' }}>Master complex subjects effortlessly with our concise<span style={{fontWeight:'600'}}> single-page revision notes -</span>  your secret to exam success!<br/>
Written by Rajiv</Typography>
  </Grid>
  {/* <Grid item lg={12} xs={12}>
    <Typography sx={{textAlign:'left', fontFamily: mobile?'Inter': 'Inter', fontSize: mobile?'14px': '16px', fontWeight: mobile?'400': "400", color: '#766A6A' ,marginTop:'12px'}}>Published by:</Typography>
  </Grid>
  <Grid item lg={1.5} xs={10} sx={{ marginTop: '8px', display: mobile?'flex':'', justifyContent: mobile ? 'left' : '',  }} >
  <img
    duration={0}
    src="https://drive.google.com/uc?export=view&id=1ALo4GanQJOsZM9XkaXMIQM0Yv5sjo_Tt"
    style={{
   
      width: '63px',
      height: '77px',
      transitionDuration: '0',
      animation: '0',
    }}

  />
  </Grid> */}
</Grid>
<Grid container lg={6} xs={12} sx={{marginTop:mobile?'31px':'0px'}}>
<Grid item lg={12}  xs={12} >

								  <Image
									  duration={0}
									  src={sect1}
									  style={{ width:mobile?'auto': 'auto', height:mobile?'270px': '250px', transitionDuration: '0', animation: '0', zIndex: 1,borderRadius:'10px' }}
        />

</Grid>    
 

    </Grid>
  </Grid>
</Grid>

		

</Grid>
<Grid container lg={12} xs={12} sx={{ backgroundColor: '#FAF7F7', marginTop:mobile?'56px': '140px',  }}>
  <Grid container lg={12} xs={12} sx={{ margin:mobile?'0px': 'auto 64px', marginBottom: '64px' }}>
    <Grid item lg={12} xs={12}>
      <Typography sx={{ textAlign: 'center', marginTop: '64px', color: '#1E1E1E', fontFamily:mobile?'Inter': 'Inter', fontSize:mobile?'26px': '48px', fontWeight:mobile?'700': "700" }}>
        How <span style={{ color: '#07b0f5' }}>Gorails</span> Works
      </Typography>
    </Grid>
    <Grid container lg={11}  xs={10}sx={{ margin: 'auto', marginTop:mobile?'25px': '80px',justifyContent:mobile?'center':'' }}>
      <Grid container lg={4} xs={10} >
        <Grid item lg={2} xs={12} sx={{textAlign:mobile?'center':'initial'}}>
        <Typography sx={{ color: '#007585', fontFamily:mobile?'Inter': 'Inter', fontSize:mobile?'26px': '70px', fontWeight:mobile?'700': "600" }}>1</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography sx={{ fontFamily: mobile?'Inter':'Inter', fontSize:mobile?'20px': '40px', fontWeight: mobile?'600':"600", textAlign: mobile?'center':'initial' }}>
            Sign Up
          </Typography>
        </Grid>
        <Grid item lg={10.7} xs={12} sx={{ textAlign: 'left', width: '369px',}}>
          <Typography sx={{ fontFamily:mobile?'Inter': 'Inter', fontSize: mobile?'14px':'20px', fontWeight:mobile?'400': "400", textAlign:mobile?'center': 'initial' }}>
		  Sign up and share your valuable engineering notes. After verification, choose three sections that will be accessible to readers. Rest assured, your notes are 100% secure with us!
          </Typography>
        </Grid>
      </Grid>

      <Grid container lg={4} xs={10} sx={{marginTop:mobile?'25px':''}} >
         <Grid item lg={2} xs={12} sx={{textAlign:mobile?'center':'initial'}}>
        <Typography  sx={{ color: '#007585', fontFamily:mobile?'Inter': 'Inter', fontSize:mobile?'26px': '70px', fontWeight:mobile?'700': "600" }}>2</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography  sx={{ fontFamily: mobile?'Inter':'Inter', fontSize:mobile?'20px': '40px', fontWeight: mobile?'600':"600", textAlign:mobile?'center': 'initial' }}>
            Get Latest Notes
          </Typography>
        </Grid>
        <Grid item lg={10.7} xs={12} sx={{ textAlign: 'left' ,marginBottom:'32px'}}>
          <Typography sx={{ fontFamily:mobile?'Inter': 'Inter', fontSize: mobile?'14px':'20px', fontWeight:mobile?'400': "400", textAlign:mobile?'center': 'initial' }}>
		  Connect with your engineering community by sharing valuable insights, notes, and projects. Leave an impact with your knowledge and contribute to the collective learning experience.
          </Typography>
        </Grid>
      </Grid>

      <Grid container lg={4} xs={10} >
        <Grid item lg={2} xs={12} sx={{textAlign:mobile?'center':'initial'}}>
        <Typography sx={{ color: '#007585', fontFamily:mobile?'Inter': 'Inter', fontSize:mobile?'26px': '70px', fontWeight:mobile?'700': "600" }}>3</Typography>
       </Grid>
        <Grid item lg={12} xs={12}>
          <Typography sx={{ fontFamily: mobile?'Inter':'Inter', fontSize:mobile?'20px': '40px', fontWeight: mobile?'600':"600", textAlign:mobile?'center': 'initial' }}>
		  Inspire Learning
          </Typography>
        </Grid>
        <Grid item lg={10} xs={12} sx={{ textAlign: 'left' ,marginBottom:'32px'}}>
          <Typography sx={{ fontFamily:mobile?'Inter': 'Inter', fontSize: mobile?'14px':'20px', fontWeight:mobile?'400': "400", textAlign: mobile?'center':'initial' }}>
		  Bridge the gap between your engineering knowledge and fellow learners. Let’s contribute to the growth of your community and help them to grow in career to grow in career
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>






<Grid container lg={12} xs={12} sx={{backgroundImage:`url(${bgf})`,justifyContent:mobile?'center':'',marginTop:mobile?'-147px':''}}>
  <Grid container lg={8} xs={10} sx={{margin:'auto',marginTop:'86px',marginBottom:'86px',textAlign:'center'}}>
<Grid item lg={12} xs={12}>
  <Typography sx={{fontSize:mobile?'26px':'48px',fontWeight:mobile?'700':'700',fontFamily:mobile?'Inter':'Inter',color:'#ffffff',}}>What's percolating?</Typography>
</Grid>

<Grid item lg={12} xs={12} >
  {mobile? <Typography sx={{fontSize:mobile?'14px':'20px',fontWeight:mobile?'400':'400',fontFamily:mobile?'Inter':'Inter',color:'#ffffff'}}>"Welcome to the hub of academic enlightenment, bringing notes directly from the scholar's desk to your digital study space."</Typography>:
  <Typography sx={{fontSize:mobile?'14px':'20px',fontWeight:mobile?'400':'400',fontFamily:mobile?'Inter':'Inter',color:'#ffffff'}}>"Welcome to the hub of academic enlightenment, bringing notes directly from the scholar's desk to your digital study space."</Typography>
}</Grid>
{token?"":<Grid container lg={6}  xs={10} sx={{margin:'auto',marginTop:'30px'}}>
<Grid item lg={6} xs={6}>
    <CustomButton1 onClick={()=>setOpen1(true)}  variant='contained' sx={{ borderRadius:mobile?'8px': '12px', textTransform: 'none',fontFamily:'Inter' ,fontSize:mobile?'12px': '16px', fontWeight:mobile?'500': "500", lineHeight: "24px", width:mobile?'100px':  '180px', height: mobile?'36px':"48px" ,  backgroundColor: '#fff', color: '#07b0f5',fontStyle:'normal' }}>
      Student
    </CustomButton1>
	
  </Grid>	
  <Grid item lg={6} xs={6}>
    <CustomButton1  onClick={()=>setOpen(true)} variant='contained' sx={{ borderRadius:mobile?'8px': '12px', textTransform: 'none',fontFamily:'Inter' ,fontSize:mobile?'12px': '16px', fontWeight:mobile?'500': "500", lineHeight: "24px", width:mobile?'100px':  '180px', height:mobile?'36px': "48px" , backgroundColor: '#fff', color: '#07b0f5',fontStyle:'normal' }}>
   Teacher
    </CustomButton1>
    
  </Grid>
  </Grid>}	
  </Grid>
</Grid>
			
			
      </Grid>
      <Footer/>
      </>
  )
}

export default Landingpage