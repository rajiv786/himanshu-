import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { Grid, Typography ,TextField, Divider} from '@mui/material';
import { Api_url } from './helper';
import { Button } from '@mui/material';
import Image from 'mui-image'
import jwtDecode from 'jwt-decode';
import logo from './Images/logo.png';
// import './App.css';
import { Helmet } from 'react-helmet';
import { IconButton } from '@mui/material';
import { Document, Page, pdfjs } from "react-pdf";
import CloseIcon from '@mui/icons-material/Close';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import {  Menu, MenuItem } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@mui/material';
import Mobileheader from './Mobileheader';
import WhatsappIcon from './WhatsppIcon';
import Facebookicon from './Facebookicon';
import Instagramicon from './Instagramicon';

import LinkedinIcon from './LinkedinIcon';
import {SvgIcon} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { CircularProgress, CircularProgressLabel } from '@mui/material';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import { ThumbUpAlt } from '@mui/icons-material'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import sbd from 'sbd';
import jwt_decode from "jwt-decode";
import { InputAdornment } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CommentIcon from './CommentIcon';
import SendIcon from '@mui/icons-material/Send';
import { useMediaQuery } from '@mui/material';
import { formatDistanceToNow ,formatDuration} from 'date-fns';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { format } from 'date-fns';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import {motion} from 'framer-motion';
import Footer from './Footer';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles(() => ({
	outerContainer: {
	  display: 'flex',
	  justifyContent: 'space-between',
	  alignItems: 'flex-start',
	   // Adjust the padding as needed
	},
	innerContainer: {
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	  position: 'relative',
	  '&::after': {
		content: '""',
		width: '1px',
		height: '100%',
		backgroundColor: '#B2ADAD',
		position: 'absolute',
		top: 0,
		right: 0,
	  },
	  '&:last-child::after': {
		content: 'none', // Remove vertical line from the last container
	  },
	},
  }));
