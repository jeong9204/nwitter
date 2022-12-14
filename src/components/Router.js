import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

export default function Router({ isLoggedIn }) {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route exact path="/" element={<Home />} />
        ) : (
          <Route exact path="/" element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
