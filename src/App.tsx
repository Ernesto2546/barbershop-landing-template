import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;