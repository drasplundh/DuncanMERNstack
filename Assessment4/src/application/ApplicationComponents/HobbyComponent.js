import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveHobby, getHobbies } from "../State/HobbyActions";


   

let HobbyComponent = (props)=>{



    let name = useRef(null);

    let hobbies = useSelector((state => state.hobbyReducer.Hobbies))
    console.log("hobbies in hobby component: ", hobbies);

    let dispatchHobby = useDispatch();

    const handleClick = (evt) => {
        let hobbyToSave = {
            name: name.current.value
        }
        dispatchHobby(saveHobby(hobbyToSave));
    }

    useEffect(() => {
        dispatchHobby(getHobbies());
    }, [])




    return(

        <>
        <div class="container">
            <h1> Hobby </h1>
            <input className="form-control" type="text" ref={name}></input>
            <button className="btn btn-primary" onClick={handleClick}> Submit </button>

            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>Hobby Name</th>
                    </tr>
                    {
                        hobbies.map((hobby) => {
                            return <tr><td>{hobby.name}</td></tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        
        </>
    )

}

export default HobbyComponent;