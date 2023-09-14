import React, { useState } from 'react'
import "./style.css"
import axios from 'axios'
import { toast } from "react-hot-toast"
import { serverurl } from '..'
import { Link } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(`${serverurl}/login`, { email, password }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      })
      toast.success(data.message)
      console.log(data.message);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <div>
      <h1 className='title'>login page</h1>
      <form className="forml" onSubmit={submithandler}>
        <input type="email" required="true" name="email" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <input type="password" required="true" name="password" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <button className='sublogin'>login</button>
        <div className="opt">
          <span>Not a user?</span>
          <Link to="/signup" className='alt'>sign up</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
