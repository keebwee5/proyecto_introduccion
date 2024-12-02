import Navbutton from "./Navbutton";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";



function Navbar() {
  
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='fixed top-0 inset-x-0 flex justify-between items-center text-white w-[1240px] py-3 mx-auto px-4'>
        <h1 className='w-full text-2xl font-bold text-[#4998A9] xl:text-3xl md:text-3xl sm:text-2xl'>
          PORTFOLIO.
        </h1>
        <ul className='hidden md:flex'>
            <li className="mx-5">
              <button><Navbutton content="Home"/></button>
            </li>
            <li className="mx-5">
              <button><Navbutton content="About"/></button>
            </li>
            <li className="mx-5">
              <button><Navbutton content="Projects"/></button>
            </li>
            <li className="ml-5">
              <button><Navbutton content="Contact"/></button>
            </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <RxCross2 size={25}/> : <IoIosMenu size={25}/>}
        </div>
        <div className= {!nav ? "md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#050508] ease-in-out duration-500" : "fixed left-[-100%] ease-in-out duration-300"}>
          <h1 className="py-5 text-2xl text-[#4998A9] font-bold mt-1 mx-4">PORTFOLIO.</h1>
          <ul className="uppercase px-4">
            <li className="p-4 border-b border-b-gray-700 border-t border-t-gray-700"><a href="">Home</a></li>
            <li className="p-4 border-b border-b-gray-700"><a href="">About</a></li>
            <li className="p-4 border-b border-b-gray-700"><a href="">Projects</a></li>
            <li className="p-4"><a href="">Contact</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar