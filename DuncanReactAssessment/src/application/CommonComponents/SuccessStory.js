import React from "react";

const SuccessStory = (props) => {


    let sendData = ()=> {
        props.sendToSuccess("Hello from SuccessStory"); 
    
    };
    return (<>
        <div className="successStory">
            <p>SuccessSotry Passed as component</p>
            <button onClick={sendData}>Send back to "Success"</button>
        </div>      
        </>

    )
}

export default SuccessStory

