import React,{useState,useEffect} from 'react';
import VideoPlayer from './VideoPlayer';
import { styled } from 'styled-components';
import { Diversity2Outlined } from '@mui/icons-material';

const BenefitsVideo = () => {

    return (
        <DIV>
            <div className='innerDiv helthTextDiv'>
                <div className='inner-div1'>
                   <h1>Good quality products For Better Living</h1>
                   <p>Get the goodness of your vegetables and fruits with each nutritionally dense serving.</p>
                </div>
            </div>
            <div className='innerDiv'>
            <VideoPlayer/>
            </div>
        </DIV>
    );
};

export default BenefitsVideo;




const DIV = styled.div`
    
display: flex;
flex-direction: row;
/* border: 1px solid black; */
padding-top: 80px;
padding-bottom: 80px;
/* background-color: #FFF4ED; */
.innerDiv{
    width: 50%;
    height: 400px;
    padding: 20px;
    /* border:1px solid black */
}

.helthTextDiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.inner-div1{
   width:70%;
   text-align: left;
}

.inner-div1>h1{
  margin: 0px;
  line-height: 1.5;
  font-size: 45px;
}

.inner-div1>p{
    margin-top: 20px;
    font-weight: 500;
    line-height: 1.5;
    font-size: 20px;
}

@media screen and (min-width: 350px) and (max-width:450px){
    
    display: flex;
flex-direction: row;
/* border: 1px solid black; */
padding-top: 0px;
padding-bottom: 0px;
.innerDiv{
    width: 50%;
    height: 180px;
    padding: 20px;
    /* border:1px solid black */
}

.helthTextDiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.inner-div1{
   width:70%;
   text-align: left;
}

.inner-div1>h1{
  margin: 0px;
  line-height: 1;
  font-size: 14px;
}

.inner-div1>p{
    font-weight: 500;
    line-height: 1.5;
    font-size: 10px;
}

}



@media screen and (min-width: 451px) and (max-width:550px){
    
    display: flex;
flex-direction: row;
/* border: 1px solid black; */
padding-top: 0px;
padding-bottom: 0px;
.innerDiv{
    width: 50%;
    height: 200px;
    padding: 20px;
    /* border:1px solid black */
}

.helthTextDiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.inner-div1{
   width:70%;
   text-align: left;
}

.inner-div1>h1{
  margin: 0px;
  line-height: 1;
  font-size: 18px;
}

.inner-div1>p{
    font-weight: 500;
    line-height: 1.5;
    font-size: 13px;
}

}

@media screen and (min-width: 551px) and (max-width:650px){
    
    display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
align-items: center;
/* border: 1px solid black; */
padding-top: 0px;
padding-bottom: 0px;
.innerDiv{
    width: 50%;
    height: 300px;
    padding: 20px;
    /* border:1px solid black */
}

.helthTextDiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.inner-div1{
   width:70%;
   text-align: left;
}

.inner-div1>h1{
  margin: 0px;
  line-height: 1;
  font-size: 25px;
}

.inner-div1>p{
    font-weight: 500;
    line-height: 1.5;
    font-size: 17px;
}

}

@media screen and (min-width: 651px) and (max-width:850px){
    
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
align-items: center;
/* border: 1px solid black; */
padding-top: 0px;
padding-bottom: 0px;
.innerDiv{
    width: 50%;
    height: 300px;
    padding: 20px;
    /* border:1px solid black */
}

.helthTextDiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.inner-div1{
   width:70%;
   text-align: left;
}

.inner-div1>h1{
  margin: 0px;
  line-height: 1;
  font-size: 25px;
}

.inner-div1>p{
    font-weight: 500;
    line-height: 1.5;
    font-size: 17px;
}

}

@media screen and (min-width: 851px) and (max-width:1050px){
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    /* border: 1px solid black; */
    padding-top: 30px;
    padding-bottom: 0px;
    .innerDiv{
        width: 50%;
        height: 320px;
        padding: 20px;
        /* border:1px solid black */
    }
    
    .helthTextDiv{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .inner-div1{
       width:70%;
       text-align: left;
    }
    
    .inner-div1>h1{
      margin: 0px;
      line-height: 1;
      font-size: 32px;
    }
    
    .inner-div1>p{
        font-weight: 500;
        line-height: 1.5;
        font-size: 20px;
    }
    
    }

@media screen and (min-width: 1050px) and (max-width:1300px){
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    /* border: 1px solid black; */
    padding-top: 30px;
    padding-bottom: 0px;
    .innerDiv{
        width: 50%;
        height: 400px;
        padding: 20px;
        /* border:1px solid black */
    }
    
    .helthTextDiv{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .inner-div1{
       width:70%;
       text-align: left;
    }
    
    .inner-div1>h1{
      margin: 0px;
      line-height: 1;
      font-size: 40px;
    }
    
    .inner-div1>p{
        font-weight: 500;
        line-height: 1.5;
        font-size: 24px;
    }
    
    }    
    
`


