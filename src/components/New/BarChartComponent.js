import React, { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import { get_grouped_logs } from '../../const/api';
import axiosApi from '../../utility/axios';
const BarChartComponent = ()=>{
     
      const [data,setData] = useState([])
      useEffect(()=>{
      
        axiosApi(get_grouped_logs,"POST",null,(data)=>{ 
            // setGroupLogs(data.data) 
            var temp =[]
            
            temp.push(data.data[0])
            // temp.push({tool:"snort",count:300})
            // temp.push({tool:"plugin",count:24})
            console.log(data.data)
            setData(temp) 
          }) 
    },[])
    return(
       <div style={{ height:'100%',display:'flex',justifyContent:'center', alignItems:'center'}}>
         <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="tool" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" /> 
    </BarChart>
       </div>
    )
}


export default BarChartComponent