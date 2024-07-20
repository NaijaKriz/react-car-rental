import React from 'react'
import Black from "../../assets/Img/black-jeep.png"
import Red from "../../assets/Img/Red-jeep.png"

const About = ({theme}) => {
  return (
    <>
    <div className="dark:bg-dark bg-slate-200 dark:text-light duration-500 
    relative sm:place-items-center" >
    <div className="container sm:min-h-[600px] flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
            <div 
            data-aos="slide-right"
            data-aos-duration="1500"
            className="">
            <img 
            src={theme === "dark" ? Red  : Black} alt="" 
            className="relative -z-10 max-h-[300px] sm:scale-105
            drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]
            "
            />
            </div>
            <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <h1 
            data-aos="fade-up"
            data-aos-delay="800"
            className="text-3xl sm:text-4xl font-semibold font-serif">About Us</h1>
            <p
            data-aos="slide-left"
            data-aos-delay="500"
            >Experience a booking process thats as swift as the wind
                our user friendly platform ensures you find the perect vehicle
                for your journey with ust a few clicks. Our diverse fleet boasts 
                a range of vehiclesto suit every adventure.
            </p>
            <button 
            className="button-outline">Get Started</button>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default About