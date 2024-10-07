import React, { useEffect, useState } from 'react';
import axiosApi from '../utility/axios';
import { get_grouped_logs } from '../const/api';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from 'react-chartjs-2';
import { PieChart } from 'react-minimal-pie-chart';
const ChartComponent = ()=>{
    // const data = [{tool:"nmap",count:560},
    //     {tool:"snort",count:220},
    //     {tool:"plugin",count:30}
    // ]
    const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(undefined);
    const [data, setGroupLogs] = useState([]) 
    const colors = ["#160056",'#6B2A9E','#6A2135']
    const lineWidth = 60;
    useEffect(()=>{

        axiosApi(get_grouped_logs,"POST",null,(data)=>{ 
            // setGroupLogs(data.data) 
            var temp =[]
            data.data.map((source,index)=>{
              var obj = { title: source.tool, label:"Value", value: source.count,color:colors[index]  }
              temp.push(obj)
            })
            temp.push({ title: "snort", label:"Value", value: 45,color:colors[2]  })
            setGroupLogs(temp) 
          }) 
    },[])
    return <div  >
        {data.length>0? 
<PieChart 
style={{
 fontFamily:
   '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
 fontSize: '8px',
}}
data={data}
radius={30}
lineWidth={55}
segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
segmentsShift={(index) => (index === selected ? 6 : 1)}
animate
label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
labelPosition={100 - lineWidth / 2}
labelStyle={{
 fill: '#fff',
 opacity: 0.75,
 pointerEvents: 'none',
}}
onClick={(_, index) => {
 setSelected(index === selected ? undefined : index);
}}
onMouseOver={(_, index) => {
 setHovered(index);
}}
onMouseOut={() => {
 setHovered(undefined);
}}
/>
 :"Loading"}  
        
    </div>
}

export default ChartComponent