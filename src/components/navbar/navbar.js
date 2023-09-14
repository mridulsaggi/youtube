import React, { useState } from 'react'
import "./navbar.css"
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {Link, useNavigate} from "react-router-dom";
import img1 from "./uicon.png";
const Navbar = () => {
    const menubtn=()=>{

    }
    const [searchTerm,setsearchterm]=useState("");
    const navigate=useNavigate();
    const submithandler=(e)=>{
        e.preventDefault();
        if(searchTerm){
            navigate(`/search/:${searchTerm}`);
            setsearchterm("");
        }
    }
    return (
        <>
        <div className="navbar">
            <div className="icon"> 
                    <Link to="./"><img src={img1} alt="img " className='img1' /></Link>
                {/* <span>YOUTUBE</span> */}
            </div>
            <div className="searching">
                <form className='form' onSubmit={submithandler}>
                    <input type="text" placeholder='SEARCH' className='search' value={searchTerm} onChange={(e) => {setsearchterm(e.target.value) }} />
                    <IconButton type='submit' color="red" ><SearchIcon /></IconButton>
                </form>
            </div>
            <div className='bttn'>
                <Link className="log" to="/" >Home</Link>
                <Link className="log" to="/login" >Login</Link>
                {/* <Link  className="log" to="/Signup">Signup</Link> */}
            </div>
            <div>
                {/* <img onclick="menubtn"className='menubtn' src="https://blog.mozilla.org/futurereleases/files/2019/02/menu-button.jpg" alt="" /> */}
                <div className="choice">
                <Link className="log" to="/" >Home</Link>
                <Link className="log choa" to="/login" >Login</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;
