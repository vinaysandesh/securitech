import React, { useEffect, useState } from 'react';
import axiosApi from '../../utility/axios';
import { get_grouped_logs } from '../../const/api';

const TotalCountComponent = () =>{
    const [count,setCount] = useState(0)
    useEffect(()=>{

        axiosApi(get_grouped_logs,"POST",null,(data)=>{ 
            var temp = 0
            data.data.map((source)=>{
                   temp+=source.count
            })
             setCount(temp) 
             
          }) 
    },[])
    return(
        <div style={{flex:1 ,height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <span id="threats_title">Total threats</span>
            <span id="threats_count">{count}</span>
            <span id="threats_view_all">View all</span>
            </div>
    )
}

export default TotalCountComponent;