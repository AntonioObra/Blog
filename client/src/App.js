import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, BlogPage, ArchivesPage, AboutPage, NewHerePage } from "./pages";
import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs/:id" element={<BlogPage />} />
      <Route path="/archives" element={<ArchivesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/new%20here" element={<NewHerePage />} />
    </Routes>
  );
};

export default App;
