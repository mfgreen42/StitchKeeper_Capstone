import AddPatternForm from "../../components/AddPatternForm";
import AddPattern from "../../components/AddPattern"


const AddPatternPage = (props) => {

    const {patterns} = props;



    return ( 
        <div>
            <AddPatternForm  />
            <AddPattern />
        </div>
     );
}
 
export default AddPatternPage;