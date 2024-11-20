import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfigRoutes from "./routes";
import "./App.css";
import Login from "../src/pages/authentication/Login/login";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ConfigRoutes" element={<ConfigRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
