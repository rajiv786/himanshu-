import React, { useState ,useEffect} from 'react';
import Header from './Header'
import axios from 'axios';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import ManuIcons from './ManuIcons';
import SwipeableViews from 'react-swipeable-views';
import CommentIcon from './CommentIcon';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SliderRightkey from './SliderRightkey';
import SliderLeftkey from './SliderLeftKey';
import WhatsappIcon from './WhatsppIcon';
import Facebookicon from './Facebookicon';
import Skeleton from '@mui/material/Skeleton';
import { LoginSocialFacebook,LoginSocialGoogle } from 'reactjs-social-login'
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons'
import Instagramicon from './Instagramicon';
import LinkedinIcon from './LinkedinIcon';
import { SvgIcon } from '@mui/material';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import { formatDistanceToNow,format } from 'date-fns';
import { Grid,Typography,Button,TextField,Divider,IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import jwtDecode from 'jwt-decode';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SendIcon from '@mui/icons-material/Send';
import { InputAdornment } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import jwt_decode from "jwt-decode";
import { Api_url } from './helper';
import EmojiPicker, { EmojiStyle } from 'emoji-picker-react'; 
import { Popover } from '@mui/material';
import {Avatar} from '@mui/material';
import {useMediaQuery} from '@mui/material';
import Mobileheader from './Mobileheader';
import {  Menu, MenuItem } from '@mui/material';
import {  Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import 'typeface-inter';
import { useNavigate } from 'react-router-dom';
const CustomButton = styled(Button)`
  &:hover {
    background-color: #05445e; /* or specify the desired background color */
  }
`;
const ImageWithSkeleton = ({ image, mobile, openDialog, selectedImagesynopsis }) => (
	<Grid container lg={3} xs={12} key={image} className="image-container" sx={{ marginBottom: '26px' }}>
	  <Grid item lg={12} xs={10}>
		<Skeleton variant="rectangular" animation='wave' width={mobile ? '95px' : '95px'}
            height={mobile ? '155px' : '155px'} />
	  </Grid>
	  
	</Grid>
  );
  const SkeletonItem = ({ mobile }) => (
	<Grid item lg={12} xs={12} sx={{ backgroundColor: '#FAF7F7', margin: '0px',marginBottom:'18px',borderRadius: '12px' }}>
	  <Grid container lg={12} xs={12} sx={{ padding: '26px 26px 23px 26px', borderRadius: '12px' }}>
		<Grid item lg={10} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
		  <Skeleton variant="circular" animation='wave' width={40} height={40} sx={{ marginRight: '12px' }} />
		  <Skeleton variant="text" animation='wave' width={mobile ? 100 : 150} />
		</Grid>
		<Grid item lg={4} sx={{ alignItems: 'center', display: 'flex' }}>
		  {/* Add more skeleton elements or custom structure here */}
		</Grid>
		<Grid item lg={12} xs={12} container sx={{ marginLeft: '40px', marginBottom: '10px' }}>
		  <Skeleton variant="rectangular" animation='wave' width={mobile ? 100 : 120} height={150} />
		  <Skeleton variant="text" animation='wave' width="95%" />
		</Grid>
		<Grid item lg={12} xs={12} container sx={{ marginBottom: '10px' }}>
		  <Skeleton variant="text" animation='wave' width={mobile ? 100 : 150} />
		  <Skeleton variant="text" animation='wave' width={mobile ? 100 : 150} />
		</Grid>
		<Grid container lg={10} xs={12} sx={{ margin: 'auto' }}>
		  <Grid item lg={3.8} xs={3.8} style={{ display: 'flex', alignItems: 'center' }}>
			<Skeleton variant="text" animation='wave' width={50} height={24} />
		  </Grid>
		  <Grid item lg={4.2} xs={5} style={{ display: 'flex', alignItems: 'center' }}>
			<Skeleton variant="text" animation='wave' width={100} height={24} />
		  </Grid>
		  <Grid item lg={4} xs={3.2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
			<Skeleton variant="text" animation='wave' width={60} height={24} />
			<Skeleton variant="text" animation='wave' width={60} height={24} />
		  </Grid>
		</Grid>
	  </Grid>
	</Grid>
  );
const Explore = () => {

  const mobile = useMediaQuery('(max-width:600px)');
    const [story, setStory] = useState('');
	const [error, setError] = useState('');
	const [images, setImages] = useState([]);
    const [data, setData] = useState([]);
	const [userData, setUserData] = useState(null)
	const [currentPage, setCurrentPage] = useState(1);
	const [likedPosts, setLikedPosts] = useState({});
	const [startIndex1, setStartIndex1] = useState(0);
	const [startIndex2, setStartIndex2] = useState(0);
	const [startIndex3, setStartIndex3] = useState(0);
	const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);
	const [textValue, setTextValue] = useState('');
	const [open1, setOpen1] = useState(false);
	const [likeCount, setLikeCount] = useState(0);
	
	const [expandedPostId, setExpandedPostId] = useState(null);
	const [userPhotoUrl, setUserPhotoUrl] = useState('');
	const [anchorEl1, setAnchorEl1] = useState(null);
	const [currentOpenId, setCurrentOpenId] = useState(null);
	const [images1,setImages1]=useState([]);
	const [anchorEl2, setAnchorEl2] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
	const [isDialogOpen, setDialogOpen] = useState(false);
	const [Dialogopen1, setDialogOpen1] = useState(false)
   const [selectedValue, setSelectedValue] = useState('');
	const open = Boolean(anchorEl1);
	const open2 = Boolean(anchorEl2);
	const imagesToShow = mobile ? 2 : 4;
	const handleChange4 = (event, value) => {
		// Update the current page state
		setCurrentPage(value);
		fetchData(value);
	  };
	const handleNextClick2 = (imageCategory) => {
		const filteredImages = images1.filter((image) => image.category === imageCategory);
		
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
		
		setStartIndex1((prevIndex) => (prevIndex === numSets - 1 ? 0 : prevIndex + 1));
	  };
	
	  const handlePrevClick2 = (imageCategory) => {
		const filteredImages = images1.filter((image) => image.category === imageCategory);
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
	  
		setStartIndex1((prevIndex) => {
		  if (prevIndex === 0) {
			return numSets - 1;
		  } else {
			return prevIndex - 1;
		  }
		});
	};
	const handleNextClick3 = (imageCategory) => {
		const filteredImages = images1.filter((image) => image.category === imageCategory);
		
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
		
		setStartIndex2((prevIndex) => (prevIndex === numSets - 1 ? 0 : prevIndex + 1));
	  };
	
	  const handlePrevClick3 = (imageCategory) => {
		const filteredImages = images1.filter((image) => image.category === imageCategory);
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
	  
		setStartIndex2((prevIndex) => {
		  if (prevIndex === 0) {
			return numSets - 1;
		  } else {
			return prevIndex - 1;
		  }
		});
	};
	const handleNextClick4 = (imageCategory) => {
		const filteredImages = images1.filter((image) => image.category === imageCategory);
		
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
		
		setStartIndex3((prevIndex) => (prevIndex === numSets - 1 ? 0 : prevIndex + 1));
	  };
	
	  const handlePrevClick4 = (imageCategory) => {
		const filteredImages = images1.filter((image) => image.category === imageCategory);
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
	  
		setStartIndex3((prevIndex) => {
		  if (prevIndex === 0) {
			return numSets - 1;
		  } else {
			return prevIndex - 1;
		  }
		});
	};
	const Gotopage = () => { 
		navigate('/signup')
	}
	const Gotopage1 = () => { 
		navigate('/login')
	}
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

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClose2 = () => {
    setSelectedValue('');
    handleCloseDialog();
  };
  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
	};
	
	const handleClick2 = (event) => {
		setAnchorEl2(event.currentTarget);
	};
	const [selectedImage1, setSelectedImage1] = useState({});
	const [selectedImageId, setSelectedImageId] = useState('');
	 const [dialogOpen3, setDialogOpen3] = useState(false);
  const token = localStorage.getItem("token");
	const [selectedImageUserId, setSelectedImageUserName] = useState('');
	const [selectedImagesynopsis, setSelectedImagesynopsis] = useState({});
	const closeDialog = () => {
		setSelectedImage1({});
		setSelectedImageId('');
		  setSelectedImagesynopsis('');
		  setSelectedImageUserName('');
		setDialogOpen3(false);
	  };
	  const handleImageClick1 = (fileId) => {
		// Send the fileId to the backend using a GET request
	  axios.post(`${Api_url}/Otp/readCount/${selectedImageId}`, { increment: true })
	  .then(() => {
		window.location.href = `/file-viewer?fileId=${selectedImageId}`;
	  })
	  .catch((error) => {
		console.error('Error updating read count:', error);
	  })
	  
	  };
  const handleReport1 = (itemId, commentId, commentContent) =>async()=> {
    // Logic for handling the report
    // You can put your report handling code here

    // Open the dialog
    setDialogOpen(true);
	};
	const [isDialogOpen2, setDialogOpen2] = useState(false);
	const [copied, setCopied] = useState(false);
	if (copied) {
		
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	}
	const handleClose1 = (event, itemId) => {
		console.log(itemId);
		setDialogOpen1(false);
	{user?	setCurrentOpenId(null):setCurrentOpenId(itemId)}
		setCurrentOpenDialogId(null);
	  };
	  const numSets = Math.ceil(images1.length / imagesToShow);
	  const copyToClipboard = (itemId) => {
		  navigator.clipboard.writeText(currentUrl);
		  
		  setCopied(true);
		  setCurrentOpenId(itemId);
	  }
  const handleReport2 = (itemId, commentId, commentContent) =>async()=> {
	// Logic for handling the report
	// You can put your report handling code here

	// Open the dialog

	setDialogOpen2(true);
	};
	const openDialog1 = async (image) => {
		setSelectedImage1(image);
		setSelectedImageId(image._id);
		  setSelectedImagesynopsis(image.synopsis);
		  console.log(image,'opendia');
		  const userResponse = await fetch(`${Api_url}/sign/user/${image.userId}`, {
			  method: 'GET',
			  headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			  },
			});
		
			if (userResponse.ok) {
			  const userData = await userResponse.json();
			  
		setSelectedImageUserName(userData.Name)
			  // Redirect to the user page with the user's name
			  
			} else {
			  // Handle error response
			  const errorData = await userResponse.json();
			  setError(errorData.error);
			}
		setDialogOpen3(true);
	};
  const handleCloseDialog1 = async() => {
    // Close the dialog
	  setDialogOpen(false);
	  setAnchorEl1(false);
		setAnchorEl2(false);
		setDialogOpen2(false);
  };
  const handleClose = () => {
	  setAnchorEl1(null);
	  setCurrentOpenId(null);
	  setAnchorEl2(null);
  };
	const handleDeleteClick = (storyId, commentId) => async()=>{
    try {
      const response = await axios.post(`${Api_url}/Otp/deletec/${storyId}/${commentId}`);
   
     
      fetchData();
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
const handleReport=(storyId, commentId,commentvalue)=> async()=>{

  try{

     const response = await axios.post(`${Api_url}/Otp/report/${storyId}/${commentId}/${commentvalue}/${selectedValue}`);
       
       
     
      setSelectedValue('')
	setOpenDialog(false)
	  setAnchorEl1(null);
		setAnchorEl2(null);
    } catch (error) {
      console.error('Error adding comment:', error);
      setOpenDialog(false)
	  setAnchorEl1(null);
	  setAnchorEl2(null);
     

    }
  }

  const handleCloseDialog = async() => {
    setOpenDialog(false);
  };
  
	const onClick = (emojiData, event) => {
	// Add the emoji to the textValue
    setSelectedEmojis([...selectedEmojis, emojiData]);
    // Append the selected emoji to the textValue
    setStory((prevText) => prevText + emojiData.emoji);
  };
  const user = localStorage.getItem('token'); // token lekr aaya
  let userId = '';
  
  if (user) {
	const userI = jwtDecode(user);
	userId = userI._id; // token convert ke diya
  }
	useEffect(() => {
		// Fetch user photo based on userId
		const fetchUserPhotoData = async () => {
		  try {
			const userPhoto = await fetchUserPhoto(userId);
			setUserPhotoUrl(userPhoto);
		  } catch (error) {
			console.error('Error fetching user photo:', error);
		  }
		};
	  
		// Call the function to fetch user photo
		fetchUserPhotoData();
	  }, [userId]);
const handleClosepopup =() =>{
	setOpen1(false)
	setCurrentOpenId(null);
  console.log('yess')
	}
	const [imm, setImm] = useState(false);
	const handleOpen = () => {
		setImm(true);
	}
	const handleClosem = () => {
		setImm(false);
	}
const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`${Api_url}/sign/user/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const userData = response.data;
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
	};
	const fetchUserPhoto = async (userId) => {
		try {
		  const response = await axios.get(`${Api_url}/Otp/users/photo/${userId}`, {
			responseType: 'arraybuffer',
			headers: {
			  Accept: 'image/png, image/jpeg',
			},
		  });
		  const blob = new Blob([response.data], { type: response.headers['content-type'] });
		  return URL.createObjectURL(blob);
		} catch (error) {
		  console.error(error);
		  return null;
		}
	  };
	const fetchData = async (page) => {
		   setloader(true);
		try {
		  const response = await axios.get(`${Api_url}/Otp/api/story?page=${page}`);
		  const jsonData = response.data;
	  console.log(jsonData,'datastor')
		  const dataWithUserData = await Promise.all(jsonData.map(async (item) => {
			const [userData, userPhotoUrl] = await Promise.all([
			  fetchUserData(item.userId),
			  fetchUserPhoto(item.userId),
			]);
	  
			const commentsWithUserData = await Promise.all(
			  item.comments.map(async (comment) => {
				const [commentUserData, commentUserPhoto] = await Promise.all([
				  fetchUserData(comment.userId),
				  fetchUserPhoto(comment.userId),
				]);
				const commentTimestamp = format(new Date(comment.timestamp),'dd MMM yyyy');
				return {
				  ...comment,
				  userName: commentUserData ? commentUserData.Name : 'User Not Found',
				  userPhoto: commentUserPhoto,
				  formattedTimestamp: commentTimestamp,
				};
			  })
			);
	  
			const hasLiked = item.likesArray.some((like) => like.userId === userId);
			const formattedTime = format(new Date(item.createdAt),'dd MMM yyyy');
	  
			return {
			  ...item,
			  userData,
			  userPhotoUrl,
			  formattedTime,
			  comments: commentsWithUserData,
			  hasLiked: hasLiked || false,
			};
		  }));
	  
			setData(dataWithUserData);
			setloader(false)
		} catch (error) {
			console.error('Error fetching data:', error);
			setloader(false)
		}
	  };
	  
  useEffect(() => {
    // Fetch data from the server
    

    fetchData();
  }, []);
  
  const handlePickerOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLike = async (postId, itemId) => {
	const user = localStorage.getItem('token'); // token lekr aaya
	let userId = '';
	
	if (userId === '') {
	  setOpen1(true);
	  setCurrentOpenId(itemId);
	}
	
	if (user) {
	  const userI = jwtDecode(user);
	  userId = userI._id;
	  setCurrentOpenId(null); // token convert ke diya
	  
	  try {
		const response = await axios.post(`${Api_url}/Otp/api/story/${postId}/like`, {
		  userId: userId, // Replace with the actual user ID
		});
		
		if (response.data.hasLiked) {
		  // If hasLiked is true, update the "hasLiked" property and increase the likes count for the specific item
		  setData((prevData) => {
			const updatedData = prevData.map((item) => {
			  if (item._id === postId) {
				return {
				  ...item,
				  hasLiked: true,
				   // Increase the likes count
				};
			  }
			  return item;
			});
			return updatedData;
		  });
		  
		  alert("You've already liked this post.");
		} else {
		  // Update the "hasLiked" property for the specific item
		  setData((prevData) => {
			const updatedData = prevData.map((item) => {
			  if (item._id === postId) {
				return {
				  ...item,
					hasLiked: true,
					likes: item.likes + 1,
				};
			  }
			  return item;
			});
			return updatedData;
		  });
		}
	  } catch (error) {
		console.error('Error adding like:', error);
	  }
	}
  };
  const handleUserProfile =()=>{
	window.location.href = `/userPage?userId=${selectedImage.userId}`;
}
  
	const [loading, setloading] = useState(false);
	const[loader,setloader]=useState([false]);
	useEffect(() => {
		setloading(true);
		
	  axios.get(`${Api_url}/Otp/api/images1?userId=${userId}`).then((response) => {
		
		  setImages(response.data);
		  setloading(false);
	  });
	}, [userId]);
	const [loading1,setloading1]=useState(true);
	
	useEffect(() => {
	
		axios.get(`${Api_url}/Otp/api/images/home2`).then((response) => {
		  console.log(response.data)
			setImages1(response.data);
			setloading1(false);
			
		});
	  }, [userId]);
	const [selectedImages, setSelectedImages] = useState([]);
	const [selectedImage, setSelectedImage] = useState(null);
	const handleImageClick = (imageId) => {
		const selectedImage = images.find((image) => image._id === imageId);
    setSelectedImage(selectedImage);
		};

 
	const handleComment = async (postId, comment) => {
		const user = localStorage.getItem('token'); // token lekr aaya
  let userId = '';
		if (userId == '') {
			setOpen1(true);
			setCurrentOpenId(postId);
		}
		if (user) {
			const userI = jwtDecode(user);
			userId = userI._id;
			setCurrentOpenId(null);
			try {
				const response = await axios.post(`${Api_url}/Otp/api/story/${postId}/comment`, {
					content: comment,
					userId: userId
				});
      
				fetchData(); // Fetch posts again to update the list
				setTextValue('');
			} catch (error) {
				console.error('Error adding comment:', error);
			}
		}
  };

  const handlePickerClose = () => {
    setAnchorEl(null);
	};
	const handleImageexp = async (fileId) => {
		
		window.location.href = `/file-viewer?fileId=${fileId}`;
	}
	const handleSubmit = () => {
		if (story.length <= 200) {
		  setError(''); // Clear any previous error message
	  
		  const formData = new FormData();
	  
		  // Append the story and userId to the formData
		  formData.append('data', story);
		  formData.append('userId', userId);
	  
		  if (selectedImage && selectedImage.imageData) {
			// Append the Buffer as-is, without converting it to a Blob
			formData.append('image', selectedImage.imageData); // Adjust the filename ('image.jpg') as needed.
			formData.append('_id', selectedImage._id);
			axios
			  .post(`${Api_url}/Otp/api/story`, formData, {
				headers: {
				  'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
				},
			  })
			  .then((response) => {
				setStory('');
				setSelectedImage(null);
				fetchData();
			  })
			  .catch((error) => console.log(error));
		  } else {
			// No image data, send the story and userId only
			axios
			  .post(`${Api_url}/Otp/api/story`, formData)
			  .then((response) => {
				setStory('');
				setSelectedImage(null);
				fetchData();
			  })
			  .catch((error) => console.log(error));
		  }
		} else {
		  setError('Story should not exceed 200 words.');
		}
	  };
	  
	  
	const currentUrl = window.location.href;
	const [currentOpenDialogId, setCurrentOpenDialogId] = useState(null);
	const handleShareClick = (event,itemId) => {
		setDialogOpen1(true);
		setCurrentOpenDialogId(itemId);
	};
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
		  <meta name="title" content="Explore Books and Quotes on Slushie - Share Your Literary Creations" />
     
         
        <meta name="description" content="Explore the world of books and quotes on Slushie's Explore page. Share your literary creations, discover new works, and connect with fellow authors. Join the literary conversation today" />
      </Helmet>
      {mobile?<Mobileheader/>:<Header />}
      <Grid container lg={12} sx={{marginBottom:mobile?"70px":"120px"}} >
        <Grid container lg={10} xs={12} sx={{ margin: 'auto' }}>
         
		{userId==''?'': <Grid container lg={6.5} xs={10} sx={{margin:mobile?'auto':'', backgroundColor: '#FAF7F7', marginTop: '46px', display: 'flex', flexDirection: 'column', borderRadius: '12px' }}>
					  <Grid container lg={12} sx={{padding:"26px"}}>
					  <Grid container lg={1.5} xs={2}> 
					  <Avatar  src={userPhotoUrl} alt="User Photo" />
						  </Grid>
						  <Grid container lg={9.5} xs={10}>
							  <Grid item lg={12} xs={12} >
							  <TextField
              multiline
              rows={4}
						  variant="standard"
						  placeholder='What’s on your mind?'
              value={story}
              onChange={(e) => setStory(e.target.value)}
              sx={{ margin: 'auto', width: mobile?'98%':'88%',whiteSpace: 'pre-line', }}
			  InputProps={{
				startAdornment: (
				  <InputAdornment position="start">
					 {selectedImage && (
        
		<img
		  src={`${selectedImage.imageData}`}
		  alt={selectedImage.pdfName}
		  width="90px"
		  height="90px"
		/>
	   
	)}
				  </InputAdornment>
				),
			  }}
            />    
			
							  </Grid>
						
						  <Grid container lg={10.5} xs={12} sx={{justifyContent:'space-between',marginTop:'20px'}}>
						  <Grid item lg={1.6} xs={2} sx={{ display: 'flex', justifyContent: 'start',alignItems: 'center' }}>
                <span style={{ fontSize: '1.8rem', cursor: 'pointer',marginTop:mobile?'-9px':'' }} onClick={handlePickerOpen}>
                  😃 {/* Replace with your preferred emoji icon */}
                </span>
                <Popover
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={handlePickerClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <EmojiPicker onEmojiClick={onClick} autoFocusSearch={false} emojiStyle={EmojiStyle.NATIVE} />
                </Popover>
								  </Grid>
								  <Grid item lg={7.6} xs={5.2} sx={{display:'flex', justifyContent: 'start'}}>
									  <Button onClick={handleOpen} sx={{justifyContent: 'start'}}><ManuIcons/></Button>
									  <Dialog open={imm} onClose={handleClose} fullWidth>
										  <DialogTitle>
											  <Grid container lg={11} sx={{margin:'auto'}}>
												  <Grid item lg={8} sx={{fontSize:"20px",fontWeight:"500",fontFamily:"Inter"}}>Verified Manuscripts:</Grid> <Grid item lg={4} sx={{justifyContent:"end",display:'flex'}}><CloseIcon onClick={handleClosem} /></Grid>
											  </Grid>
										  </DialogTitle>
										  <DialogContent>
											  {images.length === 0 ? (
												  <p style={{ textAlign: 'center',fontSize:"16px",fontWeight:"400",fontFamily:"Inter" }}>Not manuscript yet!</p>
											  ) : (
												  <Grid container lg={12} sx={{ display: 'flex', flexWrap: 'wrap' }}>
													  {images.map((image) => (
														  !image.archived && (
															  <Grid container lg={3} key={image._id} sx={{ backgroundColor: '#FFF', borderRadius: '12px', marginTop: '0px', height: ' 198px', width: '100%', display: 'flex', justifyContent: 'initial', alignItems: 'initial', margin: '10px', cursor: 'pointer' }} >
																  <Grid item lg={12} sx={{ display: 'flex', justifyContent: 'center', }} onClick={() => handleImageClick(image._id)} >
																	  <img src={`${image.imageData}`} alt={image.pdfName} width="117px" height="166px" style={{ marginTop: "16px", border: selectedImages.includes(image._id) ? '12px solid #000000' : 'none' }} />
																  </Grid>
											
						
		
					
															  </Grid>)
													  ))}
													  <Grid item lg={12} sx={{ justifyContent: 'end', display: 'flex' }}>
														  <Button variant='contained' onClick={handleClosem} style={{ backgroundColor: '#07b0f5', color: '#FFFFFF', textDecoration: 'none', textTransform: 'none', borderRadius: '8px', fontSize: mobile ? '12px' : '16px', padding: mobile ? "8px 16px" : '12px 20px', width: mobile ? '136px' : "95px", height: mobile ? '40px' : '48px', textTransform: 'none' }}>Submit</Button>
													  </Grid>
												  </Grid>
											  )}
	</DialogContent>
	
  </Dialog> 
								  </Grid>
              <Grid item lg={2.8} xs={4.8} sx={{display:'flex',justifyContent:"end"}}>
                <CustomButton
                  sx={{
                    width:mobile?'66px': '97px',
                    height:mobile?'26px': '40px',
                    backgroundColor: '#07b0f5',
                    borderRadius: mobile?'6px':'8px',
                    textTransform: 'none',
                    fontSize: mobile?'10px':'12px',
                    fontWeight:mobile?'500': '500',
                  }}
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Post
                </CustomButton>
								  </Grid>
								  </Grid>
							  </Grid>
					  </Grid>  
					  

           

            {error && <Typography color="error">{error}</Typography>}

            
          </Grid>}
          <Grid container lg={6.1} xs={11} sx={{margin:mobile?'auto':'', borderRadius: '12px' }}>
            <Grid item lg={6} xs={10.8} sx={{margin:mobile?'auto':''}}>
              <Typography sx={{ fontSize:mobile?'14px': '26px', fontFamily:mobile?'Inter':  'Inter', fontWeight:mobile?'500':  '500', marginTop: '36px' ,color:'#000'}}>Posts</Typography>
            </Grid>

            <Grid container lg={12} xs={12} sx={{margin:mobile?'auto':'', marginTop: '26px', borderRadius: '12px' }}>
            {loader ? Array.from({ length: 10 }).map((_, index) => (
          <SkeletonItem
            key={`skeleton-${index}`}
          />
        )):   (Array.isArray(data) ? (
                data.map((item) => {
                  const userName = item.userData ? item.userData.Name : 'User Not Found';
                  return (
                    <Grid item lg={12}  xs={12}
                    sx={{ backgroundColor: '#FAF7F7', margin:mobile?'16px':"0px",borderRadius:"12px",marginBottom:mobile?"":"16px",marginTop:mobile?"":"16px" }} key={item._id}>
                      <Grid container lg={12} xs={12} sx={{ display: 'flex', borderRadius: '12px' }}>
                        <Grid container lg={12}  xs={12} sx={{ padding: '26px 26px 23px 26px', borderRadius: '12px' }}>
                          <Grid item lg={10} xs={12} sx={{display:'flex',alignItems:'center'}}>
                         
                            {item.userPhotoUrl && <Avatar src={item.userPhotoUrl} alt="User Photo" />}
                         
                         
                            <Typography sx={{ fontSize: mobile?'12px':'16px', fontWeight: '600' ,marginLeft:'12px'}}>{userName}</Typography>
                            <Typography sx={{marginLeft:'4px',fontSize:mobile?'12px':"15px",fontWeight:400,color:'#6E767D'}}variant="caption">.{item.formattedTime}</Typography>
                            </Grid>
                            
                          
								  <Grid item lg={4} sx={{ alignItems: 'center', display:'flex'}}>
                           
                          </Grid>
								  <Grid item lg={12} xs={12}  container sx={{ marginLeft: '40px',marginBottom:'10px' }}>
								  {item.imageBase64 && (
    <Grid item lg={3} xs={5.2} >
      <img
        src={`data:image/jpeg;base64,${item.imageBase64}`}
        alt={`Story Image`}
		width={mobile ? "100px" : "120px"}
        height="150px"
        onClick={(e) => {
          e.preventDefault(); // Prevent the default click behavior
          handleImageexp(item.imageexp); // Call your image handling function
        }}
      />
    </Grid>
  )}
  <Grid item lg={item.imageBase64 ? 8.8 : 12} xs={item.imageBase64 ? 6.8 : 12} sx={{ marginLeft: '0px' }}>
    <pre style={{ fontSize: mobile?"12px":'15px', fontWeight: '400', fontFamily: 'Inter', lineHeight: 'normal',marginLeft:item.imageBase64 ?"12px":"0px",maxWidth: mobile?'100%':'95%', // Limit the width of the text container
      overflow: 'hidden',whiteSpace: 'pre-wrap', // Hide any overflowing text
       }}>{item.data}</pre>
  </Grid> </Grid>
                         
                          <Grid item lg={12}  xs={12}  container sx={{ marginBottom: '10px' }}>
                          {mobile?<> <Grid item lg={6} xs={6}>
                          <Typography sx={{color:'#787373',fontSize:'12px',fontWeight:'500'}}>   {item.likes} {item.likes === 1 ? 'like' : 'likes'}</Typography>
                          </Grid>
                          <Grid item lg={6} xs={6} sx={{display:'flex',justifyContent:'end'}}>
                         <Typography sx={{color:'#787373',fontSize:'12px',fontWeight:'500'}}>  {item.comments.length}  comments</Typography>
                         </Grid></>:''}
                            <Divider sx={{ margin: 'auto', width:mobile?'100%': '85%', marginLeft:mobile?'0px': '42px' }} />
                          </Grid>
                        
                          <Grid container lg={10} xs={12} sx={{ margin: 'auto' }}>
									  <Grid item lg={3.8} xs={3.8}style={{ display: 'flex', alignItems: 'center' }}>
									  <Tooltip title={item.hasLiked ? "You have already liked this post" : ""} arrow>
											  <IconButton onClick={() => handleLike(item._id,item._id)}>
												
												  <ThumbUpAltOutlinedIcon   style={{ color: item.hasLiked ? '#07b0f5' : 'default'}}  />
												  
											  </IconButton>
											  </Tooltip>
                              <Typography variant="body2" style={{ color: item.hasLiked ? '#07b0f5' :'#787373',fontSize:mobile?'12px': '14px', fontWeight: '500',fontFamily:'Inter'  }}>
                              {mobile?'':  (item.likes)  }     { item.hasLiked ? 'liked' : 'like'}
										  </Typography>
										  <Dialog key={item._id}   open={currentOpenId === item._id} PaperProps={{
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
											  sx={{
												'& .MuiBackdrop-root': {
												  backgroundColor: 'transparent',
												}
											  }} 
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
			
					  
		
			localStorage.setItem('user', response.data.name);
			localStorage.setItem('useremail', response.data.email);
		console.log(response.data, 'kiki');
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
					  console.log(response.data);
					  
					  console.log(response.data, 'google login');
					  localStorage.setItem('user', response.data.name);
					  localStorage.setItem('useremail', response.data.email);
		console.log(response.data, 'kiki');
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
									  </Grid>
									  <Grid item lg={4.2} xs={5} style={{ display: 'flex', alignItems: 'center' }}>
                              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px' }}>
											 
											  <CommentIcon  style={{ color: '#5B5A5A',marginRight:"5px" }} />
                                <Typography
                                  sx={{ fontSize:mobile?'12px': '14px', fontWeight: '500', color: '#5B5A5A',fontFamily:'Inter' }}
												  variant="body1"
												  onClick={() => {
													if (expandedPostId === item._id) {
													  setExpandedPostId(null); // Hide comments
													} else {
													  setExpandedPostId(item._id); // Show comments for this post
													}
												  }}
                                >
                            {mobile?'':  (item.comments.length)  } comments
                                </Typography>
										  </div>
										  </Grid>
                              <Grid item lg={4} xs={3.2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Grid item lg={12} xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                  <IosShareOutlinedIcon style={{ color: '#5B5A5A' }} />
                                </Grid>
                                <Typography onClick={(event) => handleShareClick(event, item._id)} sx={{ fontSize:mobile?'12px': '14px', fontWeight: '500', color: '#5B5A5A', marginLeft: '5px',fontFamily:'Inter' }} variant="body1">
                                  Share
										  </Typography>
										  <Dialog open={Dialogopen1 && currentOpenDialogId === item._id} onClose={handleClose1}   PaperProps={{
          style: {
   
borderRadius:'26px',width:'75%'
            
          }
										  }}
										  sx={{
											'& .MuiBackdrop-root': {
											  backgroundColor: 'transparent',
											}
										  }}
          >
            
        <DialogTitle style={{marginTop:'25px',fontWeight:'600',textAlign:mobile?'center':'initial'}}>Share with Friends</DialogTitle>
        <IconButton
      aria-label="Close"
      onClick={(event) =>handleClose1(event, item._id)}
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
                            {/* Display nested comments */}
                            {/* Display nested comments */}
								  {item._id === expandedPostId && (<>
									  
							<Grid container lg={12} xs={12} sx={{ marginTop:"20px",marginBottom:"20px", alignItems: 'center' }}>
							<Grid item lg={1.3}>
							  <Avatar  src={userPhotoUrl} alt="User Photo" />
							</Grid>
							<Grid item lg={9.7} xs={9.2} style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
							  <TextField
								variant="outlined"
								size="small"
								placeholder="Add a comment"
								value={textValue}
								onChange={(e) => setTextValue(e.target.value)}
												  fullWidth
												  sx={{ paddingRight: '10px',borderRadius: '26px',width:"92%" }} // Adding border radius and padding
				  InputProps={{
					style: {
						borderRadius: '26px', // Apply borderRadius here
					  },
      endAdornment: (
        <InputAdornment position="end">
          <SendIcon onClick={() => handleComment(item._id, textValue)} style={{ color: '#07b0f5'}} />     
        </InputAdornment>
      ),
    }}
							  />
							</Grid>
							
						  </Grid>			  
									  <Grid container lg={12} >
							
										  {item.comments.map((comment) => (
		
      <Grid container lg={12} xs={12} key={comment._id} sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Grid container lg={1.5} xs={2.5}>
												  <Avatar src={comment.userPhoto} alt="User Photo" />
												  </Grid>
												  <Grid container lg={8.5} xs={7.5} sx={{marginTop:mobile?'13px':''}}>
												  <Grid item lg={12} xs={12} >
													  <Typography  sx={{ fontSize: mobile?'12px':'14px', fontFamily: 'Inter', fontWeight: '600',textAlign:'initial', color: '#1E1E1E', lineHeight: 'normal' }}>
          {comment.userName}
														  </Typography>
													  </Grid>
													  <Grid item lg={12} xs={12} >
													  <Typography sx={{ fontSize: mobile?'12px':'14px', fontFamily: 'Inter', fontWeight:mobile?'400': '600',textAlign:'initial', color: '#1E1E1E', lineHeight: 'normal',marginTop:'8px',marginBottom:"12px" }}>
          {comment.content}
        </Typography>
														  </Grid>
												  </Grid>
												  <Grid container lg={2} xs={2}>
                          <Grid item lg={12} xs={10}>
      <MoreHorizIcon
        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
        onClick={comment.userId===userId?handleClick2:handleClick}
      />
														  {comment.userId===userId ?  <Menu 
											id="basic-menu"
											style={{borderRadius:'8px',}}
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleReport1(item._id, comment._id,comment.content)}  style={{
            fontSize: '16px',    
            fontWeight: 400, color:'#1e1e1e',   
          }}>Report</MenuItem>
           <Dialog open={isDialogOpen} onClose={handleCloseDialog1}  PaperProps={{
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
          <Button onClick={handleClose} style={{
    backgroundColor: "transparent",
    border: "1px solid #07b0f5", // You can adjust the border properties as needed
    color: "#07b0f5",
    textTransform:'none' ,// You might want to change the text color
  }}>
           Cancel
          </Button>
          <Button onClick={handleReport(item._id, comment._id,comment.content)} style={{textTransform:'none', backgroundColor: '#07b0f5',
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
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="xs"
        fullWidth
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
          <Button onClick={handleDeleteClick(item._id, comment._id)} style={{textTransform:'none', backgroundColor: '#07b0f5',
    color: 'white',}}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
	  </Menu> :<Menu 
											id="basic-menu"
											style={{borderRadius:'8px',}}
        anchorEl={anchorEl1}
        open={open}
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
          <Button onClick={handleReport(item._id, comment._id,comment.content)} style={{textTransform:'none', backgroundColor: '#07b0f5',
    color: 'white',}}>
    Report
  </Button>
        </DialogActions>
      </Dialog>
        

        
      </Menu>}
    </Grid>
				
				
												  </Grid>
												  <Grid item lg={9} xs={7} sx={{margin:'auto'}}>
				<Typography
            sx={{ fontSize: '12px', fontFamily: 'Inter', fontWeight: '400',textAlign:'initial', color: '#5B5A5A', lineHeight: 'normal'}}
					> {comment.formattedTimestamp}</Typography>
					</Grid>
       
											  </Grid>
											  
		
    ))}
										  </Grid>
										  </>									  
)}


                            {/* TextField for adding nested comments */}
                            
							
                          
                        </Grid>
						  </Grid>
				
					  </Grid>
					  
                  );
                })
              ) : (
                <p>No data available</p>
						  ))}
						  		  <Stack spacing={2}>
      
      <Pagination count={10} variant="outlined" shape="rounded" page={currentPage}
        onChange={handleChange4} />
    </Stack>
            </Grid>
				  </Grid>
				  
				  {mobile?'':  <Grid container lg={5.4} sx={{marginLeft:'37px',marginTop:'121px',height:'878px',backgroundColor:'#FAF7F7',borderRadius:'16px'}}>

  
<Grid item lg={12}>
  <Grid item lg={11} sx={{margin:'auto'}}>
  <Typography sx={{fontSize:'20px',fontWeight:'500',marginTop:'21px'}}>Recommended For You</Typography>
  </Grid>
  <Divider sx={{ margin: 'auto', width:mobile?'100%': '100%', marginLeft:mobile?'0px': '0px',marginTop:'24px' ,color:'#6E767D'}} />
<Grid item lg={11} sx={{margin:'auto'}}>
  <Typography sx={{fontSize:'15px',fontWeight:'400',marginTop:'21px'}}>Algorithm</Typography>
  </Grid>
							  <Grid container lg={11.5} xs={10.5} sx={{ margin: 'auto', }}>
							  <Grid container lg={0.4} xs={1.5} style={{ display: startIndex1 > 0 ? 'flex' : 'none',alignItems:'center',position:mobile?"absolute":"",top:mobile?'1050px':"0px",left:mobile?'20px':"0px",zIndex:2}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderLeftkey} onClick={()=>handlePrevClick2('Algorithm')} sx={{ width:mobile?"36px": '36px', height:mobile?"36px":  '36px', color: '#FFF',marginTop:"-30px" }} />
					
						</Grid>
								  </Grid>
								  <Grid container lg={11.2} xs={11}>
  {loading1 ? (
        Array.from({ length: 4 }).map((_, index) => (
          <ImageWithSkeleton
            key={`skeleton-${index}`}
          />
        ))
									  ) : (
											  
										<>
										<SwipeableViews
										  index={startIndex1}
										  onChangeIndex={(index) => setStartIndex1(index)}
										  
										>
										  {Array.from({ length: numSets }).map(
											(_, index) => (
											  <div key={`image-set-${index}`} >
											   
												  {images1.filter((image) => image.category === 'Algorithm')
													.slice(index * imagesToShow, (index + 1) * imagesToShow)
															  .map((image) => (
													  <Grid
													  container
														lg={mobile ? 12 : 3}
														xs={12}
														key={image._id}
														className="image-container"
														sx={{ marginBottom: '26px' }}
																  >
																	  
														<img
														  src={`${image.imageData}`}
														  alt={image.pdfName}
														  width={mobile ? '95px' : '95px'}
                                                          height={mobile ? '155px' : '155px'}
														  style={{ borderRadius: '12px' }}
														  onClick={() => openDialog1({ ...image, fileId: image._id, selectedImagesynopsis })}
																	  />
																	  
													  </Grid>
													))}
												
											  </div>
											)
										  )}
										</SwipeableViews>
										{/* Add navigation buttons here */}
									  </>
									  )}
									  </Grid>
								  <Grid container lg={0.4} xs={1.5} sx={{alignItems:'center',position:mobile?"absolute":"",top:mobile?'1050px':"0px",left:mobile?startIndex1 > 0 ?'260px':'260px':"0px"}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderRightkey}  onClick={()=>handleNextClick2('Algorithm')} sx={{ width: mobile?"36px": '36px', height: mobile?"36px": '36px',color:"#FFF",marginTop:"-30px" }} />
				
						</Grid>
				</Grid>
   
<Dialog
  open={dialogOpen3}
  onClose={closeDialog}
  sx={{
    overflow: 'hidden',
    '& .MuiDialog-paper': {
      borderRadius: '26px', // Apply border radius to the dialog paper
      width: mobile?'244px':'700px',      // Adjust width as needed
      maxWidth: '100%', 
	  height:mobile?'650px':'445px'   // Ensure the dialog doesn't exceed its container
    },
  }}
>
  
   
 
  <DialogContent sx={{ textAlign: "left" }}>
  <Grid container lg={12} xs={12}>
      <Grid container lg={12} xs={12}>
        <Grid container lg={6} xs={12} sx={{marginTop:'20px'}}>
       
    <img
      src={`data:image/jpeg;base64,${selectedImage1.imageData}`}
      alt={selectedImage1.pdfName}
      style={{
        borderRadius: '12px', 
        height: mobile?'221px':'381px',      
        width: mobile?'180px':'280px',        
      }}
    />
        </Grid>
        <Grid container lg={6} xs={12} sx={{margin:'auto'}}>
          <Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
        <Typography sx={{fontSize:mobile?'16px':'26px',fontFamily:'Inter',fontWeight:'700',textAlign:'initial'}}>{selectedImage1.title}</Typography>
							</Grid>
				
							<Grid item lg={12} xs={12} sx={{marginTop:'8px'}}>
        <Typography onClick={handleUserProfile}  sx={{fontSize:mobile?'16px':'20px',fontFamily:'Inter',fontWeight:'500',textAlign:'initial',color:'#000000'}}>{selectedImageUserId}</Typography>
							</Grid>
							<Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
							<Typography
  sx={{
    fontSize: mobile ? '12px' : '12px',
    fontFamily: 'Inter',
    fontWeight: '400',
    textAlign: 'initial'
  }}
>
  {new Date(selectedImage1.createdAt).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })} {/* Display the formatted date directly in the Typography component */}
</Typography>		</Grid>
        <Grid item lg={12} xs={12}  >
        <Typography sx={{ marginTop: 2 , fontSize:mobile?'14px':'16px',fontFamily:'Inter',fontWeight:'500',display:'flex',justifyContent:'center',textAlign:'initial'}}>
														  
														  {selectedImage1 && selectedImage1.synopsis ? (
    selectedImage1.synopsis.length > 250
      ? `${selectedImage1.synopsis.slice(0, 225)}...`
      : selectedImage1.synopsis
  ) : (
    ''
  )}
          </Typography>
          </Grid>
          <DialogActions>
            <Grid item lg={12} xs={12} sx={{marginBottom:mobile?"32px":'20px'}}>
    <Button
      sx={{
        textTransform: 'none',
        backgroundColor: '#07b0f5',
        borderRadius: '8px',
        top:'32px',left:mobile?'0px':'139px',
        '&:hover': {
          backgroundColor: '#07b0f5',
        },
        '&:active': {
          backgroundColor: '#07b0f5',
        },
      }}
      onClick={handleImageClick1}
      variant="contained"
      color="primary"
    >
      Read Sample Chapters
    </Button>
    </Grid>
    <IconButton
      sx={{
        position: 'absolute',
        top: '8px',
        right: '10px',
        overflow: 'hidden',
      }}
      color="#1e1e1e"
      onClick={closeDialog}
    >
      <CloseIcon />
    </IconButton>
  </DialogActions>
          </Grid>
      </Grid>
    </Grid>
   
    
  </DialogContent>
 
</Dialog>
</Grid>


</Grid>
<Divider sx={{ margin: 'auto', width:mobile?'100%': '100%', marginLeft:mobile?'0px': '0px',marginTop:'0px' }} />
<Grid item lg={12}>
  <Grid item lg={11} sx={{margin:'auto'}}>
  <Typography sx={{fontSize:'15px',fontWeight:'400',marginTop:'21px'}}>DataStructureal</Typography>
  </Grid>
  <Grid container lg={11.5} xs={10.5} sx={{ margin:'auto', marginBottom:'0px',}}>
  <Grid container lg={0.4} xs={1.5} style={{ display: startIndex1 > 0 ? 'flex' : 'none',alignItems:'center',position:mobile?"absolute":"",top:mobile?'1050px':"0px",left:mobile?'20px':"0px",zIndex:2}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderLeftkey} onClick={()=>handlePrevClick3('DataStructure')} sx={{ width:mobile?"36px": '36px', height:mobile?"36px":  '36px', color: '#FFF',marginTop:"-30px" }} />
					
						</Grid>
								  </Grid>
								  <Grid container lg={11.2} xs={11}>
  {loading1 ? (
        Array.from({ length: 4 }).map((_, index) => (
          <ImageWithSkeleton
            key={`skeleton-${index}`}
          />
        ))
									  ) : (
											  
										<>
										<SwipeableViews
										  index={startIndex2}
										  onChangeIndex={(index) => setStartIndex2(index)}
										  
										>
										  {Array.from({ length: numSets }).map(
											(_, index) => (
											  <div key={`image-set-${index}`} >
											   
												  {images1.filter((image) => image.category === 'DataStructure')
													.slice(index * imagesToShow, (index + 1) * imagesToShow)
															  .map((image) => (
													  <Grid
													  container
														lg={mobile ? 12 : 3}
														xs={12}
														key={image._id}
														className="image-container"
														sx={{ marginBottom: '26px' }}
																  >
																	  
														<img
														  src={`${image.imageData}`}
														  alt={image.pdfName}
														  width={mobile ? '95px' : '95px'}
                                                          height={mobile ? '155px' : '155px'}
														  style={{ borderRadius: '12px' }}
														  onClick={() => openDialog1({ ...image, fileId: image._id, selectedImagesynopsis })}
																	  />
																	  
													  </Grid>
													))}
												
											  </div>
											)
										  )}
										</SwipeableViews>
										{/* Add navigation buttons here */}
									  </>
									  )}
									  </Grid>
								  <Grid container lg={0.4} xs={1.5} sx={{alignItems:'center',position:mobile?"absolute":"",top:mobile?'1050px':"0px",left:mobile?startIndex2 > 0 ?'260px':'260px':"0px"}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderRightkey}  onClick={()=>handleNextClick3('DataStructure')} sx={{ width: mobile?"36px": '36px', height: mobile?"36px": '36px',color:"#FFF",marginTop:"-30px" }} />
				
						</Grid>
				</Grid>
   
				<Dialog
  open={dialogOpen3}
  onClose={closeDialog}
  sx={{
    overflow: 'hidden',
    '& .MuiDialog-paper': {
      borderRadius: '26px', // Apply border radius to the dialog paper
      width: mobile?'244px':'700px',      // Adjust width as needed
      maxWidth: '100%', 
	  height:mobile?'650px':'445px'   // Ensure the dialog doesn't exceed its container
    },
  }}
>
  
   
 
  <DialogContent sx={{ textAlign: "left" }}>
  <Grid container lg={12} xs={12}>
      <Grid container lg={12} xs={12}>
        <Grid container lg={6} xs={12} sx={{marginTop:'20px'}}>
       
    <img
      src={`data:image/jpeg;base64,${selectedImage1.imageData}`}
      alt={selectedImage1.pdfName}
      style={{
        borderRadius: '12px', 
        height: mobile?'221px':'381px',      
        width: mobile?'180px':'280px',        
      }}
    />
        </Grid>
        <Grid container lg={6} xs={12} sx={{margin:'auto'}}>
          <Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
        <Typography sx={{fontSize:mobile?'16px':'26px',fontFamily:'Inter',fontWeight:'700',textAlign:'initial'}}>{selectedImage1.title}</Typography>
							</Grid>
				
							<Grid item lg={12} xs={12} sx={{marginTop:'8px'}}>
        <Typography onClick={handleUserProfile}  sx={{fontSize:mobile?'16px':'20px',fontFamily:'Inter',fontWeight:'500',textAlign:'initial',color:'#000000'}}>{selectedImageUserId}</Typography>
							</Grid>
							<Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
							<Typography
  sx={{
    fontSize: mobile ? '12px' : '12px',
    fontFamily: 'Inter',
    fontWeight: '400',
    textAlign: 'initial'
  }}
>
  {new Date(selectedImage1.createdAt).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })} {/* Display the formatted date directly in the Typography component */}
</Typography>		</Grid>
        <Grid item lg={12} xs={12}  >
        <Typography sx={{ marginTop: 2 , fontSize:mobile?'14px':'16px',fontFamily:'Inter',fontWeight:'500',display:'flex',justifyContent:'center',textAlign:'initial'}}>
		{selectedImage1 && selectedImage1.synopsis ? (
    selectedImage1.synopsis.length > 250
      ? `${selectedImage1.synopsis.slice(0, 225)}...`
      : selectedImage1.synopsis
  ) : (
    ''
  )}
          </Typography>
          </Grid>
          <DialogActions>
            <Grid item lg={12} xs={12} sx={{marginBottom:mobile?"32px":'20px'}}>
    <Button
      sx={{
        textTransform: 'none',
        backgroundColor: '#07b0f5',
        borderRadius: '8px',
        top:'32px',left:mobile?'0px':'139px',
        '&:hover': {
          backgroundColor: '#07b0f5',
        },
        '&:active': {
          backgroundColor: '#07b0f5',
        },
      }}
      onClick={handleImageClick1}
      variant="contained"
      color="primary"
    >
      Read Sample Chapters
    </Button>
    </Grid>
    <IconButton
      sx={{
        position: 'absolute',
        top: '8px',
        right: '10px',
        overflow: 'hidden',
      }}
      color="#1e1e1e"
      onClick={closeDialog}
    >
      <CloseIcon />
    </IconButton>
  </DialogActions>
          </Grid>
      </Grid>
    </Grid>
   
    
  </DialogContent>
 
</Dialog>
</Grid>


</Grid>
<Divider sx={{ margin: 'auto', width:mobile?'100%': '100%', marginLeft:mobile?'0px': '0px',marginTop:'0px' }} />

						  <Grid item lg={12}>
  <Grid item lg={11} sx={{margin:'auto'}}>
  <Typography sx={{fontSize:'15px',fontWeight:'400',marginTop:'21px'}}>ComputerNetworks</Typography>
  </Grid>
  <Grid container lg={11.5} xs={10.5} sx={{ margin:'auto', marginBottom:'0px',  }}>
  <Grid container lg={0.4} xs={1.5} style={{ display: startIndex3 > 0 ? 'flex' : 'none',alignItems:'center',position:mobile?"absolute":"",top:mobile?'1050px':"0px",left:mobile?'20px':"0px",zIndex:2}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderLeftkey} onClick={()=>handlePrevClick4('ComputerNetworks')} sx={{ width:mobile?"36px": '36px', height:mobile?"36px":  '36px', color: '#FFF',marginTop:"-30px" }} />
					
						</Grid>
								  </Grid>
								  <Grid container lg={11.2} xs={11}>
  {loading1 ? (
        Array.from({ length: 4 }).map((_, index) => (
          <ImageWithSkeleton
            key={`skeleton-${index}`}
          />
        ))
									  ) : (
											  
										<>
										<SwipeableViews
										  index={startIndex3}
										  onChangeIndex={(index) => setStartIndex3(index)}
										  
										>
										  {Array.from({ length: numSets }).map(
											(_, index) => (
											  <div key={`image-set-${index}`} >
											   
												  {images1.filter((image) => image.category === 'ComputerNetworks')
													.slice(index * imagesToShow, (index + 1) * imagesToShow)
															  .map((image) => (
													  <Grid
													  container
														lg={mobile ? 12 : 3}
														xs={12}
														key={image._id}
														className="image-container"
														sx={{ marginBottom: '26px' }}
																  >
																	  
														<img
														  src={`${image.imageData}`}
														  alt={image.pdfName}
														  width={mobile ? '95px' : '95px'}
                                                          height={mobile ? '155px' : '155px'}
														  style={{ borderRadius: '12px' }}
														  onClick={() => openDialog1({ ...image, fileId: image._id, selectedImagesynopsis })}
																	  />
																	  
													  </Grid>
													))}
												
											  </div>
											)
										  )}
										</SwipeableViews>
										{/* Add navigation buttons here */}
									  </>
									  )}
									  </Grid>
								  <Grid container lg={0.4} xs={1.5} sx={{alignItems:'center',position:mobile?"absolute":"",top:mobile?'1050px':"0px",left:mobile?startIndex3 > 0 ?'260px':'260px':"0px"}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderRightkey}  onClick={()=>handleNextClick4('ComputerNetworks')} sx={{ width: mobile?"36px": '36px', height: mobile?"36px": '36px',color:"#FFF",marginTop:"-30px" }} />
				
						</Grid>
				</Grid>
   
				<Dialog
  open={dialogOpen3}
  onClose={closeDialog}
  sx={{
    overflow: 'hidden',
    '& .MuiDialog-paper': {
      borderRadius: '26px', // Apply border radius to the dialog paper
      width: mobile?'244px':'700px',      // Adjust width as needed
      maxWidth: '100%', 
	  height:mobile?'650px':'445px'   // Ensure the dialog doesn't exceed its container
    },
  }}
>
  
   
 
  <DialogContent sx={{ textAlign: "left" }}>
  <Grid container lg={12} xs={12}>
      <Grid container lg={12} xs={12}>
        <Grid container lg={6} xs={12} sx={{marginTop:'20px'}}>
       
    <img
      src={`data:image/jpeg;base64,${selectedImage1.imageData}`}
      alt={selectedImage1.pdfName}
      style={{
        borderRadius: '12px', 
        height: mobile?'221px':'381px',      
        width: mobile?'180px':'280px',        
      }}
    />
        </Grid>
        <Grid container lg={6} xs={12} sx={{margin:'auto'}}>
          <Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
        <Typography sx={{fontSize:mobile?'16px':'26px',fontFamily:'Inter',fontWeight:'700',textAlign:'initial'}}>{selectedImage1.title}</Typography>
							</Grid>
				
							<Grid item lg={12} xs={12} sx={{marginTop:'8px'}}>
        <Typography onClick={handleUserProfile}  sx={{fontSize:mobile?'16px':'20px',fontFamily:'Inter',fontWeight:'500',textAlign:'initial',color:'#000000'}}>{selectedImageUserId}</Typography>
							</Grid>
							<Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
							<Typography
  sx={{
    fontSize: mobile ? '12px' : '12px',
    fontFamily: 'Inter',
    fontWeight: '400',
    textAlign: 'initial'
  }}
>
  {new Date(selectedImage1.createdAt).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })} {/* Display the formatted date directly in the Typography component */}
</Typography>		</Grid>
        <Grid item lg={12} xs={12}  >
        <Typography sx={{ marginTop: 2 , fontSize:mobile?'14px':'16px',fontFamily:'Inter',fontWeight:'500',display:'flex',justifyContent:'center',textAlign:'initial'}}>
		{selectedImage1 && selectedImage1.synopsis ? (
    selectedImage1.synopsis.length > 250
      ? `${selectedImage1.synopsis.slice(0, 225)}...`
      : selectedImage1.synopsis
  ) : (
    ''
  )}
          </Typography>
          </Grid>
          <DialogActions>
            <Grid item lg={12} xs={12} sx={{marginBottom:mobile?"32px":'20px'}}>
    <Button
      sx={{
        textTransform: 'none',
        backgroundColor: '#07b0f5',
        borderRadius: '8px',
        top:'32px',left:mobile?'0px':'139px',
        '&:hover': {
          backgroundColor: '#07b0f5',
        },
        '&:active': {
          backgroundColor: '#07b0f5',
        },
      }}
      onClick={handleImageClick1}
      variant="contained"
      color="primary"
    >
      Read Sample Chapters
    </Button>
    </Grid>
    <IconButton
      sx={{
        position: 'absolute',
        top: '8px',
        right: '10px',
        overflow: 'hidden',
      }}
      color="#1e1e1e"
      onClick={closeDialog}
    >
      <CloseIcon />
    </IconButton>
  </DialogActions>
          </Grid>
      </Grid>
    </Grid>
   
    
  </DialogContent>
 
</Dialog>
</Grid>


</Grid>

          </Grid>}
        </Grid>
        
		  </Grid>
		  {mobile?  <Grid container lg={4.9} xs={10} sx={{margin:'auto',marginTop:mobile?'56px':'121px'}}>
<Box sx={{height:mobile?'800px':'818px',backgroundColor:'#FAF7F7',width:mobile?'100%':'870px',borderRadius:'16px'}}>
  
<Grid item lg={12} xs={12}>
  <Grid item lg={10.8} xs={10} sx={{margin:'auto'}}>
  <Typography sx={{fontSize:mobile?'14px':'20px',fontWeight:'500',marginTop:mobile?'16px':'21px'}}>Recommended For You</Typography>
  </Grid>
  <Divider sx={{ margin: 'auto', width:mobile?'100%': '100%', marginLeft:mobile?'0px': '0px',marginTop:'16px' }} />
<Grid item lg={10.8} xs={11} sx={{margin:'auto'}}>
  <Typography sx={{fontSize:'12px',fontWeight:'400',marginTop:'16px'}}>Algorithm</Typography>
  </Grid>
  <Grid container lg={11.5} xs={12} sx={{ margin:'auto', marginBottom:'100px',}}>
  <Grid container lg={0.4} xs={1.5} style={{ display: startIndex1 > 0 ? 'flex' : 'none',alignItems:'center',position:mobile?"inherit":"",top:mobile?'0px':"0px",left:mobile?'20px':"0px",zIndex:2}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderLeftkey} onClick={()=>handlePrevClick2('Algorithm')} sx={{ width:mobile?"36px": '36px', height:mobile?"36px":  '36px', color: '#FFF',marginTop:"-30px" }} />
					
						</Grid>
								  </Grid>
								  <Grid container lg={11.2} xs={9}>
  {loading1 ? (
        Array.from({ length: 1 }).map((_, index) => (
          <ImageWithSkeleton
            key={`skeleton-${index}`}
          />
        ))
									  ) : (
											  
										<>
										<SwipeableViews
										  index={startIndex1}
										  onChangeIndex={(index) => setStartIndex1(index)}
										  
										>
										  {Array.from({ length: numSets }).map(
											(_, index) => (
											  <div key={`image-set-${index}`} >
											   
												  {images1.filter((image) => image.category === 'Algorithm')
													.slice(index * imagesToShow, (index + 1) * imagesToShow)
															  .map((image) => (
													  <Grid
													  container
														lg={mobile ? 12 : 3}
														xs={6}
														key={image._id}
														className="image-container"
														sx={{ marginBottom: '26px' }}
																  >
																	  
														<img
														  src={`${image.imageData}`}
														  alt={image.pdfName}
														  width={mobile ? '95px' : '95px'}
                                                          height={mobile ? '155px' : '155px'}
														  style={{ borderRadius: '12px' }}
														  onClick={() => openDialog1({ ...image, fileId: image._id, selectedImagesynopsis })}
																	  />
																	  
													  </Grid>
													))}
												
											  </div>
											)
										  )}
										</SwipeableViews>
										{/* Add navigation buttons here */}
									  </>
									  )}
									  </Grid>
								  <Grid container lg={0.4} xs={1.5} sx={{alignItems:'center',position:mobile?"inherit":"",top:mobile?'0px':"0px",left:mobile?startIndex2 > 0 ?'260px':'260px':"0px"}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderRightkey}  onClick={()=>handleNextClick2('Algorithm')} sx={{ width: mobile?"36px": '36px', height: mobile?"36px": '36px',color:"#FFF",marginTop:"-30px" }} />
				
						</Grid>
				</Grid>
   
<Dialog
  open={dialogOpen3}
  onClose={closeDialog}
  sx={{
    overflow: 'hidden',
    '& .MuiDialog-paper': {
      borderRadius: '26px', // Apply border radius to the dialog paper
      width: mobile?'244px':'700px',      // Adjust width as needed
      maxWidth: '100%', 
	  height:mobile?'650px':'445px'   // Ensure the dialog doesn't exceed its container
    },
  }}
>
  
   
 
  <DialogContent sx={{ textAlign: "left" }}>
    <Grid container lg={12} xs={12}>
      <Grid container lg={12} xs={12}>
        <Grid container lg={6} xs={12} sx={{marginTop:'20px'}}>
       
    <img
      src={`data:image/jpeg;base64,${selectedImage1.imageData}`}
      alt={selectedImage1.pdfName}
      style={{
        borderRadius: '12px', 
        height: mobile?'221px':'381px',      
        width: mobile?'180px':'280px',        
      }}
    />
        </Grid>
        <Grid container lg={6} xs={12} sx={{margin:'auto'}}>
          <Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
        <Typography sx={{fontSize:mobile?'16px':'26px',fontFamily:'Inter',fontWeight:'700',textAlign:'initial'}}>{selectedImage1.title}</Typography>
        </Grid>
        <Grid item lg={12} xs={12}  >
        <Typography sx={{ marginTop: 2 , fontSize:mobile?'14px':'16px',fontFamily:'Inter',fontWeight:'500',display:'flex',justifyContent:'center',textAlign:'initial'}}>
		{selectedImage1 && selectedImage1.synopsis ? (
    selectedImage1.synopsis.length > 250
      ? `${selectedImage1.synopsis.slice(0, 225)}...`
      : selectedImage1.synopsis
  ) : (
    ''
  )}
          </Typography>
          </Grid>
          <DialogActions>
            <Grid item lg={12} xs={12} sx={{marginBottom:mobile?"30px":"10px"}}>
    <Button
      sx={{
        textTransform: 'none',
        backgroundColor: '#07b0f5',
        borderRadius: '8px',
        top:'32px',left:mobile?'0px':'139px',
        '&:hover': {
          backgroundColor: '#07b0f5',
        },
        '&:active': {
          backgroundColor: '#07b0f5',
        },
      }}
      onClick={handleImageClick1}
      variant="contained"
      color="primary"
    >
      Read Sample Chapters
    </Button>
    </Grid>
    <IconButton
      sx={{
        position: 'absolute',
        top: '8px',
        right: '10px',
        overflow: 'hidden',
      }}
      color="#1e1e1e"
      onClick={closeDialog}
    >
      <CloseIcon />
    </IconButton>
  </DialogActions>
          </Grid>
      </Grid>
    </Grid>
   
    
  </DialogContent>
 
</Dialog>
</Grid>


</Grid>
<Divider sx={{ margin: 'auto', width:mobile?'100%': '100%', marginLeft:mobile?'0px': '0px',marginTop:'-96px' }} />
<Grid item lg={12} xs={12}>
  <Grid item lg={10.8} xs={11} sx={{margin:'auto'}}>
  <Typography sx={{fontSize:'12px',fontWeight:'400',marginTop:'16px'}}>DataStructureal</Typography>
  </Grid>
  <Grid container lg={11.5} xs={12} sx={{ margin:'auto', marginBottom:'100px',}}>
  <Grid container lg={0.4} xs={1.5} style={{ display: startIndex2 > 0 ? 'flex' : 'none',alignItems:'center',position:mobile?"inherit":"",top:mobile?'0px':"0px",left:mobile?'20px':"0px",zIndex:2}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderLeftkey} onClick={()=>handlePrevClick3('DataStructure')} sx={{ width:mobile?"36px": '36px', height:mobile?"36px":  '36px', color: '#FFF',marginTop:"-30px" }} />
					
						</Grid>
								  </Grid>
								  <Grid container lg={11.2} xs={9}>
  {loading1 ? (
        Array.from({ length: 1 }).map((_, index) => (
          <ImageWithSkeleton
            key={`skeleton-${index}`}
          />
        ))
									  ) : (
											  
										<>
										<SwipeableViews
										  index={startIndex2}
										  onChangeIndex={(index) => setStartIndex2(index)}
										  
										>
										  {Array.from({ length: numSets }).map(
											(_, index) => (
											  <div key={`image-set-${index}`} >
											   
												  {images1.filter((image) => image.category === 'DataStructure')
													.slice(index * imagesToShow, (index + 1) * imagesToShow)
															  .map((image) => (
													  <Grid
													  container
														lg={mobile ? 12 : 3}
														xs={6}
														key={image._id}
														className="image-container"
														sx={{ marginBottom: '26px' }}
																  >
																	  
														<img
														  src={`${image.imageData}`}
														  alt={image.pdfName}
														  width={mobile ? '95px' : '95px'}
                                                          height={mobile ? '155px' : '155px'}
														  style={{ borderRadius: '12px' }}
														  onClick={() => openDialog1({ ...image, fileId: image._id, selectedImagesynopsis })}
																	  />
																	  
													  </Grid>
													))}
												
											  </div>
											)
										  )}
										</SwipeableViews>
										{/* Add navigation buttons here */}
									  </>
									  )}
									  </Grid>
								  <Grid container lg={0.4} xs={1.5} sx={{alignItems:'center',position:mobile?"inherit":"",top:mobile?'0px':"0px",left:mobile?startIndex2 > 0 ?'260px':'260px':"0px"}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderRightkey}  onClick={()=>handleNextClick3('DataStructure')} sx={{ width: mobile?"36px": '42px', height: mobile?"36px": '42px',color:"#FFF",marginTop:"-30px" }} />
				
						</Grid>
				</Grid>
   
				<Dialog
  open={dialogOpen3}
  onClose={closeDialog}
  sx={{
    overflow: 'hidden',
    '& .MuiDialog-paper': {
      borderRadius: '26px', // Apply border radius to the dialog paper
      width: mobile?'244px':'700px',      // Adjust width as needed
      maxWidth: '100%', 
	  height:mobile?'650px':'445px'   // Ensure the dialog doesn't exceed its container
    },
  }}
>
  
   
 
  <DialogContent sx={{ textAlign: "left" }}>
  <Grid container lg={12} xs={12}>
      <Grid container lg={12} xs={12}>
        <Grid container lg={6} xs={12} sx={{marginTop:'20px'}}>
       
    <img
      src={`data:image/jpeg;base64,${selectedImage1.imageData}`}
      alt={selectedImage1.pdfName}
      style={{
        borderRadius: '12px', 
        height: mobile?'221px':'381px',      
        width: mobile?'180px':'280px',        
      }}
    />
        </Grid>
        <Grid container lg={6} xs={12} sx={{margin:'auto'}}>
          <Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
        <Typography sx={{fontSize:mobile?'16px':'26px',fontFamily:'Inter',fontWeight:'700',textAlign:'initial'}}>{selectedImage1.title}</Typography>
							</Grid>
				
							<Grid item lg={12} xs={12} sx={{marginTop:'8px'}}>
        <Typography onClick={handleUserProfile}  sx={{fontSize:mobile?'16px':'20px',fontFamily:'Inter',fontWeight:'500',textAlign:'initial',color:'#000000'}}>{selectedImageUserId}</Typography>
							</Grid>
							<Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
							<Typography
  sx={{
    fontSize: mobile ? '12px' : '12px',
    fontFamily: 'Inter',
    fontWeight: '400',
    textAlign: 'initial'
  }}
>
  {new Date(selectedImage1.createdAt).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })} {/* Display the formatted date directly in the Typography component */}
</Typography>		</Grid>
        <Grid item lg={12} xs={12}  >
        <Typography sx={{ marginTop: 2 , fontSize:mobile?'14px':'16px',fontFamily:'Inter',fontWeight:'500',display:'flex',justifyContent:'center',textAlign:'initial'}}>
		{selectedImage1 && selectedImage1.synopsis ? (
    selectedImage1.synopsis.length > 250
      ? `${selectedImage1.synopsis.slice(0, 225)}...`
      : selectedImage1.synopsis
  ) : (
    ''
  )}
          </Typography>
          </Grid>
          <DialogActions>
            <Grid item lg={12} xs={12} sx={{marginBottom:mobile?"32px":'20px'}}>
    <Button
      sx={{
        textTransform: 'none',
        backgroundColor: '#07b0f5',
        borderRadius: '8px',
        top:'32px',left:mobile?'0px':'139px',
        '&:hover': {
          backgroundColor: '#07b0f5',
        },
        '&:active': {
          backgroundColor: '#07b0f5',
        },
      }}
      onClick={handleImageClick1}
      variant="contained"
      color="primary"
    >
      Read Sample Chapters
    </Button>
    </Grid>
    <IconButton
      sx={{
        position: 'absolute',
        top: '8px',
        right: '10px',
        overflow: 'hidden',
      }}
      color="#1e1e1e"
      onClick={closeDialog}
    >
      <CloseIcon />
    </IconButton>
  </DialogActions>
          </Grid>
      </Grid>
    </Grid>
   
    
  </DialogContent>
 
</Dialog>
</Grid>


</Grid>
				  <Divider sx={{ margin: 'auto', width:mobile?'100%': '100%', marginLeft:mobile?'0px': '0px',marginTop:'-96px' }} />
<Grid item lg={12} xs={12}>
  <Grid item lg={10.8} xs={11} sx={{margin:'auto'}}>
  <Typography sx={{fontSize:'12px',fontWeight:'400',marginTop:'16px'}}>ComputerNetworksal</Typography>
  </Grid>
  <Grid container lg={11.5} xs={12} sx={{ margin:'auto', marginBottom:'100px',}}>
  <Grid container lg={0.4} xs={1.5} style={{ display: startIndex3 > 0 ? 'flex' : 'none',alignItems:'center',position:mobile?"inherit":"",top:mobile?'0px':"0px",left:mobile?'20px':"0px",zIndex:2}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderLeftkey} onClick={()=>handlePrevClick4('ComputerNetworks')} sx={{ width:mobile?"36px": '36px', height:mobile?"36px":  '36px', color: '#FFF',marginTop:"-30px" }} />
					
						</Grid>
								  </Grid>
								  <Grid container lg={11.2} xs={9}>
  {loading1 ? (
        Array.from({ length: 1 }).map((_, index) => (
          <ImageWithSkeleton
            key={`skeleton-${index}`}
          />
        ))
									  ) : (
											  
										<>
										<SwipeableViews
										  index={startIndex3}
										  onChangeIndex={(index) => setStartIndex3(index)}
										  
										>
										  {Array.from({ length: numSets }).map(
											(_, index) => (
											  <div key={`image-set-${index}`} >
											   
												  {images1.filter((image) => image.category === 'ComputerNetworks')
													.slice(index * imagesToShow, (index + 1) * imagesToShow)
															  .map((image) => (
													  <Grid
													  container
														lg={mobile ? 12 : 3}
														xs={6}
														key={image._id}
														className="image-container"
														sx={{ marginBottom: '26px' }}
																  >
																	  
														<img
														  src={`${image.imageData}`}
														  alt={image.pdfName}
														  width={mobile ? '95px' : '95px'}
                                                          height={mobile ? '155px' : '155px'}
														  style={{ borderRadius: '12px' }}
														  onClick={() => openDialog1({ ...image, fileId: image._id, selectedImagesynopsis })}
																	  />
																	  
													  </Grid>
													))}
												
											  </div>
											)
										  )}
										</SwipeableViews>
										{/* Add navigation buttons here */}
									  </>
									  )}
									  </Grid>
								  <Grid container lg={0.4} xs={1.5} sx={{alignItems:'center',position:mobile?"inherit":"",top:mobile?'0px':"0px",left:mobile?startIndex3 > 0 ?'260px':'260px':"0px"}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderRightkey}  onClick={()=>handleNextClick4('ComputerNetworks')} sx={{ width: mobile?"36px": '42px', height: mobile?"36px": '42px',color:"#FFF",marginTop:"-30px" }} />
				
						</Grid>
				</Grid>
   
				<Dialog
  open={dialogOpen3}
  onClose={closeDialog}
  sx={{
    overflow: 'hidden',
    '& .MuiDialog-paper': {
      borderRadius: '26px', // Apply border radius to the dialog paper
      width: mobile?'244px':'700px',      // Adjust width as needed
      maxWidth: '100%', 
	  height:mobile?'650px':'445px'   // Ensure the dialog doesn't exceed its container
    },
  }}
>
  
   
 
  <DialogContent sx={{ textAlign: "left" }}>
  <Grid container lg={12} xs={12}>
      <Grid container lg={12} xs={12}>
        <Grid container lg={6} xs={12} sx={{marginTop:'20px'}}>
       
    <img
      src={`data:image/jpeg;base64,${selectedImage1.imageData}`}
      alt={selectedImage1.pdfName}
      style={{
        borderRadius: '12px', 
        height: mobile?'221px':'381px',      
        width: mobile?'180px':'280px',        
      }}
    />
        </Grid>
        <Grid container lg={6} xs={12} sx={{margin:'auto'}}>
          <Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
        <Typography sx={{fontSize:mobile?'16px':'26px',fontFamily:'Inter',fontWeight:'700',textAlign:'initial'}}>{selectedImage1.title}</Typography>
							</Grid>
				
							<Grid item lg={12} xs={12} sx={{marginTop:'8px'}}>
        <Typography onClick={handleUserProfile}  sx={{fontSize:mobile?'16px':'20px',fontFamily:'Inter',fontWeight:'500',textAlign:'initial',color:'#000000'}}>{selectedImageUserId}</Typography>
							</Grid>
							<Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
							<Typography
  sx={{
    fontSize: mobile ? '12px' : '12px',
    fontFamily: 'Inter',
    fontWeight: '400',
    textAlign: 'initial'
  }}
>
  {new Date(selectedImage1.createdAt).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })} {/* Display the formatted date directly in the Typography component */}
</Typography>		</Grid>
        <Grid item lg={12} xs={12}  >
        <Typography sx={{ marginTop: 2 , fontSize:mobile?'14px':'16px',fontFamily:'Inter',fontWeight:'500',display:'flex',justifyContent:'center',textAlign:'initial'}}>
		{selectedImage1 && selectedImage1.synopsis ? (
    selectedImage1.synopsis.length > 250
      ? `${selectedImage1.synopsis.slice(0, 225)}...`
      : selectedImage1.synopsis
  ) : (
    ''
  )}
          </Typography>
          </Grid>
          <DialogActions>
            <Grid item lg={12} xs={12} sx={{marginBottom:mobile?"32px":'20px'}}>
    <Button
      sx={{
        textTransform: 'none',
        backgroundColor: '#07b0f5',
        borderRadius: '8px',
        top:'32px',left:mobile?'0px':'139px',
        '&:hover': {
          backgroundColor: '#07b0f5',
        },
        '&:active': {
          backgroundColor: '#07b0f5',
        },
      }}
      onClick={handleImageClick1}
      variant="contained"
      color="primary"
    >
      Read Sample Chapters
    </Button>
    </Grid>
    <IconButton
      sx={{
        position: 'absolute',
        top: '8px',
        right: '10px',
        overflow: 'hidden',
      }}
      color="#1e1e1e"
      onClick={closeDialog}
    >
      <CloseIcon />
    </IconButton>
  </DialogActions>
          </Grid>
      </Grid>
    </Grid>
   
    
  </DialogContent>
 
</Dialog>
</Grid>


</Grid>

</Box>
          </Grid>:""}  
		  <Footer />
	  </ThemeProvider>
  );
}

export default Explore