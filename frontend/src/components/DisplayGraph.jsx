import { Chart } from "react-google-charts";
import React from "react";


const DisplayGraph = (props) => {


  const data = [
    [
      {
        type: "date",
        id: "Date",
      },
      {
        type: "number",
        id: "finished",
      },
    ],
    [new Date(2023, 3, 13), 37032],
    [new Date(2023, 3, 14), 38024],
    [new Date(2023, 3, 15), 38024],
    [new Date(2023, 3, 16), 38108],
    
  ];
  
  const options = {
    title: "Completed Projects",
    width:'100%',
    calendar: { cellSize: 15 },
    noDataPattern: {
      backgroundColor: '#76a7fa',
      color: '#a0c3ff'
    },
    calendar: {
      focusedCellColor: {
        stroke: '#d3362d',
        strokeOpacity: 1,
        strokeWidth: 1,
      },
      unusedMonthOutlineColor: {
        stroke: 'grey',
        strokeOpacity: 0.8,
        strokeWidth: 2
      }
    }
  };
  


  return ( 
    <Chart className="chart-container"
      chartType="Calendar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
   );
}
 
export default DisplayGraph;









