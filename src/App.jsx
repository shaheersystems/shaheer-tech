import "./App.css";
import Wrap from "./components/Wrap";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import GoToTop from "./components/GoToTop";
import Education from "./components/Education";
import Stacks from "./components/Stacks";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import MobileNav from "./components/MobileNav";
import DevCards from "./components/DevCards";
function App() {
  return (
    <div className="App">
      <a id="top"></a>
      <Wrap>
        <HeroSection />
        <Nav />
        <br className="block sm:hidden" />
        <Projects />
        <GoToTop />
        <Education />
        <GoToTop />
        <Stacks />
        <GoToTop />
        <Socials />
        <GoToTop />
        <DevCards />
        <GoToTop />
        <Footer />
        <MobileNav />
      </Wrap>
    </div>
  );
}

export default App;
