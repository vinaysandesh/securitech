import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Home.css'
import LogoutPrompt from '../components/Logout';
import { useDispatch } from 'react-redux';
import { removeToken } from '../redux/reducer';
import SidebarItem from '../components/New/SidebarItem';
import { FaHome, FaPlug, FaExclamationTriangle, FaLaptopCode, FaUser, FaPowerOff } from 'react-icons/fa';
import HeaderBar from '../components/New/HeaderBar';
import { useLocation } from "react-router-dom";
const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); 
  const [isCollapsed2, setIsCollapsed2] = useState(false); 
  const [logout, setlogout] = useState(false)
  const [pathName, setPathName] = useState("Dashboard")
  const location = useLocation();
  console.log('location',location)
  const toggleSidebar = () => {
    setIsCollapsed2(!isCollapsed2)
    setTimeout(()=>{
      setIsCollapsed(!isCollapsed);
    },500)
  };
  
const userLogout = () =>{
  
  setlogout(true)
}
const getPathName = (path)=>{
  switch(path){
    case "/":
      setPathName("Dashboard")
      break;
    case "/alerts":
      setPathName("Alerts")
      break;
      case "/connectors":
        setPathName("Connectors")
        break;
        case "/playbooks":
          setPathName("Playbooks")
          break;
          case "/profile":
            setPathName("Profile")
            break;
          case "default":
            setPathName("Dashboard")
            break;
  } 
} 
useEffect(()=>{
   getPathName(location.pathname)
},[location])
  return (
    <div>
<div class="container" > 
    <div style={{display:'flex', flexDirection:'column'}} className={`sidebar_container  ${isCollapsed ? 'collapsed' : ''}` }  >
      {/* Logo Section */}
      

      {/* Navigation Links */} 
     <div>
     <div className="logo_sidebar" style={{ cursor:'pointer'}}> 
        {/* {!isCollapsed&&<><span className="sidebar_title">Securitech</span><br/>
          <span className="subtitle">Uncompromising security.</span></>} */}
          {isCollapsed?<img onClick={toggleSidebar} src={require('./../images/logo_icon.png')}  height={24} id="icon_logo"/>:<img   onClick={toggleSidebar} style={{height:36}} src={require("./../images/text_logo.png")}/>}
          
      </div>
       
     </div>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between',flex:1 }}>
      <div>
        <nav className="nav-links">
          <NavLink to="/" className={`nav-link ${isCollapsed&&"hidden"}`}>
          <SidebarItem icon={<FaHome color='#007BFF'/>} title="Dashboard" collapsed={isCollapsed}/> 
          </NavLink>
          <NavLink to="/alerts" className={`nav-link ${isCollapsed&&"hidden"}`}>
          <SidebarItem icon={<FaPlug color="#28A745"/> } title="Alerts" collapsed={isCollapsed}/> 
          </NavLink>
          <NavLink to="/connectors" className={`nav-link ${isCollapsed&&"hidden"}`}>
          <SidebarItem icon={<FaExclamationTriangle color="#FD7E14"/>} title="Connectors" collapsed={isCollapsed}/> 
          </NavLink>
          <NavLink to="/playbooks" className={`nav-link ${isCollapsed&&"hidden"}`}>
          <SidebarItem icon={<FaLaptopCode  color="#CE65FF"/>} title="Playbooks" collapsed={isCollapsed}/> 
            
          </NavLink>
          <NavLink to="/profile" className={`nav-link ${isCollapsed&&"hidden"}`}>
          <SidebarItem icon={<FaUser color="20C997"/>} title="Profile" collapsed={isCollapsed}/> 
            
          </NavLink>
        </nav>
      </div>
      <div className="nav-link">
    <SidebarItem onClick={userLogout} icon={<FaPowerOff color='red'/>} title="Logout"/>  
    </div>
      </div> 
    
    </div> 
    <div class="right-div" style={{  backgroundColor:'#F3F3F3'}}> 
    <HeaderBar title={pathName}/>
    <Outlet />
    </div>
   
  </div>
  
{logout&&<LogoutPrompt handleLogout={setlogout} />}
</div>
    
  );
};

export default Home;
