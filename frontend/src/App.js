// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MyPatterns from "./pages/MyPatternsPage/MyPatternsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AddFilesPage from "./pages/AddFilesPage/AddFilesPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
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
        <Route path='/mypatterns' element={<PrivateRoute><MyPatterns /></PrivateRoute>} />
        <Route path='dahboard' element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path='addfiles' element={<PrivateRoute><AddFilesPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
