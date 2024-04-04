import { Password } from '@mui/icons-material';
import { Typography, Grid, Paper, Button } from '@mui/material';
import { useEffect } from 'react';
import { TextField, MenuItem } from '@mui/material';
import { IconButton, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import {Box} from '@mui/material';
import React, { useState } from 'react';
import Image from 'mui-image';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import {useMediaQuery} from '@mui/material';
import axios from 'axios';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {useLocation, useNavigate} from 'react-router-dom'
import { FormControlLabel, Checkbox } from '@mui/material';
import hero from './Images/Hero.png';
import 'typeface-inter';
import './InputComponent.css';
// import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Api_url } from './helper';
import { styled } from '@mui/system';
import 'typeface-inter';

const CustomButton = styled(Button)(({ theme, isInvalid }) => ({
	'&:hover': {
	  backgroundColor: isInvalid ? '#ff0000' : '#05445e',
	},
	background: isInvalid ? '#ff0000' : '#05445e',
	borderRadius: '12px',
	textTransform: 'none',
	width: '400px',
	height: '56px',
	fontSize: '20px',
	fontFamily: 'Inter',
	fontWeight: '500',
  }));
const CustomTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
	'& .MuiTooltip-tooltip': {
	  fontSize: '12px',
		  backgroundColor: 'white',
		  borderRadius: '7px',
	  padding:'20px 20px 20px 20px',
	  color: 'black',
	},
  }));
