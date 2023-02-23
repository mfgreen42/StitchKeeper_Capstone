// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MyPatternsPage from "./pages/MyPatternsPage/MyPatternsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AddFilesPage from "./pages/AddFilesPage/AddFilesPage" 


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "./hooks/useAuth";

function App() {

  const [user,token] = useAuth();
  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    const fetchUserPatterns= async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/patterns/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPatterns(response.data);
      } catch (error) {
        console.log(error.response.data)
      }
    };
    fetchUserPatterns();
  }, [token]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route  //Once I have the Dashboard page set up I want it to be the landing page, not HomePage
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/mypatterns' element={<PrivateRoute><MyPatternsPage /></PrivateRoute>} />
        <Route path='/dashboard' element={<PrivateRoute><DashboardPage patterns = {patterns} /></PrivateRoute>} />
        <Route path='/addfiles' element={<PrivateRoute><AddFilesPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
