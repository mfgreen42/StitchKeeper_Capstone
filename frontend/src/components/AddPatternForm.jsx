import useAuth  from "../hooks/useAuth"
import { useState } from "react";
import React from "react";
import axios from "axios";

const AddPatternForm = (props) => {


    const [patterns, setPatterns] =useState([]);
    const [pdf, setPdf] = useState("");
    const [patternName, setPatternName] = useState("");
    const [artist, setArtist] = useState("");
    const [date, setDate] = useState("");
    const [embroidery, setEmbroidery] = useState(false);
    const [crossStitch, setCrossStitch] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [user, token] = useAuth()


    function handleAdd(event) {
        event.preventDefault();
        let newEntry = {
            pattern_pdf: pdf,
            pattern_name: patternName,
            artist: artist,
            date_added: date,
            is_embroidery: embroidery,
            is_cross_stitch: crossStitch,
            user: user.id,
        };
        debugger
        console.log('new entry', newEntry);
        addUserPattern(newEntry);
    };


    const addUserPattern = async (newEntry) => {
        try {
          let response = await axios.post('http://127.0.0.1:8000/api/patterns/user/', newEntry, {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          console.log("pattern data from AddPattern Form", response.data)
          setPatterns(response.data);
        } catch (error) {
          console.log(error.response)
        }
      };


  return (
    <form onSubmit={(event) => handleAdd(event)}>
      <h2>Add A New Pattern</h2>
      <ol>
        <li>
          <label>PDF File</label>
          <input type="file" name="pdf" onChange={(event) => setPdf(event.target.value)}/>
        </li>

        <li>
          <label>Pattern Name</label>
          <input type="text"  name="patternName" onChange={(event) => setPatternName(event.target.value)}/>
        </li>
        <label>Artist</label>
        <input type="text" name="artist" onChange={(event) => setArtist(event.target.value)} />
        <li>
          <label>Date</label>
          <input type="date" name="date" onChange={(event) => setDate(event.target.value)} />
        </li>

        <li>
          <label>Emboridery?</label>
          <input type="radio"  name="embroidery" value="true" onChange={(event) => setEmbroidery(event.target.value)}/>
          <label> or Cross Stitch?</label>
          <input type="radio" name="crossStitch" value="true" onChange={(event) => setCrossStitch(event.target.value)}/>
        </li>

        <button type="submit">Submit Pattern</button>
      </ol>
    </form>
  );
};

export default AddPatternForm;

