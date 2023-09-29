import React,{ useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // //visit for more info https://react-responsive-carousel.js.org/  for same like this//https://css-tricks.com/how-to-make-a-css-only-carousel/
import { Carousel } from "react-responsive-carousel";  //visit for more info https://react-responsive-carousel.js.org/
import style from "./slider.module.css";

export default function Slider() {                    
   
  const sliderImages = [
    // Your image objects here
     "https://wallup.net/wp-content/uploads/2017/03/28/436025-water-waterfall-nature-outdoors-rocks.jpg",
     "https://images.hdqwalls.com/wallpapers/beautiful-greenery-landscape-cl.jpg",
     "http://acgpsy.org/wp-content/uploads/2017/07/DSC7178_79_80_2017-07-08-CB-Sunrise-txt2.jpg",
     "https://wallup.net/wp-content/uploads/2019/10/599279-scenery-sunrise-and-sunset-field-trees-nature.jpg",
     "http://getwallpapers.com/wallpaper/full/5/9/3/691211-large-nature-wallpaper-computer-2048x1365-4k.jpg"
  ];


  return (
    <div className={style["image-track"]} style={{width:"800px",cursor:"pointer",padding:"20px", border:"1px solid black"}}>
      <Carousel
        showArrows={true}   
        autoPlay={true}
        showThumbs={true}
        showStatus={true}
        showIndicators={true}
        centerMode={true} // Display three images at a time
        centerSlidePercentage={100/1.5} // Set the percentage based on the number of images you want to display
        emulateTouch={true} // Enable touch emulation for desktop
        swipeable={true}
        infiniteLoop={true}
        interval={1500}
        // preventMovementUntilSwipeScrollTolerance={false}
        transitionTime={200}
        useKeyboardArrows={true}
        swipeScrollTolerance={0}
      >
        {sliderImages.map((image, index) => (
          <div key={index} style={{border:"1px solid orange",marginLeft:"10px",height:"400px"}}>
            <img style={{width:"100%",height:"100%",objectFit:"fill"}} src={image} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
