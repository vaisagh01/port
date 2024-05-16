import {React, useEffect, useRef, useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { MoveUpRight} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './style.css';
import gsap from 'gsap';


function Header() {
  const [isOn, setIsOn] = useState(false);
  const ref = useRef()
  const menuRef = useRef()
  const [menu, setMenu] = useState(false);


  const toggleSwitch = () => setIsOn(!isOn);
  useEffect(()=>{
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setMenu(false)
      }
    }
    document.addEventListener("mousedown",handler)
  })
  return (
    <header className='flex shadow-2xl w-full h-10 overflow-hidden justify-between px-9 items-center py-10 border-b-2 border-neutral-400 bg'>
      <div>
        <h1 className='efont text-3xl font-bold text-neutral-600'>V</h1>
      </div>

      <div ref={ref} animate={{y:0, opacity:1}} initial={{y:-40}}  transition={{duration:1.1,ease:[0.76,0,0.24,1]}} data-ison={isOn} className="switch w-32 relative cursor-pointer bg-4 flex justify-start p-[2px] rounded-3xl items-center" onClick={toggleSwitch}>
        <motion.div className='h-[2px] w-9 bg rounded-full shadow-xl absolute z-40 top-[0px] ml-[13px] mr-[13px]' layout></motion.div>
        <motion.div transition={{duration:0.5,ease:[0.76,0,0.24,1]}} className="handle w-16 h-8 z-10 bg-2 rounded-3xl flex justify-center items-center shadow-lg" layout>  
          {isOn ?
            <motion.p className='text-md z-20 font-bold text-stone-500 '>Info</motion.p>
            : 
            <motion.p className='text-md z-20 font-bold text-stone-500 '>Work</motion.p> 
          }  
        </motion.div>
        <NavLink  className='absolute justify-center items-center flex text-md h-full w-16 right-[1px]' to={'/InfoPage'}><p className='text-zinc-500 font-medium '>Info</p></NavLink>
        <NavLink  className='absolute justify-center items-center flex yext-md h-full w-16 left-[1px]' to={'/WorkPage'}><p className='text-zinc-500 font-medium '>Work</p></NavLink>
      </div>

      <section className='flex gap-5'>
        <div className='flex items-center justify-center'>
          <p className='text-xl efont'>resume</p>
          {/* <MoveUpRight/> */}
        </div>
        <ul className='flex gap-5 font-mono text-xl'>
          <li><a className='efont' href="">projects</a></li>
          <li><a className='efont' href="">contact</a></li>
        </ul>
      </section>
    </header>
  )
}

export default Header
/* 
<motion.nav animate={{x:'-160px', opacity:1}} initial={{x:'210px'}} transition={{duration:1.9,ease:[0.76,0,0.24,1]}}   className='flex flex-col z-40 blur-custom shadow-xl cursor-pointer w-1/5 rounded-xl px-3 py-9 justify-center blur-custom items-center fixed -right-40'>
          <motion.NavLink whileHover={{x:'10px'}}transition={{duration:0.6}} href="" className='p-3 w-full text-start'>Home</motion.NavLink>        
          <motion.NavLink whileHover={{x:'10px'}}transition={{duration:0.6}} href="" className='p-3 w-full text-start'>Home</motion.NavLink>        
          <motion.NavLink whileHover={{x:'10px'}}transition={{duration:0.6}} href="" className='p-3 w-full text-start'>Home</motion.NavLink>        
          <motion.NavLink whileHover={{x:'10px'}}transition={{duration:0.6}} href="" className='p-3 w-full text-start'>Home</motion.NavLink>                 
</motion.nav>
*/