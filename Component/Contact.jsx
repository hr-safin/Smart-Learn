import  { useEffect, useRef, useState } from 'react'
import Image from "./Happy Bunch - Chat.png"
  const Contact = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [isValid,setIsValid] = useState(null)
   
  const formRef = useRef()
    useEffect(() => {
     setIsValid(name && email && message)
    },[name,email,message])
    const handleSubmit = (e) => {
      e.preventDefault()
      if(isValid){
        alert("Form is Submitted")
        setName("")
        setEmail("")
        setMessage("")
        formRef.current.reset()
      }
      else{
        alert("Try Again")
      }
    }
  return (
    <>
    <div name="contact" className='w-full p-6  sm:pb-10 md:pb-12 pb-40 bg-[#0a192f] '>
        
    <div className='grid sm:grid-cols-1 md:grid-cols-2 grid-cols-1 sm:w-full md:w-full w-64 sm:gap-12 md:gap-12 gap-20  sm:p-20 md:p-16  mx-auto  rounded-md pt-14'>
      <div>
        <img className='sm:w-[500px] md:w-[600px]' src={Image} alt="personal" />
      </div>
      <div className='h-[80vh]  pb-28'>
    
    <form ref={formRef} className= " max-w-lg mx-auto m-8 p-6 bg-slate-100 mb-52 shadow-2xl rounded-lg" onSubmit={handleSubmit}>
      <div className="mb-4 bg-slate-100">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-600  focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder=""
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600  focus:shadow-outline"
          id="email"
          type="email"
          placeholder=""
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border-2 focus:border-blue-600 rounded w-full sm:h-40 md:h-40 h-20  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Enter your message here"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>
      <div className="flex justify-center">
        <button
        type="submit"
        disabled={!isValid}
          className="hover:bg-blue-500 hover:text-white  text-black border-2 border-blue-600 font-bold py-2 px-4 rounded-md  "
         
        >
          Submit
        </button>
      </div>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Contact