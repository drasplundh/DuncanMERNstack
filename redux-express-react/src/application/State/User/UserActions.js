import * as actionTypes from "../ActionTypes";
import axios from "axios";

export const AddUserToStore = (user) => {
    return {
        type: actionTypes.ADD_USER_TO_STORE,
        payload: user
    }
}


export const SaveUserToDBUsingFetch = (userObj)=>{
    console.log("SaveUserToDBUsingFetch called")
    return (dispatch)=>{
        window.fetch("http://localhost:9000/user/api/signinup",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
            },
            body : JSON.stringify(userObj)}) //JSON object can't travel from client to server so needs to be converted to string
            .then((response)=>response.json())
            .then((userData)=>{
                console.log(userData)
                //dispatch or send saved/signin user to reducer
                dispatch(AddUserToStore(userData))
            })
            .catch((error)=>console.log(error))
        }
}

export const SaveUserToDBUsingAxios = (userObj)=>{
    console.log("SaveUserToDBUsingAxios called")
    return (dispatch)=>{
        axios.post("http://localhost:9000/user/api/signinup",//uri or end point of singninup api
            userObj // the user state object we dispatch from the user component
        ).then((collection)=>{
            let loggedUser = collection.data
            console.log(loggedUser)
            dispatch(AddUserToStore(loggedUser))
        })
        .catch((error)=>console.log(error))
    }
}
