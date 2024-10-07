import React, { useState } from 'react';
import { addJwt, removeToken } from '../redux/reducer';
import { useDispatch } from 'react-redux';
import './Auth.css'
import axiosApi from '../utility/axios';
import { login_url, register_url } from '../const/api';
import SidebarItem from '../components/New/SidebarItem';
import { FaUser , FaLock, FaEnvelope } from "react-icons/fa";
import InputField from '../components/New/InputField';
import Button from '../components/New/Button';
import ErrorComponent from '../components/New/ErrorComponent';
// Login Form Component
const LoginForm = ({ onSwitch }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Logging in:', { email, password }); 
 
    var data = {
      email:email,
      password:password
    }
    // Handle login logic here (e.g., API call)
    axiosApi(login_url, "POST",data, (data)=>{
      console.log("Success",data.data.accessToken)
      dispatch(addJwt(data.data.accessToken))
      
    }, (err)=>{
      console.log("Failed",err)
      alert(err.response.data.message)
    } )
  };
  
  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',height:"100vh"}}>
      <span style={{fontWeight:'bold', fontSize:24,display:'flex', alignItems:'center', justifyContent:'center'}}>Welcome to <img style={{height:36}} src={require("./../images/text_logo.png")}/></span>
      <h5 style={{textAlign:"center"}}>You can proceed to login here</h5>
      <form onSubmit={handleSubmit}>
     
          <InputField
          type="email"
          value={email}
          onChange={(e) => {console.log("e.target.value",e.target.value)
            setEmail(e.target.value)}}
          icon={<FaUser/>}
          placeholder="Enter your email"
          required 
          />
           <InputField
          type="password"
          value={password}
          icon={<FaLock/>}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          /> 
          <Button 
          type="button"
          value={"Login"}
          onClick={handleSubmit} 
            /> 
      </form>
      <p style={{textAlign:'center'}}>
        Don't have an account?{' '}
        {/* <button onClick={onSwitch} className="switch-btn">
          Register here
        </button> */}
        <span className="switch-btn" onClick={onSwitch}>Register Here!</span>
      </p>
    </div>
  );
};

// Register Form Component
const RegisterForm = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [name, setName ] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Registering:', { email, password });
    // Handle registration logic here (e.g., API call)
    event.preventDefault();
    console.log('Logging in:', { email, password });
    const form = event.target;

    // Create a new FormData object 
    var data = {
      name: name,
      email:email,
      password:password
    }
    // Handle login logic here (e.g., API call)
    axiosApi(register_url, "POST",data, (data)=>{
      console.log("Success",data.data.accessToken)
      onSwitch()
      
    }, (err)=>{
      console.log("Failed",err)
      alert(err.response.data.message)
    } )
    
  };

  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',height:"100vh"}}>
      <span style={{fontWeight:'bold', fontSize:24,display:'flex', alignItems:'center', justifyContent:'center'}}>Welcome to <img style={{height:36}} src={require("./../images/text_logo.png")}/></span>
      <h5 style={{textAlign:"center"}}>You can proceed to register here</h5>
      <form onSubmit={handleSubmit}>
      
        <InputField
           type="name"
           value={name}
           icon={<FaUser/>}
           onChange={(e) => setName(e.target.value)}
           placeholder="Enter your name"
           required 
          />
           <InputField
           type="email"
           value={email}
           icon={<FaEnvelope/>}
           onChange={(e) => setEmail(e.target.value)}
           placeholder="Enter your email"
           required
          />
          <InputField
           type="password"
           value={password}
           icon={<FaLock/>}
           onChange={(e) => setPassword(e.target.value)}
           placeholder="Enter your password"
           required
          />
         <InputField
            type="password"
            value={confirmPassword}
            icon={<FaLock/>}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
            className='input'
          />
        <Button 
          type="button"
          value={"Register"}
          onClick={handleSubmit} 
            /> 
        {/* <div style={{display:"flex", justifyContent:"center"}}>
        <button className="button" type="submit">Register</button>
        </div> */}
        
      </form>
      <p style={{textAlign:'center'}}>
        Already have an account?{' '}
      
        <span className="switch-btn" onClick={onSwitch}> Login here!</span>
      </p>
    </div>
  );
};

// Main Auth Page Component
const AuthPage = () => {
const [isLogin, setIsLogin] = useState(true);
const toggleAuthMode = () => {
    setIsLogin(!isLogin);
};
return (


<div class="main_container"> 
{/* {isLogin ? (
        <LoginForm onSwitch={toggleAuthMode} />
      ) : (
        <RegisterForm onSwitch={toggleAuthMode} />
      )} */}
      <div id="auth_left">
        {/* Here goes the logo and stuff */} 
        <div className="logo_container">
          <img src={require('./../images/logo_icon.png')} height={120} id="icon_logo"/>
          <div style={{display:"flex", flexDirection:'column'}}>
          <img src={require('./../images/text_logo.png')} height={80} id="text_logo"/>
          {/* <span style={{color:'white'}}>Centralized Security, Unified Insights – All Your Threats in One View.</span> */}
          <span style={{color:'white'}}>Auto threat detection response system</span>
          </div>
        </div>
      </div>
      <div id="auth_right">
        {/* Here goes the Auth forms */} 
        {isLogin ? (
        <LoginForm onSwitch={toggleAuthMode} />
      ) : (
        <RegisterForm onSwitch={toggleAuthMode} />
      )}
      </div>
  </div>
  
   
  );
};

export default AuthPage;

{/* <div className='main'>
    
      <div className="split left">
      <div className="centered">
      <span className='logo'>Securitech</span>
     <span className='subtitle'>Uncompromising Security: Safeguard, Respond, Succeed.</span>
   </div>
</div> 
<div className="split right">
 <div className="forms">
  <div className="auth-page">
      {isLogin ? (
        <LoginForm onSwitch={toggleAuthMode} />
      ) : (
        <RegisterForm onSwitch={toggleAuthMode} />
      )}
    </div>
  </div>
 </div>  
</div> */}