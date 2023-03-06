import React from "react";
import useAuth from "../../hooks/useAuth";
import DashboardButtons from "../../components/DashboardButtons";
import DisplayGraph from "../../components/DisplayGraph";

import "../HomePage/HomePage.css"
import SmallRoses from "../../pages/Media/nasim-keshmiri-fRsVRJi_Bjg-unsplash.jpg"


const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user] = useAuth();

  // const { patterns } = props;

  return (

    <section className="dash-grid">
      <h1 className="content-one">{user.username}'s Dashboard</h1>
      <DashboardButtons  />
      <div className="dash-img">
            <img src={SmallRoses} alt="small roses" className="actual-img" />
        </div>

      <DisplayGraph  />
    </section>
  );
};

export default HomePage;
