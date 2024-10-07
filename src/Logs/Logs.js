import React, { useEffect, useState } from 'react';
import AlertsTable from '../components/New/AlertsTable';
import axiosApi from '../utility/axios';
import { get_grouped_logs } from '../const/api';
import Pagination from '../components/New/Pagination';

const Logs = () =>{
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.round(count/10);
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
    },[ ])
    
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    return ( 
           < > 
            <AlertsTable offset={currentPage} styles={{height:'80%',backgroundColor:'rgb(243, 243, 243)'}} /> 
            <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            />
           </>
    )
}

export default Logs;