 
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
          index:true,
          path: "",
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
    },
  ]);
  console.log(jwt)
  return (
    <RouterProvider router={jwt?router:router_auth}/> 
  );
}