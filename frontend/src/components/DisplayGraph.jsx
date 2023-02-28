import React from "react";
import useAuth from "../hooks/useAuth"
import CalendarHeatmap from "react-calendar-heatmap";


const today = new Date();


const DisplayGraph = (props) => {




  return ( 
    <div>
      <h1>Projects completed this year</h1>
      <break></break>
      <CalendarHeatmap
  startDate={new Date('2023-01-01')}
  endDate={new Date('2023-12-31')}
  values={[
    { date: '2016-01-01', count: 12 },
    { date: '2016-01-22', count: 122 },
    { date: '2016-01-30', count: 38 },
    // ...and so on
  ]}
/>      
{/* <ReactTooltip /> */}

    </div>
   );
}


export default DisplayGraph;