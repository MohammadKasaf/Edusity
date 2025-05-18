import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import Videoplayer from "./components/Videoplayer/Videoplayer";

function App() {

   const [playState,setPlayState]=useState(false);
   
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonials/>
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Contact/>
        <Footer/>
        <Videoplayer playState={playState} setPlayState={setPlayState}/>
      </div>
    </div>
  );
}

export default App;
