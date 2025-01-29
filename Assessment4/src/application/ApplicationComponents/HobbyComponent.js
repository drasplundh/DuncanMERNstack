import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveHobby } from "../State/HobbyActions";


   

let HobbyComponent = (props)=>{
    let name = useRef(null);

    let dispatchHobby = useDispatch();

    const handleClick = (evt) => {
        let hobbyToSave = {
            name: name.current.value
        }

        dispatchHobby(saveHobby(hobbyToSave));

    }




    return(

        <>
        <div class="container">
            <h1> Hobby </h1>
            <input className="form-control" type="text" ref={name}></input>
            <button className="btn btn-primary" onClick={handleClick}> Submit </button>
        </div>
        </>
    )

}

export default HobbyComponent;