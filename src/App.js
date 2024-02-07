import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ExploreQuickStayCoLiving from "./pages/home/explore/ExploreQuickStayCoLiving";
import Header from "./components/navbar/Header";
import BelowHeader from "./components/navbar/BelowHeader";

function App() {
  return (
    <>
      <Header />
      <BelowHeader />
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
