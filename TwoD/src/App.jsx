
import Fabric from "./pages/Fabric";
import MainPage from "./pages/MainPage"; 
import Layout from "./component/Layout";
import ThreeD from "../../ThreeD/frontend/src/App"; 

import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
          <Router>
            <Routes>
            
                      <Route path="/" element={<MainPage />} />
                      <Route path="/two-d" element={<Fabric />} />
                       <Route path="/three-d" element={<ThreeD />} />


            </Routes>

            <ToastContainer position="top-right" autoClose={3000} />
          </Router>

  );
}

export default App;



