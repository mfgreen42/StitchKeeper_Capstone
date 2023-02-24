import PatternTable from "../../components/PatternTable";
import { Link } from "react-router-dom"

const MyPatternsPage = (props) => {

    const { patterns } = props;

    return ( 
        <div>
            <PatternTable patterns = {patterns} />
        <div>
            <Link to ="/">
                <button className="dashboard-buttons">Dashboard</button>
            </Link>
        </div>
        </div>
     );
}
 
export default MyPatternsPage;