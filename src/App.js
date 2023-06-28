import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Content from './Content/Content';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </Router>
  );
};

export default App;
