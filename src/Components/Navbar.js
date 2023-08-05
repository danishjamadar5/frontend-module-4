import React from "react"
import Home from "../Images/Home.png"
import Bell from "../Images/Bell.png"
import Fav from "../Images/Fav.png"
import User from "../Images/User.png"
import { useNavigate } from "react-router-dom"

const Navbar =()=>{
const navigate =useNavigate()

    return(
        <div>

        <div className="header">
            <h2 onClick={()=>navigate("/")}>TravelMedia.in</h2>
            <div className="center-icon">
               <img src={Home} alt="icon" onClick={()=>navigate("/")}/> 
               <img src={Bell} alt="icon"/> 
               <img src={Fav} alt="icon" onClick={()=>navigate("/detail/1")}/> 
               <img src={User} alt="icon"/> 
            </div>
          </div>

        </div>
    )
}


export default Navbar