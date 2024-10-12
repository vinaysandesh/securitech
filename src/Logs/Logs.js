import React, { useEffect, useState } from 'react';
import AlertsTable from '../components/New/AlertsTable';
import axiosApi from '../utility/axios';
import { get_grouped_logs } from '../const/api';
import Pagination from '../components/New/Pagination';
import Button from '../components/New/Button';
import ManualAlert from '../components/New/ManualAlert';
const Logs = () =>{
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.round(count/10);
    const [manualAlert, setManualAlert ] = useState(false)
    const [refetch, setRefetch ] = useState(false)
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
    return ( 
           < > 
         {manualAlert&& <ManualAlert isOpen={manualAlert} onClose={handleCloseModal }/> }
            <Button 
          type="button"
          style={{ boxShadow: "none", display:'flex',alignItems:'center',justifyContent:'flex-end'}} 
          inputStyle={{width:315, borderRadius:8,backgroundColor:'white', color:"black",   borderColor:'blue'}}
          value={"Add an alert"} 
          onClick={toggleManualAlertForm}
            /> 
            
            <AlertsTable offset={currentPage} styles={{height:'78%',backgroundColor:'rgb(243, 243, 243)' }} refetch={refetch} /> 
            <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            />
           </>
    )
}

export default Logs;