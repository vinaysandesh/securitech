import React, { useState } from "react";
import "../Dashboard/Dashboard.css"
const Connectors = () =>{
  const [name, setName ] = useState("Vinay Sounderraj")
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
         <div className="charts">
           <div className="charts_items">
             
           </div>
           <div className="charts_items">

           </div>
         </div>
         <div id="logs_latest">
          Nothing
         </div>
      </div> 
    </div>
  )
}

export default Connectors;