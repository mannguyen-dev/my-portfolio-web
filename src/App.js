import React from "react";
import "./App.css";
import Header from "./conponents/header/Header";
import Home from "./conponents/home/Home";
import About from "./conponents/about/About";
import Skills from "./conponents/skills/Skills";
import Services from "./conponents/services/Services";
import Qualification from "./conponents/qualification/Qualification";
import Testimonials from "./conponents/testimonials/Testimonials";
import Contact from "./conponents/contact/Contact";
import Footer from "./conponents/footer/Footer";
import ScrollUp from "./conponents/scrollup/Scrollup";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
