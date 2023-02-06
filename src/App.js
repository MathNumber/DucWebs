import React from "react";
import "./app.scss";
import Introduction from "./components/introduction/Introduction";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Menu from "./components/menu/Menu";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

AOS.init();

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Banner />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