const FilesViewer = () => {
	const classes = useStyles();
	const [extractedText, setExtractedText] = useState('');
	const [commentText, setCommentText] = useState('');
	const [chapterHeadings, setChapterHeadings] = useState([]);
  const [imageData, setImageData] = useState('');
	const [title, setTitle] = useState('');
	const [images, setImages] = useState([]);
	const [synopsis, setSynopsis] = useState('');
	const [photoUrl, setPhotoUrl] = useState(null);
	const mobile = useMediaQuery('(max-width:600px)');
	const[del,setdel]=useState(false)
	const [text, setText] = useState('');
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
  
	const onDocumentLoadSuccess = ({ numPages }) => {
	  setNumPages(numPages);
	};
  
	const nextPage = () => {
		if (pageNumber < numPages) {
			const windowHeight = window.innerHeight; // Get the height of the viewport
			const scrollAmount = windowHeight * 0.2; // Calculate 30% of the viewport height
		
			// Scroll smoothly to the top of the page
			window.scrollTo({
			  top: mobile?820:250, // Scroll to the top
			  behavior: 'smooth' // Use smooth scrolling behavior
			});
		setPageNumber(pageNumber + 1);
	  }
	};
  
	const previousPage = () => {
	  if (pageNumber > 1) {
		setPageNumber(pageNumber - 1);
	  }
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
	const [showDialog, setShowDialog] = useState(false);
  const currentUrl = window.location.href;
	const paragraphsPerPage = 4;
	const [pages, setPages] = useState([]);
	const charactersPerParagraph = 1500;
	const [progress, setProgress] = useState(0);
	const[isLoading,setLoading]=useState(false);
  const [pageIndex, setPageIndex] = useState(0);
	const [userData, setUserData] = useState(null);
	const [comments, setComment] = useState([]);
	const [commentsCount, setCommentsCount] = useState(0);
	const [userPhotos, setUserPhotos] = useState({});
	const [userNames, setUserNames] = useState({});
	const [open, setOpen] = useState(false);
	const [anchorEl1, setAnchorEl1] = useState(null);
	const [anchorEl2, setAnchorEl2] = useState(null);
	const [isDialogOpen, setDialogOpen] = useState(false);
	const [isDialogOpen2, setDialogOpen2] = useState(false);
	const [hasVoted, setHasVoted] = useState(false);
	const [openDialog1, setOpenDialog] = useState(false);
	const [voteCount, setVoteCount] = useState(0);
	const [selectedValue, setSelectedValue] = useState('');
  const [copied, setCopied] = useState(false);
  const open1 = Boolean(anchorEl1);
	const open2 = Boolean(anchorEl2);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleClose = () => {
	  setOpen(false);
	  setAnchorEl1(null);
	  setAnchorEl2(null);
  };
  const handleClick = (event) => {
	  setAnchorEl1(event.currentTarget);
	//   console.log('coming here');
	};
	const handleClick2 = (event) => {
		setAnchorEl2(event.currentTarget);
		// console.log('coming here2');
	  };
	const handleCloseDialog1 = async() => {
		// Close the dialog
		setDialogOpen(false);
		setAnchorEl1(false);
		setAnchorEl2(false);
		setDialogOpen2(false);
		setDialogOpen(false)
	};
	const handleReport=( commentId,commentvalue)=> async()=>{
		const queryParams = new URLSearchParams(window.location.search);
	  const storyId = queryParams.get('fileId');
		try{
	//   console.log(storyId,commentId,commentvalue,selectedValue)
	//   console.log(selectedValue); 
		   const response = await axios.post(`${Api_url}/Otp/reportf/${storyId}/${commentId}/${commentvalue}/${selectedValue}`);
			//  console.log(response.data);
			 
			
			setSelectedValue('')
		  setOpenDialog(false)
		  setDialogOpen(false);
		  setDialogOpen2(false);
			setAnchorEl1(null);
			setAnchorEl2(null);
		  } catch (error) {
			console.error('Error adding comment:', error);
			setOpenDialog(false)
			setAnchorEl1(null);
			setAnchorEl2(null);
		   
	  
		  }
		}
	const handleReport1 = (itemId, commentId, commentContent) =>async()=> {
		// Logic for handling the report
		// You can put your report handling code here
	
		// Open the dialog
		// console.log('open dialog');
		// console.log(itemId, commentId, commentContent);
		// console.log(isDialogOpen,'isDialogOpen');
		setDialogOpen(true);
	};
	const handleReport2 = (itemId, commentId, commentContent) =>async()=> {
		// Logic for handling the report
		// You can put your report handling code here
	
		// Open the dialog
		// console.log('open dialog');
		// console.log(itemId, commentId, commentContent);
		// console.log(isDialogOpen,'isDialogOpen');
		setDialogOpen2(true);
	};
	const handleDeleteClick = (commentId) => async () => {
		const userId = localStorage.getItem('token');
		const userId1 = jwtDecode(userId);
		const storyId = userId1._id;
		try {
		  const response = await axios.post(`${Api_url}/Otp/deletef/${storyId}/${commentId}`);
		//   console.log(response.data);
		 
		 setdel(!del)
		setOpenDialog(false)
		setAnchorEl1(null);
			setAnchorEl2(null);
		} catch (error) {
		  console.error('Error adding comment:', error);
			setOpenDialog(false)
			setAnchorEl1(null);
			setAnchorEl2(null);
	
		}
	  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
	}
	const handleCloseDialog = async () => {
		setOpen(false);
		setAnchorEl1(false);
		setAnchorEl2(false);
		setOpenDialog(false);
	  };
	
	const queryParams = new URLSearchParams(window.location.search);
	  const fileId = queryParams.get('fileId');
	// console.log(fileId, 'file')
	useEffect(() => {
		// Make a GET request to fetch the image and other details using the fileId
		const queryParams = new URLSearchParams(window.location.search);
		const fileId = queryParams.get('fileId');
		setLoading(true)
		axios
		  .get(`${Api_url}/Otp/api/images/${fileId}`)
		  .then((response) => {
			  const { imageData, title, synopsis,userId } = response.data;
			//   console.log(response.data);
			  setImageData(imageData);
			  
			setTitle(title);
			  setSynopsis(synopsis);
			//   console.log(userId)
			  if (userId) {
				// If userId is present, make another GET request to fetch additional details
				axios.get(`${Api_url}/sign/user/${userId}`)
					.then((userDataResponse) => {
					//   console.log(userDataResponse.data,'response')
					
					  setUserData(userDataResponse.data);
						
						// console.log(userData,'statev')
				  })
				  .catch((error) => {
					console.error('Error fetching user data:', error);
				  });
				  axios.get(`${Api_url}/Otp/users/photo/${userId}`, {
					responseType: 'arraybuffer',
					headers: {
					  Accept: 'image/png, image/jpeg',
					  },
				  })
				  .then((photoResponse) => {
					const blob = new Blob([photoResponse.data], { type: photoResponse.headers['content-type'] });
					const url = URL.createObjectURL(blob);
					  setPhotoUrl(url);
					  setLoading(false);
				  }).catch((error) => {
					console.error('Error fetching user photo:', error);
				  });
			  }
		  })
		  .catch((error) => {
			console.error('Error fetching image and details:', error);
		  });
	}, []);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};
	const [pdfBase64, setPdfBase64] = useState('');

  useEffect(() => {
    // Make a GET request to fetch the PDF Base64 string from the backend
    axios
      .get(`${Api_url}/Otp/filesimg/${fileId}`)
      .then((response) => {
        setPdfBase64(response.data.pdfBase64);
      })
      .catch((error) => {
        console.error('Error fetching PDF:', error);
      });
  }, [fileId]);
	  
	  
	const [readCount, setReadCount] = useState(0);
	
	useEffect(() => {
	  axios.get(`${Api_url}/Otp/readCount/${fileId}`)
		  .then((response) => {
			// console.log(response.data,'reasdcount')
		  setReadCount(response.data.readCount);
		})
		.catch((error) => {
		  console.error('Error fetching read count:', error);
		});
	}, [fileId]);
	
	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
	  const fileId = queryParams.get('fileId');
	//   console.log(fileId,'file')
		// Fetch comments from backend
		axios.get(`${Api_url}/Otp/comments/${fileId}`)
			.then((response) => {
				// console.log(response.data, 'commetns');
				setComment(response.data);
				setCommentsCount(response.data.length);
				
		  })
		  .catch((error) => {
			console.error('Error fetching comments:', error);
		  });
	  }, [fileId,del]);
 
	

 
  useEffect(() => {
    const fetchUserDetails = async () => {
      const userDetailsPromises = comments.map((comment) =>
        fetchUserDetailsById(comment.userId).then((userDetails) => ({
          userId: comment.userId,
          userName: userDetails.userName,
        }))
      );

      Promise.all(userDetailsPromises)
        .then((userDetailsArray) => {
          const namesMap = {};
          userDetailsArray.forEach((userDetails) => {
            namesMap[userDetails.userId] = userDetails.userName;
          });
          setUserNames(namesMap);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    };

    fetchUserDetails();
  }, [comments]);
 
	const handleNextPage = () => {
		const windowHeight = window.innerHeight; // Get the height of the viewport
		const scrollAmount = windowHeight * 0.2; // Calculate 30% of the viewport height
	
		// Scroll smoothly to the top of the page
		window.scrollTo({
		  top: mobile?820:180, // Scroll to the top
		  behavior: 'smooth' // Use smooth scrolling behavior
		});
    setPageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevPage = () => {
    setPageIndex((prevIndex) => prevIndex - 1);
  };

  const currentPageParagraphs = pages.slice(
    pageIndex * paragraphsPerPage,
    pageIndex * paragraphsPerPage + paragraphsPerPage
  ).filter((paragraph) => paragraph.trim() !== '');
  
	const handleCommentSubmit = () => {
	// Submit the comment using axios or any other method
	const queryParams = new URLSearchParams(window.location.search);
	const fileId = queryParams.get('fileId');
		// console.log(fileId, 'file')
		const token = localStorage.getItem('token');
		const decoded = jwt_decode(token);
			const userId = decoded._id;
		const commentData = {
			fileId: fileId, // replace with the actual fileId
			comment: commentText,
			userId: userId, // replace with the actual userId
		  };
	axios
	  .post(`${Api_url}/Otp/Otp/comments`, { commentData })
	  .then((response) => {
		// Update the comments state with the new comment
		setComment([...comments, response.data]);
		// Clear the comment input
		setCommentText('');
	  })
	  .catch((error) => {
		console.error('Error submitting comment:', error);
	  });
  };
  useEffect(() => {
	const fetchUserPhotos = async () => {
	  const photosPromises = comments.map((comment) =>
		fetchUserPhoto(comment.userId).then((photoUrl) => ({
		  userId: comment.userId, // Use comment.userId directly
		  photoUrl,
		}))
	  );
  
	  Promise.all(photosPromises)
		.then((userPhotosArray) => {
		  const photosMap = {};
		  userPhotosArray.forEach((photoData) => {
			photosMap[photoData.userId] = photoData.photoUrl;
		  });
		  setUserPhotos(photosMap);
		})
		.catch((error) => {
		  console.error('Error fetching user photos:', error);
		});
	};
  
	fetchUserPhotos();
  }, [comments]);

  // fetchUserPhoto function remains the same
// Inside the second useEffect where you're fetching user photos
const fetchUserPhoto = async (userId) => {
	try {
	  const photoResponse = await axios.get(`${Api_url}/Otp/users/photoc/${userId}`, {
		responseType: 'arraybuffer',
		headers: {
		  Accept: 'image/png, image/jpeg',
		},
	  });
  
	  const blob = new Blob([photoResponse.data], { type: photoResponse.headers['content-type'] });
	  const url = URL.createObjectURL(blob);
	  return url;
	} catch (error) {
	  console.error('Error fetching user photo:', error);
	  return null;
	}
  }
  const fetchUserDetailsById = async (userId) => {
    try {
      const userDetailsResponse = await axios.get(`${Api_url}/sign/user/${userId}`);
		const { Name } = userDetailsResponse.data;
		// console.log(userDetailsResponse.data, 'usernammama');
		// console.log(Name, 'namess')
		
		return { userName: Name };
    } catch (error) {
      console.error('Error fetching user details:', error);
      return { Name: 'Unknown' };
    }
	};	
	useEffect(() => {
		const token = localStorage.getItem('token');
		const userData1 = jwt_decode(token);
		// console.log(userData1,'votedssss')
		if (userData1 && userData1) {
		  // Check if the user has voted for this file
			// console.log(userData,'boted')
		  axios.get(`${Api_url}/Otp/voted/${fileId}`, { params: { userId: userData1._id } })
			.then((response) => {
			//   console.log(response.data, 'votegoted');
				setHasVoted(response.data.hasVoted);
			
				setVoteCount(response.data.voteCount);
			})
			.catch((error) => {
			  console.error('Error checking voted status:', error);
			});
		}
	  }, [fileId, userData]);
	  
	
	const handleVoteClick = () => {
		const token = localStorage.getItem('token');
		const userData1 = jwt_decode(token);
		// console.log(userData1,'votedssss')
		  if (!hasVoted) {
			//   console.log('already voted');
		  // Send a POST request to mark the file as voted
		  axios.post(`${Api_url}/Otp/vote/${fileId}`, { userId: userData1 })
			.then(() => {
			  setHasVoted(true);
			})
			.catch((error) => {
			  console.error('Error marking as voted:', error);
			});
		  }
		  else {
			// Send a POST request to mark the file as not voted
			axios.delete(`${Api_url}/Otp/vote/${fileId}`, { data: { userId: userData1 } })
			  .then(() => {
				setHasVoted(false);
			  })
			  .catch((error) => {
				console.error('Error marking as not voted:', error);
			  });
		  }
	  };
  if (isLoading) {
    // Show the progress bar while loading
	  return (
		  <Grid container sx={{ display: 'flex', justifyContent: 'center', background: "#07b0f5",height:'100vh' }}>
			  <Grid item lg={12} xs={12} sx={{alignItems:'center',justifyContent:'center',display:'flex',alignItems:mobile?'':''}}>
			  <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
			  <Image
      Duration={0}
      src={logo}
      style={{
       
        width: '164px',
        height: '164px',
        transitionDuration: '0',
        animation: '0',
      }}
					  />
					    </motion.div>
			  </Grid>
			  <Grid item lg={12}  xs={12} sx={{display:'flex',justifyContent:'center',marginTop:mobile?'28px':'0px'}}>
			  <Typography sx={{color:'#FFFFFF',fontSize:'16px',display:'none'}}>
					  Please wait ...
				  </Typography>
				  </Grid>
			  </Grid>
    );
  }
  
  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
	};
	const toke = localStorage.getItem('token');
	const toke1 = jwt_decode(toke);
	const userId = toke1._id;
	const handleFacebookShare = () => {
		const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
		window.open(facebookShareUrl, '_blank');
	  };
	
	  const handleWhatsAppShare = () => {
		const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
		window.open(whatsappShareUrl, '_blank');
	  };
	
	  const handleLinkedInShare = () => {
		const linkedInShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentUrl)}`;
		window.open(linkedInShareUrl, '_blank');
	};
	const handleInstagramShare = () => {
		const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(currentUrl)}`;
		window.open(instagramShareUrl, '_blank');
	};
	
  return (
	  <ThemeProvider theme={theme}>
		  <Helmet>
		  <meta name="title" content="Manuscript Viewer - Preview Your Manuscripts on Slushie" />
     
         
        <meta name="description" content="Preview and review your manuscripts on Slushie's File Viewer. See how your literary work looks before sharing it with the world. Refine your writing with ease" />
      </Helmet>
      {mobile ? <Mobileheader /> : <Header />}
     
		  <Grid container lg={12} xs={12}>
			  <Grid container lg={7} xs={10} sx={{margin:'auto',marginTop:"50px",marginBottom:"96px"}}>
			  <Grid container lg={4} xs={12} sx={{justifyContent:'center'}}>
			  <img src={`${imageData}`} alt="Image" style={{ width: mobile?'180px':'240px', height: mobile?'216px': '303px',borderRadius:'12px' }} />
				  </Grid>  
				  <Grid container lg={8} xs={12} sx={{justifyContent:'center'}}>
				  <Grid container lg={10} xs={12} sx={{marginTop:mobile?'36px':"0",marginBottom:mobile?'28px':"0"}}>
				  <Typography sx={{fontSize:mobile?"20px":'32px',fontFamily:'Inter',fontWeight:'700',color:'#1E1E1E'}}>{title}</Typography>
					  </Grid>
					  <Grid container lg={10}>
				  <Typography sx={{fontSize:'16px',fontFamily:'Inter',fontWeight:'400',color:'#1E1E1E'}}>{synopsis}</Typography>
					  </Grid>
					 
					  <Grid container lg={10} xs={12} className={classes.outerContainer} sx={{marginTop:mobile?"28px":"20px",marginBottom:mobile?"10px":"20px"}}>
						  <Grid container lg={4} xs={4} className={classes.innerContainer}>
							  <Grid container lg={12} xs={12} sx={{justifyContent:'space-between'}}>
							  <Grid item lg={2} xs={2}>
							  <VisibilityOutlinedIcon color='#787373' style={{color:'#787373',width: mobile ? "16px" :"24px",height:mobile ? "16px" :"24px"}}/>
							  </Grid>
							  <Grid item lg={8} xs={8}>
							<Typography sx={{color:'#787373',fontSize:'16px'}}>  Reads  </Typography>
							  </Grid> 
							  </Grid>
							 
							  <Grid item lg={12}xs={12} sx={{justifyContent:'center',display:'flex'}}>
							  <Typography sx={{ color: '#1E1E1E', fontSize: '16px', fontWeight: '700', lineHeight:'normal', fontFamily: 'Inter'}}> {readCount} </Typography>
							  </Grid>
							  
							 
						  </Grid>
				
						  <Grid container lg={4} xs={4}  className={classes.innerContainer}>
						  <Grid container lg={12} xs={12} sx={{justifyContent:'space-between',marginLeft:"10px"}}>
							  <Grid item lg={2} xs={2}>
						  <ThumbUpAltOutlinedIcon color='#787373' style={{color:'#787373',width: mobile ? "16px" :"24px",height:mobile ? "16px" :"24px"}} />
							  </Grid>
							  <Grid item lg={8} xs={8}>
							<Typography sx={{color:'#787373',fontSize:'16px'}}> Likes</Typography>  
								  </Grid>
								  </Grid>
							  <Grid item lg={12} xs={12} sx={{justifyContent:'center',display:'flex'}}>
							  <Typography sx={{ color: '#1E1E1E', fontSize: '16px', fontWeight: '700', lineHeight:'normal', fontFamily: 'Inter'}}> {voteCount} </Typography>
							  </Grid>
							  
						  </Grid>
						 
						  <Grid container lg={4} xs={4}  className={classes.innerContainer}>
						  <Grid container lg={12} xs={12} sx={{justifyContent:'space-between',marginLeft:"10px"}}>  
							  <Grid item lg={2} xs={2}>
							  <CommentIcon color='#787373' style={{color:'#787373',width: mobile ? "16px" :"24px",height:mobile ? "16px" :"24px"}} />
							  </Grid>
							  <Grid item lg={8} xs={8}>
							  <Typography sx={{color:'#787373',fontSize:mobile?'14px':'16px'}}> Comments  </Typography>
							  </Grid>
							  <Grid item lg={12} xs={12} sx={{justifyContent:'center',display:'flex'}}>
									
									  <Typography sx={{ color: '#1E1E1E', fontSize: '16px', fontWeight: '700', lineHeight:'normal', fontFamily: 'Inter'}}> {commentsCount} </Typography>
								  </Grid>
								  </Grid>
						  </Grid>
					  </Grid>
					  <Grid container lg={10} xs={12} sx={{marginTop:mobile?"26px":"0"}}>
					  {userData ? <Grid container lg={5} xs={8} sx={{alignItems:'center'}}>
						  <Grid item lg={4} xs={2.5}>
						  <Avatar src={photoUrl} alt="Image"  />
						  </Grid>
						  <Grid item lg={8} xs={9.5}>
						  <Typography sx={{fontSize:'16px',fontFamily:'Inter',fontWeight:'600',color:'#000'}}>{userData.Name}</Typography>
							  </Grid>
						
						  </Grid> : 'Please wait'}
						  </Grid>
				  </Grid>
			  </Grid>
			 
		  </Grid>
		  <Grid container lg={12} xs={12} sx={{ background: '#e4eaed' }}>
			  <Grid item lg={12} xs={12}>
				  <Typography  sx={{ fontSize: mobile?"20px":'26px', fontFamily: 'Inter', fontWeight: '600',color:'#1E1E1E',lineHeight:'24.96px',marginTop:'36px',textAlign:'center' }}>Sample Chapter</Typography>
			  </Grid>
			  <Grid item lg={8} xs={10} sx={{ margin: 'auto', marginTop: "56px", marginBottom: "64px" }}>
			  <div id="pdf-container" style={{ width: mobile?'100%':"", height: mobile?'70vh':"" }}>
				  <Document 
						  file={`${pdfBase64}`}
						  onLoadSuccess={onDocumentLoadSuccess}  
    onContextMenu={(e) => e.preventDefault()}
    noData="Loading PDF..."
  >
						  <Page   pageNumber={pageNumber} renderTextLayer={false} width={mobile?window.innerWidth * 0.9:window.innerWidth * 0.65} // Adjust the width as needed
            height={mobile?window.innerHeight * 0.8:window.innerHeight * 0.65}
            renderAnnotationLayer={false} />
					  </Document>
					  </div>
			
				
			
			  {numPages > 0 ? (
          <div>
						  {/* Render the paragraphs if there is text */}
						  

						  <Grid container lg={12} sx={{marginTop:'20px'}}>
							  
						 
						    <Grid item lg={6} sx={{display:'flex'}}>
					  
							{pageNumber > 1 &&
						  
						 
						  <Button variant='outlined'onClick={previousPage} style={{backgroundColor:'#07b0f5',color:'#FFFFFF',textDecoration:'none',textTransform:'none',borderRadius:'8px',fontSize:mobile ? '12px' :'16px',padding:'12px 20px',width:mobile ? '136px' :"185px",height:mobile ? '40px' :'48px',marginRight:'20px'}}>Show Previous</Button>
			
								  }
								  { pageNumber !== numPages &&
								<Button variant='outlined' onClick={nextPage} style={{ backgroundColor: '#07b0f5', color: '#FFFFFF', textDecoration: 'none', textTransform: 'none', borderRadius: '8px', fontSize: mobile ? '12px' : '16px', padding:mobile?"8px 16px": '12px 20px', width: mobile ? '136px' : "95px", height: mobile ? '40px' : '48px' }}>Next <KeyboardArrowRightIcon color='#FFFFFF' style={{ width: mobile ? "16px" :"18px",height:mobile ? "16px" :"18px"}} /> </Button>
							  	  
								  }
								  
					  
						  </Grid>
						  <Grid item lg={6} sx={{display:'flex',justifyContent:'center',marginTop:mobile?'30px':""}}>
					  
							
						  
						 
						  <Button variant={hasVoted ? 'contained' : 'outlined'} onClick={handleVoteClick} style={{ color: hasVoted ? "#FFFFFF" : '#07b0f5', backgroundColor: hasVoted ? "#07b0f5" : '', textDecoration: 'none', textTransform: 'none', borderRadius: '8px', border: '1px solid #07b0f5', fontSize: mobile ? '12px' : '16px', padding: mobile ? "8px 16px" : '12px 20px', height: mobile ? "40px" : '48px', marginRight: '20px' }}><ThumbUpAltOutlinedIcon style={{ width: mobile ? "16px" :"18px",height:mobile ? "16px" :"24px",marginRight:'8px'}}/>{hasVoted ? 'Liked' : 'Like'}</Button>
			
						  
					  <Button variant='outlined'onClick={handleOpen} style={{color:'#07b0f5',textDecoration:'none',textTransform:'none',borderRadius:'8px',border:'1px solid #07b0f5',fontSize:mobile ? '12px' :'16px',padding:mobile?"8px 16px":'12px 20px',height:mobile?"40px":'48px'}}><IosShareOutlinedIcon style={{ width: mobile ? "16px" :"24px",height:mobile ? "16px" :"24px"}}/>Share</Button>
					  <Dialog open={open} onClose={handleClose} PaperProps={{
          style: {
   
borderRadius:'26px',width:'75%'
            
          }
										  }}>
	<DialogTitle style={{marginTop:'25px',fontWeight:'600',textAlign:mobile?'center':'initial'}}>Share with Friends</DialogTitle>
	<IconButton
      aria-label="Close"
      onClick={handleClose}
      sx={{
        position: 'absolute',
        top: '8px',
        right: '8px',
      }}
    >
      <CloseIcon />
    </IconButton>
	<DialogContent>
	<Grid container spacing={2} sx={{marginBottom:mobile?'10px':'0px',justifyContent:mobile?'center':'initial'}}>
      <Grid item>
        <SvgIcon component={Instagramicon} onClick={handleInstagramShare} sx={{ width: '36px', height: '36px', color: '#E4405F' }} />
      </Grid>
      <Grid item>
        <SvgIcon component={WhatsappIcon} onClick={handleWhatsAppShare} sx={{ width: '36px', height: '36px', color: '#0A66C2' }} />
      </Grid>
      <Grid item>
        <SvgIcon component={Facebookicon}  onClick={handleFacebookShare} sx={{ width: '36px', height: '36px', color: '#1877F2' }} />
      </Grid>
      <Grid item>
        <SvgIcon component={LinkedinIcon}   onClick={handleLinkedInShare} sx={{ width: '36px', height: '36px', color: '#0A66C2' }} />
      </Grid>
      
    </Grid>
	{mobile?'': <Grid>
            <input type="text" value={currentUrl} readOnly style={{width:mobile?'200px':"400px",height:"40px",marginTop:mobile?'10px':'26px',borderRadius:'8px'}} />
            <button onClick={copyToClipboard} style={{width:mobile?'204px':"80px",height:mobile?'35px':"40px",marginLeft:mobile?'0px':'10px',backgroundColor:'#07b0f5',color:'#fff',fontSize:mobile?'10px':'',borderRadius:mobile?'6px':'8px',fontWeight:mobile?'500':'',fontFamily:'Inter',marginTop:mobile?'8px':'0px'}}>
              {copied ? 'Copied' : 'Copy'}
            </button>
          </Grid>}
		  {mobile?  <Grid container lg={12 } xs={12} >
            <Grid item lg={6} xs={12} sx={{display:mobile?'flex':'block',justifyContent:mobile?'center':''}}>
            <input type="text" value={currentUrl} readOnly style={{width:mobile?'200px':"400px",height:"40px",marginTop:mobile?'10px':'26px',borderRadius:'8px'}} />
            </Grid> 
           <Grid item lg={4} xs={12} sx={{display:mobile?'flex':'',justifyContent:mobile?'center':''}}>
            <button onClick={copyToClipboard} style={{width:mobile?'204px':"80px",height:mobile?'35px':"40px",marginLeft:mobile?'0px':'10px',backgroundColor:'#07b0f5',color:'#fff',fontSize:mobile?'10px':'',borderRadius:mobile?'6px':'8px',fontWeight:mobile?'500':'',fontFamily:'Inter',marginTop:mobile?'8px':'0px'}}>
              {copied ? 'Copied' : 'Copy'}
            </button>
            </Grid>
          </Grid>:''}
	</DialogContent>
	<DialogActions>
	
	</DialogActions>
  </Dialog>
					  </Grid>
      </Grid>
				
						
				
          </div>
       
				  ) : (<>
					 
						
				  
          <Typography
            sx={{ fontSize: '16px', fontFamily: 'Inter', fontWeight: '400',textAlign:'center', color: '#1E1E1E', lineHeight: '24.96px', marginBottom: '10px' }}
          >
            Want to read more?
						  </Typography>
						  <Typography
						  sx={{ fontSize: '10px', fontFamily: 'Inter', fontWeight: '400', color: '#1E1E1E', lineHeight: '24.96px',textAlign:'center', }}
						>
						  Vote this manuscript to help it get Published
						  </Typography>
						  <Grid container lg={12} sx={{marginTop:"25px"}}>
						  <Grid item lg={6} sx={{ display: 'flex' }}>
						  <Button variant='outlined' onClick={previousPage} style={{backgroundColor:'#07b0f5',color:'#FFFFFF',textDecoration:'none',textTransform:'none',borderRadius:'8px',fontSize:mobile ? '12px' :'16px',padding:'12px 20px',width:mobile ? '136px' :"185px",height:mobile ? '40px' :'48px',marginRight:'20px'}}>Show Previous</Button>  
						  </Grid>
						  <Grid item lg={6} sx={{display:'flex',justifyContent:'center',marginTop:mobile?"20px":"0px"}}>
					  
							
						  
						 
						  <Button variant={hasVoted ? 'contained' : 'outlined'} onClick={handleVoteClick} style={{ color: hasVoted ? "#FFFFFF" : '#07b0f5', backgroundColor: hasVoted ? "#07b0f5" : '', textDecoration: 'none', textTransform: 'none', borderRadius: '8px', border: '1px solid #07b0f5', fontSize: mobile ? '12px' : '16px', padding: mobile ? "8px 16px" : '12px 20px', height: mobile ? "40px" : '48px', marginRight: '20px' }}><ThumbUpAltOutlinedIcon style={{ width: mobile ? "16px" :"18px",height:mobile ? "16px" :"24px",marginRight:'8px'}}/>{hasVoted ? 'Voted' : 'Vote'}</Button>
			
					  
				
				  <Button variant='outlined'onClick={handleOpen} style={{color:'#07b0f5',textDecoration:'none',textTransform:'none',borderRadius:'8px',border:'1px solid #07b0f5',fontSize:mobile ? '12px' :'16px',padding:mobile?"8px 16px":'12px 20px',height:mobile?"40px":'48px'}}><IosShareOutlinedIcon/>Share</Button>
				  <Dialog open={open} onClose={handleClose} fullWidth>
	<DialogTitle style={{marginTop:'40px',fontWeight:'600'}}>Share this content:</DialogTitle>
	<IconButton
      aria-label="Close"
      onClick={handleClose}
      sx={{
        position: 'absolute',
        top: '8px',
        right: '8px',
      }}
    >
      <CloseIcon />
    </IconButton>
	<DialogContent>
	<Grid container   spacing={2} sx={{marginBottom:mobile?'10px':'0px'}}>
      <Grid item>
        <SvgIcon component={Instagramicon} sx={{ width: '36px', height: '36px', color: '#E4405F' }} />
      </Grid>
      <Grid item>
        <SvgIcon component={WhatsappIcon} sx={{ width: '36px', height: '36px', color: '#0A66C2' }} />
      </Grid>
      <Grid item>
        <SvgIcon component={Facebookicon} sx={{ width: '36px', height: '36px', color: '#1877F2' }} />
      </Grid>
      <Grid item>
        <SvgIcon component={LinkedinIcon} sx={{ width: '36px', height: '36px', color: '#0A66C2' }} />
      </Grid>
      
    </Grid>
	  <div>
		<input type="text" value={currentUrl} readOnly style={{width:mobile?'200px':"400px",height:"40px",marginTop:mobile?'10px':'26px',borderRadius:'8px'}} />
		<button  onClick={copyToClipboard} style={{width:mobile?'204px':"80px",height:mobile?'35px':"40px",marginLeft:mobile?'0px':'10px',backgroundColor:'#07b0f5',color:'#fff',fontSize:mobile?'10px':'',borderRadius:mobile?'6px':'8px',fontWeight:500,fontFamily:'Inter',marginTop:mobile?'8px':'0px'}}>
		  {copied ? 'Copied!' : 'Copy URL'}
		</button>
	  </div>
	</DialogContent>
	<DialogActions>
	
	</DialogActions>
  </Dialog>  
							  </Grid>
							  </Grid>
						</>   )}
						
						  
						 
						  
			  </Grid>
		  </Grid>
		
     
    
		  <Grid container lg={5} xs={10} sx={{ margin:'auto',marginTop:"50px"}}>
			   <TextField
    variant="outlined"
    size="small"
    placeholder="Add a comment"
   value={commentText}
  onChange={(e) => setCommentText(e.target.value)}
    fullWidth
    sx={{ paddingRight: '10px',borderRadius: '26px',width:"92%" }} // Adding border radius and padding
				  InputProps={{
					style: {
						borderRadius: '26px', // Apply borderRadius here
					  },
      endAdornment: (
        <InputAdornment position="end">
          <SendIcon onClick={() => handleCommentSubmit()} />     
        </InputAdornment>
      ),
    }}
  />
		  

{comments.map((comment) => (
        <Grid container lg={12} xs={12} key={comment._id}>
          <Grid container lg={12} xs={12} sx={{marginTop:"36px",marginBottom:"36px"}}>
            <Grid container lg={1.5} xs={2}>
		  {userPhotos[comment.userId] && (
              <Avatar src={userPhotos[comment.userId]} width='40px' height='40px' style={{width:mobile?"36px":"48px",height:mobile?"36px":"48px"}} alt="User" />
				)}
			</Grid>
			<Grid container lg={8.5} xs={7.5}>
				<Grid item lg={12} xs={12}>
			<Typography
            sx={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: '600',textAlign:'initial', color: '#1E1E1E', lineHeight: 'normal' }}
					>{userNames[comment.userId]}</Typography>
				</Grid>
				<Grid item lg={12} xs={12}>
				<Typography
            sx={{ fontSize: mobile?"12px":'14px', fontFamily: 'Inter', fontWeight: mobile?"400":'600',textAlign:'initial', color: '#1E1E1E', lineHeight: 'normal',marginTop:'8px',marginBottom:"12px" }}
					>{comment.comment}</Typography>
				</Grid>
				
			</Grid>
			<Grid container lg={2} xs={2.5}>
				<Grid item lg={12} xs={12}>
					<MoreHorizIcon   onClick={comment.userId===userId?handleClick2:handleClick} style={{ width: "20px", height: '20px' }} />
					{comment.userId===userId?	<Menu 
											id="basic-menu"
											style={{borderRadius:'8px',}}
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleReport1(comment._id,comment.content)}  style={{
            fontSize: '16px',    
            fontWeight: 400, color:'#1e1e1e',   
          }}>Report</MenuItem>
           <Dialog open={isDialogOpen} onClose={handleCloseDialog1}  sx={{
    '& .MuiBackdrop-root': {
      backgroundColor: 'transparent',
    }
  }}  PaperProps={{
          style: {
           
           
            width: "428px", 
height: "452px",borderRadius:'26px',overflow:'hidden'
            
          }
          }}>
        <DialogTitle style={{fontSize:'20px',fontFamily:'Inter',fontWeight:'500',color:'#000',marginBottom:mobile?'0px':'20px'}}>Why are you reporting this comment?</DialogTitle>
        <DialogContent style={{overflow: 'hidden',marginTop:'-10px'}}>
        {/* Dialog content goes here */}
        <RadioGroup
  aria-label="report-reason"
  name="report-reason"
  value={selectedValue}
  onChange={handleChange}
>
  <FormControlLabel
    value="It’s a spam"
    control={<Radio />}
    label="It’s a spam"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="Hate speech or symbols"
    control={<Radio />}
    label="Hate speech or symbols"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="violence or dangerous organisations"
    control={<Radio />}
    label="Violence or dangerous organisations"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="Sale of illegal or regulated goods"
    control={<Radio />}
    label="Sale of illegal or regulated goods"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="bullying or harassment"
    control={<Radio />}
    label="Bullying or harassment"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="false-information"
    control={<Radio />}
    label="False information"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="I just don’t like it"
    control={<Radio />}
    label="I just don’t like it"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="Something else"
    control={<Radio />}
    label="Something else"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
</RadioGroup>

      </DialogContent>

        <DialogActions style={{marginRight:'25px',}}>
          <Button onClick={handleCloseDialog1} style={{
    backgroundColor: "transparent",
    border: "1px solid #07b0f5", // You can adjust the border properties as needed
    color: "#07b0f5",
    textTransform:'none' ,// You might want to change the text color
  }}>
           Cancel
          </Button>
          <Button onClick={handleReport(comment._id,comment.comment)} style={{textTransform:'none', backgroundColor: '#07b0f5',
    color: 'white',}}>
    Report
  </Button>
        </DialogActions>
      </Dialog>
        <MenuItem
         onClick={()=>{setOpenDialog(true)}}
          style={{
            fontSize: '16px',
            fontWeight: 400,
            color: '#1e1e1e',
          }}
        >
          Delete
        </MenuItem>
		<Dialog
        open={openDialog1}
        onClose={handleCloseDialog}
        maxWidth="xs"
        fullWidth
		sx={{
			'& .MuiBackdrop-root': {
			  backgroundColor: 'transparent',
			}
		  }} 
        PaperProps={{
          style: {
            display: "flex",
           
            width: "428px", 
height: "165px",borderRadius:'26px'
            
          }
          }}
      >
        
        <DialogContent  style={{
    fontSize: '16px', // Adjust the font size as needed
    fontWeight: '400',fontFamily:'Inter',marginTop:'26px' ,color:'#1e1e1e'// You can use 'bold', 'lighter', 'normal', etc.
  }}>
        Are you sure you want to delete this comment?
        </DialogContent>
        <DialogActions style={{marginRight:'38px',marginBottom:'21px'}}>
          <Button onClick={handleCloseDialog}  style={{
    backgroundColor: "transparent",
    border: "1px solid #07b0f5", // You can adjust the border properties as needed
    color: "#07b0f5",
    textTransform:'none' ,// You might want to change the text color
  }}>
          Go Back
          </Button>
          <Button onClick={handleDeleteClick(comment._id)} style={{textTransform:'none', backgroundColor: '#07b0f5',
    color: 'white',}}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
        
      </Menu>:	<Menu 
											id="basic-menu"
											style={{borderRadius:'8px',}}
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleReport2(comment._id,comment.content)}  style={{
            fontSize: '16px',    
            fontWeight: 400, color:'#1e1e1e',   
							}}>Report</MenuItem>
       <Dialog open={isDialogOpen2} onClose={handleCloseDialog1}  sx={{
    '& .MuiBackdrop-root': {
      backgroundColor: 'transparent',
    }
  }}  PaperProps={{
          style: {
           
           
            width: "428px", 
height: "452px",borderRadius:'26px',overflow:'hidden'
            
          }
          }}>
        <DialogTitle style={{fontSize:'20px',fontFamily:'Inter',fontWeight:'500',color:'#000',marginBottom:'20px'}}>Why are you reporting this comment?</DialogTitle>
        <DialogContent style={{overflow: 'hidden',marginTop:'-10px'}}>
        {/* Dialog content goes here */}
        <RadioGroup
  aria-label="report-reason"
  name="report-reason"
  value={selectedValue}
  onChange={handleChange}
>
  <FormControlLabel
    value="It’s a spam"
    control={<Radio />}
    label="It’s a spam"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="Hate speech or symbols"
    control={<Radio />}
    label="Hate speech or symbols"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="violence or dangerous organisations"
    control={<Radio />}
    label="Violence or dangerous organisations"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="Sale of illegal or regulated goods"
    control={<Radio />}
    label="Sale of illegal or regulated goods"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="bullying or harassment"
    control={<Radio />}
    label="Bullying or harassment"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="false-information"
    control={<Radio />}
    label="False information"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="I just don’t like it"
    control={<Radio />}
    label="I just don’t like it"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
  <FormControlLabel
    value="Something else"
    control={<Radio />}
    label="Something else"
    sx={{
      fontSize: '14px', 
      fontWeight: 400, 
    }}
  />
</RadioGroup>

      </DialogContent>

        <DialogActions style={{marginRight:'25px',}}>
          <Button onClick={handleCloseDialog1} style={{
    backgroundColor: "transparent",
    border: "1px solid #07b0f5", // You can adjust the border properties as needed
    color: "#07b0f5",
    textTransform:'none' ,// You might want to change the text color
  }}>
           Cancel
          </Button>
          <Button onClick={handleReport(comment._id,comment.comment)} style={{textTransform:'none', backgroundColor: '#07b0f5',
    color: 'white',}}>
    Report
  </Button>
        </DialogActions>
      </Dialog>
        

        
      </Menu>}
				
      
				</Grid>
				
				
				</Grid>
			<Grid item lg={9} xs={8} sx={{margin:'auto'}}>
				<Typography
            sx={{ fontSize: '12px', fontFamily: 'Inter', fontWeight: '400',textAlign:'initial', color: '#5B5A5A', lineHeight: 'normal'}}
					> {formatDistanceToNow(new Date(comment.timestamp), { addSuffix: false,includeSeconds: false,preSuffix: false,suffix: ""})}</Typography>
					</Grid>
          </Grid>
		
        </Grid>
      ))}

		  </Grid>
		  <Footer />
    </ThemeProvider>
  );
};

export default FilesViewer;