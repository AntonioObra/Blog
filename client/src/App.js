import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, BlogPage, ArchivesPage, AboutPage } from "./pages";
import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs/:id" element={<BlogPage />} />
      <Route path="/archives" element={<ArchivesPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
