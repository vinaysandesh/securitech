import React, { useEffect, useState } from 'react';
import axiosApi from '../../utility/axios';
import { get_logs } from '../../const/api';

const AlertsTable = (props) =>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    console.log("props.offset",props.offset)
    useEffect(()=>{
        axiosApi(get_logs,"POST",{offset:props.offset?props.offset:0},(data)=>{
            console.log(data)
            setData(data.data)
            setLoading(false)
          })
    },[props.offset])
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
    position: 'sticky',  // Make the header sticky
    top: 0,              // Stick to the top of the table
    zIndex: 1 
        
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
        <div style={{display:'flex', flex: 1, backgroundColor:'white'  ,overflow:'hidden',overflowY: "auto",height:340,scrollbarWidth: "none",...props.styles}}>
            {data.length>0?(
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
                  {loading ?(<span>LOADING CONTENT</span>):(
                    <>
                    {data.map((source, index)=>{
                      return <tr style={tbodyRowStyle}>
                      <td style={tdStyle}>{ ( props.offset==1?index+1:(props.offset-1)*10+index+1  ) }</td>
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
            ):(
                <span style={{fontWeight:"600", fontSize:24, display:'flex',flex:1, alignItems:'center', justifyContent:'center'}}>No data available</span>
            )}
        </div>
    )

}

export default AlertsTable;