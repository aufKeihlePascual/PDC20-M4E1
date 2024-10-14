import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogAdmin from './Dashboard/LogAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogAdmin />} />
      </Routes>
    </Router>

  );
}

export default App;
