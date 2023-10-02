import React,{ useState,useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // //visit for more info https://react-responsive-carousel.js.org/  for same like this//https://css-tricks.com/how-to-make-a-css-only-carousel/
import { Carousel } from "react-responsive-carousel";  //visit for more info https://react-responsive-carousel.js.org/
import { styled } from "styled-components";

export default function Slider() { 
   
  const sliderImages = [
    // Your image objects here
     "https://miro.medium.com/v2/resize:fit:720/1*b70EksDvGpnbOSkGcP8Ysg.jpeg",
     "https://images.hdqwalls.com/wallpapers/beautiful-greenery-landscape-cl.jpg",
     "http://acgpsy.org/wp-content/uploads/2017/07/DSC7178_79_80_2017-07-08-CB-Sunrise-txt2.jpg",
     "https://3.bp.blogspot.com/-B6JUdxfEW2A/Ul9APIXh6sI/AAAAAAAAF3Y/lsmG8h0n6hU/s1600/Nature+photos+and+themes++17.jpg",
     "http://getwallpapers.com/wallpaper/full/5/9/3/691211-large-nature-wallpaper-computer-2048x1365-4k.jpg"
  ];


  return (
    <DIV>
      <Carousel
        showArrows={true}   
        autoPlay={true}
        showThumbs={true}
        showStatus={true}
        showIndicators={true}
        centerMode={true} // Display three images at a time
        centerSlidePercentage={100/1} // Set the percentage based on the number of images you want to display
        emulateTouch={true} // Enable touch emulation for desktop
        swipeable={true}
        infiniteLoop={true}
        interval={1500}
        preventMovementUntilSwipeScrollTolerance={false}
        transitionTime={200}
        useKeyboardArrows={true}
        swipeScrollTolerance={0}
      >
        {sliderImages.map((image, index) => (
          <div key={index} className="image-div">
            <img className="image" src={image} alt="" />
          </div>
        ))}
      </Carousel>
    </DIV>
  );
}



const DIV = styled.div`
  
  margin:0px;
  width:800px;
  cursor:pointer;
  padding:20px;
  /* border:1px solid black; */
  
  .image-div{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-Left:0px;
    height:400px;
  }

  .image{
    width:100%;
    height:100%;
    width:100%;
    height:100%;
    object-fit:fill;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }


  @media screen and (min-width: 350px) and (max-width:550px){
    margin:0px;
  width:170px;
  cursor:pointer;
  padding:20px;
  /* border:1px solid black; */
  
  .image-div{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-Left:0px;
    height:150px;
  }

  .image{
    width:100%;
    height:100%;
    object-fit:cover;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  }



  @media screen and (min-width: 551px) and (max-width:600px){
   
    margin:0px;
  width:250px;
  cursor:pointer;
  padding:20px;
  /* border:1px solid black; */
  
  .image-div{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-Left:0px;
    height:150px;
  }

  .image{
    width:100%;
    height:100%;
    object-fit:cover;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  }

  @media screen and (min-width: 601px) and (max-width:750px){
   
   margin:0px;
 width:300px;
 cursor:pointer;
 padding:20px;
 /* border:1px solid black; */
 
 .image-div{
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   margin-Left:0px;
   height:150px;
 }

 .image{
   width:100%;
   height:100%;
   object-fit:cover;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 }

 }

 @media screen and (min-width: 751px) and (max-width:900px){
   
   margin:0px;
  width:350px;
 cursor:pointer;
 padding:20px;
 /* border:1px solid black; */
 
 .image-div{
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   margin-Left:0px;
   height:200px;
 }

 .image{
   width:100%;
   height:100%;
   object-fit:cover;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 }

 }

 @media screen and (min-width: 901px) and (max-width:1200px){
   
   margin:0px;
  width:400px;
 cursor:pointer;
 padding:20px;
 /* border:1px solid black; */
 
 .image-div{
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   margin-Left:0px;
   height:250px;
 }

 .image{
   width:100%;
   height:100%;
   object-fit:cover;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 }

 }

`

