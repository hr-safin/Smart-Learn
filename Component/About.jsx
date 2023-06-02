import Image from "./Allura - Working Remotely.png"

const About = () => {
  return (
    <div name="about" className=" h-screen bg-[#0a192f] text-gray-200 grid md:grid-cols-2 grid-cols-1 justify-center items-center md:p-20 p-6 font-sans md:gap-4">
      <div>
        <img className="sm:w-[700px] md:w-[700px] w-[700px] sm:pl-6  md:pr-6  md:pl-1 pl-5 sm:pb-16" src={Image} />
      </div>
      <div>
        <h2 className="md:text-4xl lg:text-4xl sm:text-4xl text-2xl text-center pb-4 font-bold">Get To Know Us</h2>
        <p className=" text-gray-400 text-center">Discover our website dedicated to online education and support. With a diverse range of courses, personalized guidance, and a supportive learning community, we are committed to empowering you in your pursuit of knowledge and helping you achieve your academic and professional goals. Join us today and unlock your potential!</p>
      </div>
    </div>
  )
}

export default About
