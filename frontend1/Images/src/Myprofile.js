import React,{useEffect,useState} from 'react'
import { Api_url } from './helper';
import { Typography, Grid, Button,IconButton,TextField } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import axios from 'axios'
import Mobileheader from './Mobileheader';
import WhatsappIcon from './WhatsppIcon';
import CloseIcon from '@mui/icons-material/Close';
import Facebookicon from './Facebookicon';
import Instagramicon from './Instagramicon';
import LinkedinIcon from './LinkedinIcon';
import {SvgIcon} from '@mui/material';
import Footer from './Footer';
import Tab from '@mui/material/Tab';
import {  Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material';
import CommentIcon from './CommentIcon';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import jwt_decode from "jwt-decode";
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import ShareButton from './Sharebutton';
import { formatDistanceToNow,format } from 'date-fns';
import { Tooltip } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TabContext from '@mui/lab/TabContext';
import { Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TabPanel from '@mui/lab/TabPanel';
import Divider from '@mui/material/Divider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import { ThumbUpAlt } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import Header from './Header';
import { useMediaQuery } from '@mui/material';
import jwtDecode from 'jwt-decode';
export const Myprofile = () => {
	const user=localStorage.getItem('token')//token lekr aaya 
	const userI = jwtDecode(user);
	const userId = userI._id;
	const mobile = useMediaQuery('(max-width:600px)');
	// console.log(userId, 'file');
    const [images, setImages] = useState([]);
    const [imagesarc, setImageSarc] = useState([]);
	const [userData, setUserData] = useState({});
    const [userData1,setUserData1]=useState({});
    const[photoUrl,setPhotoUrl]=useState(null)
	const [error, setError] = useState(null);
	const [loading, setloading] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
    const [value, setValue] = React.useState('one');
    const [data, setData] = useState([]);
    const [isLiked, setIsLiked] = useState(null);
	const [liked, setLiked] = useState(false);
	const [isDialogOpen, setDialogOpen] = useState(false);
	const [expandedPostId, setExpandedPostId] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [shareopen1, setshareOpen1] = useState(false)
    const [textValue, setTextValue] = useState('');
    const [userPhotoUrl, setUserPhotoUrl] = useState('');
    const [currentOpenDialogT1Id, setCurrentOpenDialogT1Id] = useState(null);
    const [currentOpenDialogT2Id, setCurrentOpenDialogT2Id] = useState(null);
    const [shareopen2, setshareOpen2] = useState(false)
    const [currentUrl, setCurrentUrl] = useState('');
	const open = Boolean(anchorEl);
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
    const handleChange = (event, newValue) => {
        setValue(newValue);
        };
        const handleImageClick = (fileId) => {
	  
            window.location.href = `/file-viewer?fileId=${fileId}`;
            };
            const handleClick = (event) => {
                setAnchorEl(event.currentTarget);
              };
              const handleClose = () => {
                setAnchorEl(null);
              };
	useEffect(() => {// sbse phle useeffect hi call hoyega
    
        // Fetch user data from the backend API
        fetchUserData1();
      }, []);
      const fetchUserData1 =async()=>{
        try {
            const response = await axios.get(`${Api_url}/sign/user/${userId}`, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
          
        //    console.log(response.data,'dataapi')
            setUserData1(response.data);
           
          } catch (error) {
            console.error('Error fetching user data:', error);
            return null;
          }
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
    
	useEffect(() => {
	
	 fetchImages()
	}, []);
	const fetchImages = () => {
		setloading(true);
		axios.get(`${Api_url}/Otp/api/images1?userId=${userId}`)
		  .then((response) => {
			// console.log(response.data, 'imagesii');
			setImages(response.data);
			setloading(false);
		  })
		  .catch((error) => {
			  console.error('Error fetching images:', error);
			  setloading(false);
		  });
	};
	useEffect(() => { 
		const fetchPhoto = async () => {
			try {
				
				const response = await axios.get(`${Api_url}/Otp/users/photo/${userId}`, {
					responseType: 'arraybuffer',
					headers: {
						Accept: 'image/png, image/jpeg',
					},
				});
				// console.log(response.data);
				const blob = new Blob([response.data], { type: response.headers['content-type'] });
				const url = URL.createObjectURL(blob);
				setPhotoUrl(url);
				// console.log(url);
			} 
			  catch (error) {
				  console.error(error);
				}
		 }
		fetchPhoto();
	}, [userId]);
    const handleComment = async (postId, comment) => {
		const token = localStorage.getItem('token');
		const decoded = jwt_decode(token);
			const userId = decoded._id;
    try {
      const response = await axios.post(`${Api_url}/Otp/api/story/${postId}/comment`, {
		  content: comment,
		  userId:userId
      });
    //   console.log(response.data);
		 // Fetch posts again to update the list
		setTextValue('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
	};
	
	const [copied, setCopied] = useState(false);
	const handleClose1 = () => {
		setDialogOpen1(false);
    setshareOpen1(false);
		setCurrentOpenDialogT1Id(null);
		setCurrentOpenDialogId(null);
	  };
	 
	  const copyToClipboard = () => {
		navigator.clipboard.writeText(currentUrl);
		setCopied(true);
	  }
	const [Dialogopen1, setDialogOpen1] = useState(false)
	const [currentOpenDialogId, setCurrentOpenDialogId] = useState(null);
	const handleShareClick = (event,itemId) => {
		// console.log('yes');
		setDialogOpen1(true);
		setCurrentOpenDialogId(itemId);
    setshareOpen1(true);
		setCurrentOpenDialogT1Id(itemId);
		const currentDomain = window.location.origin;
		const fileViewerUrl = `${currentDomain}/file-viewer?fileId=${itemId}`;
		setCurrentUrl(fileViewerUrl);
		// console.log(currentOpenDialogId);
	};
  const handleShareClick2 = (event,itemId) => {
   
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
    // console.log("Post liked successfully!");
     // Fetch posts again to update the list
  }
    
  // Fetch posts again to update the list
} catch (error) {
  console.error('Error adding like:', error);
}
	};
	const handleImageexp = async (fileId) => {
		// console.log(fileId, 'fileexplore');
		window.location.href = `/file-viewer?fileId=${fileId}`;
	}
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
  useEffect(() => {
    // Fetch data from the server
    

    fetchData();
  }, []);
const fetchData = async () => {
    // Fetch data from the server for
  try {
    const response = await axios.get(`${Api_url}/Otp/api/storyuser?userId=${userId}`);
    const jsonData = response.data;
// console.log(response.data);
    // Map through the data and fetch user data for each item
    const promises = jsonData.map(async (item) => {
        const userData = await fetchUserData(item.userId);
        const userPhotoUrl = await fetchUserPhoto(item.userId);
        const commentsWithUserData = await Promise.all(
          item.comments.map(async (comment) => {
              const commentUserData = await fetchUserData(comment.userId);
              const commentUserPhoto = await fetchUserPhoto(comment.userId);
			  const commentTimestamp = format(new Date(comment.timestamp),'dd MMM yyyy');
            return {
              ...comment,
              userName: commentUserData ? commentUserData.Name : 'User Not Found',
                userPhoto: commentUserPhoto,
                formattedTimestamp: commentTimestamp,
            };
          })
        );
        // const likesResponse = await axios.get(`${Api_url}/post/${item._id}/likes`);
        // const commentsResponse = await axios.get(`${Api_url}/post/${item._id}/comments`);
		const formattedTime = format(new Date(item.createdAt),'dd MMM yyyy');
		const hasLiked = item.likesArray.some((like) => like.userId === userId)
      return { ...item, userData , userPhotoUrl , formattedTime, comments: commentsWithUserData ,hasLiked: hasLiked || false,  }; // Combine user data with the item data
    });

    // Wait for all promises to resolve
    const dataWithUserData = await Promise.all(promises);

    setData(dataWithUserData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
	};
	const [voteCounts, setVoteCounts] = useState({});
	const [commentsCount, setCommentsCount] = useState({});
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
	  const handleCloseDialog = async() => {
		setOpenDialog(false);
		
	};
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
  return ( <ThemeProvider theme={theme}>
     {mobile?<Mobileheader />:<Header />}
   <Grid container lg={12}style={{marginTop:'25px' ,backgroundColor:'#07b0f5', backgroundRepeat: 'no-repeat',width: '100%', height: '245px', display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'end',
}} > 
   
		  
         
		 <Avatar src={photoUrl} sx={{position:'absolute',width:mobile?'60px':'160px',height:mobile?'60px':'160px',top:mobile?'301px':'244px',left:mobile?'41px':'150px',border:'4px solid #fff'}}></Avatar>
       
         </Grid>
         <Grid container lg={9}  xs={5} sx={{justifyContent:mobile?'initial':'center',margin:'auto'}}>
         <Grid item lg={8} sx={{margintop:'20px',marginLeft:'20px'}} >
         <Typography sx={{textAlign:'initial',fontSize:mobile?'16px':'32px',fontWeight:'600'}}>{userData1.Name}</Typography> 
         </Grid>
         </Grid>
         <Grid container lg={9.7} sx={{ margin: 'auto', backgroundColor: "#FAF7F7" ,marginTop:'56px'}}>
			
			<Grid item lg={12} sx={{padding:'20px'}}>
				<TabContext value={value} style={{marginLeft:"20px"}}>
			<Tabs
        value={value} sx={{marginLeft:mobile?'0px':"24px"}}
        onChange={handleChange}
        textColor="#07b0f5"
        indicatorColor="#07b0f5"
        aria-label="secondary tabs example"
					>
						
					<Tab value="one" label="Published"  style={{ color: value === 'one' ? '#07b0f5' : '#000000',textTransform:'none',textDecoration:"none",fontWeight:value === 'one' ? '600' : '400' }} >
						
						</Tab>
       
					</Tabs>
					<Divider variant="fullWidth" sx={{ marginTop: '0px', marginBottom: '16px', marginLeft: mobile?'14px':'39px', marginRight:mobile?'10px': '36px',backgroundColor:'#07b0f5' }} />
					<TabPanel value="one"style={{padding:mobile?"0px":"24px"}}>
						{loading ?
       <CircularProgress />
      :	
					<Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
								{images.map((image) => (
					!image.archived && (
                  <Grid container lg={12} xs={12} key={image._id} sx={{ backgroundColor: '#FFF', borderRadius:'12px', marginTop: '0px', height: mobile?"305px":'214px', width: '100%', display: 'flex', justifyContent: 'initial', alignItems: 'initial', margin: '10px', cursor: 'pointer' }} >
						<Grid item lg={2}  container  xs={4} sx={{display:'flex',justifyContent:'center', backgroundColor: '#FFF',borderRadius:'12px'}} onClick={() => handleImageClick(image._id)}>
												<img src={`${image.imageData}`} alt={image.pdfName} width={mobile ? "78px" : "117px"} height={ mobile?"102px":"166px"} style={{marginTop:"16px"}} />
						</Grid>
											<Grid item lg={5} xs={8} sx={{ backgroundColor: '#FFF'}} container onClick={() => handleImageClick(image._id)} >
												<Grid item lg={12} xs={12}>
						<Typography style={{fontFamily: 'Inter',marginTop:"16px",
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
														lineHeight: 'normal'
							}}>{image.synopsis.length > 250
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
						<Grid item lg={5}  container  xs={11.5} style={{ display: 'flex', alignItems:  image.status === 'accepted' ? 'flex-end' : 'center',justifyContent:'flex-end', backgroundColor: '#FFF',borderRadius:'12px'}}>
							{image.status === 'pending' ? <Grid item lg={10} sx={ {margin:'auto'}}><Typography style={{fontFamily: 'Inter',marginTop:"6px",
fontSize: '20px',color:'#07b0f5',
fontStyle: 'normal',
fontWeight: 400,
								lineHeight: '24.5px',
							}}>Thank you for sharing your manuscript.
								Your manuscript will be reviewed in next 48 hours, we will get back to you soon.</Typography></Grid> : <></>}
								{image.status === 'rejected' ? <Grid item lg={12}><Typography style={{fontFamily: 'Inter',marginTop:"6px",
fontSize: '20px',color:'#07b0f5',
fontStyle: 'normal',
fontWeight: 400,
								lineHeight: '24.5px',
							}}>Please resend it after the changes</Typography></Grid> : <></>}
							{image.status === 'accepted'   ?<>
							
													<Grid container lg={4} xs={12} key={image._id} sx={{ display: "flex", marginBottom: '20px',  }}>
													{mobile ? <Grid item lg={12} xs={10} sx={{ display: 'flex',justifyContent:'space-around' }}>
									<Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
										<IconButton >
											<ThumbUpAltOutlinedIcon style={{ color: '#5B5A5A' }} />
										</IconButton>
											 
										<Typography variant="body2" style={{ color: '#5B5A5A', fontSize: mobile ? '12px' : '14px', fontWeight: '500', fontFamily: 'Inter' }}>
											{voteCounts[image._id]} Votes
										</Typography>
														
									</Grid>
									<Grid item lg={6} style={{ display: 'flex', alignItems: 'center', marginLeft: '32px' }}>
													
											 
										<CommentIcon style={{ color: '#5B5A5A', marginRight: "5px" }} />
										<Typography
											sx={{ fontSize: mobile ? '12px' : '14px', fontWeight: '500', color: '#5B5A5A', fontFamily: 'Inter' }}
											variant="body1"
												 
										>
											{commentsCount[image._id]}  comments
										</Typography>
										
									</Grid>
								</Grid> :""}
													
									
									<Grid item lg={4} xs={12} sx={{display:mobile?'flex':'initial',justifyContent:mobile?'flex-end':'initial'}}>
									<Button variant='outlined' onClick={(event) => handleShareClick(event, image._id)} style={{backgroundColor:'#07b0f5',color:'#FFFFFF',textDecoration:'none',textTransform:'none',borderRadius:mobile?'6px':'8px',fontSize:mobile?"10px":'16px',padding:'12px 20px',width:"95px",height:mobile?"26px":'48px'}}><ShareButton/>Share</Button>
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
            
        <DialogTitle style={{marginTop:'25px',fontWeight:'600',textAlign:mobile?'center':'initial'}}>Share with Friends</DialogTitle>
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
       
				
					</TabContext>
			</Grid>
     
		</Grid>
       <Footer/>
       
         </ThemeProvider>
    
  )
}