import React, { useState } from 'react';
import { addJwt, removeToken } from '../redux/reducer';
import { useDispatch } from 'react-redux';
import './Auth.css'
import axiosApi from '../utility/axios';
import { login_url, register_url } from '../const/api';
// Login Form Component
const LoginForm = ({ onSwitch }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Logging in:', { email, password });
    const form = event.target;

    // Create a new FormData object
    const formData = new FormData(form);
    console.log("form data",formData)
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
    <div>
      <h2 style={{textAlign:"center"}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className='input'
          />
        </div>
        <div className="form-group"> 
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
             className='input'
          />
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
        <button className='button' type="submit">Login</button>
        </div>
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
    <div>
      <h2 style={{textAlign:"center"}}>Register</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group"> 
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
             className='input'
          />
        </div>
        <div className="form-group"> 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
             className='input'
          />
        </div>
        <div className="form-group"> 
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
             className='input'
          />
        </div>
        <div className="form-group"> 
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
            className='input'
          />
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
        <button className="button" type="submit">Register</button>
        </div>
        
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
<div className='main'>
    
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
</div>

  
   
  );
};

export default AuthPage;
