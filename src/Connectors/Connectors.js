import React, { useState } from "react";
import "../Dashboard/Dashboard.css"
import "../Connectors/Connectors.css"
import nmapLogo from '../images/nmap.jpg'
import snortLogo from '../images/snort.jpg'
import axiosApi from "../utility/axios";
import { run_nmap } from "../const/api";
import { ColorRing, ProgressBar } from "react-loader-spinner";
const Connectors = () =>{
  const [name, setName ] = useState("Vinay Sounderraj")
  const [target, setTarget ] = useState(null)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState("")
  const runNmap = ()=>{
    setLoader(true)
    console.log("TARGET = ",target)
   if(target!=null){
    var data = {target:target}
    axiosApi(run_nmap,"POST",data,(data)=>{
      console.log(data  ) 
      setLoader(false)
      
   },(err)=>{
    console.log("ERROR",err)
    setError("Error occured during scanning")
    setLoader(false)
   }) 
   }
  }
  return (
    <div> 
     
      <div className="dashboard_down">
      <div className="tool-card">
        <div className="connectors_logo">
        <img src={nmapLogo} alt="Nmap Logo" className="logo" />
        </div>
        <div className="desc_connectors">
        <h2>NM<span>A</span>P</h2>
        <p>Nmap is a tool to perform network vulnerability scans. To get started just add the host you want to scan and hit scan</p>
        <input type="text" placeholder="Enter host..." onChange={e => setTarget(e.target.value)} required/>
        {loader?(<ProgressBar
  visible={true}
  color={"#160056"}
  height="48"
  width="48"
  ariaLabel="color-ring-loading"
  wrapperStyle={{ width:'100%',display:'flex', justifyContent:'flex-end'}}
  wrapperClass="color-ring-wrapper"
  colors={["#160056"]}
  />):(<button className="scan-btn" onClick={runNmap}>Scan</button>)}
        <span>{error}</span>
        </div>
      </div>

      {/* <div className="tool-card">
      <div className="connectors_logo">
      <img src={snortLogo} alt="Snort Logo" className="logo" />
        </div>
        <div className="desc_connectors">
        <h2>SNO<span>R</span>T</h2>
        <p>Snort is a Network-based intrusion detection system. Use the button below to start the scanning on the host.</p>
        <button className="scan-btn">Start</button>
        </div>
      </div> */}
      </div> 
    </div>
  )
}

export default Connectors;