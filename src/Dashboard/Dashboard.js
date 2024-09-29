import React, { useEffect, useState } from "react";
import "../Dashboard/Dashboard.css"
import axiosApi from "../utility/axios";
import { get_user_details } from "../const/api";
const Dashboard = () =>{
  const [name, setName ] = useState("Vinay Sounderraj")
  useEffect(()=>{
    axiosApi(get_user_details,"POST",null,(data)=>{
       console.log(data.data.user[0].username  ) 
       setName(data.data.user[0].username)
    })
  },[])
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    fontFamily: "'Arial', sans-serif",
  };

  const thStyle = {
    padding: '12px 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'left',
    fontWeight: 'bold',
    borderBottom: '2px solid #ddd',
  };

  const tdStyle = {
    padding: '10px 15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const tbodyRowStyle = {
    backgroundColor: '#f9f9f9',
  };

  const alertIconStyle = {
    color: 'red', // You can change color based on alert severity
  };
  const tableContainerStyle = {
    height: '350px', // Fixed height for the table
    overflowY: 'auto', // Enable vertical scrolling
    border: '1px solid black',
  };
  return (
    <div> 
     <div className="dashboard_top">
  <div className="page_name">
    <span>Dashboard</span>
  </div>
  <div className="name_span">
    <img className="profile_pic" src="https://media.istockphoto.com/id/1347495860/photo/african-american-man-wearing-glasses-side-view.jpg?s=612x612&w=0&k=20&c=CaEzjc8TuJIsHVJUBfoli-pF72G4Xzm76IL6406YS5M="/>
    <span id="profile_name">{name}</span>
  </div>
</div>
      <div className="dashboard_down">
         <div className="charts">
           <div className="charts_items_bar">
             
           </div>
           <div className="charts_items">

           </div>
           <div className="charts_items">

</div>
         </div>
         <div id="logs_latest" style={tableContainerStyle}>
         <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}>Alert Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style={tbodyRowStyle}>
            <td style={tdStyle}>1</td>
            <td style={tdStyle}>John Doe</td>
            <td style={tdStyle}>john@example.com</td>
            <td style={tdStyle}>Manager</td>
            <td style={tdStyle}>
              <span style={alertIconStyle}>⚠️</span> Unauthorized access attempt detected at 10:30 AM
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>2</td>
            <td style={tdStyle}>Jane Smith</td>
            <td style={tdStyle}>jane@example.com</td>
            <td style={tdStyle}>Admin</td>
            <td style={tdStyle}>
              <span style={alertIconStyle}>⚠️</span> Failed login attempt from unknown IP
            </td>
          </tr>
        </tbody>
      </table>
         </div>
      </div> 
    </div>
  )
}

export default Dashboard;