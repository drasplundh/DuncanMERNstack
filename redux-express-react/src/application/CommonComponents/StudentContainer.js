import { connect } from "react-redux";//helps react component to connect with store
import { AddStudentToStore } from "../State/Student/StudentActions";
import StudentComponent from "./StudentComponent.jsx";//we are importing component to be used to access

//mapstatetoprops -- allows component to become subscriber
let mapStateToProps = (store) => { //store is the redux states
    return {
        student : store.userReducer.student
    //user - will be accessed as props.user in component
    }
}

//mapDispatchToProps -- allows us to send data back to store to update in reducer
//dispatch - this dispatcher we get from connect to send action to store
let mapDispatchToProps = (dispatch)=>{
    return {
        addStudent : (student)=>{ //action creator
            dispatch(AddStudentToStore(student))
        }
    }
}


//connect accepts - mapStateToProps - for subscribing and mapDispatchToProps - for publishing
export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent)