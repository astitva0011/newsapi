import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FetchData from "./components/FetchData";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Router>
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route exact path="/" element={<Home searchQuery={searchQuery} />} />
          <Route exact path="/general" element={<FetchData cat="general" searchQuery={searchQuery} />} />
          <Route exact path="/Business" element={<FetchData cat="Business" searchQuery={searchQuery} />} />
          <Route exact path="/Entertainment" element={<FetchData cat="Entertainment" searchQuery={searchQuery} />} />
          <Route exact path="/Technology" element={<FetchData cat="Technology" searchQuery={searchQuery} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
