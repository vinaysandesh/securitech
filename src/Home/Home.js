import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css'
import LogoutPrompt from '../components/Logout';
import { useDispatch } from 'react-redux';
import { removeToken } from '../redux/reducer';
const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); 
  const [isCollapsed2, setIsCollapsed2] = useState(false); 
  const [logout, setlogout] = useState(false)
  const toggleSidebar = () => {
    setIsCollapsed2(!isCollapsed2)
    setTimeout(()=>{
      setIsCollapsed(!isCollapsed);
    },500)
  };
  
const userLogout = () =>{
  
  setlogout(true)
}
  return (
    <div>
<div class="container"> 
    <div className={`sidebar  ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Logo Section */}
     

      {/* Navigation Links */}
      <div className="nav-container">
     <div>
     <div className="logo_sidebar"> 
        {!isCollapsed&&<><span className="sidebar_title">Securitech</span><br/>
          <span className="subtitle">Uncompromising security.</span></>}
      </div>
      <button className={`toggle-btn `} onClick={toggleSidebar}>
        {isCollapsed ? '▶' : '◀'}
      </button>
     </div>
      <div>
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${isCollapsed&&"hidden"}`}>
            <span className="icon">🏠</span>
            {!isCollapsed&&<span className={`text `}>Dashboard</span>}
          </Link>
          <Link to="/logs" className={`nav-link ${isCollapsed&&"hidden"}`}>
            <span className="icon">📄</span>
            {!isCollapsed&&<span className={`text `}>Logs</span>}
          </Link>
          <Link to="/connectors" className={`nav-link ${isCollapsed&&"hidden"}`}>
            <span className="icon">🔗</span>
            {!isCollapsed&&<span className={`text `}>Connectors</span>}
          </Link>
          <Link to="/playbooks" className={`nav-link ${isCollapsed&&"hidden"}`}>
            <span className="icon">📘</span>
            {!isCollapsed&&<span className={`text `}>Playbooks</span>}
            
          </Link>
        </nav>
      </div>
      
    </div>
    <div className="logout_sidebar">
      <button className="button" onClick={userLogout}> {!isCollapsed?"Logout":"L"}</button>
    </div>
    </div> 
    <div class="right-div"> 
    <Outlet />
    </div>
   
  </div>
  
{logout&&<LogoutPrompt handleLogout={setlogout} />}
</div>
    
  );
};

export default Home;
