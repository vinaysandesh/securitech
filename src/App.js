 
import { createBrowserRouter, Link, Outlet, Route, Router, RouterProvider, Routes, Switch } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import { FaBeer } from 'react-icons/fa';
import './App.css';
import Home from "./Home/Home";
import { useDispatch, useSelector } from "react-redux";
import AuthPage from "./Auth/Auth"; 
import Connectors from "./Connectors/Connectors";
import { CNavGroup, CNavItem, CNavTitle, CSidebar, CSidebarBrand, CSidebarHeader, CSidebarNav, CSidebarToggler } from "@coreui/react";
import Logs from "./Logs/Logs";
import Playbooks from "./Playbooks/Playbooks";
import Profile from "./Profile/Profile"; 


export default function App() { 
  const jwt = useSelector((state) => state.jwt) 
  const ErrorComp = ()=>{
    return <div style={{display:'flex',flex:1, alignItems:'center',justifyContent:'center',flexDirection:'row',height:'100vh' }}>
      <div style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center' }}>
      <div>
        <img src={require('./images/error.png')} style={{height:348}}/>
      </div>
      <div>
      <span style={{fontWeight:'bold', fontSize:48}}>Oops! No such page exists.</span><br/>
      <span style={{fontWeight:'300', fontSize:24}}>Use this <a  >link</a> to go back to the home page</span>
      </div>
      </div>
    </div>
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />, 
      errorElement: <ErrorComp/>,
      children: [
        {
          index:true,
          path: "",
          element: <Dashboard />,
        },
        {
          path:"connectors",
          element: <Connectors/>
        },
        {
          path:"alerts",
          element: <Logs/>
        } ,
        {
          path:"playbooks",
          element: <Playbooks/>
        } ,
        {
          path:"profile",
          element: <Profile/>
        }
      ],
    },
  ]);
  const router_auth = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />, 
      errorElement: <ErrorComp/>,
    },
  ]);
  console.log(jwt)
  return (
    <RouterProvider router={jwt?router:router_auth}/> 
    
  );
}