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
                <p> I'm going to answer Q2 and Q7 together because they're similar</p>
                <p>React uses a Virtual DOM which is a higher layer than the actual DOM.  As the programmer you interact with the Virtual DOM. <br></br>
                When you make changes to it, React will identify those changes made to the Virtual DOM from the previous one using a really efficient diffing algorithm <br></br>and then reflect those changes in the actual DOM.  
                <br></br>By using this Virtual DOM, React can pick and choose which parts of the actual DOM to update, rather than rendering the entire DOM each time a change is made; making it more efficient.
                </p>

            </>
        )
    }
    
}

export default Success;