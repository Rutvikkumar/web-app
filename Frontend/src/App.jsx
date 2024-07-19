import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./componets/login";
import Signup from "./componets/Signup";
import Home from "./componets/Home";
import AddData from "./componets/AddData";
import ShowData from "./componets/Showdata";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/add" element={<AddData />} />
          <Route path="/show" element={<ShowData />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
