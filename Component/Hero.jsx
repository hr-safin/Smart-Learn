import {Link} from "react-scroll"
import Image from "./Dayflow - Buy Online.png"
const Hero = () => {
  return (
    <div name="home" className=" sm:pt-36 pt-36  lg:pt-28 p-6  md:flex md:flex-row sm:flex sm:flex-col md:justify-between  sm:justify-justify-between sm:items-center md:items-center  items-center w-full h-screen font-sans bg-[#0a192f] ">
     <div className="mt-8  md:pl-5">
        <h2 className="lg:text-5xl sm:text-3xl md:text-3xl text-2xl md:pl-10 pb-5 font-semibold sm:text-center md:text-left text-center text-white">The Power of Online Education</h2>
        <p className="text-md md:w-[80%] lg:w-[70%] md:pl-10 text-gray-500 pb-5 sm:text-center md:text-left text-center  ">Online education revolutionizes learning,offering flexibility, accessibility and a world of knowledge at your fingertips. Embrace the digital classroom and unlock your full potential from now on!</p>
        <div className=" sm:ml-0 md:ml-0    md:pb-0 pb-16 sm:text-center md:text-left text-center">
        <button className=" bg-blue-600 hover:bg-blue-500 text-white pl-3 pr-3 pt-2 pb-3 rounded-md text-center lg:ml-10 md:ml-10 sm:ml-0  text-lg tracking-wider"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} >
            Contact Us
        </Link></button>
        </div>
        
     </div>
        
      <div className="pt-10">
      <img className=" sm:w-[800px] md:w-[800px] w-[900px] sm:pl-6  md:pr-6  md:pl-1 pl-5 sm:pb-16" src={Image} />
      </div>
       
      
    </div>
  )
}

export default Hero
