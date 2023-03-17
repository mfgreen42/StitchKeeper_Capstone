import React from "react";
import useAuth from "../hooks/useAuth"
import CalendarHeatmap from "react-calendar-heatmap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import "../../src/pages/HomePage/HomePage.css"
import { Chart } from "react-google-charts";

const DisplayGraph = (props) => {

  const [user,token] = useAuth();
  const [photos, setPhotos] = useState([])

  const getMonthName = (monthNumber) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthNumber - 1];
  };
  
  const getCompletedProjectsByMonth = (photos) => {
    const completedProjectsByMonth = new Array(12).fill(0);
  
    photos.forEach((photo) => {
      const dateFinished = new Date(photo.date_finished);
      const month = dateFinished.getMonth();
      completedProjectsByMonth[month]++;
    });
  
    return completedProjectsByMonth;
  };


  useEffect(() => {
    console.log('display graph ran')
    const fetchUserPhotos=async () => {
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/patterns/photos/1/', {
          headers: {
            Authorization: "Bearer " +token,

          },
        });
        console.log('photo array:', response.data)
        setPhotos(response.data);
      } catch (error) {
        console.log(error.response)
      }
    };
    fetchUserPhotos();
  }, [token]);

  // const dateFinished = photos.map((photo) => {
  //   return photo.date_finished;
  // })

  const completedProjectsByMonth = getCompletedProjectsByMonth(photos);
  const colors = ["#b87333", "silver", "gold", "color: #e5e4e2", "#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00"];

  const data = [["Month", "Completed Projects", { role: "style" }]];

  completedProjectsByMonth.forEach((completedProjects, monthIndex) => {
    const monthName = getMonthName(monthIndex + 1);
    const color = colors[monthIndex % colors.length];
    data.push([monthName, completedProjects,`color: ${color}`]);
  });

  // This make the numbers whole numbers and bar width
  const options ={
    vAxis: { format: "0"},
    bar: { groupWidth: "70%"},
    gap: 50,
    overlap: 25,
  };

  return ( 
    <>
    <div className="bar-chart">
    <Chart 
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        options = {options}
        legendToggle
      />
    {/* <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={[["Month", "Completed Projects"], [4, 5.5], [8, 12]]}
      legendToggle
    /> */}
    </div>
    </>
   );
}
 
export default DisplayGraph;





// const DisplayGraph = (props) => {

//   const [user,token] = useAuth();
//   const [photos, setPhotos] = useState([])


//   useEffect(() => {
//     console.log('display graph ran')
//     const fetchUserPhotos=async () => {
//       try {
//         let response = await axios.get('http://127.0.0.1:8000/api/patterns/photos/1/', {
//           headers: {
//             Authorization: "Bearer " +token,

//           },
//         });
//         console.log('photo array:', response.data)
//         setPhotos(response.data);
//       } catch (error) {
//         console.log(error.response)
//       }
//     };
//     fetchUserPhotos();
//   }, [token]);

//   const dateFinished = photos.map((photo) => {
//     return photo.date_finished;
//   })
//   // console.log('dateFinished',dateFinished);

//   return ( 
//     <div className="calendar-heatmap">
//       <div className="graph-h2">
//       <h2 >Projects completed this year:</h2>
//       </div>
//       <CalendarHeatmap
//   startDate={new Date('2023-01-01')}
//   endDate={new Date('2023-12-31')}
//   values= {dateFinished.map((date) => ({
//     date: date,
//     count: 1,
//   }))}

  
//   classForValue={(value) => {
//     if (!value) {
//       return 'color-empty';
//     }
//     return `color-scale-${value.count}`;
//   }}
//   showWeekdayLabels = {true}
//   showMonthLabels = {true}
//    showOutOfRangeDays = {true}
//    gutterSize = {1}
//   onClick={value => alert(`Clicked on value with count: ${value.count}`)}
// />      

//     </div>
//    );
//   }



// export default DisplayGraph;