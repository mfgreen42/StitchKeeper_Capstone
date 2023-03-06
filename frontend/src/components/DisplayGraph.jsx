import React from "react";
import useAuth from "../hooks/useAuth"
import CalendarHeatmap from "react-calendar-heatmap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import "../../src/pages/HomePage/HomePage.css"




const DisplayGraph = (props) => {

  const [user,token] = useAuth();
  const [photos, setPhotos] = useState([])


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

  const dateFinished = photos.map((photo) => {
    return photo.date_finished;
  })
  // console.log('dateFinished',dateFinished);

  return ( 
    <div className="calendar-heatmap">
      <h2>Projects completed this year</h2>
      <CalendarHeatmap
  startDate={new Date('2023-01-01')}
  endDate={new Date('2023-12-31')}
  values= {dateFinished.map((date) => ({
    date: date,
    count: 1,
  }))}

  
  classForValue={(value) => {
    if (!value) {
      return 'color-empty';
    }
    return `color-scale-${value.count}`;
  }}
  showWeekdayLabels = {true}
  onClick={value => alert(`Clicked on value with count: ${value.count}`)}
/>      

    </div>
   );
  }



export default DisplayGraph;