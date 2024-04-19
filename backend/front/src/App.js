//import logo from './logo.svg';


import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import {createBrowserHistory} from "history";

import NavigationBarClass from "./components/NavigationBarClass";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBarClass />
                <div className="container-fluid">
                    <Routes>
                        <Route path="home" element={<Home />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}



export default App;
