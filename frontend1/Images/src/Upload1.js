import React, { useState,useEffect } from 'react';
import { Grid, Typography, TextField, Select, MenuItem,Button ,Box,Tooltip} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info'
import jwt_decode from "jwt-decode";
import Header from './Header';
import { Helmet } from 'react-helmet';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import { Api_url } from './helper';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Mobileheader from './Mobileheader';
import { alpha } from '@mui/material/styles';
import Footer from './Footer';
import './upload.css';
const CustomButton = styled(Button)`
  &:hover {
    background-color: #086266; /* or specify the desired background color */
  }
`;
// Import React and any necessary components


  
const Upload1 = () => {
	const navigate = useNavigate();
	const mobile = useMediaQuery('(max-width:600px)');
	const [Title, setTitle] = useState('')
	const [Synopsis, setSynopsis] = useState('');
	const [Category, setCategory] = useState('');
	const [target, setTarget] = useState('');
	const [language, setLanguage] = useState('');
	const [loading, setLoading] = useState(false);
	const [selectedFileName, setSelectedFileName] = useState('');
	const [selectedFileName2, setSelectedFileName2] = useState('');
	const [isSubmitDisabled, setIsSubmitDisabled] = useState(true); // Initialize the submit button as disabled
	const label = { inputProps: { 'aria-label': 'Color switch demo' } };
	// ... Your other functions
	const BlueSwitch = styled(Switch)(({ theme }) => ({
		'& .MuiSwitch-switchBase.Mui-checked': {
		  color: '#07b0f5', 
		  '&:hover': {
			backgroundColor: alpha('#07b0f5', theme.palette.action.hoverOpacity), // Change the color to #07b0f5
		  },
		},
		'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
		  backgroundColor: '#07b0f5', 
		},
	  }));
	
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
   
	const [isToggled, setIsToggled] = useState(false);
  
	const [isInfoDialogOpen, setInfoDialogOpen] = useState(false);
	
	const [inputValue, setInputValue] = useState('');
	const [chips, setChips] = useState([]);
	const [coverImageFile, setCoverImageFile] = useState(null);
  const [fullManuscriptFile, setFullManuscriptFile] = useState(null);
  const [sampleChaptersFile, setSampleChaptersFile] = useState(null);
  const token = localStorage.getItem("token");
	const decoded = jwt_decode(token);
	const userId = decoded._id;
	const handleInputChange = (event) => {
	  setInputValue(event.target.value);
	};
  
	const handleInputKeyDown = (event) => {
	  if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		addChip();
	  }
	};
  
	const addChip = () => {
	  if (inputValue.trim() !== '') {
		setChips((prevChips) => [...prevChips, inputValue.trim()]);
		setInputValue('');
	  }
	};
  
	const handleDeleteChip = (chipToDelete) => {
	  setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
	};
	const handleToggle = () => {
	  setIsToggled(!isToggled);
	};
	
	const handlePdf = (event) => {
		  const imageFile = event.target.files[0];
		// console.log(imageFile, 'flieke')
		setCoverImageFile(imageFile);
		};
	  const handlePdf1 = (event) => {
		  const imageFile = event.target.files[0];
		  if (imageFile) {
			setSelectedFileName(imageFile.name);
		  }
		//   console.log(imageFile, 'Full ManuScript')
		  setFullManuscriptFile(imageFile);
		};
		const handlePdf2 = (event) => {
			const pdfFile = event.target.files[0];
		
			if (pdfFile) {
				// Get the file extension
				const fileExtension = pdfFile.name.split('.').pop().toLowerCase();
		
				// Check if the file extension is 'pdf'
				if (fileExtension === 'pdf') {
					// File is a PDF, you can proceed with your logic here
					setSelectedFileName2(pdfFile.name);
					setSampleChaptersFile(pdfFile);
				} else {
					// File is not a PDF, show an error message or handle accordingly
					alert('Please select a PDF file.');
					// Optionally, you can clear the file input
					event.target.value = '';
				}
			}
		};
		
  
	const handleFileSelect = (event) => {
	  const selectedFile = event.target.files[0];
	  // Do something with the selected file, e.g., upload it to a server
	//   console.log('Selected File:', selectedFile);
	};
	const handleUploadButtonClick = () => {
	  // Trigger the file input click programmatically when the button is clicked
	  document.getElementById('coverImage').click();
	};
	const handleUploadButtonClick1 = () => {
		// Trigger the file input click programmatically when the button is clicked
		document.getElementById('file-input').click();
	  };
   
	  const handleUploadButtonClick2 = () => {
		// Trigger the file input click programmatically when the button is clicked
		document.getElementById('sampleChapters').click();
	};
	useEffect(() => {
		// Enable the submit button only when Title, Synopsis, Category, and pdf are filled
		if (Title && Synopsis && Category && sampleChaptersFile) {
		  setIsSubmitDisabled(false);
		} else {
		  setIsSubmitDisabled(true);
		}
	  }, [Title, Synopsis, Category, sampleChaptersFile]);
	const handleSaveChanges = () => {
		setLoading(true);
		const formData = new FormData();
		formData.append('title', Title);
		formData.append('synopsis', Synopsis);
		formData.append('category', Category);
		formData.append('target', target);
		formData.append('language', language);
		formData.append('isMature', isToggled);
		formData.append('userId', userId);
		chips.forEach((chip, index) => {
			formData.append(`chip${index + 1}`, chip);
		});
		formData.append('pdf', sampleChaptersFile);
		formData.append('pdfCover', fullManuscriptFile);
		formData.append('image', coverImageFile);
		// console.log(formData)
		for (const pair of formData.entries()) {
			// console.log(pair[0], pair[1]);
		  }
		axios.post(	`${Api_url}/Otp/upload`, formData)
		.then((response) => {
		  // Handle the response from the backend if needed
			// console.log('Data saved successfully!');
			setLoading(false);
			navigate('/profile')
		})
		.catch((error) => {
		  // Handle errors if the API request fails
			console.error('Error saving data:', error);
			if (error.response && error.response.status === 400) {
				const errorMessage = error.response.data; // Replace 'message' with the actual key in the response
				toast.error(errorMessage); // Show a specific error message from the backend
			  } else {
				toast.error('Error saving data.'); // Show a generic error toast message
			  }
			setLoading(false);
		});	
	 
	};
	const handleInfoIconClick = () => {
	  setInfoDialogOpen(true);
	};
	
	const handleInfoDialogClose = () => {
	  setInfoDialogOpen(false);
	};
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
	  const [passwordValidation, setPasswordValidation] = React.useState('');
	  const handleHover = () => {
		setPasswordValidation('Must contain a number, special character, and both uppercase and lowercase letters. Must be at least 8 characters in length. Must not contain your name.');
		};
	return (
		<ThemeProvider theme={theme}>
			<Helmet>
			<meta name="title" content="Upload Your Manuscript - Share Your Literary Work on Slushie" />
     
         
	 <meta name="description" content="Upload your manuscript on Slushie and share your literary masterpiece with the world. Easily publish your writing and connect with fellow authors. Start your writing journey today" />
   </Helmet>
			{mobile ? <Mobileheader /> : <Header />}
			<ToastContainer />
	   <Grid container lg={12} sx={{ justifyContent: 'center', alignItems: 'center',marginTop:'76px' }}>
	<Grid container lg={10} xs={12} sx={{justifyContent:mobile?'center':""}}>
	<Grid container lg={4} xs={12} sx={{justifyContent:mobile?'center':""}}>
	<Grid item lg={10} xs={10}>
  <Box sx={{ backgroundColor: '#FAF7F7', borderRadius: '12px', marginTop: '0px', height: mobile?"240px":'442px',display:'flex', justifyContent:'center',alignItems:'center' }}>
    {/* Hidden input file */}
    

    {/* Upload button */}
   
								{coverImageFile ? <Grid container lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
									<img src={URL.createObjectURL(coverImageFile)} alt="cover" width={mobile ? '122px' :'200px'} height={mobile ? '141px' : '300px'} />
								<input type="file" id="coverImage" accept="image/*" onChange={handlePdf} style={{ display: 'none' }} />
								
								<Grid container lg={12} xs={12} alignItems="center" justifyContent="center" sx={{marginTop:"12px"}}>
									<Grid item lg={12} xs={12}>
									<label htmlFor="coverImage" style={{ cursor: 'pointer' }}>
								
								<Typography
								style={{
								  color: '#07b0f5',
								  borderRadius: '8px',
								  marginTop: '0px',
								  textAlign: 'center',
								  cursor: 'pointer',
								}}
							  >
								Change Cover
									</Typography>
									
								</label>
									</Grid>
								</Grid>
								</Grid> : <>
								<input type="file" id="coverImage" accept="image/*" onChange={handlePdf} style={{ display: 'none' }} />
								
									<label htmlFor="coverImage" style={{ cursor: 'pointer' }}>
									<InsertPhotoOutlinedIcon style={{width:'80px',height:'80px'}} />
										<Typography
        style={{
          color: '#07b0f5',
          borderRadius: '8px',
          marginTop: '0px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        Add a cover
										</Typography>
										
									</label>
									</>}
							</Box>
							<CustomTooltip title={
								<Box sx={{background:'white'}}>
		  <Typography variant="body2" sx={{background:'white',color:'black'}}>
			<strong>Add a story cover</strong>
			<br />
			Stories with a cover image get 23x
more reads than ones without
			<br />Must be in PNG, GIF, or JPG format, smaller than 2MB. Recommended cover dimensions: 512x800 pixels.<br />
  
									</Typography>
									</Box>
		} arrow style={{fontSize:"12px",color:'black',background:'#FAF7F7'}}>
	  <IconButton
              sx={{
                position: 'absolute',
										top:mobile?"324px": '550px',
				left:mobile?"75%":"28%"
              }}
            >
		<InfoIcon />
	  </IconButton>
									</CustomTooltip>
</Grid>

	  </Grid>
	  
	  <Grid container lg={8} xs={10} sx={{ backgroundColor: '#FAF7F7',marginTop:mobile?"36px":"0px",borderRadius:mobile?'8px':"12px" }}>
		<Grid container lg={12} xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
		  <Grid item lg={10} xs={11.2} sx={{ marginTop: '32px' }}>
			<Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600' }}>
			  Tell Us About your Notes
			</Typography>
			<hr style={{ margin: '16px 0', border: 'none', borderTop: '1px solid #07b0f5' }} />
		  </Grid>
		  <Grid item lg={10} xs={11.2}>
			<Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter', marginTop: '8px' }}>
			  Title
			</Typography>
			<TextField
			  required
			  fullWidth
			  variant="outlined"
			  placeholder="Write your title"
			  value={Title}
			  size="small"
			 
			  onChange={(e) => setTitle(e.target.value)}
			 
			  sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1', marginTop:'8px', }}
			  
			/>
		  </Grid>
		
		  <Grid item lg={10} xs={11.2}>
	<Typography sx={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', fontFamily: 'Inter', marginTop: '8px' }}>
	  Description
	</Typography>
	<TextField
	  required
	  fullWidth
	  variant="outlined"
	  placeholder="Write your description"
	  value={Synopsis}
	  size="large"
	  multiline 
	  rows={5}  
	  onChange={(e) => setSynopsis(e.target.value)}
	  sx={{ mb: 2, borderRadius: '6px', backgroundColor: '#F4F1F1', marginTop:'8px', }}
	/>
  </Grid>
  
  
  
  <Grid container spacing={0.5}  lg={10} xs={11.2}>
  <Grid item lg={6.5} xs={11.2}>
	<Typography
	  sx={{
		textAlign: 'left',
		fontSize: '16px',
		fontWeight: '700',
		fontFamily: 'Inter',
		marginTop: '8px',
	  }}
	>
	  Category
	</Typography>
	<Select
	  required
	  fullWidth
	  variant="outlined"
	  value={Category}
	  size="small"
	  onChange={(e) => setCategory(e.target.value)}
	  displayEmpty
	  IconComponent={KeyboardArrowDownIcon}
	  sx={{
		mb: 2,
		borderRadius: '6px',
		backgroundColor: '#F4F1F1',
		marginTop:'8px',
		'& .MuiSelect-root': {
		  pl: '10px',
		},
		// Adding styles for the icon here
		'& .MuiSelect-icon': {
		  color: '#1e1e1e', 
		},
	  }}
	>
	  <MenuItem disabled value="">
	<Typography variant="body1" style={{ fontSize: '14px', fontFamily: 'Inter' }}>
	Select a category
	</Typography>
  </MenuItem>
	  <MenuItem value="CompilerDesign">Compiler Design</MenuItem>
	  <MenuItem value="DigitalElectronics">Digital Electronics</MenuItem>
	  <MenuItem value="OperatingSystem">Operating System</MenuItem>
	  <MenuItem value="COA">Computer organisations and Architecture</MenuItem>
	  <MenuItem value="ComputerNetworks">Computer Networks</MenuItem>
	  <MenuItem value="DBMS">Database Management System</MenuItem>
	  <MenuItem value="TOC">Theory of Computation</MenuItem>
	  <MenuItem value="Algorithm">Algorithm</MenuItem>
	  <MenuItem value="DataStructure">Data Structure</MenuItem>
	  <MenuItem value="Math">Mathematics</MenuItem>
	  <MenuItem value="Aptitude">Aptitude</MenuItem>
	  <MenuItem value="Others">Others</MenuItem>
	</Select>
  
  </Grid>
  </Grid>
  <Grid item lg={10} xs={11.2}>
	<Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600' }}>
	  Tags
								
								<CustomTooltip title={
								<Box sx={{background:'white'}}>
		  <Typography variant="body2" sx={{background:'white',color:'black'}}>
			<strong>Help readers find your story</strong>
			<br />
			Adding tags can help increase 
			<br />discoverability.<br/>
			Tags should be a word or concept, <br/> reflective of your story’s themes and subgenres. You can use upto
  5 tags.
			<br />
  
									</Typography>
									</Box>
		} arrow style={{fontSize:"12px",color:'black',background:'#FAF7F7'}}>
	  <IconButton>
		<InfoIcon />
	  </IconButton>
									</CustomTooltip>
								</Typography>
								<Grid container lg={12}>
  <Grid item lg={3.5}>
	<TextField
	  variant="standard"
	  value={inputValue}
	  onChange={handleInputChange}
	  onKeyDown={handleInputKeyDown}
	/>
  
									</Grid>
  <Grid item lg={7.5} style={{display:'flex',marginLeft:'5px',marginRight:'5px' ,flexWrap: 'wrap',marginTop:mobile?'10px':'0px'}} >
  {chips.map((chip) => (
          <Grid item lg={3.5+ (chip.length * 0.1)}
            key={chip}
		  style={{
			  justifyContent: 'center', display: 'flex', alignItems: 'center', padding: '6px 11px', border: '1px solid #07b0f5', borderRadius: '32px', fontSize: '14px', fontFamily: 'Inter', color:"#07b0f5",
			fontStyle: 'normal',fontWeight: 400,marginLeft:"8px",marginRight:"8px", marginBottom: '8px', }}
          >
            {chip}
           
			<CloseIcon style={{ width: '20px',height: '20px',color: '#07b0f5' }}  onClick={() => handleDeleteChip(chip)} />
          
          </Grid>
        ))}
									</Grid>
									</Grid>
  </Grid>
  
  
  
  
  
  
   <Grid container spacing={0.5}  lg={10} xs={11.2}>
  {/* <Grid item lg={6.5} xs={11.2} sx={{marginTop:'15px'}}>
	<Typography
	  sx={{
		textAlign: 'left',
		fontSize: '16px',
		fontWeight: '700',
		fontFamily: 'Inter',
		marginTop: '8px',
	  }}
	>
	Target Audience
	</Typography>
	<Select
	  required
	  fullWidth
	  variant="outlined"
	  value={target}
	  size="small"
	  onChange={(e) => setTarget(e.target.value)}
	  displayEmpty
	  IconComponent={KeyboardArrowDownIcon}
	  sx={{
		mb: 2,
		borderRadius: '6px',
		backgroundColor: '#F4F1F1',
		marginTop:'8px',
		'& .MuiSelect-root': {
		  pl: '10px',
		},
		// Adding styles for the icon here
		'& .MuiSelect-icon': {
		  color: '#1e1e1e', 
		},
	  }}
	>
	  <MenuItem disabled value="">
	<Typography variant="body1" style={{ fontSize: '14px', fontFamily: 'Inter' }}>
	Select your primary audience?
	</Typography>
  </MenuItem>
	  <MenuItem value="Young Adult (13-18 yaers of age)">Young Adult (13-18 years of age)</MenuItem>
	  <MenuItem value="New Adult (18-25 years of age)">New Adult (18-25 years of age)</MenuItem>
	  <MenuItem value="Adult ( 25+ years of age)">Adult ( 25+ years of age)</MenuItem>
	 
	
	</Select>
  </Grid> */}
  </Grid>
  <Grid container spacing={0.5}  lg={10} xs={11.2}>
  <Grid item lg={6.5} xs={11.2} sx={{marginTop:'8px'}}>
	<Typography
	  sx={{
		textAlign: 'left',
		fontSize: '16px',
		fontWeight: '700',
		fontFamily: 'Inter',
		marginTop: '8px',
	  }}
	>
   Language
	</Typography>
	<Select  
	  required
	  fullWidth
	  variant="outlined"
	  value={language}
	  size="small"
	  onChange={(e) => setLanguage(e.target.value)}
	  displayEmpty
										IconComponent={KeyboardArrowDownIcon}
										className="custom-select"
	  sx={{
		mb: 2,
		borderRadius: '6px',
		backgroundColor: '#F4F1F1',
		marginTop:'8px',
		'& .MuiSelect-root': {
		  pl: '10px',
		  },
		  '& .MuiOutlinedInput-input.MuiSelect-input': {
			  '&:hover': {
				  backgroundColor: 'red', // Change to the desired hover color
			  }
		  },
		// Adding styles for the icon here
		'& .MuiSelect-icon': {
		  color: '#1e1e1e', 
		  },
		
	  }}
	>
	  <MenuItem disabled value="">
	<Typography variant="body1" style={{ fontSize: '14px', fontFamily: 'Inter' }}>
  
	Select language
  
	</Typography>
  </MenuItem>
  <MenuItem value="English">English</MenuItem>
	  <MenuItem value="Hindi"  >Hindi</MenuItem>
	  <MenuItem value="French">French</MenuItem>
	  <MenuItem value="Japanese">Japanese</MenuItem>
	  <MenuItem value="Spanish">Spanish</MenuItem>
	 
	
	</Select>
  </Grid>
  
  </Grid>
  <Grid container lg={10} xs={11.2}>
	{/* <Grid item lg={2} xs={4}>
  
	
		<Typography sx={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '600' }}>
		  Rating 
		  <IconButton
			color="#1E1E1E"
			aria-label="info"
			style={{ marginLeft: '8px', padding: 0,color:'#1e1e1e' }}
		  >
			<InfoIcon />
		  </IconButton>
		</Typography>
		</Grid>
		<Grid item lg={10} xs={8}>
		<FormGroup>
		  <FormControlLabel
			control={<BlueSwitch {...label} checked={isToggled}
			onChange={handleToggle}  color="warning" />}
			label="Mature"
		  />
		</FormGroup>
	  </Grid>
  
	 <Grid item lg={10} xs={10}>
		<Typography sx={{fontWeight:'400',fontSize:mobile?"12px":'16px',fontFamily:'Inter',color:'#787373'}}>Your story contains graphic depictions of violence, sexuality, strong language, and/ or other mature themes. For more info, please read Slushie’s Content Guidelines: <span style={{ color: '#07b0f5' }}>https://www.slushie.com/guidelines</span> </Typography>
		</Grid> */}
		{/* <Grid item lg={6.5} sx={{ marginTop: '26px' }}>
	<input type="file" id="file-input"  accept="application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handlePdf1} style={{ display: 'none' }} />
	<label id="file-input">
	  <Button
		variant="contained"
		color="primary"
		style={{
		  background: '#F4F1F1',
		  border: '1px solid #07b0f5',
		  color: '#07b0f5',
		  borderRadius: '8px',
		  textTransform: 'none', 
		}}
		onClick={handleUploadButtonClick1}
	  >
		Upload Full Manuscript 
	  </Button>
	  <CustomTooltip title={
								<Box sx={{background:'white'}}>
		  <Typography variant="body2" sx={{background:'white',color:'black'}}>
			<br />
													
													A finished manuscript increases the chance of getting published.<br />
Your full manuscript will be locked from public viewing & can only be seen by a publisher once they ask for it.<br />
Your full manuscript & uploaded sample chapters are safeguarded from piracy.
			
									</Typography>
									</Box>
		} arrow style={{fontSize:"12px",color:'black',background:'#FAF7F7'}}>
	  <IconButton
            >
		<InfoIcon />
	  </IconButton>
									</CustomTooltip>
									</label>
									{selectedFileName && <Typography variant="body2">{selectedFileName}</Typography>}
  </Grid> */}
  
		<Grid item lg={7.5} sx={{marginTop:'20px',marginBottom:'29px'}}>
	 
	 <input type="file" id="sampleChapters"  accept="application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handlePdf2} style={{ display: 'none' }} />
	 {/* <Button variant="contained" color="primary" onClick={handleUploadButtonClick}>
	   Upload
	 </Button> */}
	 <label id="sampleChapters">
	 <Button variant="contained" color="primary" style={{ background: '#F4F1F1', border: '1px solid #07b0f5', color: '#07b0f5', borderRadius: '8px',textTransform:'none'}} onClick={handleUploadButtonClick2}>
	 Upload Notes
	  
	 </Button>
	 </label>
	
	 {selectedFileName2 && <Typography variant="body2">{selectedFileName2}</Typography>}
 
	 
	 </Grid>
	
  <Grid container lg={12} >
  <Grid item lg={12} xs={11} sx={{margin:'auto',marginTop:'0px',marginBottom:'40px',display:'flex',justifyContent:'end'}}>
	 <CustomButton
	variant="contained"
	color="primary"
	onClick={handleSaveChanges}
	disabled={isSubmitDisabled || loading} 
	sx={{
	  borderRadius: '8px',
	  backgroundColor: '#07b0f5',
	  fontSize:'16px',fontWeight:'500',fontFamily:'Inter' ,textTransform:'none'
	}}
  >
{loading ? 'Please Wait...' : 'Submit'}	
  </CustomButton>
  
  </Grid>
  </Grid>
	 
	  </Grid>
  
  
  
		</Grid>
	  </Grid>
	</Grid>
  </Grid>
  <Footer/>
	  </ThemeProvider>
	)
  }

export default Upload1