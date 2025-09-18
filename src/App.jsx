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
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import "./App.css";
import PastEvents from "./pages/PastEvents";
import Sitemap from "./pages/Sitemap";
import TermsConditions from "./pages/TermsConditions";
import Privacy from "./pages/Privacy";
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
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/past_events" element={<PastEvents />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
