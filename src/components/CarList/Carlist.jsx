import React from 'react'
import car3 from "../../assets/Img/car6.png"
import car7 from "../../assets/Img/car7.png"
import car8 from "../../assets/Img/car8.png"
import car1 from "../../assets/Img/1.png"
import car2 from "../../assets/Img/2.png"
import car4 from "../../assets/Img/3.png"

const CarListData =[
    {
        name: "BMW UX",
        name2: "Lexus 330",
        Price: 2000,
        Price2: 2500,
        image: car3,
        image2: car1,
        aosDelay: "0"
    },
    {
        name: "KIA UX",
        name2: "Lexus 430",
        Price: 1500,
        Price2: 3500,
        image: car7,
        image2: car2,
        aosDelay: "500"
    },
    {
        name: "KIA UX-2",
        name2: "Lexus 530",
        Price: 2500,
        Price2: 4500,
        image: car8,
        image2: car4,
        aosDelay: "1000"
    },
]

const Carlist = ({theme}) => {
  return (
    <div className="pb-24 pt-14 bg-slate-200 dark:bg-dark dark:text-white">
        <div className="container 
        text-center">
            {/*Heading */}
            <h1 
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-semibold ont-serif mb-3">Few Car Details</h1>
            <p data-aos="fade-up" className="text-sm pb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum animi ipsum 
                possimus tenetur quibusdam? Perspiciatis?
            </p>
            {/* Car Listing cards */}
            <div>
                <div 
                className="grid grid-cols-1 
                sm:grid-cols-2 md:grid-cols-3 gap-16">
                    {
                        CarListData.map((car) =>{
                        return(
                        <div 
                        data-aos="fade-up"
                        data-aos-delay={car.aosDelay}
                        className="space-y-3 
                        border-2 border-gray-500 
                        hover:border-primary p-3 rounded-xl relative
                        group">
                            <div className="w-full h-[120px]">
                                <img 
                                className="w-full h-[120px]
                                object-contain sm:translate-x-2 
                                group-hover:translate-x-28 duration-700"
                                src={theme === "dark"? car.image: car.image2} alt="" />
                            </div>
                            <div className="space-y-2">
                                <h1 
                                data-aos="fade-up"
                                className="text-primary font-semibold">{theme === "dark"? car.name : car.name2}</h1>
                                <div className="flex justify-between items-center text-xl fonts-semibold">
                                <p>${ theme === "dark"? car.Price : car.Price2}/Day</p>
                                <a href="#">Details</a>
                           </div>
                            </div>
                            <p className="text-xl font-semi-bold absolute top-0 left-3">
                                12Km
                            </p>
                        </div>
                        )
                        })
                    }
                </div>
            </div>
            <div className="grid place-content-center mt-8">
                <button 
                data-aos="fade-up"
                className="button-outline">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Carlist