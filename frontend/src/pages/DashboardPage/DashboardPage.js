import DashboardButtons from "../../components/DashboardButtons";
import DisplayGraph from "../../components/DisplayGraph";
import PatternTable from "../../components/PatternTable";


const DashboardPage = (props) => {


    return ( 
    <div>
        <DashboardButtons />
        <DisplayGraph />
        <PatternTable  />
        {/* <GraphInfo  /> */}
    </div> );
}
 
export default DashboardPage;