import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css'
const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); 
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
<div class="container">
    <div className={` ${isCollapsed ? 'collapsed' : ''}`}> 
    <div className={`sidebar`}>
      {/* Logo Section */}
      <div className="logo"> 
        {!isCollapsed&&<><span className="sidebar_title">Securitech</span><br/>
          <span className="subtitle">Uncompromising security.</span></>}
      </div>

      {/* Navigation Links */}
      <div className="nav-container">
      <div>
        <nav className="nav-links">
          <Link to="/dashboard" className={`nav-link ${isCollapsed&&"hidden"}`}>
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
      <button className={`toggle-btn ${isCollapsed&&"toggle-btn-collapsed"}`} onClick={toggleSidebar}>
        {isCollapsed ? '▶' : '◀'}
      </button>
    </div>
    </div>
    </div>
    <div class="right-div"> 
    <Outlet />
    </div>
   
  </div>
  

</div>
    
  );
};

export default Home;
