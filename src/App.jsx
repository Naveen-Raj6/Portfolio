import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
// import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}