const Entries = () => {
	const email1 = localStorage.getItem('email1');
	const location = useLocation();
	const [showPassword1, setShowPassword1] = useState(false);
	const [showPassword2, setShowPassword2] = useState(false)
	const mobile = useMediaQuery('(max-width:600px)');
	const fromReaderup = location.state && location.state.fromReaderup;
	
const handleTogglePasswordVisibility1 = () => {
  setShowPassword1((prevShowPassword) => !prevShowPassword);
	};
	const handleTogglePasswordVisibility2 = () => {
		setShowPassword2((prevShowPassword) => !prevShowPassword);
	  };
	const user = localStorage.getItem('user');
	const useremail=localStorage.getItem('useremail')
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [agreeTerms, setAgreeTerms] = useState(false); 
  const handleSubmit = async (e) => {
	  e.preventDefault();
	  { useremail ? setEmail(useremail) : setEmail(email1) }
	  { user ? setName(user) : setName(Name) }
	  
	  setIsLoading(true);
    try {
      const { data: res } = await axios.post(`${Api_url}/Login/slush`, { Name,Email,Password,confirmPassword});
      // Handle response from the backend
		
		localStorage.removeItem('email');
		localStorage.removeItem('user')
		setIsLoading(false);
		
		navigate('/Login', { state: { fromSignup: true, fromReaderup } });
	} catch (error) {
		setIsLoading(false);
		toast.error('Email Already Exists !');
      console.error(error);
    }
   
	};
	const isFormValid = () => {
		return (
		  
		  Name.trim()!==''&&
		  Password.trim() !== '' &&
		  confirmPassword.trim() !== '' &&
		  Password === confirmPassword&&
		  agreeTerms
		);
	  };
    const months = [
        { value: '01', label: 'January' },
        { value: '02', label: 'February' },
        { value: '03', label: 'March' },
        { value: '04', label: 'April' },
        { value: '05', label: 'May' },
        { value: '06', label: 'June' },
        { value: '07', label: 'July' },
        { value: '08', label: 'August' },
        { value: '09', label: 'September' },
        { value: '10', label: 'october' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' },
        // ... add remaining months
      ];
      
      const days = Array.from({ length: 31 }, (_, index) => index + 1).map((day) => {
        const paddedDay = day.toString().padStart(2, '0');
        return { value: paddedDay, label: paddedDay };
      });
      
      const years = Array.from({ length: 100 }, (_, index) => 2023 - index).map((year) => {
        return { value: year.toString(), label: year.toString() };
	  });
	  const [anchorEl, setAnchorEl] = React.useState(null);

	  const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	  };
	
	  const handlePopoverClose = () => {
		setAnchorEl(null);
	  };
	
	  const open = Boolean(anchorEl);
   
	const [Email, setEmail] = useState(useremail || email1); // Initialize with useremail or email1
	const [Name, setName] = useState(user || '');
	
    const [Password, setPassword] = useState('');
    const [DOB, setBirthdate] = useState({
      day: '',
      month: '',
      year: ''
    });
    const [confirmPassword, setconfirmPassword] = useState('');
    const handleBirthdateChange = (name) => (event) => {
      setBirthdate((prevBirthdate) => ({
        ...prevBirthdate,
        [name]: event.target.value
      }));
	};
	const [passwordValidation, setPasswordValidation] = React.useState('');

	const handleHover = () => {
		setPasswordValidation('Must contain a number, special character, and both uppercase and lowercase letters. Must be at least 8 characters in length. Must not contain your name.');
	  };
	  
	
	const validatePassword = () => {
		// Implement your password validation logic here
		// Return true if password meets the requirements, otherwise false
		const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
		return (regex.test(Password));
	  };
	
	  const getPasswordValidationMessage = () => {
		let message = '';
		if (Password.length < 8) {
		  message = 'Password must be at least 8 characters in length.';
		} else if (!/\d/.test(Password)) {
		  message = 'Password must contain a number.';
		} else if (!/[a-z]/.test(Password)) {
		  message = 'Password must contain a lowercase letter.';
		} else if (!/[A-Z]/.test(Password)) {
		  message = 'Password must contain an uppercase letter.';
		} else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(Password)) {
		  message = 'Password must contain a special character.';
		} 
		return message;
	};
	useEffect(() => {
		// Set Email and Name when component initializes
		if (useremail) setEmail(useremail);
		if (user) setName(user);
	}, []);
	
	useEffect(() => {
		const handlePopstate = () => {
		  // Show a custom confirmation dialog
		  const confirmLeave = window.confirm('You have unsaved changes. Are you sure you want to leave?');
	
		  if (confirmLeave) {
			// Clear the token (perform your logout or token clearing logic here)
			// Redirect to the landing page
			// For example, you can use window.location.href or a router library
			  localStorage.removeItem('user');
			  localStorage.removeItem('email1');
			  localStorage.removeItem('useremail');// Remove the token
			window.location.href = '/landing'; // Redirect to the landing page
		  }
		};
	
		window.removeEventListener('popstate', handlePopstate);
	
		return () => {
		  // Remove the event listener when the component unmounts
		  window.addEventListener('popstate', handlePopstate);
		};
	  }, []);
  return (
   
     <Grid container spacing={0} lg={12} justifyContent="center" alignItems="center" sx={{ backgroundColor: '#07b0f5', minHeight:"100vh"}}>
		  <ToastContainer />
		  <Grid container lg={6}>
			  <Image src={hero} style={{width:"100%",height:mobile?'50vh':"100vh"}} />
		  </Grid>
  <Grid container lg={6}>
    <Paper sx={{ width: mobile?"85%":'100%', height: mobile?"609px":'100vh', justifyContent: 'center', display: 'flex', alignItems: 'center',padding:mobile?"32px 0 32px 0":'0px' }}>
     <Grid container lg={10} justifyContent="center" alignItems="center">
        <Grid item lg={12} sx={{ textAlign: 'center' ,}}>
          <Typography sx={{ fontSize: mobile?"20px":'26px', fontFamily: 'Inter', fontWeight: '600', marginTop: '10px' }}>Just A Second!</Typography>
        </Grid>
        <Grid item lg={10} sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: mobile?"10px":'12px', fontFamily: 'Inter', fontWeight: '400' }}>Discover top notes at gorailstech
