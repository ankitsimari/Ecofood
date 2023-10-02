import React,{ useState,useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // //visit for more info https://react-responsive-carousel.js.org/  for same like this//https://css-tricks.com/how-to-make-a-css-only-carousel/
import { Carousel } from "react-responsive-carousel";  //visit for more info https://react-responsive-carousel.js.org/
import { styled } from "styled-components";

export default function Slider() { 
   
  const sliderImages = [
    // Your image objects here
    "https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_1280.jpg",
     "https://www.bigbasket.com/media/uploads/p/l/10000007-4_1-fresho-apple-red-delicious-regular.jpg?tr=w-1080,q=80",
     "https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834",
     "https://www.shutterstock.com/shutterstock/photos/2121188447/display_1500/stock-photo-fruit-and-flower-its-so-beautiful-2121188447.jpg",
     "https://w0.peakpx.com/wallpaper/182/615/HD-wallpaper-fruits-apple-fruit.jpg"
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
  width:650px;
  cursor:pointer;
  padding:20px;
  /* border:1px solid black; */
  margin-top: 30px;
  
  .image-div{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-Left:0px;
    height:350px;
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

