import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
const App = () => {
    return(
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    );
}