with just one click! </Typography>
        </Grid>
        <Grid item lg={8} xs={10} sx={{ marginTop: '20px' }}>
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>Name</Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Enter your name"
            value={user?user:Name}
						  size="small"
						  disabled={user ? true : false}
						  className="custom-textfield"
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1', }}
          />
        </Grid>
        <Grid item lg={8} xs={10} >
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>Email</Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
            placeholder="Enter your email"
            value={useremail?useremail:email1}
						  size="small"
						
            disabled={email1?true:false}
            sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1' }}
          />
        </Grid>
        <Grid item lg={8} xs={10}>
					  <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>New Password
						  <CustomTooltip title={
							  <Box sx={{background:'#F788281A'}}>
        <Typography variant="body2" sx={{background:'white',color:'black'}}>
          <strong>Password requirements:</strong>
          <br />
          Must contain a number, special character, and both uppercase and lowercase letters.
          <br />
          Must be at least 8 characters in length.
          <br />
          Must not contain your name.
								  </Typography>
								  </Box>
      } arrow style={{fontSize:"12px",color:'black',background:'#F788281A'}}>
    <IconButton>
      <InfoIcon />
    </IconButton>
  </CustomTooltip></Typography>
          <TextField
            required
            fullWidth
            variant="outlined"
						  placeholder="Enter password"
						  type={showPassword1 ? 'text' : 'password'}
            value={Password}
						  size="small"
						  className="custom-textfield"
						  error={!validatePassword()}
						  helperText={getPasswordValidationMessage()}
						  InputProps={{ style: { height: "40px" },endAdornment: (
							<InputAdornment position="end">
							  <IconButton onClick={handleTogglePasswordVisibility1} edge="end">
								{showPassword1 ? <VisibilityOffIcon /> : <VisibilityIcon />}
							  </IconButton>
							</InputAdornment>
						  ), }}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1','& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
				borderColor: 'red',
			  }, }}
          />
        </Grid>
        <Grid item lg={8}xs={10} >
          <Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter' }}>Confirm Password</Typography>
          <TextField
            required
            fullWidth
						  variant="outlined"
						  type={showPassword2 ? 'text' : 'password'}
            placeholder="Confirm password"
            value={confirmPassword}
						  size="small"
						  className="custom-textfield"
            onChange={(e) => setconfirmPassword(e.target.value)}
						  sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1' }}
						  InputProps={{ style: { height: "40px" },endAdornment: (
							<InputAdornment position="end">
							  <IconButton onClick={handleTogglePasswordVisibility2} edge="end">
								{showPassword2 ? <VisibilityOffIcon /> : <VisibilityIcon />}
							  </IconButton>
							</InputAdornment>
						  ), }}
          />
        </Grid>
        
       
   
    <Grid item lg={8} xs={10}>
  <FormControlLabel 
    control={<Checkbox   checked={agreeTerms}
	onChange={(e) => setAgreeTerms(e.target.checked)}
  />}
    label={
      <span >
        By clicking this box, you agree to our
        <span style={{ color: '#07b0f5' }}> Terms of Service</span>
        {' '}
        and  <span style={{ color: '#07b0f5' }}> Privacy Policy.</span>
        {' '}
      </span>
    }
  />
</Grid>

<Grid item lg={8} xs={10} sx={{marginTop:'20px',marginBottom:'20px'}}>

					  <CustomButton onClick={handleSubmit}
						  type="submit"
						  variant="contained"
						  className="light"
						  sx={{
							mt: 0,
							mb: 0,
							background:"#07b0f5",
		  borderRadius:mobile?"8px": '12px',
		  textTransform: 'none',
		  width: mobile?"99%":'400px',
		  height: mobile?"39px":'56px',
		  fontSize:  mobile?"14px":'20px',
		  fontFamily: 'Inter',
		  fontWeight: '500'
						}}
						  isInvalid={!isFormValid()}
						  disabled={!isFormValid() || isLoading}
        >
     {isLoading ? <CircularProgress style={{ color: "#FFFFFF" }} />: 'Submit'}         
        </CustomButton>
     
        </Grid>
         </Grid>
        
    </Paper>		  
		  </Grid>
		  
</Grid>

   
  );
};

export default Entries;