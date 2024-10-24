import React, { useState } from 'react';
import './Logout.css'; // External CSS file for styles
import { useDispatch } from 'react-redux';
import { removeToken } from '../redux/reducer';
import { useNavigate } from "react-router-dom";

const LogoutPrompt = (props) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogout = () => {
    setShowPrompt(true);
  };

  const confirmLogout = () => {
    props.handleLogout(false);
    // Your logout logic here
    dispatch(removeToken())
    
    console.log('User has logged out.');
    navigate("/", { replace: true });
  };

  const cancelLogout = () => {
    props.handleLogout(false);
  };

  return (
    <div>
      <button onClick={props.handleLogout}>Logout</button>
 
        <div className="overlay">
          <div className="modal">
            <h3>Are you sure you want to log out?</h3>
            <div className="buttons">
              <button onClick={confirmLogout} className="accept-button">
                Accept
              </button>
              <button onClick={cancelLogout} className="cancel-button">
                Cancel
              </button>
            </div>
          </div>
        </div> 
    </div>
  );
};

export default LogoutPrompt;
