import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages";
import SingleShoe from "./pages/SingleShoe";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="shoes">
          <Route path="/" element={<MainPage />} />
          <Route path=":slug" element={<SingleShoe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
