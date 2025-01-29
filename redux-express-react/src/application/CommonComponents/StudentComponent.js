import React, { Component } from 'react';
import { connect } from "react-redux";
import { AddStudentToStore, SaveStudentToDBUsingAxios, SaveStudentToDBUsingFetch } from '../State/Student/StudentActions';

class StudentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.student.name,
            major: props.student.major
        }

    }

    onTextChange = (evt)=>{
        let target = evt.target;
        let classList = target.classList;//reading the class name of html when change event happens
        let value = target.value;
    
        if(classList.contains("name")){
            this.setState({ name : value })
        }else if (classList.contains("major")) {
            this.setState({ major : value })
        }
        evt.preventDefault();
    }

    loginStudent = (evt)=>{        
        let newStudent = this.state;
        alert("Logged Innn -"+JSON.stringify(newStudent))

        //upon user action to login we send user to store
        //this.props.addUser(newUser);
        
        //this.props.saveUserToDBUsingFetch(newUser);

        this.props.saveStudentToDBUsingAxios(newStudent);

        //this.props.loginUser(newUser) //will go to usercontainer => useraction => server(db) => store => userreducer

        evt.preventDefault();
    }


render() {
    return(
        <>
            <h1>Student Login Page</h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Name</b>
                        <input type="text" className="form-control col-md-6 name" 
                                value={this.state.name} 
                            placeholder="Student Name" onChange={this.onTextChange} maxLength={40}/>
        
                        </div>
                        <div className="col-md-12">
                                <b>Major</b>
                                <input type="text" className="form-control col-md-6 major" value={this.state.major} 
                                placeholder="Major" onChange={this.onTextChange} maxLength={40}/>
                        </div>
                    
                        <input type="button" className={"btn btn-primary col-md-2 saveStudent"} 
                                value={"SignIn-Up"} 
                                onClick={this.loginStudent}/>
                                
                    </div>
            </section>
        </>
    )
}
}

let mapStateToProps = (store) => { //store is the redux states
    return {
        student : store.studentReducer.student
    //user - will be accessed as props.user in component
    }
}

//mapDispatchToProps -- allows us to send data back to store to update in reducer
//dispatch - this dispatcher we get from connect to send action to store
let mapDispatchToProps = (dispatch)=>{
    return {
        addUser : (student)=>{ //action creator
            dispatch(addStudentToStore(student))
        },
        saveStudentToDBUsingFetch : (student)=>{
            dispatch(SaveStudentToDBUsingFetch(student))
        },
        saveStudentToDBUsingAxios : (student)=>{
            dispatch(SaveStudentToDBUsingAxios(student))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent)