import { Typography,Grid,Button} from '@mui/material'
import React, { useState,useEffect } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import{ SvgIcon } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Header from './Header';
import SliderRightkey from './SliderRightkey';

import { createTheme } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { ThemeProvider } from '@mui/material';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import 'typeface-inter';
import {Dialog,DialogContent,DialogActions} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Api_url } from './helper';
import { useMediaQuery } from '@mui/material';
import Mobileheader from './Mobileheader';
import SliderLeftkey from './SliderLeftKey';
const ImageWithSkeleton = ({ image, mobile, openDialog, selectedImagesynopsis }) => (
	<Grid container lg={3} xs={12} key={image} className="image-container" sx={{ marginBottom: '26px' }}>
	  <Grid item lg={12} xs={10}>
		<Skeleton variant="rectangular" animation='wave' width={mobile ? 240 : 250} height={mobile ? 356 : 356} />
	  </Grid>
	  <Grid item lg={10}>
		<Skeleton variant="text" animation='wave' width={mobile ? 100 : 150} sx={{marginTop:'30px'}} />
	  </Grid>
	</Grid>
  );
const Home = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	
  const selectedGenre = searchParams.get('genre');
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [loading1, setloading1] = useState(true);
	const user = localStorage.getItem('user');
	const user1 = localStorage.getItem('user1');
	const token = localStorage.getItem("token");
	const [startIndex, setStartIndex] = useState(0);
	const [startIndex1, setStartIndex1] = useState(0);
	const [startIndex2, setStartIndex2] = useState(0);
	const [startIndex3, setStartIndex3] = useState(0);
	const [startIndex4, setStartIndex4] = useState(0);
	const mobile = useMediaQuery('(max-width:600px)');
	
	const imagesToShow = mobile ? 1 : 4;

	const handlePrevClick = () => {
		setStartIndex((prevIndex) => (prevIndex === 0 ? images1.length - 1 : prevIndex - 1));
		
	  };
	
	const handleNextClick = () => {
		const numSets = Math.ceil(images1.length / imagesToShow);
		// console.log(numSets, 'numsets');
		  setStartIndex((prevIndex) => (prevIndex === numSets1- 1 ? 0 : prevIndex + 1));
	};
	const handleNextClick2 = (imageCategory) => {
		const filteredImages = images.filter((image) => image.category === imageCategory);
		
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
		
		setStartIndex1((prevIndex) => (prevIndex === numSets - 1 ? 0 : prevIndex + 1));
	  };
	
	  const handlePrevClick2 = (imageCategory) => {
		const filteredImages = images.filter((image) => image.category === imageCategory);
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
		const filteredImages = images.filter((image) => image.category === imageCategory);
		
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
		
		setStartIndex2((prevIndex) => (prevIndex === numSets - 1 ? 0 : prevIndex + 1));
	  };
	
	  const handlePrevClick3 = (imageCategory) => {
		const filteredImages = images.filter((image) => image.category === imageCategory);
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
		const filteredImages = images.filter((image) => image.category === imageCategory);
		
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
		
		setStartIndex3((prevIndex) => (prevIndex === numSets - 1 ? 0 : prevIndex + 1));
	  };
	
	  const handlePrevClick4 = (imageCategory) => {
		const filteredImages = images.filter((image) => image.category === imageCategory);
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
	  
		setStartIndex3((prevIndex) => {
		  if (prevIndex === 0) {
			return numSets - 1;
		  } else {
			return prevIndex - 1;
		  }
		});
	};
	const handleNextClick5 = (imageCategory) => {
		const filteredImages = images.filter((image) => image.category === imageCategory);
		
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
		
		setStartIndex4((prevIndex) => (prevIndex === numSets - 1 ? 0 : prevIndex + 1));
	  };
	
	  const handlePrevClick5 = (imageCategory) => {
		const filteredImages = images.filter((image) => image.category === imageCategory);
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
	  
		setStartIndex4((prevIndex) => {
		  if (prevIndex === 0) {
			return numSets - 1;
		  } else {
			return prevIndex - 1;
		  }
		});
	  };
	  const [startIndex5, setStartIndex5] = useState(0);
	  const handleNextClick6 = (imageCategory) => {
			  const filteredImages = images.filter((image) => image.category === imageCategory);
			  
			  const numSets = Math.ceil(filteredImages.length / imagesToShow);
			  
			  setStartIndex5((prevIndex) => (prevIndex === numSets - 1 ? 0 : prevIndex + 1));
			};
		  
			const handlePrevClick6 = (imageCategory) => {
			  const filteredImages = images.filter((image) => image.category === imageCategory);
			  const numSets = Math.ceil(filteredImages.length / imagesToShow);
			
			  setStartIndex5((prevIndex) => {
				if (prevIndex === 0) {
				  return numSets - 1;
				} else {
				  return prevIndex - 1;
				}
			  });
		  };
		  const [startIndex6, setStartIndex6] = useState(0);
		  const handleNextClick7 = (imageCategory) => {
				  const filteredImages = images.filter((image) => image.category === imageCategory);
				  
				  const numSets = Math.ceil(filteredImages.length / imagesToShow);
				  
				  setStartIndex6((prevIndex) => (prevIndex === numSets - 1 ? 0 : prevIndex + 1));
				};
			  
				const handlePrevClick7 = (imageCategory) => {
				  const filteredImages = images.filter((image) => image.category === imageCategory);
				  const numSets = Math.ceil(filteredImages.length / imagesToShow);
				
				  setStartIndex6((prevIndex) => {
					if (prevIndex === 0) {
					  return numSets - 1;
					} else {
					  return prevIndex - 1;
					}
				  });
			  };
			  const [startIndex7, setStartIndex7] = useState(0);
			  const handleNextClick8 = (imageCategory) => {
					  const filteredImages = images.filter((image) => image.category === imageCategory);
					  
					  const numSets = Math.ceil(filteredImages.length / imagesToShow);
					  
					  setStartIndex7((prevIndex) => (prevIndex === numSets - 1 ? 0 : prevIndex + 1));
					};
				  
					const handlePrevClick8 = (imageCategory) => {
					  const filteredImages = images.filter((image) => image.category === imageCategory);
					  const numSets = Math.ceil(filteredImages.length / imagesToShow);
					
					  setStartIndex7((prevIndex) => {
						if (prevIndex === 0) {
						  return numSets - 1;
						} else {
						  return prevIndex - 1;
						}
					  });
	};
	const [startIndex8, setStartIndex8] = useState(0);
