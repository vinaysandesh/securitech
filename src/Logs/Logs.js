import React, { useEffect, useState } from 'react';
import AlertsTable from '../components/New/AlertsTable';
import axiosApi from '../utility/axios';
import { get_grouped_logs, get_user_details } from '../const/api';
import Pagination from '../components/New/Pagination';
import Button from '../components/New/Button';
import ManualAlert from '../components/New/ManualAlert';
const Logs = () =>{
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.round(count/10);
    const [manualAlert, setManualAlert ] = useState(false)
    const [refetch, setRefetch ] = useState(false)
    const [myLogs, setLogs] = useState(false);
    const [user,setUser ] = useState(null)
    useEffect(()=>{
       axiosApi(get_grouped_logs,"POST",null,(data)=>{
        console.log(data)
        var temp = 0
        data.data.map((source)=>{
            console.log("Source",source.count)
           temp=temp+source.count
        })
        setCount(temp)
       
       },(err)=>{
        console.log('eror',err)
       })
    },[ refetch])
    
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    const toggleManualAlertForm = ()=>{
     setManualAlert(!manualAlert)
    }
    const handleCloseModal = ()=>{
      setManualAlert(false)
      setRefetch(!refetch)
    }
    const handleChange=()=>{
      setLogs(!myLogs)
    }
    useEffect(()=>{
      axiosApi(get_user_details,"POST",null,(data)=>{ 
        setUser(data.data.user[0].username )
         console.log("------>",data.data.user[0])
     })
    },[])
    return ( 
           < > 
         {manualAlert&& <ManualAlert isOpen={manualAlert} onClose={handleCloseModal }/> }
         <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
         <div style={{display:'flex', flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
         <input
         style={{height:23, width:48}}
          type="checkbox"
          checked={myLogs}
          onChange={handleChange}
        />
        <span>Get my logs</span>
        </div> <Button 
          type="button"
          style={{ boxShadow: "none", display:'flex',alignItems:'center',justifyContent:'flex-end'}} 
          inputStyle={{width:315, borderRadius:8,backgroundColor:'white', color:"black",   borderColor:'blue'}}
          value={"Add an alert"} 
          onClick={toggleManualAlertForm}
            /> 
         </div>
             
            
            <AlertsTable user={user} myLogs={myLogs} offset={currentPage} styles={{height:'78%',backgroundColor:'rgb(243, 243, 243)' }} refetch={refetch} /> 
            <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            />
           </>
    )
}

export default Logs;