import React from 'react'
import image1 from "../../assets/Img/m2.jpg"
import image2 from "../../assets/Img/m3.jpg"
import image3 from "../../assets/Img/n1.jpg"
import { FaStar } from "react-icons/fa6";

const TestimonialData = [
    {
        name: "Clinton",
        img: image1,
        comment: "adipisicing elit. At, nobis voluptate? Hic, omnis. Mollitia",
        aosDelay: "0"
    },
    {
        name: "Helen",
        img: image2,
        comment: "adipisicing elit. At, nobis voluptate? Hic, omnis. Mollitia",
        aosDelay: "300"
    },
    {
        name: "Vennessa",
        img: image3,
        comment: "adipisicing elit. At, nobis voluptate? Hic, omnis. Mollitia",
        aosDelay: "1000"
    },
]

const Testimonial = () => {
  return (
    <div className="dark:bg-black dark:text-white 
    py-14 sm:pb-24">
        <div className="container">
            {/* header */}
            <div className="sppace-y-4 pb-12">
                <p 
                data-aos="fade-up"
                className="text-3xl font-semibold
                text-center sm:text-4xl font-serif">What Our Clients Say About Us</p>
                <p 
                data-aos="fade-up"
                className="text-center sm:px-44">Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. At, nobis voluptate? 
                    Hic, omnis. Mollitia voluptatem assumenda 
                    nemo ipsam. Incidunt, perspiciatis?</p>
            </div>
            {/* card section */}
            <div className="grid grid-cols-1
            sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
                {TestimonialData.map((data)=>{
                    return(
                        <div
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key = {data.name}
                        className="card text-center group
                        space-y-3 sm:space-y-6 p-4 bg-gray-100 
                        dark:bg-white/20 sm:py-12 duration-300 rounded-lg"
                        >
                            <div className="grid place-items-center">
                                <img src={data.img} alt="" className="h-20 w-20 rounded-full"/>
                            </div>
                            <div className="text-xl grid place-items-center">
                               <div className="flex text-primary">
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               <FaStar />
                               </div>
                            </div>
                            <p>{data.comment}</p>
                            <p className="font-semibold text-center">{data.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Testimonial