const handleNextClick9 = (imageCategory) => {
		const filteredImages = images.filter((image) => image.category === imageCategory);
		
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
		
		setStartIndex8((prevIndex) => (prevIndex === numSets - 1 ? 0 : prevIndex + 1));
	  };
	
	  const handlePrevClick9 = (imageCategory) => {
		const filteredImages = images.filter((image) => image.category === imageCategory);
		const numSets = Math.ceil(filteredImages.length / imagesToShow);
	  
		setStartIndex8((prevIndex) => {
		  if (prevIndex === 0) {
			return numSets - 1;
		  } else {
			return prevIndex - 1;
		  }
		});
	};
	const [error, setError] = useState('');
	const [dialogOpen, setDialogOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState({});
	const [selectedImageId, setSelectedImageId] = useState('');

	const [selectedImagesynopsis, setSelectedImagesynopsis] = useState({});
	const [selectedImageUserId, setSelectedImageUserName] = useState('');
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
	const openDialog = async(image) => {
	  setSelectedImage(image);
	  setSelectedImageId(image._id);
		setSelectedImagesynopsis(image.synopsis);
		
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
	  setDialogOpen(true);
	};
  
	const closeDialog = () => {
	  setSelectedImage({});
	  setSelectedImageId('');
		setSelectedImagesynopsis('');
		setSelectedImageUserName('');
	  setDialogOpen(false);
	};
	const handleUserProfile =()=>{
		window.location.href = `/userPage?userId=${selectedImage.userId}`;
	}
	const navigate = useNavigate();
	const [images, setImages] = useState([]);
	const [images1, setImages1] = useState([]);
	useEffect(() => {// sbse phle useeffect hi call hoyega
		const token = localStorage.getItem("token");
		const user = localStorage.getItem('user');
		const user1 = localStorage.getItem('user1');
        if (token) {
          try {
            const decoded = jwt_decode(token);
           
			  setUserData(decoded);
			 
          } catch (error) {
            console.error(error);
          }
		}
		else if (user||user1) {
			
			navigate('/home')
		}
		else {
          navigate('/landing');
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
		
		axios.get(`${Api_url}/Otp/api/images/home`).then((response) => {
			// console.log(response.data,'images');
		setImages(response.data);
		setLoading(false);
	});
	
	}, []);
	useEffect(() => {
		
		axios.get(`${Api_url}/Otp/api/images/homes`).then((response) => {
			// console.log(response.data,'imagespro');
		setImages1(response.data);
			setloading1(false);
	});
	
  }, []);
  const handleImageClick = (fileId) => {
    // Send the fileId to the backend using a GET request
	axios.post(`${Api_url}/Otp/readCount/${selectedImageId}`, { increment: true })
	.then(() => {
		window.location.href = `/file-viewer?fileId=${selectedImageId}`;
	})
	.catch((error) => {
	  console.error('Error updating read count:', error);
	})
	
	};
    
      
	
    
    const numSets = Math.ceil(images.length / imagesToShow);
	const numSets1 = Math.ceil(images1.length / imagesToShow);
	
    const handleSubmit = async (e) => {

        e.preventDefault();
    }

	
	return ( <ThemeProvider theme={theme}>
		{mobile ? <Mobileheader /> : <Header />}
		<Grid container lg={12} xs={12} sx={{marginTop: mobile?"16px":'32px',marginBottom:mobile?"26px":'56px'}}>
			<Grid item lg={10} xs={9.5} sx={{ textAlign: 'initial', margin: 'auto' }}>
			{user ? (
  <Typography sx={{ fontSize: mobile?"20px": '36px', fontFamily: 'Inter', fontWeight: '500', color: '#1E1E1E', fontStyle: 'normal' }}>
    Welcome, {user}!
  </Typography>
) : user1 ? (
  <Typography sx={{ fontSize: mobile?"20px": '36px', fontFamily: 'Inter', fontWeight: '500', color: '#1E1E1E', fontStyle: 'normal' }}>
    Welcome, {user1}!
  </Typography>
) :userData ? (
  <Typography sx={{ fontSize: mobile?"20px": '36px', fontFamily: 'Inter', fontWeight: '500', color: '#1E1E1E', fontStyle: 'normal' }}>
    Welcome, {userData.Name}!
  </Typography>
						) : (
							<Typography sx={{ fontSize: mobile?"32px":'36px', fontFamily: 'Inter', fontWeight: '500', color: '#1E1E1E', fontStyle: 'normal' }}>
							Welcome, !
						  </Typography>
								
)}
        	</Grid>
		</Grid>
		<Grid container lg={12} xs={12}>
		<Grid item lg={10}  xs={9.5} sx={{textAlign:'initial',margin:'auto'}}>
        <Typography sx={{fontSize:mobile?"32px":'36px',fontFamily:'Inter',fontWeight:mobile?"800":'700',color:'#000000'}}>Recent Uploads</Typography>
			</Grid>
			<Grid item lg={10} xs={9.5} sx={{textAlign:'initial',margin:'auto'}}>
        <Typography sx={{fontSize:mobile?"14px":'16px',fontFamily:'Inter',fontWeight:'400',color:'#787373'}}>Happy Reading!</Typography>
			</Grid>
		</Grid>
		<Grid container lg={12} xs={12}>
			<Grid container lg={10.3} xs={10.3} sx={{ margin:'auto',marginBottom:mobile?"0px":'100px',marginTop:'26px',justifyContent:mobile?'initial':'' }}>
			<Grid container lg={0.4} xs={1.5} style={{ display: startIndex > 0 ? 'flex' : 'none',alignItems:'center',position:mobile?"absolute":"",top:mobile?'436px':"0px",left:mobile?'20px':"0px",zIndex:2,height:mobile?'0px':'430px'}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderLeftkey} onClick={handlePrevClick} sx={{ width:mobile?"36px": '42px', height:mobile?"36px":  '42px', color: '#FFF',marginTop:"-30px" }} />
					
						</Grid>
</Grid>
				<Grid container lg={11.2} xs={11}>
      {loading1 ? (
        Array.from({ length: imagesToShow }).map((_, index) => (
          <ImageWithSkeleton key={`skeleton-${index}`} />
        ))
      ) : (
        <>
          <SwipeableViews
            index={startIndex}
            onChangeIndex={(index) => setStartIndex(index)}
			
          >
            {Array.from({ length: numSets1 }).map(
              (_, index) => (
                <div key={`image-set-${index}`} >
                 
                    {images1
                      .slice(index * imagesToShow, (index + 1) * imagesToShow)
								.map((image) => (
                        <Grid
						container
                          lg={mobile ? 12 : 3}
                          xs={12}
                          key={image._id}
                          className="image-container"
                          sx={{ marginBottom: mobile?"0px":'26px' }}
									>
										
                          <img
                            src={`${image.imageData}`}
                            alt={image.pdfName}
							width={mobile ? '240px' : '250px'}
							height={mobile ? '356px' : '356px'}
							style={{ borderRadius: '12px' }}
							onClick={() => openDialog({ ...image, fileId: image._id, selectedImagesynopsis })}
										/>
										<Grid item lg={12} xs={10.5}>
                          <Typography
                            sx={{
                              fontSize: mobile ? '16px' : '21px',
                              fontFamily: 'Inter',
                              fontWeight: '500',
                              color: '#000000',
                              fontStyle: 'normal',
                              lineHeight: 'normal',
                              marginTop:
                                image.title.length > 30 ? '15px' : '10px',
                            }}
                          >
                            {image.title}
											</Typography>
											</Grid>
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
				<Grid container lg={0.4} xs={1.5} sx={{alignItems:'center',position:mobile?"absolute":"",top:mobile?'436px':"0px",left:mobile?startIndex > 0 ?'260px':'260px':"0px",height:mobile?'0px':'430px'}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderRightkey}  onClick={handleNextClick} sx={{ width: mobile?"36px": '42px', height: mobile?"36px":  '42px',color:"#FFF",marginTop:"-30px" }} />
				
						</Grid>
				</Grid>
				</Grid>
		</Grid><Dialog
  open={dialogOpen}
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
      src={`${selectedImage.imageData}`}
      alt={selectedImage.pdfName}
      style={{
        borderRadius: '12px', 
        height: mobile?'221px':'381px',      
        width: mobile?'180px':'280px',        
      }}
    />
        </Grid>
        <Grid container lg={6} xs={12} sx={{margin:'auto'}}>
          <Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
        <Typography sx={{fontSize:mobile?'16px':'26px',fontFamily:'Inter',fontWeight:'700',textAlign:'initial'}}>{selectedImage.title}</Typography>
        </Grid>
        <Grid item lg={12} xs={12}  >
        <Typography sx={{ marginTop: 2 , fontSize:mobile?'14px':'16px',fontFamily:'Inter',fontWeight:'500',display:'flex',justifyContent:'center',textAlign:'initial'}}>
									{/* {selectedImage.synopsis} */}
									{selectedImage && selectedImage.synopsis ? (
    selectedImage.synopsis.length > 200
      ? `${selectedImage.synopsis.slice(0, 100)}...`
      : selectedImage.synopsis
  ) : (
    ''
  )}
          </Typography>
          </Grid>
          <DialogActions>
            <Grid item lg={12} xs={12}>
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
      onClick={handleImageClick}
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
		


		<Grid container lg={12} xs={12}>
		<Grid item lg={10} xs={10} sx={{textAlign:'initial',margin:'auto',marginTop:'56px'}}>
        <Typography sx={{fontSize:mobile?'32px':'36px',fontFamily:'Inter',fontWeight:mobile?'800':'700',color:'#000000'}}>Picks For You</Typography>
			</Grid>
			<Grid item lg={10}  xs={10} sx={{textAlign:'initial',margin:'auto'}}>
        <Typography sx={{fontSize:mobile?'14px':'16px',fontFamily:'Inter',fontWeight:'400',color:'#787373'}}>Because you like DataStructure</Typography>
			</Grid>
		</Grid>
		<Grid container lg={12} xs={12} >
			<Grid container lg={10.3} xs={10.3} sx={{ margin:'auto',marginBottom:mobile?"0px":'100px',marginTop:'26px',justifyContent:mobile?'initial':'', }}>
			<Grid container lg={0.35} xs={1.5} style={{ display: startIndex2 > 0 ? 'flex' : 'none',alignItems:'center',position:mobile?"absolute":"",top:mobile?'1032px':"0px",left:mobile?'20px':"0px",zIndex:2,height:mobile?'0px':'430px'}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderLeftkey} onClick={()=>handlePrevClick3('DataStructure')} sx={{ width:mobile?"36px": '42px', height:mobile?"36px":  '42px', color: '#FFF',marginTop:"-30px" }} />
					
						</Grid>
</Grid>
				<Grid container lg={11.3} xs={11} sx={{overflow:"hidden"}}>
      {loading ? (
        Array.from({ length: imagesToShow }).map((_, index) => (
          <ImageWithSkeleton key={`skeleton-${index}`} />
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
                    {images.filter((image) => image.category === 'DataStructure')
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
							width={mobile ? '240px' : '250px'}
							height={mobile ? '356px' : '356px'}
							style={{ borderRadius: '12px' }}
							onClick={() => openDialog({ ...image, fileId: image._id, selectedImagesynopsis })}
										/>
										<Grid item lg={12} xs={10.5}>
                          <Typography
                            sx={{
                              fontSize: mobile ? '16px' : '21px',
                              fontFamily: 'Inter',
                              fontWeight: '500',
                              color: '#000000',
                              fontStyle: 'normal',
                              lineHeight: 'normal',
                              marginTop:
                                image.title.length > 30 ? '15px' : '10px',
                            }}
                          >
                            {image.title}
											</Typography>
											</Grid>
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
				<Grid container lg={0.45} xs={1.5} sx={{alignItems:'center',position:mobile?"absolute":"",top:mobile?loading?'1032px':'1032px':"0px",left:mobile?startIndex > 0 ?'260px':'260px':"0px",height:mobile?'0px':'430px'}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderRightkey}  onClick={()=>handleNextClick3('DataStructure')} sx={{ width: mobile?"36px": '40px', height: mobile?"36px": '40px',color:"#FFF",marginTop:"-30px" }} />
				
						</Grid>
				</Grid>
				</Grid>
		</Grid>
		<Grid container lg={12} xs={12} sx={{backgroundColor:'#FAF7F7'}}>
		<Grid item lg={10} xs={10} sx={{textAlign:'initial',margin:'auto',marginTop:'56px'}}>
        <Typography sx={{fontSize:mobile?'32px':'36px',fontFamily:'Inter',fontWeight:mobile?'800':'700',color:'#000000'}}>Picks For You</Typography>
			</Grid>
			<Grid item lg={10}  xs={10} sx={{textAlign:'initial',margin:'auto'}}>
        <Typography sx={{fontSize:mobile?'14px':'16px',fontFamily:'Inter',fontWeight:'400',color:'#787373'}}>Because you like Computer Networks</Typography>
			</Grid>
		</Grid>
		<Grid container lg={12} xs={12} sx={{backgroundColor:'#FAF7F7'}}>
			<Grid container lg={10.3} xs={10.3} sx={{ margin:'auto',marginBottom:mobile?"0px":'100px',marginTop:'26px',justifyContent:mobile?'initial':'' }}>
			<Grid container lg={0.4} xs={1.5} style={{ display: startIndex3 > 0 ? 'flex' : 'none',alignItems:'center',position:mobile?"absolute":"",top:mobile?'1575px':"0px",left:mobile?'20px':"0px",zIndex:2,height:mobile?'0px':'430px'}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderLeftkey} onClick={()=>handlePrevClick4('ComputerNetworks')} sx={{ width:mobile?"36px": '42px', height:mobile?"36px":  '42px', color: '#FFF',marginTop:"-30px" }} />
					
						</Grid>
</Grid>
				<Grid container lg={11.2} xs={11}>
      {loading ? (
        Array.from({ length: imagesToShow }).map((_, index) => (
          <ImageWithSkeleton key={`skeleton-${index}`} />
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
                 
                    {images.filter((image) => image.category === 'ComputerNetworks')
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
							width={mobile ? '240px' : '250px'}
							height={mobile ? '356px' : '356px'}
							style={{ borderRadius: '12px' }}
							onClick={() => openDialog({ ...image, fileId: image._id, selectedImagesynopsis })}
										/>
										<Grid item lg={12} xs={10.5}>
                          <Typography
                            sx={{
                              fontSize: mobile ? '16px' : '21px',
                              fontFamily: 'Inter',
                              fontWeight: '500',
                              color: '#000000',
                              fontStyle: 'normal',
                              lineHeight: 'normal',
                              marginTop:
                                image.title.length > 30 ? '15px' : '10px',
                            }}
                          >
                            {image.title}
											</Typography>
											</Grid>
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
				<Grid container lg={0.4} xs={1.5} sx={{alignItems:'center',position:mobile?"absolute":"",top:mobile?'1575px':"0px",left:mobile?startIndex3 > 0 ?'260px':'260px':"0px",height:mobile?'0px':'430px'}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderRightkey}  onClick={()=>handleNextClick4('ComputerNetworks')} sx={{ width: mobile?"36px": '42px', height: mobile?"36px": '42px',color:"#FFF",marginTop:"-30px" }} />
				
						</Grid>
				</Grid>
				</Grid>
		</Grid>
		<Grid container lg={12} xs={12}>
		<Grid item lg={10} xs={10} sx={{textAlign:'initial',margin:'auto',marginTop:'56px'}}>
        <Typography sx={{fontSize:mobile?'32px':'36px',fontFamily:'Inter',fontWeight:mobile?'800':'700',color:'#000000'}}>Picks For You</Typography>
			</Grid>
			<Grid item lg={10}  xs={10} sx={{textAlign:'initial',margin:'auto'}}>
        <Typography sx={{fontSize:mobile?'14px':'16px',fontFamily:'Inter',fontWeight:'400',color:'#787373'}}>Because you like Digital Electronics</Typography>
			</Grid>
		</Grid>
		<Grid container lg={12} xs={12} >
			<Grid container lg={10.3} xs={10.3} sx={{ margin:'auto',marginBottom:mobile?"0px":'100px',marginTop:'26px',justifyContent:mobile?'initial':'' }}>
			<Grid container lg={0.4} xs={1.5} style={{ display: startIndex4 > 0 ? 'flex' : 'none',alignItems:'center',position:mobile?"absolute":"",top:mobile?'2160px':"0px",left:mobile?'20px':"0px",zIndex:2,height:mobile?'0px':'430px'}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderLeftkey} onClick={()=>handlePrevClick5('ComputerNetworks')} sx={{ width:mobile?"36px": '42px', height:mobile?"36px":  '42px', color: '#FFF',marginTop:"-30px" }} />
					
						</Grid>
</Grid>
				<Grid container lg={11.2} xs={11}>
      {loading ? (
        Array.from({ length: imagesToShow }).map((_, index) => (
          <ImageWithSkeleton key={`skeleton-${index}`} />
        ))
      ) : (
        <>
          <SwipeableViews
            index={startIndex4}
            onChangeIndex={(index) => setStartIndex4(index)}
			
          >
            {Array.from({ length: numSets }).map(
              (_, index) => (
                <div key={`image-set-${index}`} >
                 
                    {images.filter((image) => image.category === 'DigitalElectronics')
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
							width={mobile ? '240px' : '250px'}
							height={mobile ? '356px' : '356px'}
							style={{ borderRadius: '12px' }}
							onClick={() => openDialog({ ...image, fileId: image._id, selectedImagesynopsis })}
										/>
										<Grid item lg={12} xs={10.5}>
                          <Typography
                            sx={{
                              fontSize: mobile ? '16px' : '21px',
                              fontFamily: 'Inter',
                              fontWeight: '500',
                              color: '#000000',
                              fontStyle: 'normal',
                              lineHeight: 'normal',
                              marginTop:
                                image.title.length > 30 ? '15px' : '10px',
                            }}
                          >
                            {image.title}
											</Typography>
											</Grid>
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
				<Grid container lg={0.4} xs={1.5} sx={{alignItems:'center',position:mobile?"absolute":"",top:mobile?loading?'2160px':'2160px':"0px",left:mobile?startIndex4 > 0 ?'260px':'260px':"0px",height:mobile?'0px':'430px'}}>
					<Grid item lg={12}>
					<SvgIcon component={SliderRightkey}  onClick={()=>handleNextClick5('DigitalElectronics')} sx={{ width: mobile?"36px": '42px', height: mobile?"36px": '42px',color:"#FFF",marginTop:"-30px" }} />
				
						</Grid>
				</Grid>
				</Grid>
		</Grid>
		
		
		
		
		
		{userData && userData.status === 'pro' && (
			<>
				<Grid container lg={12} xs={12} sx={{backgroundColor:'#FAF7F7'}}>
		<Grid item lg={10} xs={10} sx={{textAlign:'initial',margin:'auto',marginTop:'56px'}}>
        <Typography sx={{fontSize:mobile?'32px':'36px',fontFamily:'Inter',fontWeight:mobile?'800':'700',color:'#000000'}}>PRO Users</Typography>
			</Grid>
			<Grid item lg={10}  xs={10} sx={{textAlign:'initial',margin:'auto'}}>
        <Typography sx={{fontSize:mobile?'14px':'16px',fontFamily:'Inter',fontWeight:'400',color:'#787373'}}>Pro Users Notes for Engineering</Typography>
			</Grid>
		</Grid>
			<Grid container lg={12} xs={12} sx={{ backgroundColor: '#FAF7F7' }}>
				
  <Grid container lg={10.3} xs={10.3} sx={{ margin: 'auto', marginBottom: mobile ? '0px' : '100px', marginTop: '26px', justifyContent: mobile ? 'initial' : '' }}>
    {/* Previous Button */}
    <Grid container lg={0.4} xs={1.5} style={{ display: startIndex7 > 0 ? 'flex' : 'none', alignItems: 'center', position: mobile ? "absolute" : "", top: mobile ? '2724px' : "0px", left: mobile ? '20px' : "0px", zIndex: 2, height: mobile ? '0px' : '430px' }}>
      <Grid item lg={12}>
        <SvgIcon component={SliderLeftkey} onClick={() => handlePrevClick8('Aptitude')} sx={{ width: mobile ? "36px" : '42px', height: mobile ? "36px" : '42px', color: '#FFF', marginTop: "-30px" }} />
      </Grid>
    </Grid>

    <Grid container lg={11.2} xs={11}>
      {loading ? (
        Array.from({ length: imagesToShow }).map((_, index) => (
          <ImageWithSkeleton key={`skeleton-${index}`} />
        ))
      ) : (
        <>
          <SwipeableViews
            index={startIndex7}
            onChangeIndex={(index) => setStartIndex7(index)}
			
          >
            {Array.from({ length: numSets }).map(
              (_, index) => (
                <div key={`image-set-${index}`} >
                 
                    {images.filter((image) => image.status === 'pro')
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
							width={mobile ? '240px' : '250px'}
							height={mobile ? '356px' : '356px'}
							style={{ borderRadius: '12px' }}
							onClick={() => openDialog({ ...image, fileId: image._id, selectedImagesynopsis })}
										/>
										<Grid item lg={12} xs={10.5}>
                          <Typography
                            sx={{
                              fontSize: mobile ? '16px' : '21px',
                              fontFamily: 'Inter',
                              fontWeight: '500',
                              color: '#000000',
                              fontStyle: 'normal',
                              lineHeight: 'normal',
                              marginTop:
                                image.title.length > 30 ? '15px' : '10px',
                            }}
                          >
                            {image.title}
											</Typography>
											</Grid>
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
	

    {/* Next Button */}
    <Grid container lg={0.4} xs={1.5} sx={{ alignItems: 'center', position: mobile ? "absolute" : "", top: mobile ? '2724px' : "0px", left: mobile ? (startIndex7 > 0 ? '260px' : '260px') : "0px", height: mobile ? '0px' : '430px' }}>
      <Grid item lg={12}>
        <SvgIcon component={SliderRightkey} onClick={() => handleNextClick8('Aptitude')} sx={{ width: mobile ? "36px" : '42px', height: mobile ? "36px" : '42px', color: "#FFF", marginTop: "-30px" }} />
      </Grid>
    </Grid>
  </Grid>
</Grid>
</>
)}
		<Dialog
  open={dialogOpen}
  onClose={closeDialog}
  sx={{
    overflow: 'hidden',
    '& .MuiDialog-paper': {
      borderRadius: '26px', // Apply border radius to the dialog paper
      width: mobile?'244px':'700px',      // Adjust width as needed
      maxWidth: '100%', 
	  height:mobile?'650px':selectedImage && selectedImage.title && selectedImage.title.length >50?'490px':'475px'   // Ensure the dialog doesn't exceed its container
    },
  }}
>
  
   
 
  <DialogContent sx={{ textAlign: "left",overflow:mobile?"":'hidden' }}>
    <Grid container lg={12} xs={12}>
      <Grid container lg={12} xs={12}>
        <Grid container lg={6} xs={12} sx={{marginTop:'20px'}}>
       
    <img
      src={`${selectedImage.imageData}`}
      alt={selectedImage.pdfName}
      style={{
        borderRadius: '12px', 
        height: mobile?'221px':'381px',      
        width: mobile?'180px':'280px',        
      }}
    />
        </Grid>
        <Grid container lg={6} xs={12} sx={{margin:'auto'}}>
          <Grid item lg={12} xs={12} sx={{marginTop:'10px'}}>
        <Typography sx={{fontSize:mobile?'16px':'26px',fontFamily:'Inter',fontWeight:'700',textAlign:'initial'}}>{selectedImage.title}</Typography>
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
  {new Date(selectedImage.createdAt).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })} {/* Display the formatted date directly in the Typography component */}
</Typography>		</Grid>
        <Grid item lg={12} xs={12}  >
        <Typography sx={{ marginTop: 2 , fontSize:mobile?'14px':'16px',fontFamily:'Inter',fontWeight:'500',display:'flex',justifyContent:'center',textAlign:'initial'}}>
		{selectedImage && selectedImage.synopsis ? (
    selectedImage.synopsis.length > 250
      ? `${selectedImage.synopsis.slice(0, 225)}...`
      : selectedImage.synopsis
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
      onClick={handleImageClick}
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
		<Footer />
		</ThemeProvider>
  )
}
export default Home