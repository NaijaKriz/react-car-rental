import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import AOS from "aos"
import "aos/dist/aos.css"
import About from './components/About/About';
import Services from './components/Services/Services';
import Carlist from './components/CarList/Carlist';
import Testimonial from './components/Testimonial/Testimonial';
import AppstoreBanner from './components/AppstoreBanner/AppstoreBanner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  const [theme, setTheme] = React.useState(
  localStorage.getItem("theme") ? 
  localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() =>{
    if(theme === "dark"){
      element.classList.add("dark")
      localStorage.setItem("theme", "dark");
    }else{
      element.classList.remove("dark")
      localStorage.setItem("theme", "light");
    }
  }, [theme])
  //Aos Initialization
  React.useEffect(() =>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh()
  }, [])


  return (
    <div className="bg-white dark:bg-black dark:text-white pb-14">
      <Navbar 
      theme={theme} 
      setTheme={setTheme}/>
      <Hero 
      theme={theme}
      />
      <About 
      theme={theme}
      />
      <Services />
      <Carlist theme={theme} />
      <Testimonial />
      <AppstoreBanner theme={theme} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App