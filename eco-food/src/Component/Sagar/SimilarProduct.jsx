import React,{ useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // //visit for more info https://react-responsive-carousel.js.org/  for same like this//https://css-tricks.com/how-to-make-a-css-only-carousel/
import { Carousel } from "react-responsive-carousel";  //visit for more info https://react-responsive-carousel.js.org/
import { styled } from "styled-components";



export default function SimilarProduct() {  

 
    const [name,setName] = useState("Laptop");
    


 useEffect(()=>{
    window.addEventListener("resize",()=>{

        let width = window.outerWidth;
  
         if(width>=320 && width<=480){
          setName("Mobile");
         }
         else if(width>=481 && width<=768){
           setName("TAB");
         }
         else if(width>=769 && width<=1300){
          setName("Laptop");
      }
   })

 },[])   


  
console.log(name);

  const sliderImages = [
    // Your image objects here
     "https://miro.medium.com/v2/resize:fit:720/1*b70EksDvGpnbOSkGcP8Ysg.jpeg",
     "https://images.hdqwalls.com/wallpapers/beautiful-greenery-landscape-cl.jpg",
     "http://acgpsy.org/wp-content/uploads/2017/07/DSC7178_79_80_2017-07-08-CB-Sunrise-txt2.jpg",
     "https://3.bp.blogspot.com/-B6JUdxfEW2A/Ul9APIXh6sI/AAAAAAAAF3Y/lsmG8h0n6hU/s1600/Nature+photos+and+themes++17.jpg",
     "http://getwallpapers.com/wallpaper/full/5/9/3/691211-large-nature-wallpaper-computer-2048x1365-4k.jpg",
     "http://getwallpapers.com/wallpaper/full/5/9/3/691211-large-nature-wallpaper-computer-2048x1365-4k.jpg",
     "http://getwallpapers.com/wallpaper/full/5/9/3/691211-large-nature-wallpaper-computer-2048x1365-4k.jpg",
     "http://getwallpapers.com/wallpaper/full/5/9/3/691211-large-nature-wallpaper-computer-2048x1365-4k.jpg",
     "http://getwallpapers.com/wallpaper/full/5/9/3/691211-large-nature-wallpaper-computer-2048x1365-4k.jpg",
     "http://getwallpapers.com/wallpaper/full/5/9/3/691211-large-nature-wallpaper-computer-2048x1365-4k.jpg",
     "http://getwallpapers.com/wallpaper/full/5/9/3/691211-large-nature-wallpaper-computer-2048x1365-4k.jpg",
     "http://getwallpapers.com/wallpaper/full/5/9/3/691211-large-nature-wallpaper-computer-2048x1365-4k.jpg",
     "http://getwallpapers.com/wallpaper/full/5/9/3/691211-large-nature-wallpaper-computer-2048x1365-4k.jpg",
     "http://getwallpapers.com/wallpaper/full/5/9/3/691211-large-nature-wallpaper-computer-2048x1365-4k.jpg",
  ];


  return (
    <DIV className="main">
        <div className="headingDiv">
             <p>Similar Category Prodcuts</p>
        </div>
      <Carousel
        showArrows={true}   
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true} // Display three images at a time
        centerSlidePercentage={100/5} // Set the percentage based on the number of images you want to display
        emulateTouch={true} // Enable touch emulation for desktop
        swipeable={true}
        infiniteLoop={true}
        interval={2500}
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
 
 
 background-color:#FFF4ED;
 margin:auto;
 width:97%;
 margin-left: 0px;
 cursor:pointer;
 padding: 20px;
 padding-top: 80px;
 padding-bottom: 80px;
 /* border:1px solid black; */


 .headingDiv{
    text-align:left;
    margin-left:10px;
    color: #004747;
    font-size: 30px;
    font-weight: 500;
 }
 .image-div{
  /* border:1px solid orange; */
  margin-left:10px;
  height:400px;
  width:90%;
 }

 .image{
    width:100%;
    height:100%;
    object-fit:fill;
 }

`