import React from "react";
import ReactDom from "react-dom";

//  importing of bootsrap it should be always on the top 
import 'bootstrap/dist/css/bootstrap.min.css';

//importing of bootstrap for js functionality
import 'bootstrap/dist/js/bootstrap.bundle';

import './assests/CSS/style.css';
// custorm css link
 
import App from './App';


// ReactDom.render(Data,Location);
ReactDom.render(<App/>,
        document.getElementById("root"));