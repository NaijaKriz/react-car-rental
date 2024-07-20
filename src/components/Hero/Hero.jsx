import React from 'react'
import Car1 from "../../assets/Img/car1.png"
import Car2 from "../../assets/Img/car2.png"

const Hero = ({theme}) => {
  return (
    <div className="dark:bg-black dark:text-light duration-500 relative" >
    <div className="container min-h-[620px] flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
            <div 
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order-2">
            <img 
            src={theme === "dark" ?Car1  : Car2} alt="" 
            className="relative -z-10 max-h-[600px] sm:scale-125
            drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]
            "
            />
            </div>
            <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p 
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-primary text-2xl font-serif">EmmyCute</p>
            <h1 
            data-aos="fade-up"
            data-aos-delay="800"
            className="text-5xl lg:text-7xl font-semibold font-serif">Car Rental</h1>
            <p
            data-aos="fade-up"
            data-aos-delay="1000"
            >Experience a booking process thats as swift as the wind
                our user friendly platform ensures you find the perect vehicle
                for your journey with ust a few clicks. Our diverse fleet boasts 
                a range of vehiclesto suit every adventure.
            </p>
            <button 
            data-aos="fade-up"
            data-aos-delay="1500"
            className="btn bg-black cursor-pointer dark:bg-primary text-light px-6 py-2 rounded-md hover:bg-primary duration-500">Get Started</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero