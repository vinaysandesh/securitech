 
// export default Dashboard;
import React from 'react';
import ChartComponent from '../components/ChartComponent';
import TotalCountComponent from '../components/New/TotalCountComponent';
import AlertsTable from '../components/New/AlertsTable';
import BarChartComponent from '../components/New/BarChartComponent';

const Dashboard = () =>{
  return(
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor:'#F3F3F3'}}>
    {/* Upper Section divided into two equal columns */}
    <div style={{ display: 'flex', flex: '1 1 auto', gap: '20px', padding: '10px' }}>
      <div style={{ flex: 1, backgroundColor: 'white', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
       
        <TotalCountComponent/>
      </div>
      <div style={{ flex: 1, backgroundColor: 'white',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <ChartComponent/>
      </div>
      <div style={{ flex: 1, backgroundColor: 'white',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
         <BarChartComponent/>
      </div>
    </div>

    {/* Lower Section */}
    <div style={{flex:1,margin:10,boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <AlertsTable dash={true}/>
    </div>
  </div>
  )
}

export default Dashboard;