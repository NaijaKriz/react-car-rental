import React from 'react'
import pattern from "../../assets/Img/bg.jpg"
import pattern2 from "../../assets/Img/bg3.jpg"
import play from "../../assets/Img/play.png"
import app from "../../assets/Img/app.png"

const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition: "center",
    height: "100%",
    width:"100%"
}
const bannerImg2 = {
    backgroundImage: `url(${pattern2})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition: "center",
    height: "100%",
    width:"100%"
}

const AppstoreBanner = ({theme}) => {
  return (
    <div className="container flex">
        <div className="text-black py-10 sm:min-h-[400px] sm:grid 
        sm:place-items-center rounded-xl"
        style={theme === "dark"? bannerImg : bannerImg2}
        >
            <div>
                <div className="sace-y-6 max-w-xl mx-auto">
                    <h1 className="text-2xl text-center 
                    sm:text-4xl dark:text-white
                    ">Download Our App to Get Started</h1>
                    <p 
                    data-aos="fade-up"
                    className="text-center sm:px-20 dark:text-white">Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Laborum ad iusto quae itaque.
                    </p>
                    <div 
                    data-aos="fade-up"
                    className="flex justify-center flex-wrap items-center gap-4">
                        <a href="">
                            <img
                            className="max-w-[150px] 
                            sm:max-w-[120px] md:max-w-[200px]"
                            src={play} alt="" />
                        </a>
                        <a href="">
                            <img 
                            className="max-w-[150px] 
                            sm:max-w-[120px] md:max-w-[200px]"
                            src={app} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppstoreBanner