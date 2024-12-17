import React, { useEffect, useState } from 'react'
import './Clock.css'
const Clock = () => {
    const [sec,setsec]=useState(new Date().getSeconds().toString().padStart(2,0))
    const [min,setmin]=useState(new Date().getMinutes().toString().padStart(2,0))
    const [hr,sethr]=useState(new Date().getHours()>12?(new Date().getHours()-12).toString().padStart(2,0):new Date().getHours().toString().padStart(2,0))

    useEffect(() => {
        let gettime=()=>{
            let getdate=new Date()
            let getsec=getdate.getSeconds()
            let second=getsec.toString().padStart(2,0)
            setsec(second)
            let getmin=getdate.getMinutes()
            let minutes=getmin.toString().padStart(2,0)
            setmin(minutes)
            let gethr=getdate.getHours()
            let timehr=gethr>12?gethr-12:gethr
            let hour=timehr.toString().padStart(2,0)
            sethr(hour)  
            console.log(sec);          
        }
        
        let timer=setInterval(() => {
            console.log(sec);          
            gettime()
            console.log(sec);          

        }, 1000);  
        return () => {
            clearInterval(timer)
          }
    
    },[sec])
    
console.log(sec);

  return (
    <div className='timeshower'>
        <p className='time'>{hr}-{min}-{sec} <span style={{paddingLeft:'20px'}}>{Number(new Date().getHours())>=12?'PM':'AM'}</span></p>
    </div>
  )
}

export default Clock