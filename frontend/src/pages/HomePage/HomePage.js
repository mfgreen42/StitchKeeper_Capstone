import React from "react";
import useAuth from "../../hooks/useAuth";
import DashboardButtons from "../../components/DashboardButtons";
import DisplayGraph from "../../components/DisplayGraph";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();

  const { patterns } = props;

  return (
    <div className="container">
      <h1>{user.username}'s Dashboard</h1>
      <DashboardButtons />
      <DisplayGraph />
    </div>
  );
};

export default HomePage;
