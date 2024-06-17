import React from "react";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/about" element={<Home/>}/>
        <Route path="/contact" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </div> 
    </>
  );
};

export default App;
