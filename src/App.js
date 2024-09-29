// import logo from './logo.svg';
// import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addJwt, removeToken } from './redux/reducer'; 
// import AuthPage from './Auth/Auth';
// import { BrowserRouter, Routes, Route, Navigate, createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";

// import Home from './Home/Home';
// import Dashboard from './Dashboard/Dashboard';
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import { useState } from 'react';
// function App() { 
//   const jwt = useSelector((state) => state.jwt)  
// const auth_router = createBrowserRouter([
//   {
//     path: '/', // Parent Route
//     element:  <AuthPage />,
//     errorElement: <div>Page not found</div>, // Error handling route
     
//   },
// ]);
// const home_router = createBrowserRouter([
//   {
//     path: '/', // Parent Route
//     element:  < Outlet />,
//     errorElement: <div>Page not found</div>, // Error handling route
//     children: [
//       {
//           index: true,
//           element: <Dashboard />,
          
//       },
//       {
//         path:'logs',
//         element: <Home />,   
//       },
//       {
//         path:'connectors',
//         element: <Home />,   
//       },
//       {
//         path:'playbooks',
//         element: <Home />,   
//       },
     

//   ], 
//   } 
// ]); 
//   return ( 
   
//     <div>
      
//       <RouterProvider router={jwt?home_router:auth_router}/> 
//     </div>
      
      
       
//   );
// }


// export default App;
import { createBrowserRouter, Link, Outlet, Route, Router, RouterProvider, Routes, Switch } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import { FaBeer } from 'react-icons/fa';
import './App.css';
import Home from "./Home/Home";
import { useDispatch, useSelector } from "react-redux";
import AuthPage from "./Auth/Auth"; 
import Connectors from "./Connectors/Connectors";
 
const Profile = () => <h1>Profile</h1>;
const Settings = () => <h1>Settings</h1>;

export default function App() {
  const jwt = useSelector((state) => state.jwt) 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path:"connectors",
          element: <Connectors/>
        }
      ],
    },
  ]);
  const router_auth = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />,
      // children: [
      //   {
      //     path: "dashboard",
      //     element: <Dashboard />,
      //   } 
      // ],
    },
  ]);
  console.log(jwt)
  return (
    <RouterProvider router={jwt?router:router_auth}/> 
  );
}