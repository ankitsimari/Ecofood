
import  React,{useEffect, useState} from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import {Password} from '@mui/icons-material';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function UPIForm({paymentMode}) {

const [flag,setFlag] = useState(false);
const [isSuccess,setIsSuccsess] = useState(false);
const [upi,setUpi] = useState("");



const handleUpi = (e)=>{
  
    setIsSuccsess(false);
    let {value} = e.target;
    setUpi((prev)=> value);
} 


const checkFunction= ()=>{

    if(upi!=""){
    setFlag((prev)=>true);
    setTimeout(()=>{
      setFlag((prev)=>false);
      setIsSuccsess(true);
    },3000);
   }
}
 
useEffect(()=>{
   setUpi("");
   setIsSuccsess(false);
   console.log("rin");
},[paymentMode])

  return (
    <Card
    className={paymentMode!="upi"?"paymentMode":"activePaymentMode"}
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        maxWidth: '100%',
        mx: 'auto',
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
      }}
     style={{borderRadius:"0px"}}
    >
      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
        Pay by UPI
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >

       <Box style={{paddingLeft:"130px",paddingRight:"0px"}}>
       <img width="150" height="150" src="https://img.icons8.com/ios/50/qr-code--v1.png" alt="qr-code--v1"/>
       <FormLabel style={{paddingLeft:"50px",width:"200px",fontWeight:"bold"}}>Pay by QR</FormLabel>
       <FormLabel style={{paddingLeft:"80px",width:"200px",paddingTop:"20px",textDecoration:"underline",}}>Or</FormLabel>
       </Box>

        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel style={{paddingLeft:"197px",width:"300px",}}>UPI ID</FormLabel>
          <div style={{display:"flex", width:"100%",gap:"10px"}}>
             <Input value={upi} disabled={flag} style={{width:"530px"}} placeholder="Enter your UPI id here" onChange={handleUpi} />
             <Button disabled={isSuccess || flag} onClick={checkFunction} style={{color:"white",backgroundColor:isSuccess?"green":"#dc3545",cursor:upi!=="" && isSuccess===false?"pointer":"not-allowed"}} > {isSuccess?"Verified":"Verify"}</Button>
          </div >
          {flag && <LinearProgress style={{width:"100%",marginTop:"5px"}} color="success" />}
          {isSuccess && <h6 style={{marginLeft:"10px",marginTop:"10px",color:"green"}}>Mr. Robert John Downey</h6>}
        </FormControl>
        
       
        <CardActions sx={{ gridColumn: '3/1' }}>
          <Button variant="solid" style={{backgroundColor:'#dc3545',color:"white"}}>
            Pay
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}