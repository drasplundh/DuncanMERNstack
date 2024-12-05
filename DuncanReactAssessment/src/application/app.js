import React from "react";
import Success from "./CommonComponents/Success";

export default class Application extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <Success />
            </>
        )
    }
}