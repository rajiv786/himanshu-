import React from 'react'
import { Button, Grid, Popper, Typography,Box } from '@mui/material'
import { TextField, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material'
import Image from 'mui-image'
import { createTheme } from '@mui/material';
import logo from './Images/logo.png';
import { ThemeProvider } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Dialog from '@mui/material/Dialog';
// import { MuiCssBaseline } from '@mui/material';
import { LoginSocialFacebook,LoginSocialGoogle } from 'reactjs-social-login'
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons'
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CrownIcon from './Crown';
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
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Select } from '@mui/material';
import {  Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MyComponent from './MyComponent';
import { useGoogleLogin } from '@react-oauth/google';
import 'typeface-inter';
import { Api_url } from './helper';
import { Link } from 'react-router-dom';
const StyledPopover = styled(Popover)(({ theme }) => ({
	'& .MuiPaper-root': {
	  borderRadius: '26px',
		width: '488px', height: '241px', overflow: 'hidden'
		,padding:'46px 63px 93px 46px'
	},
}));
const UploadPopover = styled(Popover)(({ theme }) => ({
	'& .MuiPaper-root': {
	  borderRadius: '26px',
		width: '195px', height: '110px', overflow: 'hidden'
		,padding:'26px'
	},
}));
const CustomButton = styled(Button)`
&:hover {
  background-color: #05445e; /* or specify the desired background color */
}
`;

const Mobileheader = () => {
	const navigate = useNavigate();
	const [photoUrl, setPhotoUrl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const [loginopen, setloginopen] = useState(false)
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [Category, setCategory] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [isArrowUp1, setIsArrowUp1] = useState(false);


	const mobile = useMediaQuery('(max-width:600px)');
	const handleauthor = () => {
		setOpen(true);
		setOpen3(false);
	}
	const [open4, setOpen4] = useState(false);
	const handlereader = () => {
		setOpen4(true);
		setOpen3(false);
	}
	const handleClosepopup4 =() =>{
		setOpen4(false);
		
	}
	const handleClose2 = () => {
		setOpen4(false);
	}
	const Gotopage2 = () => { 
		navigate('/signup', { state: { fromReaderup: true } })
	}
	const Gotopage3 = () => { 
		navigate('/login', { state: { fromReaderup: true } })
	}
  const toggleArrow = () => {
    setIsArrowUp(!isArrowUp);
  };
  const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	  navigate('/pro');
	};
	const theme = createTheme({
		components: {
			MuiListItemText: {
				styleOverrides: {
				  primary: {
					color: 'green', // Set the selected value color to green
				  },
				},
			},
			MuiSelect: {
				styleOverrides: {
				  root: {
					backgroundColor: 'red', // Change the background color of the closed Select
				  },
				},
			  },
		  MuiMenuItem: {
			styleOverrides: {
			  root: {
				'&:hover': {
				  backgroundColor: '#bdeafc', // Replace with your desired color
				},
				'&:focus': {
					backgroundColor:'#bdeafc', // Remove focus background color
				  },
				'&$selected': {
					backgroundColor: '#bdeafc', // Set the selected value color to green
				  },
			  },
			},
			},
			
		},
	  });
const handlepopup = (e) => {
setOpen1(true)
// console.log('yes ')
	}
	const handlepopup2 = (e) => {
		setOpen1(false)
		// console.log('yes ')
		}
const handlepopup1 = (e) => {
  setOpen2(false)
//   console.log('yes ')
	}
	const handleChcc = () => { 
		// console.log('sss');
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
//   console.log('yess')
	}
	const handleClosepopup1 =() =>{
		setOpen3(false)
		
		// console.log('yess')
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
    
    // console.log('Performing search...');
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
            // console.log(decoded);
            setUserData(decoded);
          } catch (error) {
            console.error(error);
          }
		}
		else if (user) {
			// console.log('yes')
			navigate('/Entries')
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
	const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };
      const handleDialogOpen = () => {
        setDialogOpen(true);
      };
    
	  const toggleArrow1 = () => {
		setIsArrowUp1(!isArrowUp1);
	  };
      const handleDialogClose = () => {
        setDialogOpen(false);
      };
      const handleGenre = async(genres) => {
        window.location.href = `/home1?genres=${genres}`;
      }
	return (
		<ThemeProvider theme={theme}>
    <Grid container lg={12} >
        <Grid container lg={10.5}  xs={10} sx={{margin:'auto',marginTop:'25px'}}>
		<Grid container lg={4 } xs={8}>
    <Grid item lg={2}>
      {/* Menu Icon */}
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>

      {/* Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} PaperProps={{ style: { width: '100%' } }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </div>
        {/* Your menu content goes here */}
        <div>
          {/* Menu items */}
          <Grid container  lg={12} xs={10} sx={{margin:'auto',marginTop:'-29px'}} alignItems="center">


          {token?  <Grid item lg={7} xs={12} >
						  <Chip icon={<CrownIcon />} sx={{background: '#E7CE84',color:'#07b0f5',width:mobile?'136px': '90%',borderRadius:'26px',fontSize:'16px',
								  height: mobile?'36px':'54px','&:hover': {
									background: '#E7CE84',
									color: '#07b0f5',
									cursor: 'default',
                 // Prevent cursor change on hover
								  },
							  }} label="Slushie Pro" onClick={handleClick} />
						
						  </Grid>:''}
          <Grid item lg={7} xs={9} sx={{    display: 'flex',marginTop:'15px',
   justifyContent:'center',
									  alignItems: 'center'
								  }} >
									  <MyComponent />

      </Grid>
      <Grid container lg={12} sx={{marginTop:'20px'}}>
      <Typography sx={{fontsize:'16px',fontFmaily:'Inter',fontWeight:'400'}}>Genres</Typography>
      {isArrowUp ? (
        <KeyboardArrowUpIcon onClick={toggleArrow} />
      ) : (
        <KeyboardArrowDownIcon onClick={toggleArrow} />
      )}
      {isArrowUp && (
        <Grid container lg={12} xs={12}>
        <Grid item lg={12} xs={12}>
          <Typography onClick={()=>handleGenre('COA')} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',lineHeight:'12px',marginTop:'16px'}}>COA</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography onClick={()=>handleGenre('DataStructure')} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'14px',lineHeight:'12px'}} >DataStructure</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography onClick={()=>handleGenre('ComputerNetworks')} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'14px',lineHeight:'12px'}}>ComputerNetworks</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography onClick={()=>handleGenre('Algorithm')} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'14px',lineHeight:'12px'}}>Algorithm</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography onClick={()=>handleGenre('Romance')} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'14px',lineHeight:'12px'}}>Romance</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography onClick={()=>handleGenre('Poetry')} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'14px',lineHeight:'12px'}}>Poetry</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography onClick={()=>handleGenre('DigitalElectronics')} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'14px',lineHeight:'12px'}}>DigitalElectronics</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography onClick={()=>handleGenre('DBMS')} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'14px',lineHeight:'12px'}}>DBMS</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography onClick={()=>handleGenre('OperatingSystem')} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'14px',lineHeight:'12px'}}>OperatingSystem</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography onClick={()=>handleGenre('FanDataStructure')} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'14px',lineHeight:'12px'}}>FanDataStructure</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography onClick={()=>handleGenre('Aptitude')} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'14px',lineHeight:'12px'}}>Aptitude</Typography>
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography onClick={()=>handleGenre('Thriller')} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'14px',lineHeight:'12px'}}>Thriller</Typography>
        </Grid>
      </Grid>

      )}
     
             
    

           <Grid item lg={12} xs={12} sx={{marginTop:'20px'}}>
           <Typography onClick={handlePostGo} sx={{FontWeight:'400',fontFamily:'Inter',fontSize:'16px',color:'#333335'}}> Explore</Typography>
            </Grid>

 {token?     <Grid container lg={12} xs={10} alignItems="center" sx={{marginTop:'20px'}}>
      <Typography sx={{FontWeight:'400',fontFamily:'Inter',fontSize:'16px',color:'#333335'
}}>Upload</Typography>
      {isArrowUp1 ? (
        <KeyboardArrowUpIcon onClick={toggleArrow1} />
      ) : (
        <KeyboardArrowDownIcon onClick={toggleArrow1} />
      )}
      {isArrowUp1 && (
        <Grid container item lg={12}>
          <Grid item lg={12} xs={12}>
            <Typography  onClick={handleUploadGo} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'16px',lineHeight:'12px'}}>Upload Notes</Typography>
          </Grid>
          <Grid item lg={12} xs={12}>
            <Typography onClick={handlePostGo} sx={{fontSize:mobile?'14px':'',FontWeight:mobile?'400':'',fontFamily:mobile?'Inter':'',color:'#5B5A5A',marginTop:'14px',lineHeight:'12px'}}>Post</Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
:''}
</Grid>

