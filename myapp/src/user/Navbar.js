import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black' >
         <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="index.html" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          
            <span className="ml-3 text-xl text-white font-extrabold ">
              <Link to='/' >AMSEV PTY</Link>
               </span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 text-white px-4 hover:text-gray-300 cursor-pointer">Home</Link>
            <Link to="/About" className="mr-5 text-white px-4 hover:text-gray-300 cursor-pointer">About</Link>
            <Link to="/Services" className="mr-5 text-white px-4 hover:text-gray-300 cursor-pointer">Services</Link>
            <Link to="/Product" className="mr-5 text-white px-4 hover:text-gray-300 cursor-pointer">Product</Link>
        </nav>
          <button className="inline-flex items-center bg-gray-100 rounded-full py-1 px-4 focus:outline-none hover:bg-gray-200  text-base mt-4 md:mt-0">
   <Link to="/Sign Up">         Sign Up</Link>
            
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar