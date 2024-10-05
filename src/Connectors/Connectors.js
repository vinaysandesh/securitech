import React, { useState } from "react";
import "../Dashboard/Dashboard.css"
import "../Connectors/Connectors.css"
import nmapLogo from '../images/nmap.jpg'
import snortLogo from '../images/snort.jpg'
import axiosApi from "../utility/axios";
import { run_nmap } from "../const/api";
const Connectors = () =>{
  const [name, setName ] = useState("Vinay Sounderraj")
  const [target, setTarget ] = useState(null)
  const runNmap = ()=>{
    console.log("TARGET = ",target)
   if(target!=null){
    var data = {target:target}
    axiosApi(run_nmap,"POST",data,(data)=>{
      console.log(data  ) 
      
      
   }) 
   }
  }
  return (
    <div> 
     <div className="dashboard_top">
  <div className="page_name">
    <span>Connectors</span>
  </div>
  <div className="name_span">
    <img className="profile_pic" src="https://media.istockphoto.com/id/1347495860/photo/african-american-man-wearing-glasses-side-view.jpg?s=612x612&w=0&k=20&c=CaEzjc8TuJIsHVJUBfoli-pF72G4Xzm76IL6406YS5M="/>
    <span id="profile_name">{name}</span>
  </div>
</div>
      <div className="dashboard_down">
      <div className="tool-card">
        <div className="connectors_logo">
        <img src={nmapLogo} alt="Nmap Logo" className="logo" />
        </div>
        <div className="desc_connectors">
        <h2>NM<span>A</span>P</h2>
        <p>Nmap is a tool to perform network vulnerability scans. To get started just add the host you want to scan and hit scan</p>
        <input type="text" placeholder="Enter host..." onChange={e => setTarget(e.target.value)}/>
        <button className="scan-btn" onClick={runNmap}>Scan</button>
        </div>
      </div>

      <div className="tool-card">
      <div className="connectors_logo">
      <img src={snortLogo} alt="Snort Logo" className="logo" />
        </div>
        <div className="desc_connectors">
        <h2>SNO<span>R</span>T</h2>
        <p>Snort is a Network-based intrusion detection system. Use the button below to start the scanning on the host.</p>
        <button className="scan-btn">Start</button>
        </div>
      </div>
      </div> 
    </div>
  )
}

export default Connectors;