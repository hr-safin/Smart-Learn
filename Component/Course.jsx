
import Data from "./Data"

const Course = () => {
  return (
    <>
    <div name="course" className='w-full    bg-[#0a192f] text-white'>
    <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:w-full md:w-full w-80 sm:gap-12 md:gap-20 gap-20  sm:p-8 md:p-24 p-1 mx-auto  '>
      {Data.map((product) =>{
        return (
          <div className=' border border-gray-700 shadow-2xl rounded-lg ' key={product.id}>
             <img className="rounded-t-lg" src={product.image} alt="ss"  />
             <h2 className='text-center text-xl sm:text-2xl md:text-2xl font-bold p-1'>{product.name}</h2>
             <p className='p-2 md:pr-3 md:pl-6 text-gray-400'>{product.details}</p>
             <div className='pl-3 pr-3 pb-2 flex justify-between'>
              Price: {product.price}
              <button  className='bg-blue-500 text-white sm:p-3 md:p-3 p-2 rounded-md cursor-pointer focus:bg-red-400'>Enroll</button>
             </div>
          </div>
        )
      })}  
    </div>
    </div>
   
    </>
  )
}

export default Course

