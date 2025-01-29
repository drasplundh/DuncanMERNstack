import * as actionTypes from "../ActionTypes";
import axios from "axios";

export const addStudentToStore = (student) => {
    return {
        type: actionTypes.ADD_STUDENT_TO_STORE,
        payload: student
    }
}

export const SaveStudentToDBUsingFetch = (student) => {
    return (dispatch)=>{
        window.fetch("http://localhost:9000/student/api/signinup",
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)}) // turn the JSON into a String
            .then((response)=> response.json())
            .then((studentData)=>{
                console.log(studentData)
                dispatch(addStudentToStore(studentData))
            })
            .catch((error)=>console.log(error))
        }
    }

    export const SaveStudentToDBUsingAxios = (student) => {
        return (dispatch)=> {
            axios.post("http://localhost:9000/student/api/signinup",
                student
            ).then((collection)=>{
                let loggedStudent = collection.data
                console.log(loggedStudent)
                dispatch(AddStudentToStore(loggedStudent))
            })
            .catch((error)=>console.log(error))
        }
    }