</Grid>

            {/* Add more menu items as needed */}
    
        </div>
      </Drawer>
      </Grid>


<Grid item lg={2}  sx={{    display: 'flex',
   justifyContent:'center',
					  alignItems: 'center'
				  }}  >
	<Link to='/home'>				 
<Image 
      Duration={0}
      src={logo}
      style={{
       
        width:mobile?'36px': '64px',
        height:mobile?'36px': '64px',
        transitionDuration: '0',
        animation: '0',
      }}
						  /></Link>
						 
</Grid>

    </Grid>
<Grid container lg={4} xs={4} sx={{justifyContent:'center'}}>
    <Grid item lg={12}  sx={{    display: 'flex',
   justifyContent:'center',
					  alignItems: 'center'
				  }} >
					  {token||user||user1 ? <React.Fragment>
						 
						 
						  <Grid item lg={3} xs={4}>
		  <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
        
										  <Avatar alt="User Avatar" src={photoUrl?photoUrl:'sss'} {...bindTrigger(popupState)} />
          
          <Menu {...bindMenu(popupState)}>
 <MenuItem onClick={handleUpload}> My Profile</MenuItem>
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
									  <Button onClick={()=>setOpen3(true)} sx={{fontSize:mobile?'12px':'20px',fontWeight:mobile?'500':'400',fontFamily:mobile?'Inter':'Inter',background:'transparent',border:'1px solid #07b0f5',color:'#07b0f5',textTransform:'none',borderRadius:'8px',width:mobile?'64px':'',height:mobile?'36px':''}}>Login</Button>
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
											  
										  <CustomButton onClick={handleauthor}  variant='contained' style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px', textTransform: 'none',backgroundColor:'#07b0f5'}}>Sign up As Author</CustomButton>		
								
												</Grid>
												<Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
      <Typography variant="body1" style={{ fontSize: '16px',fontFamily:'Inter', color: '#333333',fontWeight:'600' }}>
        OR
      </Typography>
    </Grid>
										  <Grid item lg={12} style={{ display: 'flex', justifyContent: 'center',marginTop:'8px' }}>
										  <CustomButton onClick={handlereader}  variant='contained' style={{borderRadius:'36px',fontSize:'16px',fontFamily:'Inter',fontWeight:500,width:'271px',height:'46px', textTransform: 'none',backgroundColor:'#07b0f5'}}>Sign up As Reader</CustomButton>		
									
											  </Grid>
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
      {"Join GorailsTech"}
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
			</ThemeProvider>
  )
}

export default Mobileheader