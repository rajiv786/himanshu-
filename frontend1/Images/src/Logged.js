import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function App() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
      url:
        "https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    },
    {
      url:
        "https://thumbs.dreamstime.com/b/lone-tree-meadow-sunriseidyllic-fabulous-landscapes-39659821.jpg",
    },
    {
      url:
        "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcSprPgYofGmXXPfuEDcZ_XI294n0bME5dTX9TGvINmPiA&s",
    },
    {
      url:
        "https://i.pinimg.com/474x/81/ca/47/81ca47eaae35615ba9a9bb57560aaa3c.jpg",
    },
    {
      url:
        "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTof2fniv0mZzN8DByLmb6ILU4MvV_SGr_wptMeAut_dPaYMBkeHnHhD5egzU7MB0GSqE&usqp=CAU",
    },
  ];

  return (
    <div>
     
     <SimpleImageSlider
  width={500}
  height={250}
  images={sliderImages}
  showBullets={false} // Remove the dots
  showNavs={true}
  navStyle={4} // Show two images at once
  slideDuration={0.5} // Adjust the slide duration if desired
  onStartSlide={(index, length) => {
    setImageNum(index);
  }}
  autoPlay={true}
  autoPlayDelay={3}
/>

      <div style={{ fontSize: "1.5rem" }}>
        The current image slide No is {imageNum}.
      </div>
    </div>
  );
}
