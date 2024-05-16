import { useEffect, useState, useRef } from 'react'
import './App.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {motion, useScroll} from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import InfoPage from './components/InfoPage'
import WorkPage from './components/WorkPage'
import gsap from 'gsap'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
gsap.registerPlugin(ScrollTrigger)

function App() {
  const {scrollYProgress} = useScroll(100);
  
  return (
    <div className='html overflow-hidden bg'>
      <BrowserRouter className="overflow-hidden w-screen">
        <div className='  z-50 fixed w-screen overflow-hidden '>
          <Header/>
        </div>
        <div className='h-[300px] m-9 w-1 overflow-hidden real fixed top-[30%] right-0 z-50 rounded-full '>
          <motion.div style={{scaleY:scrollYProgress}} className=' h-[300px] rounded-full  m-8 w-[2px] fixed top-[30.5%] right-[4px] bg-zinc-400 z-50 origin-top'></motion.div>
        </div>
        <Routes>
          <Route path='/WorkPage' element={<WorkPage/>}/>
          <Route path='/InfoPage' element={<InfoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
