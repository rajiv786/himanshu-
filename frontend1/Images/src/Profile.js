import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import { Avatar } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import WhatsappIcon from './WhatsppIcon';
import CloseIcon from '@mui/icons-material/Close';
import Facebookicon from './Facebookicon';
import Instagramicon from './Instagramicon';
import LinkedinIcon from './LinkedinIcon';
import {SvgIcon} from '@mui/material';
import { Tooltip } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { EditOutlined } from '@mui/icons-material';
import CommentIcon from './CommentIcon';
import Menu from '@mui/material/Menu';
import ShareButton from './Sharebutton';
import {  Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import Popover from '@mui/material/Popover';
import { InputAdornment } from '@mui/material';
import { ThumbUpAlt } from '@mui/icons-material';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography, Grid, Button,IconButton,TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import { formatDistanceToNow,format } from 'date-fns';
import { styled } from '@mui/system';
import Header from './Header';
import 'typeface-inter';
import jwt_decode from "jwt-decode";
import CircularProgress from '@mui/material/CircularProgress';
import TabContext from '@mui/lab/TabContext';
import { Api_url } from './helper';
import Mobileheader from './Mobileheader';
import TabPanel from '@mui/lab/TabPanel';
import Footer from './Footer';
import { css } from '@emotion/react';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const moveAnimation = css`
  @keyframes move {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-20px); /* Adjust the distance and direction as needed */
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: move 1s infinite alternate;
`
const ImageGridSkeleton = ({ mobile }) => {
	return (
	  <Grid
		container
		lg={12}
		xs={12}
		sx={{
		  backgroundColor: '#FFF',
		  borderRadius: '12px',
		  marginTop: '10px',
		  height: mobile ? '305px' : '214px',
		  width: '100%',
		  display: 'flex',
		  justifyContent: 'initial',
		  alignItems: 'initial',
		  margin: '10px',
		  cursor: 'pointer',
		}}
	  >
		{/* Skeleton for image */}
		<Grid item lg={2} container xs={4} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#EEE', borderRadius: '12px' }}>
		  <Skeleton variant="rect" width={mobile ? 78 : 117} height={mobile ? 102 : 166} />
		</Grid>
  
		{/* Skeleton for text */}
		<Grid item lg={5} xs={8} sx={{ backgroundColor: '#FFF' }} container>
		  <Grid item lg={12}>
			<Skeleton width={mobile ? '80%' : '100%'} height="20px" />
		  </Grid>
		  <Grid item lg={12}>
			<Skeleton width={mobile ? '60%' : '100%'} height="16px" />
		  </Grid>
		  {/* Additional skeleton for details, actions, and buttons */}
		</Grid>
  
		<Grid
		  item
		  lg={5}
		  container
		  xs={12}
		  style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			backgroundColor: '#FFF',
			borderRadius: '12px',
		  }}
		>
		  {/* Skeleton for status message */}
		  <Skeleton width={mobile ? '80%' : '100%'} height="20px" />
		</Grid>
		<br />
	  </Grid>
	);
  };
  
function Profile() {
	// const id = open ? 'popover' : undefined;
	const [value, setValue] = React.useState('one');
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [anchorEl1, setAnchorEl1] = useState(null);
	const [isDialogOpen, setDialogOpen] = useState(false);
	const [currentOpenDialogId, setCurrentOpenDialogId] = useState(null);
	
	const open2 = Boolean(anchorEl1);
	const [currentOpenId, setCurrentOpenId] = useState(null);
	const [anchorEl2, setAnchorEl2] = useState(null);
	const [currentOpenId2, setCurrentOpenId2] = useState(null);
	const handleClick2 = (event,itemId) => {
		setAnchorEl1(event.currentTarget);
		setCurrentOpenId(itemId);
	};
	const handleClick3 = (event,itemId) => {
		setAnchorEl2(event.currentTarget);
		setCurrentOpenId2(itemId);
	}
	const [anchorEl3, setAnchorEl3] = useState(null);
	const [currentOpenId3, setCurrentOpenId3] = useState(null);
	const handleClick4 = (event,itemId) => {
		setAnchorEl3(event.currentTarget);
		setCurrentOpenId3(itemId);
	}

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};
	const [images, setImages] = useState([]);
	const [imagesarc, setImageSarc] = useState([]);
	const [extractedText, setExtractedText] = useState('');
	const [loading, setloading] = useState(false);
	const[loader,setloader]=useState([false]);
	const [data, setData] = useState([]);
	const [likeCount, setLikeCount] = useState(0);
	const [isLiked, setIsLiked] = useState(null);
	const [expandedPostId, setExpandedPostId] = useState(null);
	const [liked, setLiked] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	const [userPhotoUrl, setUserPhotoUrl] = useState('');
	const [archiveStatus, setArchiveStatus] = useState(false);
	const user = localStorage.getItem('token');
	
	const [currentUrl, setCurrentUrl] = useState('');
	const [copied, setCopied] = useState(false);
	const [shareopen1, setshareOpen1] = useState(false)
	const [currentOpenDialogT1Id, setCurrentOpenDialogT1Id] = useState(null);
	const copyToClipboard = () => {
		navigator.clipboard.writeText(currentUrl);
		setCopied(true);
	  }
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
	const handleShareClick = (event,itemId) => {
		// console.log('yes');
		setshareOpen1(true);
		setCurrentOpenDialogT1Id(itemId);
		const currentDomain = window.location.origin;

    // Construct the URL with the file ID
    const fileViewerUrl = `${currentDomain}/file-viewer?fileId=${itemId}`;
		setCurrentUrl(fileViewerUrl);
		// console.log(currentOpenDialogId);
	};
