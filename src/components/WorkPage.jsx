import { useGSAP } from '@gsap/react'
import {React, useState, useRef, useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WorkPage.css'
import { ChevronDown, Github, Instagram,Linkedin  } from 'lucide-react'
import {motion, spring, stagger} from 'framer-motion'
gsap.registerPlugin(ScrollTrigger)
  const variants = {
    open:{
      height:80,
      width:780
    },
    closed:{
      height:36,
      width:160
    }
  }
function WorkPage() {
  const ref1 = useRef();
  const ref2 = useRef([]);
  const ref3 = useRef([]);
  const ref4 = useRef();
  const pushref2 = (el) => ref2.current.push(el)
  const pushref3 = (el) => ref3.current.push(el)
  
  useEffect(()=>{
    const el = ref1.current;
    const el2 = ref2.current;
    const el3 = ref3.current;
    const el4 = ref4.current;

    gsap.fromTo(el,{y:0},{
      y:200,
      opacity:1,
      scrollTrigger:{
        trigger:el,
        scrub:true,
        start:'center center',
        end:'top -90%',
      },
    })
    
    gsap.fromTo(el2,{y:0},{
      y:100,
      opacity:1,
      stagger:0.01,
      scrollTrigger:{
        trigger:el2,
        scrub:true,
        start:'bottom bottom',
        end:'top -90%',
      },
    })
    gsap.fromTo(el3,{y:0},{
      y:200,
      opacity:1,
      stagger:0.01,
      scrollTrigger:{
        trigger:el3,
        scrub:true,
        start:'bottom bottom',
        end:'top -90%',
      },
    })
    gsap.fromTo(el4,{y:-150, opacity:0},{
      y:150,
      opacity:1,
      scrollTrigger:{
        trigger:el4,
        scrub:true,
        start:'bottom bottom',
        end:'top -90%',
      },
    })


  },[])

  return (
    <div className='w-screen bg z-10 flex flex-col pt-[45px] bg overflow-hidden'>

        <section className='flex flex-col bg p-20 w-full h-[90vh] justify-end items-start z-20 overflow-hidden '>    

          <div ref={ref1} className='flex flex-col border-r-2 pr-32 border-neutral-500 justify-center z-20'>

            <motion.p className='efont text-[130px] drop-shadow-lg text-neutral-700'  animate={{opacity:1, y:0}} transition={{duration:1.6,ease:[0.76,0,0.24,1]}} initial={{opacity:0 , y:'-140px'}}>
              <span transition={{duration:0.8}} className='font-semibold'>VAISAGH</span><span className='text-neutral-500 italic'>SURESH</span></motion.p>
            <motion.p  animate={{opacity:1, x:0}} transition={{duration:1.2,ease:[0.76,0,0.24,1]}} initial={{opacity:0 , x:'-100px'}} className='font-medium bfont text-2xl text-zinc-500 drop-shadow-lg'>self taught <span className='text-stone-600 efont italic text-4xl'>web Developer</span> based in bangalore</motion.p>
            <motion.p  animate={{opacity:1, x:0}} transition={{duration:1.2,ease:[0.76,0,0.24,1]}} initial={{opacity:0 , x:'-100px'}} className='font-medium bfont text-xl text-stone-500 drop-shadow-lg'>i focus on creating smooth user experience and eye-catchy, modern websites. </motion.p>

          </div>

          <div className='flex bfont font-medium text-neutral-500 text-lg px-3 my-9 '>
            <motion.a animate={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1.6,ease:[0.76,0,0.24,1]}}   whileHover={{y:-9}} className='bg-2 text-center py-2 px-5' href="">github</motion.a>
            <motion.a animate={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1.8,ease:[0.76,0,0.24,1]}}   whileHover={{y:-9}} className='bg-2 text-center py-2 px-5' href="">Linkedin</motion.a>
            <motion.a animate={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:2,ease:[0.76,0,0.24,1]}}   whileHover={{y:-9}} className='bg-2 text-center py-2 px-5' href="">e-mail</motion.a>
          </div>

        </section>

        <section className='h-screen flex flex-col  gap-20 p-9 justify-center items-center'>

          <h1 ref={ref4} className='text-6xl bfont text-neutral-600 '>technologies i use</h1>
          <ul className='flex justify-center w-full items-center gap-20'>
            <div className='flex flex-col border-2 border-neutral-400 p-6 rounded-xl' ref={pushref2} >
              <img className='w-20 h-20' src="css.png" alt="" />
            </div>
            <div className='flex flex-col border-2 border-neutral-400 p-6 rounded-xl'  ref={pushref3}>
              <img className='w-20 h-20' src="react.png" alt="" />
            </div>
            <div className='flex flex-col border-2 border-neutral-400 p-6 rounded-xl'  ref={pushref2}>
              <img className='w-20 h-20' src="html.png" alt="" />  
            </div>
            <div className='flex flex-col border-2 border-neutral-400 p-6 rounded-xl'  ref={pushref3}>
              <img className='w-20 h-20' src="nodejs.png" alt="" />
            </div>
            <div className='flex flex-col border-2 border-neutral-400 p-6 rounded-xl'  ref={pushref2}>
              <img className='w-20 h-20' src="tailwind.png" alt="" />
            </div>
            <div className='flex flex-col border-2 border-neutral-400 p-6 rounded-xl'  ref={pushref3}>
              <img className='w-20 h-20' src="framer.png" alt="" />
            </div>
            <div className='flex flex-col border-2 border-neutral-400 p-6 rounded-xl'  ref={pushref2}>
              <img className='w-20 h-20' src="firebase.png" alt="" />
            </div>
          </ul>

        </section>

        <section className='h-screen z-20 bg-4'> 
        </section>

    </div>
  )
}

export default WorkPage
