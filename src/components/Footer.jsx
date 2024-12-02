import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiFlask } from "react-icons/si";

function Footer() {
  return (
    <footer className='w-full py-10 px-20  bg-white/5 text-white'>
    

      <h1 className='text-2xl font-semibold'>Contact</h1>
      <div className='grid grid-rows-2'>
        <div className='grid grid-cols-3 gap-2 my-5'>
          <div className='w-40'>
            <a href="https://www.instagram.com/y0hu4/profilecard/?igsh=YmZ2cTIydDFuODFs" className='flex items-center'><span className='items-center pr-2 font-thin'>Instagram</span> <FaInstagram/></a>
          </div>
          <div className='w-40'>
            <a href="https://github.com/keebwee5" className='flex items-center'><span className='items-center pr-2 font-thin'>Github</span> <FaGithub/></a>
          </div>
          <div className='w-40'>
            <a href="https://discord.gg/wS65KeYYaU" className='flex items-center'><span className='items-center pr-2 font-thin'>Discord</span> <FaDiscord /></a>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-2 my-5'>
          <div className='w-40'>
            <a href="https://dribbble-design-2-4gn14x.flutterflow.app/" className='flex items-center'><span className='items-center pr-2 font-thin'>FlutterFlow</span><RiFlutterFill /></a>
          </div>
          <div className='w-40'>
            <a href="https://github.com/keebwee5/backend-for-class" className='flex items-center'><span className='items-center pr-2 font-thin'>Backend page</span><SiFlask /></a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer