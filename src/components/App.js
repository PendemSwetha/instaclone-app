
import React, { useState, useEffect } from "react";
import '../styles/App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Form from "./Form";
import LandingPage from "./LandingPage";
import FirstPage from "./FirstPage";

const App = () => {
  return (

    <div id="main">
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
      <Route path="/post" element={<LandingPage/>}/>  
        <Route path='/generatePost' element={<Form/>}/>      
      </Routes>
      </BrowserRouter>

</div>

  )

}


export default App;
