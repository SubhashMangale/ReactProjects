import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Skills />
      <Contact/>
    </div>
  );
}
export default App;