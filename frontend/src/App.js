import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Import Pages
import KFCHeader from "./Components/header";
import KFCFooter from "./Components/footer";
import Home from "./Pages/Home";

function AppContent() {
  return (
    <div className="App">
        <main className="flex-grow">
        <header>
          <KFCHeader />
        </header>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          <footer>
            <KFCFooter/>
          </footer>
        </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
