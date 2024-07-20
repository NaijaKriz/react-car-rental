import React from 'react'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, FaTwitter } from 'react-icons/fa'


const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#Contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]


const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 ronded-t-3xl">
        <div className="container">
            <div className="grid md:grid-cols-3 py-5">
                {/* company details */}
                <div className="py-8 px-4">
                    <h1 className="text-xl sm:text-3xl font-bold sm:text-left
                    text-justify mb-3 gap-3 lex items-center">Emmy Cute
                    </h1>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Veniam, tempora autem! 
                    Officia.
                    <div className="flex items-center gap-3">
                        <FaLocationArrow />
                        <p>Bananna Island, Lagos</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaMobileAlt /> 
                        <p>+2348149208959</p>
                    </div>
                    {/* social Handles */}
                    <div className="flex items-center gap-4 mt-6">
                        <a href="#">
                            <FaInstagram className="text-3xl hover:text-primary duration-300"/>
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl hover:text-primary duration-300"/>
                        </a>
                        <a href="#">
                            <FaTwitter className="text-3xl hover:text-primary duration-300"/>
                        </a>
                    </div>
                </div>
                {/* Nav Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3
                col-span-2 md:pl-10 py-8 px-4">
                    {/* First Col */}
                    <div>
                        <div >
                            <h1 className="text-xl font-bold
                            sm:text-left text-justify mb-3 gap-3">Important Links</h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks.map((data)=>{
                                        return (
                                            <li className="cursor-pointer hover:text-primary 
                                            dration-300">
                                                <span className="mr-2">&#11162;</span>
                                                <a href={data.link}>{data.title}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    {/* second Col */}
                    <div>
                        <div>
                            <h1 className="text-xl font-bold
                            sm:text-left text-justify mb-3">Important Links</h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks.map((data)=>{
                                        return (
                                            <li className="cursor-pointer hover:text-primary 
                                            dration-300">
                                                <span className="mr-2">&#11162;</span>
                                                <a href={data.link}>{data.title}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Third Col */}
                    <div>
                        <div>
                            <h1 className="text-xl 
                             font-bold
                            sm:text-left text-justify mb-3">Important Links</h1>
                            <ul className="flex flex-col gap-3">
                                {
                                    FooterLinks.map((data)=>{
                                        return (
                                            <li className="cursor-pointer hover:text-primary 
                                            dration-300">
                                                <span className="mr-2">&#11162;</span>
                                                <a href={data.link}>{data.title}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer