import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ExploreQuickStayCoLiving from "./pages/home/explore/ExploreQuickStayCoLiving";


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/ExploreQuickStayCoLiving"
          element={<ExploreQuickStayCoLiving />}
        />
      </Routes>
    </>
  );
}

export default App;
