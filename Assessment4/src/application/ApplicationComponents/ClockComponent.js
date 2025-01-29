import React, { useState, useEffect } from "react";



let ClockComponent = (props)=>{
    // let clock =  new Date().toLocaleTimeString();

    // const [clock, setClock] = useState(new Date().toLocaleTimeString());

    // useEffect(() => {
    //    let interval =  updateClock(() => {
    //     setClock(new Date().toLocaleTimeString());
    //    }, 1000);
            
    //    return () => clearInterval(intervalId);
        
    // }, [])

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);
  
      // Cleanup interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);


 


    return(

        <>
        <div class="container">
            <h1> CLOCK </h1>
            <h1>{currentTime}</h1>
            </div>
        </>
        
    )

}

export default ClockComponent;