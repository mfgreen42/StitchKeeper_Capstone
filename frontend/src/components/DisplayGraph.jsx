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








// const DisplayGraph = (props) => {

//   const data = [
//     [
//       "Month",
//       "Cross Stitch",
//       "Embroidery",
//       "Average",
//     ],
//     ["Jan", 16, 54, 9],
//     ["Feb", 13, 54, 9],
//     ["Mar", 15, 54, 9],
//     ["Apr", 13, 54, 9],
//     ["May", 13, 54, 9],
//     ["Jun", 13, 54, 9],
//     ["Jul", 13, 54, 9],
//     ["Aug", 13, 54, 9],
//     ["Sep", 13, 54, 9],
//     ["Oct", 13, 54, 9],
//     ["Nov", 13, 54, 9],
//     ["Dec", 13, 54, 9],
//   ];

//   const options = {
//     title: "Completed Patterns by Month",
//     vAxis: { title: "Completed Patterns" },
//     hAxis: { title: "Month" },
//     seriesType: "bars",
//     series: { 5: { type: "line" } },
//   };
  
  


//   return (
//     <Chart
//       chartType="ComboChart"
//       width="100%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//   );
// };

// export default DisplayGraph;




