import React from 'react'
import image from './img/img3.jpg'
const About = () => {
  return (
    <div>
        <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">


<div className="w-full h-64 lg:w-1/2 lg:h-auto">
    <img className="h-full w-full object-cover" src={image} alt="about us" />
</div>



<div
    className="max-w-lg bg-blue-950 md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
    
    <div className="flex flex-col p-12 md:px-16">
        <h2 className="text-2xl font-medium uppercase text-white lg:text-4xl">About Us</h2>
        <p className="mt-4 text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
        </p>
     
        <div className="mt-8">
            <a target="_blank" href="https://www.investopedia.com/terms/m/mobile-wallet.asp"
                className="inline-block w-full text-center text-lg font-medium text-blue-400 bg-white border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read
                More</a>
        </div>
    </div>
 
</div>


</div>
    </div>
  )
}

export default About