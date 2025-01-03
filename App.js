import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <div>
      <Header />
      
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path = "/restaurants/:id" element = {<RestaurantMenu />} />
          {/* Fallback route for errors */}
          <Route path="*" element={<Error />} />
        </Routes>
     
    </div>
  );
};

export default App;
