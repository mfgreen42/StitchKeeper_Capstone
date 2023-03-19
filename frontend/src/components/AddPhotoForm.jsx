import { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom"

import "../../src/pages/AddPhotoPage/AddPhoto.css"
import mountains from "../../src/pages/Media/Mountains.jpg"

const AddPhotoForm = (props) => {
  const [patternId, setPatternId] = useState("");
  const [completed, setCompleted] = useState(false);
  const [dateFinished, setDateFinished] = useState("");
  const [photo, setPhoto] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [user, token] = useAuth();
  const navigate = useNavigate();

//   this function will check if a pattern already has a photo attatched to it to make sure that only one photo is uploaded per pattern
// this isn't currently working, It will be done in a future iteration of this project
  const addPhotoToPattern = async () => {
    // const response = await axios.get(`http://127.0.0.1:8000/api/patterns/`, {
    //   headers: {
    //     Authorization: "Bearer " + token,
    //   },
    // });
    // debugger
    // // const photos = response.photos;

    // console.log('response:', response.data)
    // if (response.data.id === patternId) {

    //   alert("A photo already exists for this pattern. Please upload only one photo per pattern.");
    //   return;
    // }

    const formData = new FormData();
    formData.append("pattern", patternId);
    formData.append("completed", completed);
    formData.append("date_finished", dateFinished);
    formData.append("photo_img", photo);
    formData.append("is_favorite", favorite);
    try {
      let response = await axios.post(`http://127.0.0.1:8000/api/patterns/photos/${patternId}/`,formData,{
      headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
        },
    });
    console.log("set response photo", response.data)
    navigate("/mypatterns");
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
    <>
    <div>
      <h2>Add A New Photo</h2>
      <p className="p-photo">Once you've completed a project you can upload a photo here:</p>
    </div>
    <form className="addPhoto-form" onSubmit={handleSubmit}>
      <div className="mountains-container">
        <img src= {mountains} alt="mountains"/>
      </div>
      <ol className="photo-list">
        <li className="form-size">
          <label className="addphoto-label">Pattern Id</label>
          <input  className = "addphoto-input" type="number" name="pattern"  onChange={(event) => setPatternId(event.target.value)} />
        </li>
        <li className="form-size">
          <label className="checkbox-label-photo">Completed? </label>
          <input className="checkbox-input-photo" type="checkbox" name="completed" onChange={(event) => setCompleted(event.target.value)} />
        </li>
        <li className="form-size">
          <label className="addphoto-label">Date pattern was finished</label>
          <input className = "addphoto-input"  type="date" name="dateFinished" onChange={handleDateChange} />
        </li>
        <li className="form-size">
          <label className="addphoto-label">Photo:</label>
          <input className = "addphoto-input"  type="file" name="photoImg" onChange={(event) => setPhoto(event.target.files[0])} />
        </li>
        <li className="form-size">
          <label className="checkbox-label-photo">Favorite? </label>
          <input className="checkbox-input-photo" type="checkbox" name="favorite" onChange={(event) => setFavorite(event.target.value)} />
        </li>
        <li>
            <button type="submit">Submit Photo</button>
        </li>
      </ol>
    </form>
    </>
  );
};

export default AddPhotoForm;