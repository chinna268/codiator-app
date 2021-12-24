import React from "react";
import ReactDom from "react-dom";
//ROutes
import { BrowserRouter } from "react-router-dom";

//  importing of bootsrap it should be always on the top 
import 'bootstrap/dist/css/bootstrap.min.css';

//importing of bootstrap for js functionality
import 'bootstrap/dist/js/bootstrap.bundle';

import './assets/CSS/style.css';
// custorm css link

import App from './App';


// ReactDom.render(Data,Location);
ReactDom.render(<BrowserRouter>
        <App />
</BrowserRouter>,
        document.getElementById("root"));