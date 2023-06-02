import { useState } from "react"
import {Link} from "react-scroll"

const NavBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
      setClick(!click)
    }
  return (
    <div className="fixed w-full top-0 left-0 shadow-lg">
        <div className=" bg-[#0a192f] md:flex justify-between items-center py-5 md:px-10 lg:px-20 px-5">
          <div className=" font-[poppins] font-bold text-2xl cursor-pointer text-gray-200">
            Smart Learn
          </div>
          <div onClick={handleClick} className="absolute text-3xl right-5 top-5 cursor-pointer md:hidden text-white">
          <ion-icon name={click ? "close" : "menu"}></ion-icon>
          </div>
          <ul className={`md:flex md:items-center  md:px-0 lg:px-20 md:pb-0 pb-5 text-center md:pt-0   absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto mt-0 md:transition-none md:duration-0 transition-all duration-500 ease-in-out ${click ? ` top-16  opacity-100` : `top-[-490px]`} bg-blue-500  md:bg-[#0a192f] md:text-gray-300 text-white font-mono`}>
            <li className=" cursor-pointer hover:text-blue-600 md:ml-14 md:text-[17px] text-xl md:my-0 my-7"><Link onClick={handleClick} to="home" spy={true} smooth={true} offset={50} duration={500} >
            Home
        </Link></li>
            <li className=" cursor-pointer hover:text-blue-600 md:ml-14 md:text-[17px] text-xl md:my-0 my-7"><Link onClick={handleClick} to="about" spy={true} smooth={true} offset={50} duration={500} >
            About
        </Link></li>
            <li className=" cursor-pointer hover:text-blue-600 md:ml-14 md:text-[17px] text-xl md:my-0 my-7"><Link onClick={handleClick}  to="course" spy={true} smooth={true} offset={50} duration={500} >
            Course
        </Link></li>
            
            <li className=" cursor-pointer hover:text-blue-600 md:ml-14 md:text-[17px] text-xl md:my-0 my-7"><Link onClick={handleClick} to="contact" spy={true} smooth={true} offset={50} duration={500} >
            Contact
        </Link></li>
          </ul>
        </div>
      
    </div>
  )
}

export default NavBar
