import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import KFCHeader from "./Components/header";
import KFCFooter from "./Components/footer";
import Home from "./Pages/Home";
import Signup from "./Pages/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <KFCHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <KFCFooter />
      </Router>
    </div>
  );
}

export default App;
