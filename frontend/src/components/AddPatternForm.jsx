import { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import React from "react";
import { useRef } from 'react'


const AddPatternForm = (props) => {

    const [fileInputRef] = useRef(null);
    const [patternPdf, setPatternPdf] = useState(null);
    const [patternName, setPatternName] = useState('');
    const [artist, setArtist] = useState('');
    const [date, setDate] = useState('');
    const [isEmbroidery, setIsEmbroidery] = useState('')
    const [isCrossStitch, setIsCrossStitch] = useState('');
    const [user,token]= useAuth();
    const [selectedOption, setSelectedOption] = useState('');



    // const handleOptionChange = (event) => {
    //     setSelectedOption(event.target.value);
    // }

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (value === 'isEmbroidery') {
            setIsEmbroidery(true);
            setIsCrossStitch(false);
        } else {
            setIsEmbroidery(false);
            setIsCrossStitch(true);
        }
    };

    function handleAdd(event) {
        event.preventDefault()
        let newEntry = {
            pattern_pdf: patternPdf,
            pattern_name: patternName,
            artist: artist,
            date_added: date,
            is_embroidery: selectedOption === 'isEmbroidery',
            is_cross_stitch: selectedOption === 'isCrossStitch',
        };
        console.log('new entry', newEntry);
        fetchUserPatterns(newEntry);

    };
    async function fetchUserPatterns(addPattern) {
        const formData = new FormData();
        formData.append('pattern_pdf', patternPdf);
        formData.append('pattern_name', addPattern.pattern_name);
        formData.append('artist', addPattern.artist);
        formData.append('date_added', addPattern.date_added);
        formData.append('is_embroidery', addPattern.is_embroidery);
        formData.append('is_cross_stitch', addPattern.is_cross_stitch);


        const response = await axios.post('http://127.0.0.1:8000/api/patterns/user/', formData, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'multipart/form-data',
            }
        });

        if (response.status === 201) {
            await props.fetchPatterns();
        }
    };

    const handleFileClick = () => {
        fileInputRef.current.click();
    };




    return ( 
    <form onSubmit={(event) => handleAdd(event)} encType='multipart/form-data'>
        <h2>Add New Pattern</h2>
        <label>PDF File</label>
        <input type= 'file' ref={fileInputRef} style={{ display: 'none'}} value='' onChange={(event) => setPatternPdf(event.target.files[0])}/>
        <button onClick={handleFileClick}>Choose File</button>


        <label>Pattern Name</label>
        <input type='text' value={patternName} onChange={(event) => setPatternName(event.target.value)}/>
        <label>Artist</label>
        <input type= 'text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
        <label>Date</label>
        <input type= 'date' value={date} onChange={(event) => setDate(event.target.value)}/>


        <label>Emboridery?</label>
        <input type= 'radio' value='isEmbroidery' checked={selectedOption === 'isEmbroidery'} onChange={handleOptionChange}/>
        <label>PDF File</label>
        <input type= 'radio' value='isCrossStitch' checked={selectedOption === 'isCrossStitch'} onChange={handleOptionChange}/>

        <button type='submit'>Submit Pattern</button>

    </form> );
}
 
export default AddPatternForm;