import React,{useState,useEffect} from 'react';
import YouTube from "react-youtube"

const VideoPlayer = () => {
  
 
  const [width,setWidth] = useState(window.outerWidth);
  
  useEffect(()=>{


   window.addEventListener("resize",()=>{
    
       setWidth(window.outerWidth);
   })
   

  },[])



  const videoId = 'BGwb8_hbzUM'; // Replace with your YouTube video ID

  // Options for the YouTube player (you can customize these)
  const opts = {
    // height: '390',
    // width: '640',
    // height: name1=='TAB'?'220':'390',
    // width: name1=='TAB'?'220':'640',
     height: (width>=350 && width<=450)?150:(width>=451 && width<=550)?180:(width>=551 && width<=850)?260:(width>=851 && width<=1050)?300:(width>=1051 && width<=1300)?350:(width>=1301 && width<=1600)?400:450,
     width:  (width>=350 && width<=450)?150:(width>=451 && width<=550)?180:(width>=551 && width<=850)?260:(width>=851 && width<=1050)?370:(width>=1051 && width<=1300)?500:(width>=1301 && width<=1600)?600:650,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1, // Auto-play the video
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;
