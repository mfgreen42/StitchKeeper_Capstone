import { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const AddPhotoForm = (props) => {
  const [patternId, setPatternId] = useState("");
  const [completed, setCompleted] = useState(false);
  const [dateFinished, setDateFinished] = useState("");
  const [photo, setPhoto] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [user, token] = useAuth();

  const addPhotoToPattern = async () => {
    const formData = new FormData();
    formData.append("pattern", patternId);
    formData.append("completed", completed);
    formData.append("date_finished", dateFinished);
    formData.append("photo_img", photo);
    formData.append("is_favorite", favorite);
    try {
        debugger
        console.log("patternId",patternId)  
      let response = await axios.post(`http://127.0.0.1:8000/api/patterns/photos/${patternId}/`,formData,{
      headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
        },
    });
    console.log("set response photo", response.data)
    setPatternId("");
    setCompleted(false);
    setDateFinished("");
    setPhoto("");
    setFavorite(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  function handleDateChange(event) {
    const selectedDate = new Date(event.target.value);
    const formattedDate = selectedDate.toISOString().slice(0, 10);
    setDateFinished(formattedDate);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addPhotoToPattern();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add A New Photo</h2>
      <ol>
        <li>
          <label>Pattern Id</label>
          <input type="number" name="pattern"  onChange={(event) => setPatternId(event.target.value)} />
        </li>
        <li>
          <label>Completed? </label>
          <input type="checkbox" name="completed" onChange={(event) => setCompleted(event.target.value)} />
        </li>
        <li>
          <label>Date pattern was finished</label>
          <input type="date" name="dateFinished" onChange={handleDateChange} />
        </li>
        <li>
          <label>Photo:</label>
          <input type="file" name="photoImg" onChange={(event) => setPhoto(event.target.files[0])} />
        </li>
        <li>
          <label>Favorite? </label>
          <input type="checkbox" name="favorite" onChange={(event) => setFavorite(event.target.value)} />
        </li>
        <li>
            <button type="submit">Submit Photo</button>
        </li>
      </ol>
    </form>
  );
};

export default AddPhotoForm;
