import React, { useState } from 'react'
import "./style.css"
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { serverurl } from '..'
const Signup = () => {
    const [email,setEmail]=useState("")
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const submithandler=async(e)=>{
        e.preventDefault();
        // console.log("req")
        try {
            const data=await axios.post(`${serverurl}/register`,{name,email,password},{
              headers:{
                "Content-Type":"application/json"
              },
              withCredentials:true,
            })
            toast.success(data.message)
            console.log(data.data.message);
        } catch (error) {
            console.log(error);
            toast.error("error");
        }
    }

  return (
    <div>
      <h1 className='title'>signup page</h1>
      <form className="forml" onSubmit={submithandler}>
        <input type="text" required="true" name="name" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }} />
        <input type="email" required="true" name="email" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <input type="password" required="true" name="password" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <button className='sublogin'>signup</button>
        <div className="opt">
        <span>Already a user?</span>
        <Link to="/login" className='alt'>login up</Link>
        </div>
      </form>
    </div>
  )
}

export default Signup
