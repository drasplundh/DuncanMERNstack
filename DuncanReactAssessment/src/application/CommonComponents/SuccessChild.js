import React from "react";
import{ useState } from "react";

export default function SuccessChild(props) {
    
    let [newYearMessage, setMessage] = useState("")

    let sendDataBack = ()=>{
        alert(newYearMessage)
        props.callBackEvent(newYearMessage)
    }

    return(
        <>
            <div className="header">
            <p>Name from parent {props.parentMessage.name}</p> 
            <p>Address from parent {props.parentMessage.address}</p> 
            <p>{props.storyComponent}</p>
            </div>
        </>
    )
}