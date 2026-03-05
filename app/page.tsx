import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Boutique from "./components/Boutique";
import Moments from "./components/Moments";
import Marques from "./components/Marques";
import Feedback from "./components/Feedback";
import Conseil from "./Conseil";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Boutique />
        <Moments />
        <Marques />
        <Feedback />
        <Conseil />
        <Footer />
      </div>
    </>
  );
}