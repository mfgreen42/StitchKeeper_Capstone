import AddPatternForm from "../../components/AddPatternForm";



const AddPatternPage = (props) => {

    const {patterns} = props;



    return ( 
        <div>
            <AddPatternForm patterns = {patterns} />
        </div>
     );
}
 
export default AddPatternPage;