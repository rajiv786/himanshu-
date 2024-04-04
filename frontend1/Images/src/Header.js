import React from 'react'
import { Button, Grid, Popper, Typography,Box } from '@mui/material'
import { TextField, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Image from 'mui-image';
import { useState } from 'react';
import logo from './Images/logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Dialog from '@mui/material/Dialog';
// import { MuiCssBaseline } from '@mui/material';
import { LoginSocialFacebook,LoginSocialGoogle } from 'reactjs-social-login'
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons'
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Popover from '@mui/material/Popover';
import {Paper} from '@mui/material';
import { styled } from '@mui/system';
import  {useEffect } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import CrownIcon from './Crown';
import { useGoogleLogin } from '@react-oauth/google';
import 'typeface-inter';
import { Api_url } from './helper';
import { Link } from 'react-router-dom';
import MyComponent from './MyComponent';
const StyledPopover = styled(Popover)(({ theme }) => ({
	'& .MuiPaper-root': {
	  borderRadius: '26px',
		width: '488px', height: '362px', overflow: 'hidden'
		,padding:'46px 63px 93px 46px'
	},
}));
const UploadPopover = styled(Popover)(({ theme }) => ({
	'& .MuiPaper-root': {
	  borderRadius: '26px',
		width: '205px', height: '150px', overflow: 'hidden',padding:'26px'
	},
}));
const CustomButton = styled(Button)`
  &:hover {
    background-color: #05445e; /* or specify the desired background color */
  }
`;

const Header = () => {
	const navigate = useNavigate();
	const [photoUrl, setPhotoUrl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const [loginopen, setloginopen]=useState(false)
  const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	  navigate('/pro');
  };
const handlepopup = (e) => {
setOpen1(true)

	}
	const handlepopup2 = (e) => {
		setOpen1(false)
		
		}
const handlepopup1 = (e) => {
  setOpen2(false)
 
	}
	const handleChcc = () => { 
		
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('user1');
		navigate('/landing');
	}

  const handleClose = () => {
	  setAnchorEl(null);
	  setOpen3(false);
   
  };
const handleClosepopup =() =>{
  setOpen(false)
  
	}
	const handleClosepopup1 =() =>{
		setOpen3(false)
		
	}
	const handleClosepopup4 =() =>{
		setOpen4(false);
		
	}
	const handleClose2 = () => {
		setOpen4(false);
	}
	
	const handleloginopen = () => { 
		setloginopen(true)
	}
const handleLogout = () => {
    // Implement your logout logic here
    // Clear the token from localStorage or state
  };
  const id = open ? 'popover' : undefined;

  const handleSearch = () => {
    
  
	};
	const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
	
	const token = localStorage.getItem("token");
	const user = localStorage.getItem('user');
	const user1 = localStorage.getItem('user1');
	
    useEffect(() => {// sbse phle useeffect hi call hoyega
		const token = localStorage.getItem("token");
		const user = localStorage.getItem('user');
		
        if (token) {
          try {
            const decoded = jwt_decode(token);
           
            setUserData(decoded);
          } catch (error) {
            console.error(error);
          }
		}
		else if (user) {
			
			navigate('/Entries')
		  }
		
    
        // Fetch user data from the backend API
        fetchUserData();
      }, [user]);
      const fetchUserData = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            setError('Token not found.');
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
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
		  const fetchPhoto = async () => {
			const decoded = jwt_decode(token);
			const userId = decoded._id;
			try {
			  const response = await axios.get(`${Api_url}/Otp/users/photo/${userId}`, {
				responseType: 'arraybuffer',
				headers: {
				  Accept: 'image/png, image/jpeg',
				},
			  });
			  const blob = new Blob([response.data], { type: response.headers['content-type'] });
			  const url = URL.createObjectURL(blob);
			  setPhotoUrl(url);
			} catch (error) {
			  console.error(error);
			}
		  };
		  fetchPhoto();
		}
	  }, []);
    
	const Gotopage = () => { 
		navigate('/signup')
	}
	const Gotopage1 = () => { 
		navigate('/login')
	}
	const handleAccount = () => { 
		navigate('/Account')
	}
	const handleUpload = () => { 
		navigate('/myprofile')
	}
	const handleProfile = () => { 
		navigate('/Profile')
	}
	const handleExplore = () => { 
		navigate('/Explore')
	}
	const handleUploadGo = () => { 
		navigate('/Upload')
	}
	const handlePostGo = () => { 
		navigate('/Explore')
	}
	const handleUpload1 = () =>{ 
		setOpen2(true)
	}
	const handleauthor = () => {
		setOpen(true);
		setOpen3(false);
	}
	const [open4, setOpen4] = useState(false);
	const handlereader = () => {
		setOpen4(true);
		setOpen3(false);
	}
	const Gotopage2 = () => { 
		navigate('/signup', { state: { fromReaderup: true } })
	}
	const Gotopage3 = () => { 
		navigate('/login', { state: { fromReaderup: true } })
	}
	const handleSubjects = async(genres) => {
		window.location.href = `/home1?subjects=${genres}`;
	}
    
  return (
    <Grid container lg={12}>
        <Grid container lg={10.5} sx={{margin:'auto',marginTop:'25px'}}>
<Grid container lg={8}>
<Grid item lg={2}  sx={{    display: 'flex',
   justifyContent:'center',
					  alignItems: 'center'
				  }}  >
					  <Link to='/home'>
<Image
      Duration={0}
      src={logo}
      style={{
       
        width: '64px',
        height: '64px',
        transitionDuration: '0',
		  animation: '0',
		borderRadius:'64px'
      }}
						  />
						  </Link>
</Grid>
<Grid item lg={1.5}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
{/* <Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter'}}>Genres</Typography> */}


<Button
						  onClick={handlepopup}
  aria-describedby={id}
  endIcon={<KeyboardArrowDownIcon style={{ color: 'black' }} />}
><Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter',color:'black',textTransform:'none',textDecoration:'none'}}>Subjects</Typography>
</Button>
     
<StyledPopover
        id={id}
        open={open1}
        anchorEl={anchorEl}
        onClose={handlepopup2}
       style={{top:'60px',left:'15%',width:'488px',height:'451px'}}

        
      >
     <Box sx={{ bgcolor: 'background.paper'}}>
        <Grid item lg={12}>
        <Typography sx={{ p:'16px 16px 16px 9px',fontSize:'26px',fontWeight:'600',fontFamily:'Inter' }}>Subjects</Typography>
        </Grid>
        <Grid container  lg={12}>
          <Grid container lg={12}>
            <Grid container lg={3.5} sx={{display:'flex',justifyContent:'initial',alignItems:'center'}}>
<Grid item lg={10} >
  <Button onClick={()=>handleSubjects('CompilerDesign')} sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e',textTransform:'none'}}>CD</Button>
</Grid>
<Grid item lg={10} >
  <Button onClick={()=>handleSubjects('DigitalElectronics')} sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e',textTransform:'none'}}>DE</Button>
</Grid>

<Grid item lg={10}>
  <Button onClick={()=>handleSubjects('OperatingSystem')} sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e',textTransform:'none'}}>O.S</Button>
</Grid>
<Grid item lg={10} >
  <Button onClick={()=>handleSubjects('COA')}sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e',textTransform:'none'}}>COA</Button>
</Grid>
</Grid>
<Grid container lg={4.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<Grid item lg={10}>
  <Button onClick={()=>handleSubjects('ComputerNetworks')} sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e',textTransform:'none'}}>CN</Button>
</Grid>
<Grid item lg={10} >
  <Button onClick={()=>handleSubjects('DBMS')} sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e',textTransform:'none'}}>DBMS</Button>
</Grid>

<Grid item lg={10} >
  <Button onClick={()=>handleSubjects('TOC')} sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e',textTransform:'none'}}>TOC</Button>
</Grid>
<Grid item lg={12}  >
  <Button onClick={()=>handleSubjects('Algorithm')}sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e',textTransform:'none'}}>Algorithm</Button>
</Grid>
</Grid>
<Grid container lg={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center',}}>
<Grid item lg={10} >
  <Button onClick={()=>handleSubjects('DataStructure')} sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e',textTransform:'none'}}>DSA</Button>
</Grid>
<Grid item lg={10} >
  <Button onClick={()=>handleSubjects('Others')} sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e',textTransform:'none'}}>Programming</Button>
</Grid>

<Grid item lg={10} >
  <Button onClick={()=>handleSubjects('Math')} sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e',textTransform:'none'}}>Mathematics</Button>
</Grid>
<Grid item lg={10} >
  <Button onClick={()=>handleSubjects('Aptitude')} sx={{fontSize:'20px',fontFamily:'Inter',color:'#1e1e1e',textTransform:'none'}}>Aptitude</Button>
</Grid>
</Grid>
          </Grid>
         
        </Grid>
        </Box>
        </StyledPopover>
      
      
</Grid>
{/* <Grid item lg={1.8} sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
<Button sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter',textTransform:'none',color:"#1E1E1E"}} onClick={handleExplore}>Explore</Button>
</Grid> */}
<Grid item lg={8.1}  sx={{    display: 'flex',
   justifyContent:'center',
   alignItems:'center'}} >
<MyComponent/>
      </Grid>
</Grid>
<Grid container lg={4}>
    <Grid item lg={12}  sx={{    display: 'flex',
   justifyContent:'center',
					  alignItems: 'center'
				  }} >
					  {token||user||user1 ? <React.Fragment>
						  <Grid item lg={4}>
						  <Button
  onClick={handleUpload1}
  aria-describedby={id}
 
><Typography sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter',color:'black',textTransform:'none',textDecoration:'none'}} onClick={handleUploadGo}>Upload</Typography>
							  </Button> 
								  
							 
								 
	 
						  </Grid>
						  <Grid item lg={6}>
							  <Chip icon={<CrownIcon  />} sx={{background: '#07b0f5',color:'#FFF',width: '90%',borderRadius:'26px',fontSize:'16px',
								  height: '54px','&:hover': {
									background: '#07b0f5',
									color: '#05445e',
									cursor: 'default', // Prevent cursor change on hover
								  },
							  }} label="Gorails Tech Pro" onClick={handleClick} />
						
						  </Grid>
						  <Grid item lg={3}>
		  <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
        
										  <Avatar alt="User Avatar" src={photoUrl?photoUrl:'sss'} {...bindTrigger(popupState)} />
          
										  <Menu {...bindMenu(popupState)}>
										  <MenuItem onClick={handleUpload}>My Profile</MenuItem>
 <MenuItem onClick={handleProfile}>My Uploads</MenuItem>					  
            <MenuItem onClick={handleAccount}>Account Settings</MenuItem>
            <MenuItem onClick={handleChcc}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
							  </PopupState>
							  </Grid>
        </React.Fragment>
						  : <Grid item lg={7.5} sx={{display:'flex',justifyContent:'flex-end'}}>
							  <Button onClick={()=>setOpen3(true)} sx={{fontSize:'20px',fontWeight:'400',fontFamily:'Inter',textTransform:'none',color:"#1E1E1E"}}>Login</Button>
    <Dialog open={open3} PaperProps={{
										style: {
										  display: "flex",
										  justifyContent: "flex-end",
                      width: "382px", 
      height: "396px",borderRadius:'26px'
										  
										}
									  }}
        onClose={handleClose}
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
											  
		
					
											  <CustomButton onClick={handlereader} variant='contained' style={{
												  borderRadius: '36px', fontSize: '16px', fontFamily: 'Inter', fontWeight: 500, width: '271px', height: '46px', textTransform: 'none', backgroundColor: '#07b0f5',
												  '&:hover': {
													backgroundColor: '#05445e',
												  },}}>Sign up As Student</CustomButton>		
													
										  </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
      <Typography variant="body1" style={{ fontSize: '16px',fontFamily:'Inter', color: '#333333',fontWeight:'600' }}>
        OR
      </Typography>
    </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
					
					 			<Button onClick={handleauthor}  variant='contained' style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px', textTransform: 'none',backgroundColor:'#07b0f5','&:hover': {
          backgroundColor: '#05445e',
        },}}>Sign up As Teacher</Button>		
										
										  </Grid>
    </Grid>
  
    
        
       
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'12px'}}>
       
		<Typography onClick={Gotopage1 } sx={{fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500',color:'#5B5A5A'}}> Already have an account? <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Login</span></Typography>
        </Grid>
        <Grid item lg={12} sx={{textAlign:'center',display:'flex',justifyContent:'center',marginTop:'26px'}}>
          <Typography style={{ fontSize: '12px',fontFamily:'Inter', color: '#333333',fontWeight:'500' }}>By continuing, you agree to our<Link to='/terms'style={{textDecoration:"none"}}> <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Terms of <br/> Service</span></Link>   and<Link to='/privacy' style={{textDecoration:"none"}}> <span style={{ color: '#1e1e1e',fontWeight:'600',fontFamily:'Inter',fontSize:'12px' }}>Privacy Policy.</span></Link></Typography>
        </Grid>
      </DialogContent>
          <DialogActions style={{ justifyContent: "space-between"}}>
										
          
			
						
          </DialogActions>
							  </Dialog>
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
										  <LoginSocialGoogle client_id='823185166658-6v66lgg49in63v0q10rtl0rel6ap63l9.apps.googleusercontent.com'  scope='profile email'
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
							  <Dialog open={open4} PaperProps={{
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
      {"Join Gorailstech"}
      <IconButton onClick={handleClosepopup4} color="primary" style={{ position: 'absolute', right: 20, top: 20 }}>
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
					  </Grid>}
    
    </Grid>
    
</Grid>
        </Grid>
    </Grid>
  )
}

export default Header