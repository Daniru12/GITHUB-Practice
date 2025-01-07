import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <main className="flex-grow">
          <Routes>
            <Route path="/Home" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
