import React, { useEffect, useState } from 'react';
import axiosApi from '../utility/axios';
import { get_grouped_logs } from '../const/api';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from 'react-chartjs-2';
const ChartComponent = ()=>{
    const data = [{tool:"nmap",count:560},
        {tool:"snort",count:220},
        {tool:"plugin",count:30}
    ]
    const [chartData, setChartData] = useState({
        labels: data.map((data) => data.tool), 
        datasets: [
          {
            label: "ALerts from various tools",
            data: data.map((data) => data.count),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
    const [grouped_logs, setGroupLogs] = useState([])
    useEffect(()=>{
        axiosApi(get_grouped_logs,"POST",null,(data)=>{
            console.log("==========Grouped Logs",data.data )
            setGroupLogs(data.data) 
          }) 
    },[])
    return <div style={{height:250, width:250, alignItems:"center"}}>
        {grouped_logs.length>0?grouped_logs[0].tool:"Loading"}
        <Pie
        width={60}  // Width in pixels
        height={60} // Height in pixels
        data={chartData}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
}

export default ChartComponent