import React, { useEffect, useState } from 'react';
import "./comp_styles.css"
import axiosApi from '../../utility/axios';
import { add_manual_alerts } from '../../const/api';
import getCurrentDate from '../../utility/currentdatetime';
import { Audio, ColorRing, RotatingLines } from "react-loader-spinner";
const ManualAlert = ({ isOpen, onClose, onSubmit, source}) => {
  console.log(source)
  const [formData, setFormData] = useState({
    id_type: '',
    issue_name: '',
    issue_type: '',
    issue_priority: '',
    issue_description: '',
    issue_brief_description: '',
    issue_resolution: '',
    issue_url: '',
    assigned_to: '',
    status: '',
    host: '',
    ip: '',
    scan_date: '',
    tool: ''
  });
  const [idType, setIdType] = useState(Math.random(5));
  const [issueName, setIssueName] = useState(  "");
  const [issueType, setIssueType] = useState('');
  const [issuePriority, setIssuePriority] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [issueBriefDescription, setIssueBriefDescription] = useState('Nothing');
  const [issueResolution, setIssueResolution] = useState('Nothing');
  const [issueUrl, setIssueUrl] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [host, setHost] = useState('myserver');
  const [ip, setIp] = useState('currentIP Address');
  const [scanDate, setScanDate] = useState(getCurrentDate( ));
  const [tool, setTool] = useState('Manual');
  const [loader, setLoader] = useState(false)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const tdStyle = {
    padding: '10px 15px',
    textAlign: 'left',
    alignSelf:'center' 
  };
  const RenderPriority = (props)=>{
    var style = {...tdStyle,
      borderRadius:"8px",
      color:"white",
      fontWeight:'bold'
    }
    if(props.val == "Critical"){
      style = { ...style,
        backgroundColor:'#a94442',

      };
    }else if(props.val == "High"){
      style = { ...style,
        backgroundColor:'#d9534f',

      };
    }else if(props.val=="Medium"){
   style = { ...style,
        backgroundColor:'#f0ad4e',
        
      };
    }else if(props.val=="Low"){
      style = { ...style,
        backgroundColor:'#5cb85c',
        
      };
    }else if(props.val=="Info"){
      style = { ...style,
        backgroundColor:'#5bc0de',
        
      };
    }
    return <td style={{...tdStyle}}><span style={style}>{props.val}</span></td>

  } 
  const handleSubmit = (e) => {
    setLoader(true)
    e.preventDefault();
    
    const vars = {
      id_type: idType,
      issue_name: issueName,
      issue_type: issueType,
      issue_priority: issuePriority,
      issue_description: issueDescription,
      issue_brief_description: issueBriefDescription,
      issue_resolution: issueResolution,
      issue_url: issueUrl,
      assigned_to: assignedTo,
      status: status,
      host: host,
      ip: "IP",
      scan_date: scanDate,
      tool: tool
    }
    console.log("E.TARGET = ",vars) 
    axiosApi(add_manual_alerts, "POST", vars,(data)=>{
     setTimeout(()=>{
      console.log(data)
      setLoader(false)
      onClose()
     },1400)
    },(err)=>{
      console.log(err)
    })
  };

  const divStyleInputFields = { display: 'flex', flexDirection: 'row', padding: 8 };
  useEffect(()=>{
    if(source){
      setIssueName(source.issue_name)
      setIssueType(source.issue_type)
      setIssuePriority(source.issue_priority)
      setIssueDescription(source.issue_description)
      setIssueUrl(source.issue_url)
      setAssignedTo(source.assigned_to)
      setStatus(source.status)
    } 
  },[source] )
  return (
    <>
    {
      isOpen && (
        <div className="custom-modal">
           
          <div className="custom-modal-content">
           <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
           <h2>Submit Log Data</h2> <button type="button" style={{height:28, width:28,cursor:'pointer', borderRadius:28,borderWidth:0,backgroundColor:'red',color:'white', fontWeight:'bold',alignItems:'center',justifyContent:'center', alignSelf:'center'}} onClick={onClose}>X</button>
           </div>
            <form onSubmit={handleSubmit}>
              <div style={{ width: 480 }}>
                <div style={divStyleInputFields}>
                  <input
                    type="text"
                    name="issue_name"
                    value={issueName}
                    onChange={(e)=>{setIssueName(e.target.value)}}
                    required
                    className="custom-form-input"
                    placeholder='Issue Name'
                    disabled={source}
                  />
                  <input
                    type="text"
                    name="issue_type"
                    value={issueType}
                    onChange={(e)=>setIssueType(e.target.value)}
                    required
                    className="custom-form-input"
                    placeholder='Issue Type'
                    disabled={source}
                  />
                  {source?(<RenderPriority val={issuePriority}/>):(
                    <select
                    disabled={source}
    name="issue_priority"
    value={issuePriority}
    onChange={(e) => setIssuePriority(e.target.value)}
    required
    className="custom-form-input"
    style={{height:48}}
  >
    <option value="" disabled>
      Select Issue Priority
    </option>
    <option value="Info">Info</option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
    <option value="Critical">Critical</option>
  </select>
                  )}
                  {/* <input
                    type="text"
                    name="issue_priority"
                    value={issuePriority}
                    onChange={(e)=>setIssuePriority(e.target.value)}
                    required
                    className="custom-form-input"
                    placeholder='Issue Priority'
                  /> */}
                </div>
  
                <div style={{ ...divStyleInputFields }}>
                  <textarea
                    name="issue_description"
                    value={issueDescription}
                    onChange={(e)=>setIssueDescription(e.target.value)}
                    required
                    className="custom-form-input custom-form-input-description"
                    placeholder='Issue Description'
                    disabled={source}
                  />
                </div>
  
               {source?(
                <div style={{marginLeft:20}}>
                   URL:<a href={issueUrl?issueUrl:""} style={{...divStyleInputFields}}>
                 {/* <input
                   type="url"
                   name="issue_url"
                   value={issueUrl}
                   onChange={(e)=>setIssueUrl(e.target.value)}
                   required
                   className="custom-form-input"
                   placeholder='Issue link or reference'
                   disabled={source}
                 /> */}
                 <span> {issueUrl?issueUrl:"N/A"}</span>
               </a>
                  </div>
               ): <div style={divStyleInputFields}>
               <input
                 type="url"
                 name="issue_url"
                 value={issueUrl}
                 onChange={(e)=>setIssueUrl(e.target.value)}
                 required
                 className="custom-form-input"
                 placeholder='Issue link or reference'
                 disabled={source}
               />
             </div>}
  
                <div style={divStyleInputFields}>
                  <input
                    type="text"
                    name="assigned_to"
                    value={assignedTo}
                    onChange={(e)=>setAssignedTo(e.target.value)}
                    required
                    className="custom-form-input"
                    placeholder='Assign alert to user'
                    disabled={source}
                  />
                  <input
                    type="text"
                    name="status"
                    value={status}
                    onChange={(e)=>setStatus(e.target.value)}
                    required
                    className="custom-form-input"
                    placeholder='Add status'
                    disabled={source}
                  />
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {loader?<ColorRing
  visible={true}
  color={"#160056"}
  height="48"
  width="48"
  ariaLabel="color-ring-loading"
  wrapperStyle={{ width:'100%',display:'flex', justifyContent:'flex-end'}}
  wrapperClass="color-ring-wrapper"
  colors={["#160056"]}
  />:  
    <>{!source&&(<div style={{ width:'100%',display:'flex', justifyContent:'flex-end'}}>
    <button type="submit" className="custom-button">Submit</button> 
    </div>)}</>
}
                
              </div>
            </form>
          </div>
        </div>
      )
    }</>
  );
};

export default ManualAlert;
