import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "mui-image";
import "./slider.css";
import slider1 from './Images/slider1.png';
import slider2 from './Images/slider2.png';
import slider3 from './Images/slider3.png';
import slider4 from './Images/slider4.png';
import slider5 from './Images/slider5.png';
import { useMediaQuery } from "@mui/material";
const ImageSlider = () => {
  const mobile = useMediaQuery('(max-width:600px)');
  const images = [
    {
      src:
        slider1,
		width:mobile?'auto': "175px",
		height:mobile?'270px':"175px"
    },
    {
      src:
        slider2,
      width:mobile?'auto': "175px",
      height:mobile?'270px':"175px"
    },
    {
      src:
       slider3,
      width:mobile?'37px': "175px",
      height:mobile?'270px': "175px"
    },
    {
      src:
        slider4,
      width:mobile?'46px': "175px",
      height:mobile?'270px': "175px"
    },
    {
      src:
       slider5,
      width:mobile?'37px': "175px",
      height:mobile?'270px': "175px"
    },
    {
      src:
       slider1,
      width:mobile?'37px': "175px",
      height:mobile?'270px': "175px"
	  },
	  {
		src:
		  slider4,
		width:mobile?'37px': "175px",
		height:mobile?'70px':"175px"
	  },
  ];

  const settings = {
    width: "400px",
    height: "200px",
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <div style={{ width:mobile?'256px': "1120px", height: mobile?'46px':"103px",margin:'auto',marginTop:"56px",marginBottom:'110px' }}>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index} style={{ width: "106px", height: "103px" }}>
            <Image
              src={imageUrl.src}
              style={{ width: imageUrl.width, height: imageUrl.height }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
