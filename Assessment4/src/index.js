import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; //the component used to set store as parent to all application components
import "./app.css";

import store from "./application/State/store";
import ApplicationComponent from "./application/app";


//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

//bootstrapping react application in root element of index.html
root.render(  //first time when our virtual dom is created and loads
        <Provider store={store}>
                <ApplicationComponent/>
        </Provider>
)