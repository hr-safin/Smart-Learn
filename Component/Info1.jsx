
import {FaGraduationCap, FaBookOpen, FaUserAlt, FaUserFriends} from "react-icons/fa"
const Info1 = () => {
  return (
    <div className=" sm:pt-44    pt-24 text-white grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 p-10 md:p-10 lg:p-20 md:h-[30vh] items-center justify-center md:gap-8 lg:gap-20 gap-6 font-sans bg-[#0a192f]  ">
        {/* 1 */}
        <div className=" flex justify-center items-center gap-5 bg-black p-4 rounded-lg">
            
            <div className="text-5xl ">
                <FaBookOpen />
            </div>
            <div className="font-semibold text-lg">
                <h2>15+</h2>
                 <p>Course</p>
            </div>
        </div>
        {/* 2 */}
        <div className=" flex justify-center items-center gap-5 bg-black p-4 rounded-lg">
            
            <div className="text-5xl">
                <FaGraduationCap />
            </div>
            <div className="font-semibold text-lg">
                <h2 className="">500+</h2>
                 <p>Students</p>
            </div>
        </div>
        {/* 3 */}
        <div className=" flex justify-center items-center gap-5 bg-black p-4 rounded-lg">
            
            <div className="text-5xl">
                <FaUserAlt />
            </div>
            <div className="font-semibold text-lg">
                <h2>7</h2>
                 <p>Teacher</p>
            </div>
        </div>
        {/* 4 */}
        <div className=" flex justify-center items-center gap-5 bg-black p-4 rounded-lg">
            
            <div className="text-5xl">
                <FaUserFriends />
            </div>
            <div className="font-semibold text-lg">
                <h2>100%</h2>
                 <p>Support</p>
            </div>
        </div>
    </div>
  )
}

export default Info1