const handleClose1 = () => {
		setshareOpen1(false);
		setCurrentOpenDialogT1Id(null);
	  };

	  const [shareopen2, setshareOpen2] = useState(false)
	  const [currentOpenDialogT2Id, setCurrentOpenDialogT2Id] = useState(null);
	  const handleShareClick2 = (event,itemId) => {
		//   console.log('yes');
		  setshareOpen2(true);
		  setCurrentOpenDialogT2Id(itemId);
		  const currentDomain = window.location.origin;

    // Construct the URL with the file ID
    const fileViewerUrl = `${currentDomain}/explore`;
		setCurrentUrl(fileViewerUrl);
		  
	  };
  const handleCloset2 = () => {
		  setshareOpen2(false);
		  setCurrentOpenDialogT2Id(null);
		};
	const mobile = useMediaQuery('(max-width:600px)');
	const [textValue, setTextValue] = useState('');
	const userI = jwt_decode(user);
	const userId = userI._id;
	// console.log(userId)
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
	const handleCloseDialog = async() => {
		setOpenDialog(false);
		
	};
	
	const [deletepost, setdeletepost] = useState(false);
	const fetchData = async () => {
		  // Fetch data from the server for
		try {
		  const response = await axios.get(`${Api_url}/Otp/api/storyuser?userId=${userId}`);
		  const jsonData = response.data;
//   console.log(response.data);
		  // Map through the data and fetch user data for each item
		  const promises = jsonData.map(async (item) => {
			  const userData = await fetchUserData(item.userId);
			  const userPhotoUrl = await fetchUserPhoto(item.userId);
			  const commentsWithUserData = await Promise.all(
				item.comments.map(async (comment) => {
					const commentUserData = await fetchUserData(comment.userId);
					const commentUserPhoto = await fetchUserPhoto(comment.userId);
					const commentTimestamp =  format(new Date(comment.timestamp),'dd MMM yyyy');
				  return {
					...comment,
					userName: commentUserData ? commentUserData.Name : 'User Not Found',
					  userPhoto: commentUserPhoto,
					  formattedTimestamp: commentTimestamp,
				  };
				})
			  );
			  const hasLiked = item.likesArray.some((like) => like.userId === userId)
			  // const likesResponse = await axios.get(`${Api_url}/post/${item._id}/likes`);
			  // const commentsResponse = await axios.get(`${Api_url}/post/${item._id}/comments`);
			  const formattedTime = format(new Date(item.createdAt),'dd MMM yyyy');
			return { ...item, userData , userPhotoUrl , formattedTime, comments: commentsWithUserData, hasLiked: hasLiked || false }; // Combine user data with the item data
		  });
  
		  // Wait for all promises to resolve
		  const dataWithUserData = await Promise.all(promises);
  
		  setData(dataWithUserData);
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  };
  useEffect(() => {
    // Fetch data from the server
    

    fetchData();
  }, [deletepost]);
	
	const handleDeleteClick = (storyId,commentId) => async () => {
    try {
      const response = await axios.post(`${Api_url}/Otp/deletec/${storyId}/${commentId}`);
     
      fetchData();
		setOpenDialog(false)
		
 
    } catch (error) {
      console.error('Error adding comment:', error);
      setOpenDialog(false)

    }
	};
	
	// useEffect(() => {
	// 	setloading(true);
	//   axios.get(`${Api_url}/Otp/archived?userId=${userId}`).then((response) => {
	// 	console.log(response.data,'archieved');
	// 	setImageSarc(response.data);
	// 	  setloading(false);
	//   });
	// }, []);
	useEffect(() => {
		// Fetch images when the component mounts
		fetchImages();
		fetchArchivedImages();
	  }, [userId,archiveStatus]);
	const fetchImages = () => {
		setloading(true);
		axios.get(`${Api_url}/Otp/api/images2?userId=${userId}`)
		  .then((response) => {
			console.log(response.data, 'imagesii');
			setImages(response.data);
			setloading(false);
		  })
		  .catch((error) => {
			  console.error('Error fetching images:', error);
			  setloading(false);
		  });
	};
	const fetchArchivedImages = async () => {
		try {
		  
		  const response = await axios.get(`${Api_url}/Otp/archived?userId=${userId}`);
		  console.log(response.data, 'archived');
		  setImageSarc(response.data);
		 
		} catch (error) {
		  console.error('Error fetching archived images:', error);
		 
		}
	  };
	const [voteCounts, setVoteCounts] = useState({});
	const [commentsCount, setCommentsCount] = useState({});
	const handleClose2 = () => {

		setAnchorEl1(null);
		setCurrentOpenId(null);
		
	};
	const handleclose3 = () => {
		setAnchorEl2(null);
		setCurrentOpenId2(null);
	}
	const handleclose4 = () => {
		setAnchorEl3(null);
		setCurrentOpenId3(null);
	}
	
	  const handleDeleteClick2 = (itemId) => () => {
		// Handle the delete action here for the specific item with itemId
		 
		  setDialogOpen(true);
		  setCurrentOpenDialogId(itemId);
		  setdeletepost(!deletepost);
		  console.log(currentOpenDialogId,isDialogOpen,'value',itemId,'ss')
	};
	const handleDeleteClick3 = (itemId) => async () =>  {
		// Handle the delete action here for the specific item with itemId
		const response = await axios.post(`${Api_url}/Otp/postdelete/${itemId}`);
		  setDialogOpen(false);
		setCurrentOpenDialogId(null);
		handleClose2();
		  
	};
	const handleDeleteClick4 = (itemId) => () => {
		// Handle the delete action here for the specific item with itemId
		 
		  setDialogOpen(false);
		setCurrentOpenDialogId(null);
		handleClose2();
		  
	  };
	
	  
  // Assuming you have images and other state variables
  
  useEffect(() => {
    const fetchVoteCounts = async () => {
		const newVoteCounts = {};
		const newCommentsCount = {};
      for (const image of images) {
        try {
          const response = await fetch(`${Api_url}/Otp/votecount/${image._id}`); // Replace with your API endpoint URL
          if (response.ok) {
            const data = await response.json();
            newVoteCounts[image._id] = data.voteCount;
          } else {
            newVoteCounts[image._id] = 0; // Handle error, if needed
			}
			const commentsResponse = await axios.get(`${Api_url}/Otp/comments/${image._id}`);
          newCommentsCount[image._id] = commentsResponse.data.length;
        } catch (error) {
          console.error(error); // Handle the error
			newVoteCounts[image._id] = 0;
			newCommentsCount[image._id] = 0;// Set voteCount to 0 in case of an error
        }
      }
		setVoteCounts(newVoteCounts);
		setCommentsCount(newCommentsCount);
     
    };   
    fetchVoteCounts();
  }, [images]);
	
	const handleImageClick = (fileId) => {
	  
	  window.location.href = `/file-viewer?fileId=${fileId}`;
	  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
	};
	const[text,setText]=useState(false);
	const handleArchive = (imageId) => async() => {
		setText(true);
		try {
			const response = await fetch(`${Api_url}/Otp/archive/${imageId}`, {
			  method: 'PUT',
			});
			const data = await response.json();
			console.log('File archived:', data);
			setArchiveStatus(!archiveStatus);
			setText(false);
			// You can update your UI state or perform other actions here
		  } catch (error) {
			console.error('Error archiving file:', error);
			setText(false);
		  }
		
	};
	const[text1,settext1]=useState(false)
	const handleunArchive = (imageId) => async() => {
		settext1(true)
		try {
			const response = await fetch(`${Api_url}/Otp/unarchive/${imageId}`, {
			  method: 'PUT',
			});
			const data = await response.json();
			console.log('File archived:', data);
			setArchiveStatus(!archiveStatus);
			settext1(false)
			// You can update your UI state or perform other actions here
		  } catch (error) {
			console.error('Error archiving file:', error);
			settext1(false)
		  }
		
	};
	const handleImageexp = async (fileId) => {
		console.log(fileId, 'fileexplore');
		window.location.href = `/file-viewer?fileId=${fileId}`;
	}
	const[text2,settext2]=useState(false)
	const handleDelete = (imageId) => async() => {
		settext2(true)
		try {
			const response = await fetch(`${Api_url}/Otp/filedel/${imageId}`, {
			  method: 'delete',
			});
			const data = await response.json();
			console.log('File deleted:', data);
			settext2(false)
			// You can update your UI state or perform other actions here
		  } catch (error) {
			console.error('Error archiving file:', error);
			settext2(false)
		  }
		
	  };
	const handleLike = async (postId) => {
		const decode = localStorage.getItem('token');
		const decoded = jwt_decode(decode);
		const userId = decoded._id;
    try {
      const response = await axios.post(`${Api_url}/Otp/api/story/${postId}/like`,{
        userId: userId, // Replace with the actual user ID
      });
	  if (response.data.hasLiked) {
		// If hasLiked is true, show a message or perform an action
		setIsLiked(true);
		alert("You've already liked this post.");
	  } else {
		console.log("Post liked successfully!");
		fetchData(); // Fetch posts again to update the list
	  }
		
      // Fetch posts again to update the list
    } catch (error) {
      console.error('Error adding like:', error);
    }
  };

 
	const handleComment = async (postId, comment) => {
		const token = localStorage.getItem('token');
		const decoded = jwt_decode(token);
			const userId = decoded._id;
    try {
      const response = await axios.post(`${Api_url}/Otp/api/story/${postId}/comment`, {
		  content: comment,
		  userId:userId
      });
      console.log(response.data);
		fetchData(); // Fetch posts again to update the list
		setTextValue('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };
	
	return (<ThemeProvider theme={theme}>
		  
		{mobile?<Mobileheader />:<Header />} 
		<Grid container lg={9.7} xs={10} sx={{ margin: 'auto' }}>
			  <Grid item lg={6} sx={{marginTop:"32px",marginBottom:"56px",justifyContent:'flex-start'}}>
			  <Typography sx={{fontSize:mobile?'26px':'36px',fontFamily:'Inter',fontWeight:mobile?500:700,fontStyle:"normal",lineHeight:'normal'}}>My Uploads</Typography>  
			</Grid>
			{/* <Grid item lg={6} sx={{marginTop:"32px",marginBottom:"56px",justifyContent:'flex-end',display:'flex'}}>
				<Button variant='outlined' style={{backgroundColor:'#07b0f5',color:'#FFFFFF',textDecoration:'none',textTransform:'none',borderRadius:'8px',fontSize:'16px',padding:'12px 20px',width:"95px",height:'48px'}}>Upload</Button>
			</Grid> */}
			 
		  </Grid>
		<Grid container lg={9.7}  xs={11} sx={{ margin: 'auto', backgroundColor: "#FAF7F7",borderRadius:"12px",marginBottom:mobile?"70px":"48px" }}>
			
			<Grid item lg={12} sx={{padding:'20px'}}>
				<TabContext value={value} style={{marginLeft:"20px"}}>
			<Tabs
        value={value} sx={{marginLeft:mobile?'0px':"24px"}}
        onChange={handleChange}
        textColor="#07b0f5"
        indicatorColor="#07b0f5"
        aria-label="secondary tabs example"
					>
						
						<Tab value="one" label="Published" style={{ color: value === 'one' ? '#07b0f5' : '#000000',textTransform:'none',textDecoration:"none",fontWeight:value === 'one' ? '600' : '400' }} >
						
						</Tab>
      <Tab value="two" label="Archieves" style={{color:value === 'two' ? '#07b0f5' : '#000000',textTransform:'none',textDecoration:"none",fontWeight:value === 'two' ? '600' : '400'}} />
					</Tabs>
					<Divider variant="fullWidth" sx={{ marginTop: '0px', marginBottom: '0px', marginLeft: mobile?'8px':'36px', marginRight: mobile?'8px':'36px',backgroundColor:'#07b0f5' }} />
					<TabPanel value="one"style={{padding:mobile?"0px":"24px"}}>
						{loading ?
       <CircularProgress style={{color:'#07b0f5'}} />
      :	
					<Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
								{images.map((image) => (
					!image.archived && (
                  <Grid container lg={12} xs={12} key={image._id} sx={{ backgroundColor: '#FFF', borderRadius:'12px', marginTop: '0px', height: mobile?"314px":'214px', width: '100%', display: 'flex', justifyContent: 'initial', alignItems: 'initial', margin: '10px', cursor: 'pointer' }} >
						<Grid item lg={2}  container  xs={4} sx={{display:'flex',justifyContent:'center', backgroundColor: '#FFF',borderRadius:'12px'}} onClick={() => handleImageClick(image._id)}>
												<img src={`${image.imageData}`} alt={image.pdfName} width={mobile ? "78px" : "117px"} height={ mobile?"102px":"166px"} style={{marginTop:mobile?"32px":"24px"}} />
						</Grid>
											<Grid item lg={5} xs={7.5} sx={{ backgroundColor: '#FFF'}} container onClick={() => handleImageClick(image._id)} >
												<Grid item lg={12} xs={11}>
						<Typography style={{fontFamily: 'Inter',marginTop:mobile?"32px":"16px",
fontSize: mobile?"14px":'20px',
fontStyle: 'normal',
fontWeight: 600,
								lineHeight: 'normal',
							}}>{image.title}</Typography>
												</Grid>
												<Grid item lg={12} xs={12}
												>

							<Typography style={{fontFamily: 'Inter',marginTop:mobile?"0px":"6px",
fontSize:mobile?"12px": '16px',color:'#5B5A5A',
fontStyle: 'normal',
fontWeight: mobile?400:400,
														lineHeight: 'normal'
							}}>{
								mobile
								  ? image.synopsis.length > 170
									? `${image.synopsis.slice(0, 170)}...`
									: image.synopsis
								  : image.synopsis.length > 200
								  ? `${image.synopsis.slice(0, 200)}...`
								  : image.synopsis
							  }
												</Typography>
													</Grid>
									{mobile?"":<Grid item lg={12} sx={{display:'flex'}}>
													<Grid item lg={6} sx={{display:'flex',alignItems:'center'}}>
											  <IconButton >			
												  <ThumbUpAltOutlinedIcon style={{ color: '#5B5A5A' }}  />											  
											  </IconButton>
											 
                              <Typography variant="body2" style={{color: '#5B5A5A', fontSize:mobile?'12px': '14px', fontWeight: '500',fontFamily:'Inter'  }}>
													{voteCounts[image._id]} Votes
										  </Typography>
														
													</Grid>
													<Grid item lg={6}style={{ display: 'flex', alignItems: 'center', marginLeft: '4px' }}>
													
											 
											 <CommentIcon style={{ color: '#5B5A5A',marginRight:"5px" }} />
							   <Typography
								 sx={{ fontSize:mobile?'12px': '14px', fontWeight: '500', color: '#5B5A5A',fontFamily:'Inter' }}
												 variant="body1"
												 
							   >
							  {commentsCount[image._id]}  comments 
							   </Typography>
										
														</Grid>
													</Grid>}
							
							
						</Grid>
						
						<Grid item lg={5}  container  xs={12} style={{ display: 'flex', alignItems:  image.status === 'accepted' ? 'flex-end' : 'center',justifyContent:'flex-end', backgroundColor: '#FFF',borderRadius:'12px',height:mobile?"87px":""}}>
							{image.status === 'pending' ? <Grid item lg={10} sx={ {margin:'auto'}}><Typography style={{fontFamily: 'Inter',marginTop:"6px",
fontSize: mobile?"12px":'20px',color:'#07b0f5',
fontStyle: 'normal',
fontWeight: 400,
								lineHeight: mobile?"15.98px": '24.5px',
							}}>Thank you for sharing your manuscript.
								Your manuscript will be reviewed in next 48 hours, we will get back to you soon.</Typography></Grid> : <></>}
												{image.status === 'rejected' ? <>
												<Grid container lg={10} key={image._id} sx={{ display: "flex", marginBottom: '20px', justifyContent: mobile ? 'space-around' : '' }}>
													{mobile ? <Grid item lg={12} xs={10} sx={{ display: 'flex',justifyContent:"space-between" }}>
									<Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<IconButton >
											<ThumbUpAltOutlinedIcon style={{ color: '#5B5A5A' }} />
										</IconButton>
											 
										<Typography variant="body2" style={{ color: '#5B5A5A', fontSize: mobile ? '12px' : '14px', fontWeight: '500', fontFamily: 'Inter' }}>
											{voteCounts[image._id]} Votes
										</Typography>
														
									</Grid>
									<Grid item lg={6} style={{ display: 'flex', alignItems: 'center', marginLeft: '4px' }}>
													
											 
										<CommentIcon style={{ color: '#5B5A5A', marginRight: "5px" }} />
										<Typography
											sx={{ fontSize: mobile ? '12px' : '14px', fontWeight: '500', color: '#5B5A5A', fontFamily: 'Inter' }}
											variant="body1"
												 
										>
											{commentsCount[image._id]}  comments
										</Typography>
										
									</Grid>
								</Grid> :""}
														<Grid container lg={11} key={image._id} sx={{ justifyContent: "end", marginTop: mobile ? "-200px" : "0px" }}>
														<Grid item lg={10} sx={ {margin:'auto',marginBottom:"55px"}}><Typography style={{fontFamily: 'Inter',marginTop:"6px",
fontSize: mobile?"12px":'20px',color:'#07b0f5',
fontStyle: 'normal',
fontWeight: 400,
								lineHeight: mobile?"3.5px":'24.5px',
							}}>Please Resend it after the changes.</Typography></Grid>		
										<MoreHorizIcon onClick={(event) => handleClick3(event, image._id)} style={{ width: "20px", height: '20px' }} />
										<Menu
											id="basic-menu"
											style={{borderRadius:'12px'}}
											anchorEl={anchorEl2}
											open={currentOpenId2 === image._id}
											onClose={handleclose3}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
																<MenuItem onClick={handleArchive(image._id)}>{text?"Please Wait...":"Archieve"}</MenuItem>
        <MenuItem onClick={handleDelete(image._id)}>{text2?"Please Wait...":"Delete"}</MenuItem>
        
      </Menu>
									</Grid>
									<Grid item lg={8} sx={{display:'flex',justifyContent:'center'}}>
									<Button variant='outlined' style={{backgroundColor:'#07b0f5',color:'#FFFFFF',textDecoration:'none',textTransform:'none',borderRadius:mobile?'6px':'8px',fontSize:mobile?"10px":'16px',padding:'12px 20px',height:mobile?"26px":'48px'}}>Rejected</Button>
			
									</Grid>
									
								</Grid></> : <></>}
							{image.status === 'accepted'   ?<>
							
													<Grid container lg={10} key={image._id} sx={{ display: "flex", marginBottom: '20px', justifyContent: mobile ? 'space-around' : '' }}>
													{mobile ? <Grid item lg={12} xs={10} sx={{ display: 'flex',justifyContent:"space-between" }}>
									<Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<IconButton >
											<ThumbUpAltOutlinedIcon style={{ color: '#5B5A5A' }} />
										</IconButton>
											 
										<Typography variant="body2" style={{ color: '#5B5A5A', fontSize: mobile ? '12px' : '14px', fontWeight: '500', fontFamily: 'Inter' }}>
											{voteCounts[image._id]} Votes
										</Typography>
														
									</Grid>
									<Grid item lg={6} style={{ display: 'flex', alignItems: 'center', marginLeft: '4px' }}>
													
											 
										<CommentIcon style={{ color: '#5B5A5A', marginRight: "5px" }} />
										<Typography
											sx={{ fontSize: mobile ? '12px' : '14px', fontWeight: '500', color: '#5B5A5A', fontFamily: 'Inter' }}
											variant="body1"
												 
										>
											{commentsCount[image._id]}  comments
										</Typography>
										
									</Grid>
								</Grid> :""}
														<Grid container lg={11} xs={10.5} key={image._id} sx={{ justifyContent: "end", marginTop: mobile ? "-232px" : "-121px" }}>
														
										<MoreHorizIcon onClick={(event) => handleClick3(event, image._id)} style={{ width: "20px", height: '20px' }} />
										<Menu
											id="basic-menu"
											style={{borderRadius:'12px'}}
											anchorEl={anchorEl2}
											open={currentOpenId2 === image._id}
											onClose={handleclose3}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
																<MenuItem onClick={handleArchive(image._id)}>{text?"Please Wait...":"Archieve"}</MenuItem>
        <MenuItem onClick={handleDelete(image._id)}>{text2?"Please Wait...":"Delete"}</MenuItem>
        
      </Menu>
									</Grid>
									<Grid item lg={8} sx={{display:'flex',justifyContent:'center'}}>
									<Button variant='outlined' onClick={(event) => handleShareClick(event, image._id)} style={{backgroundColor:'#07b0f5',color:'#FFFFFF',textDecoration:'none',textTransform:'none',borderRadius:mobile?'6px':'8px',fontSize:mobile?"10px":'16px',padding:'12px 20px',height:mobile?"26px":'48px'}}><ShareButton/>Share with Friends</Button>
			
								<Dialog open={shareopen1 && currentOpenDialogT1Id === image._id} onClose={handleClose1}   PaperProps={{
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
            
        <DialogTitle  style={{marginTop:'25px',fontWeight:'600',textAlign:mobile?'center':'initial'}}>Share with Friends</DialogTitle>
        <IconButton
      aria-label="Close"
      onClick={handleClose1}
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
								</> : <></>}
							</Grid>
						<br/>
					
                  </Grid>)
                ))}
              </Grid>}
				</TabPanel>
				
					<TabPanel value="two" style={{padding:mobile?"0px":"24px"}}>
					{imagesarc.map((image) => (
						<Grid container lg={12} xs={12} key={image._id} sx={{ backgroundColor: '#FFF', borderRadius: '12px', marginTop: '0px', height: mobile?"305px":'214px', width: '100%', display: 'flex', justifyContent: 'initial', alignItems: 'initial', margin: '10px', cursor: 'pointer' }} >
						<Grid item lg={2} container  xs={4}  sx={{display:'flex',justifyContent:'center', backgroundColor: '#FFF'}} onClick={() => handleImageClick(image._id)}>
								<img src={`${image.imageData}`} alt={image.pdfName} width={mobile ? "78px" : "117px"} height={mobile ? "102px" : "166px"} style={{marginTop:mobile?"32px":"24px"}} />
						</Grid>
							<Grid item lg={5} xs={7.5}  sx={{ backgroundColor: '#FFF'}} container onClick={() => handleImageClick(image._id)} >
							<Grid item lg={12} xs={12}>
						<Typography style={{fontFamily: 'Inter',marginTop:mobile?"32px":"16px",
fontSize: mobile?"14px":'20px',
fontStyle: 'normal',
fontWeight: 600,
								lineHeight: 'normal',
							}}>{image.title}</Typography>
									</Grid>
<Grid item lg={12} xs={12}>
							<Typography style={{fontFamily: 'Inter',marginTop:"6px",
fontSize:mobile?"12px": '16px',color:'#5B5A5A',
fontStyle: 'normal',
fontWeight: mobile?400:400,
								lineHeight: 'normal',
							}}>{
								mobile
								  ? image.synopsis.length > 100
									? `${image.synopsis.slice(0, 200)}...`
									: image.synopsis
								  : image.synopsis.length > 200
								  ? `${image.synopsis.slice(0, 200)}...`
								  : image.synopsis
							  }
								</Typography>
								</Grid>
								{mobile?"":<Grid item lg={12} sx={{display:'flex'}}>
													<Grid item lg={6} sx={{display:'flex',alignItems:'center'}}>
											  <IconButton >			
												  <ThumbUpAltOutlinedIcon style={{ color: '#5B5A5A' }}  />											  
											  </IconButton>
											 
                              <Typography variant="body2" style={{color: '#5B5A5A', fontSize:mobile?'12px': '14px', fontWeight: '500',fontFamily:'Inter'  }}>
													{voteCounts[image._id]} Votes
										  </Typography>
														
													</Grid>
													<Grid item lg={6}style={{ display: 'flex', alignItems: 'center', marginLeft: '4px' }}>
													
											 
											 <CommentIcon style={{ color: '#5B5A5A',marginRight:"5px" }} />
							   <Typography
								 sx={{ fontSize:mobile?'12px': '14px', fontWeight: '500', color: '#5B5A5A',fontFamily:'Inter' }}
												 variant="body1"
												 
							   >
							  {commentsCount[image._id]}  comments 
							   </Typography>
										
														</Grid>
													</Grid>}
							
							</Grid>
							
						<Grid item lg={5}   container  xs={12} style={{ display: 'flex', alignItems:  image.status === 'accepted' ? '' : 'center', backgroundColor: '#FFF'}}>
							{image.status === 'pending' ? <Grid item lg={10} sx={ {margin:'auto'}}><Typography style={{fontFamily: 'Inter',marginTop:"6px",
fontSize: '20px',color:'#07b0f5',
fontStyle: 'normal',
fontWeight: 400,
								lineHeight: '24.5px',
							}}>Thank you for sharing your manuscript.
								Your manuscript will be reviewed in next 48 hours, we will get back to you soon.</Typography></Grid> : <></>}
								{image.status === 'rejected' ? 			<Grid container lg={10} key={image._id} sx={{ display: "flex", marginBottom: '20px', justifyContent: mobile ? 'space-around' : '' }}>
													{mobile ? <Grid item lg={12} xs={10} sx={{ display: 'flex',justifyContent:"space-between" }}>
									<Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<IconButton >
											<ThumbUpAltOutlinedIcon style={{ color: '#5B5A5A' }} />
										</IconButton>
											 
										<Typography variant="body2" style={{ color: '#5B5A5A', fontSize: mobile ? '12px' : '14px', fontWeight: '500', fontFamily: 'Inter' }}>
											{voteCounts[image._id]} Votes
										</Typography>
														
									</Grid>
									<Grid item lg={6} style={{ display: 'flex', alignItems: 'center', marginLeft: '4px' }}>
													
											 
										<CommentIcon style={{ color: '#5B5A5A', marginRight: "5px" }} />
										<Typography
											sx={{ fontSize: mobile ? '12px' : '14px', fontWeight: '500', color: '#5B5A5A', fontFamily: 'Inter' }}
											variant="body1"
												 
										>
											{commentsCount[image._id]}  comments
										</Typography>
										
									</Grid>
								</Grid> :""}
														<Grid container lg={11} key={image._id} sx={{ justifyContent: "end", marginTop: mobile ? "-232px" : "0px" }}>
										<Grid item lg={10} sx={{ margin: 'auto', marginBottom: "55px" }}>
											<Typography style={{
												fontFamily: 'Inter', marginTop: "6px",
fontSize: mobile?"12px":'20px',color:'#07b0f5',
fontStyle: 'normal',
fontWeight: 400,
								lineHeight: '24.5px',
							}}>Please Resend it after the changes.</Typography></Grid>		
										<MoreHorizIcon onClick={(event) => handleClick3(event, image._id)} style={{ width: "20px", height: '20px' }} />
										<Menu
											id="basic-menu"
											style={{borderRadius:'12px'}}
											anchorEl={anchorEl2}
											open={currentOpenId2 === image._id}
											onClose={handleclose3}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
																<MenuItem onClick={handleunArchive(image._id)}>{text1?"Please Wait..":"UnArchieve"}</MenuItem>
        <MenuItem onClick={handleDelete(image._id)}>{text2?"Please Wait..":"Delete"}</MenuItem>
        
      </Menu>
									</Grid>
									
									
								</Grid> : <></>}
							{image.status === 'accepted' ?<>
							
								<Grid container lg={10} sx={{display:"flex",marginBottom:'20px',justifyContent:mobile?'space-around':''}}>
									{mobile ? <Grid item lg={12} xs={10} sx={{ display: 'flex',justifyContent:"space-between" }}>
									<Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<IconButton >
											<ThumbUpAltOutlinedIcon style={{ color: '#5B5A5A' }} />
										</IconButton>
											 
										<Typography variant="body2" style={{ color: '#5B5A5A', fontSize: mobile ? '12px' : '14px', fontWeight: '500', fontFamily: 'Inter' }}>
											{voteCounts[image._id]} Votes
										</Typography>
														
									</Grid>
									<Grid item lg={6} style={{ display: 'flex', alignItems: 'center', marginLeft: '4px' }}>
													
											 
										<CommentIcon style={{ color: '#5B5A5A', marginRight: "5px" }} />
										<Typography
											sx={{ fontSize: mobile ? '12px' : '14px', fontWeight: '500', color: '#5B5A5A', fontFamily: 'Inter' }}
											variant="body1"
												 
										>
											{commentsCount[image._id]}  comments
										</Typography>
										
									</Grid>
								</Grid> :""}
										<Grid  container lg={11} xs={10.5} key={image._id} sx={{ justifyContent: "end", marginTop: mobile ? "-262px" : "26px" }}>
										<MoreHorizIcon onClick={(event) => handleClick4(event, image._id)} style={{ width: "20px", height: '20px' }} />
										<Menu
											id="basic-menu"
											style={{borderRadius:'12px'}}
											anchorEl={anchorEl3}
											open={currentOpenId3 === image._id}
											onClose={handleclose4}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
												<MenuItem onClick={handleunArchive(image._id)}>{text1?"Please Wait":"UnArchieve"}</MenuItem>
        <MenuItem onClick={handleDelete(image._id)}>{text2?"Please Wait":"Delete"}</MenuItem>
        
      </Menu>
									</Grid>
									

								</Grid>
								</> : <></>}
							</Grid>
						<br/>
					
                  </Grid>
                ))}
					</TabPanel>
					</TabContext>
			</Grid>
     
		</Grid>
		<Footer  />
		</ThemeProvider>
  )
}
export default Profile