//defines the initial state to be used in user component as props and reducers to update the user data
import * as actionTypes from "../ActionTypes";

let initialState = {
    student : {
        name : "",
        major: ""
    }
}

//this will be used by store to map the action type and then update/create new user state
let StudentReducer = (state=initialState, action)=>{
    console.log("Student Reducer ", action.payload);

    switch (action.type) {
        case actionTypes.ADD_STUDENT_TO_STORE:
            return {...state, student : action.payload} // Explain spread operator here

            break;
    
        default:
            return state;
            break;
    }

}

export default StudentReducer;