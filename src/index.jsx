import React from "react";
import {createRoot} from "react-dom/client";
import './scss/main.scss';
import Home from "./components/Home.jsx";
const Index = () => {
    return(
        <>
            <Home/>
        </>
    )
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Index/>)