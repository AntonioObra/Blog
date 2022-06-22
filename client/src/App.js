import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, BlogPage } from "./pages";
import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs/:id" element={<BlogPage />} />
    </Routes>
  );
};

export default App;
