import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Faq from "./components/Faq";
import Sponsors from "./components/Sponsors";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
