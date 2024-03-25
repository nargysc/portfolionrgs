import "./App.scss";
import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import FindMe from "./Components/FindMe";
import NavBar from "./Components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/findme" element={<FindMe />} />
      </Routes>
    </>
  );
}

export default App;
