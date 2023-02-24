// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MyPatternsPage from "./pages/MyPatternsPage/MyPatternsPage";
import AddFilesPage from "./pages/AddFilesPage/AddFilesPage" 
import AddPhotoPage from "./pages/AddPhotoPage/AddPhotoPage"


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "./hooks/useAuth";
import PatternTable from "./components/PatternTable";


function App() {

  const [user,token] = useAuth();
  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    
    console.log('fetchUserPatterns ran')
    const fetchUserPatterns= async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/patterns/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log("patterns data",response.data)
        setPatterns(response.data);
      } catch (error) {
        console.log(error.response.data)
      }
    };
    fetchUserPatterns();
  }, [token]);
  console.log("patterns to use as props", patterns)
  return (
    <div>
      <Navbar />

      <Routes>
        <Route  
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/mypatterns' element={<PrivateRoute><MyPatternsPage patterns = {patterns} /></PrivateRoute>} />
        <Route path='/addfiles' element={<PrivateRoute><AddFilesPage /></PrivateRoute>} />
        <Route path='/addphoto' element={<PrivateRoute><AddPhotoPage /></PrivateRoute>} />
      </Routes>
          {/* <DashboardButtons /> */}
          {/* <PatternTable patterns = {patterns} /> */}

          {/* <DisplayGraph /> */}

      <Footer />
    </div>
  );
};

export default App;
