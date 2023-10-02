import React, { useState } from 'react'
import RadarChart from '../Chart/RadarChart';

export default function Sales() {



    const data = [
        { month: "Jan", sales: 1000 },
        { month: "Feb", sales: 1200 },
        { month: "Mar", sales: 900 },
        { month: "Apr", sales: 1500 },
        { month: "May", sales: 800 },
        { month: "Jun", sales: 1100 },
        { month: "Jul", sales: 1300 },
        { month: "Aug", sales: 950 },
        { month: "Sept", sales: 1400 }
      ] 
    
    const polar = [
        { month: "Jan", sales: 1000 },
        { month: "Feb", sales: 1200 },
        { month: "Mar", sales: 900 },
        { month: "Apr", sales: 1500 },
      
      ] 
    
      const colors = ["#FFCE54", "#FC6183", "teal", "blue"]
    
      const [userData, setUserData] = useState({
          labels: data.map((e)=>e.month),
          datasets: [
            {
              label: "Sales",
              data: data.map((e)=>e.sales),
              backgroundColor: "#FC6183",
              borderColor: "#6FCCCC",
              borderWidth: 2,
            },
          ],
        });
    
      const [PolarData, setPolarData] = useState({
          labels: polar.map((e)=>e.month),
          datasets: [
            {
              label: "Price",
              data: polar.map((e)=>e.sales),
              backgroundColor: colors,
              // borderColor: "#DC3545",
              // borderWidth: 2,
            },
          ],
        });
    


  return (
    <div className=''>

    <div className='w-50 d-block m-auto'>
   <RadarChart chatData={userData} />
    </div>
    </div>
  )
}
