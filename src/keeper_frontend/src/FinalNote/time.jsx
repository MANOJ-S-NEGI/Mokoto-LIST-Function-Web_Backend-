import React from "react";
import { useState } from "react";

function GetTime(){
    let [Time,setTime] = useState('00:00:00');
    setInterval(CurrentTime,1000);    
        
    function CurrentTime(){
        let CurTime = new Date().toLocaleTimeString();  // Convert Date to a readable time string
        setTime(CurTime);
        
    }         
    return <div>
             <h4 className="time">{Time}</h4>
        </div>
}

export default GetTime;