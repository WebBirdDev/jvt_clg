import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
