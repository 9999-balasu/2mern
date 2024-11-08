import React,{useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
  const[currentState,setCurrentState]=useState("Login")
  return (
    <div className='login-popup'>
     <form className="login-popup-container">

      <div className="login-popup-title">
        <h2>{currentState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
      </div>
      <div className="login-popup-inputs">
        {currentState==="Login"?<></>: <input type="text" placeholder='Your name ' required />}
       
        <input type="email" placeholder='Your email' required/>
        <input type="password" placeHolder='password' required/>


      </div>
      <button> {currentState === "Sign Up" ? "Create account":"Login"}</button>
      <div className="login-popup-codition">
       <input type="checkbox" required/>
       <p>By continuing, i agree to the terms of use & privacy policy.</p>
      </div>
      {currentState==='Login'
      ?<p>Creat a new accout? <span onClick={()=>setCurrentState("Sign Up")}>Click hear</span></p>
      : <p>Already a new account? <span onClick={()=>setCurrentState("Login")}>Login hear</span></p>
    }
      
     
     </form>
    </div>
  )
}

export default LoginPopup
