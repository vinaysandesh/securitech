import React, { useState } from 'react';
import { addJwt, removeToken } from '../redux/reducer';
import { useDispatch } from 'react-redux';
import './Auth.css'
// Login Form Component
const LoginForm = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Logging in:', { email, password });
    // Handle login logic here (e.g., API call)
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button onClick={onSwitch} className="switch-btn">
          Register here
        </button>
      </p>
    </div>
  );
};

// Register Form Component
const RegisterForm = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
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
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{' '}
        <button onClick={onSwitch} className="switch-btn">
          Login here
        </button>
        <button onClick={()=>{
            dispatch(addJwt("Hello Worlds"))
        }} className="switch-btn">
          LOGOUT
        </button>
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
    <span>hello</span>
    <div className='left'>
       <div></div>
    </div>
    <div className="right">
       <div></div>
    </div>
      {/* <div className="split left">
      <div class="centered">
      <span className='logo'>Securitech</span>
     <span className='subtitle'>Uncompromising Security: Safeguard, Respond, Succeed.</span>
   </div>
</div> 
<div class="split right">
 <div className="forms">
  <div className="auth-page">
      {isLogin ? (
        <LoginForm onSwitch={toggleAuthMode} />
      ) : (
        <RegisterForm onSwitch={toggleAuthMode} />
      )}
    </div>
  </div>
 </div> */}
</div>

  
   
  );
};

export default AuthPage;
