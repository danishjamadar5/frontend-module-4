import React from "react"
import './App.css';
import HomePage from "./Components/HomePage";
import DetailPage from "./Components/DetailPage";
import { Routes,Route  } from "react-router-dom";


const App  =()=>{

  return(
    
    <Routes>
    <Route path="/" element={<HomePage/>}   />
     <Route path="/detail/:id" element={<DetailPage/>}  />
    </Routes>
    
  )
}


export default App