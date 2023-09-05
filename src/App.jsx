import "./App.css";
import Wrap from "./components/Wrap";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import GoToTop from "./components/GoToTop";
import Education from "./components/Education";
import Stacks from "./components/Stacks";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <a id="top"></a>
      <Wrap>
        <HeroSection />
        <Nav />
        <Projects />
        <GoToTop />
        <Education />
        <GoToTop />
        <Stacks />
        <GoToTop />
        <Footer />
      </Wrap>
    </div>
  );
}

export default App;
