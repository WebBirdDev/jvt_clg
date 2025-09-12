import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Happenings from "./pages/Happenings";
import News from "./pages/News";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/happenings" element={<Happenings />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
