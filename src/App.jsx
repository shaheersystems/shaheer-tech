import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Wrap from "./components/Wrap";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import GoToTop from "./components/GoToTop";
import Education from "./components/Education";
function App() {
  return (
    <div className='App'>
      <a id='top'></a>
      <Wrap>
        <HeroSection />
        <Nav />
        <Projects />
        <GoToTop />
        <Education />
        <GoToTop />
      </Wrap>
    </div>
  );
}

export default App;
