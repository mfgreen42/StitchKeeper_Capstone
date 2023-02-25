


const AddPhotoForm = (props) => {



    return ( 
       <form>
        <h2>Add A New Photo</h2>
        <ol>
            <li>
                <label>Pattern Id</label>
                <input type='text' name='patternId' />
            </li>
            <li>
                <label>Completed?  </label>
                <input type='checkbox' name='completed' />
            </li>
            <li>
                <label>Date pattern was finished</label>
                <input type="text" name="dateFinished" />
            </li>
            <li>
                <label>Photo:</label>
                <input type="file" name="photoImg" />
            </li>
            <li>
                <label>Favorite?  </label>
                <input type='checkbox' name="favorite" />
            </li>
        </ol>
       </form>
     );
}
 
export default AddPhotoForm;