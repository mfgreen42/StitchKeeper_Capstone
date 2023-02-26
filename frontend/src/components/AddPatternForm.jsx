import useAuth  from "../hooks/useAuth"
import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

const AddPatternForm = (props) => {


    const [pdf, setPdf] = useState("");
    const [patternName, setPatternName] = useState("");
    const [artist, setArtist] = useState("");
    const [date, setDate] = useState("");
    const [embroidery, setEmbroidery] = useState(false);
    const [crossStitch, setCrossStitch] = useState(false);
    const [user, token] = useAuth()



        function handleDateChange(event) {
          const selectedDate = new Date(event.target.value);
          const formattedDate = selectedDate.toISOString().slice(0,10);
          setDate(formattedDate);
        }


    const addUserPattern = async () => {
      const formData = new FormData();
          formData.append("pattern_pdf", pdf);
          formData.append("pattern_name", patternName);
          formData.append("artist", artist);
          formData.append("date_added", date);
          formData.append("is_embroidery", embroidery);
          formData.append("is_cross_stitch", crossStitch);
        try {
          let response = await axios.post('http://127.0.0.1:8000/api/patterns/user/', formData, {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          });
          console.log("set response", response.data)
          setPdf("");
          setPatternName("");
          setArtist("");
          setDate("");
          setEmbroidery(false);
          setCrossStitch(false);
        } catch (error) {
        }
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        addUserPattern();
      };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Add A New Pattern</h2>
      <ol>
        <li>
          <label>PDF File</label>
          <input type="file" name="pdf" onChange={(event) => setPdf(event.target.files[0])}/>
        </li>

        <li>
          <label>Pattern Name</label>
          <input type="text"  name="patternName" onChange={(event) => setPatternName(event.target.value)}/>
        </li>
        <label>Artist</label>
        <input type="text" name="artist" onChange={(event) => setArtist(event.target.value)} />
        <li>
          <label>Date</label>
          <input type="date" name="date" onChange={handleDateChange} />
        </li>

        <li>
          <label>Embroidery?</label>
          <input type="checkbox"    name="false" onChange={(event) => setEmbroidery(event.target.value)}/>
          <label> or Cross Stitch?</label>
          <input type="checkbox"  name="false" onChange={(event) => setCrossStitch(event.target.value)}/>
        </li>
        <Link to='/mypatterns'>
        <button type="submit">Submit Pattern</button>
        </Link>
      </ol>
    </form>
  );
};

export default AddPatternForm;

