import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Review from "./components/Reviews";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Gallery />
      <Review />
      <Booking />
      <Contact />
    </>
  );
}

export default App;
