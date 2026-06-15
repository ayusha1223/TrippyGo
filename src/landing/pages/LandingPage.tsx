import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
import Destinations from "../components/Destinations";
import Hero from "../components/Hero.jsx";
import Adventures from "../components/Adventures.jsx";
import Footer from "../components/Footer.jsx";


function LandingPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Stats />
      <Destinations />
      <Adventures />
      < Footer />
    </>
  );
}

export default LandingPage;