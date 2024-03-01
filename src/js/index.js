//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/SimpleCounter.css"

//import your own components
import App from "./component/App";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
