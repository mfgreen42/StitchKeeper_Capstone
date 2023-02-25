import { Link } from "react-router-dom";



const DashboardButtons = (props) => {
    return ( 
        <div>
        <ol>
          <li>
            <Link to="/mypatterns">
              <button className="dashboard-buttons">My Patterns</button>
            </Link>
          </li>
          <li>
            <Link to="/addpattern">
              <button className="dashboard-buttons">Add New Pattern</button>
            </Link>
          </li>
          <li>
            <Link to="/addphoto">
              <button className="dashboard-buttons">Add New Photo</button>
            </Link>
          </li>
        </ol>
      </div>
    );
  }
 
export default DashboardButtons;