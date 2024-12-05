import React from "react";
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";

export class Success extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "click the button receive a response from 'SuccessStory Component'"
        }

    }
    handleStoryMessage = (msg)=>{
        this.setState({
            message : msg
        })
    }

    render() {
        // name and address to send to SuccessChild
        let successParentData = {
            name: "Duncan",
            address: "Earth"
        }
        return (
            <>
                <h1>{this.state.message}</h1>
                <SuccessChild parentMessage={successParentData} storyComponent={<SuccessStory sendToSuccess={this.handleStoryMessage}/>} />
            </>
        )
    }
    
}

export default Success;