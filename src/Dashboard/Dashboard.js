import React, { useEffect, useState } from "react";
import "../Dashboard/Dashboard.css"
import axiosApi from "../utility/axios";
import { get_grouped_logs, get_logs, get_user_details } from "../const/api";
import ChartComponent from "../components/ChartComponent";
const Dashboard = () =>{
  const [name, setName ] = useState("Vinay Sounderraj")
  const [logs, setLogs ] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    axiosApi(get_user_details,"POST",null,(data)=>{
       console.log(data.data.user[0].username  ) 
       setName(data.data.user[0].username)
        
    })
    axiosApi(get_logs,"POST",null,(data)=>{
      console.log(data)
      setLogs(data.data)
      
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
    backgroundColor: '#b86ef5',
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
    height:"120px"
  };

  const alertIconStyle = {
    color: 'red', // You can change color based on alert severity
  };
  const tableContainerStyle = {
    height: '350px', // Fixed height for the table
     
    overflowY: 'auto', // Enable vertical scrolling
    border: '1px solid black',
  };
  const trStyle = {
    height:"50px",

  }
  const RenderPriority = (props)=>{
    var style = {...tdStyle,
      borderRadius:"8px",
      color:"white",
      fontWeight:'bold'
    }
    if(props.val == "High"){
      style = { ...style,
        backgroundColor:'#FF0000',

      };
    }else if(props.val=="Medium"){
   style = { ...style,
        backgroundColor:'#FFFF00',
        
      };
    }else if(props.val=="Low"){
      style = { ...style,
        backgroundColor:'#008000',
        
      };
    }else if(props.val=="Info"){
      style = { ...style,
        backgroundColor:'#808080',
        
      };
    }
    return <td style={{...tdStyle}}><span style={style}>{props.val}</span></td>

  } 
  return (
    <div style={{height:"100%"}}> 
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
             <ChartComponent/>
           </div>
           <div className="charts_items">
              
           </div>
           <div className="charts_items">

</div>
         </div>
         <div id="logs_latest" style={tableContainerStyle}>
         <table style={tableStyle}>
        <thead>
          <tr style={trStyle}>
            <th style={thStyle}>ID</th>
            <th style={{...thStyle,width:"100px"}}>Name</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Assigned to</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Host</th>
            <th style={thStyle}>Tool</th>
            <th style={thStyle}>Priority</th>
          </tr>
        </thead>
        <tbody>
          {loading &&!logs?(<span>LOADING CONTENT</span>):(
            <>
            {logs.map((source, index)=>{
              return <tr style={tbodyRowStyle}>
              <td style={tdStyle}>{index+1}</td>
              <td style={tdStyle}><a href={source.issue_url} target="_blank">{source.issue_name}</a></td>
              <td style={tdStyle}>{source.issue_description}</td>
              <td style={tdStyle}>{source.assigned_to}</td>
              <td style={tdStyle}>{source.status}</td>
              <td style={tdStyle}>{source.host}</td>
              <td style={tdStyle}>{source.tool}</td> 
              <RenderPriority val={source.issue_priority}/>
            </tr>
            })}
            </>
          )}
          
        </tbody>
      </table>
         </div>
      </div> 
    </div>
  )
}

export default Dashboard;