import React from 'react'
import {motion} from 'framer-motion'

function InfoPage() {
  return (
    <div className='h-screen flex items-center justify-center  w-screen pt-7 bg-neutral-200 '>
      <motion.p animate={{y:0}} transition={{duration:0.8}} initial={{y:-20}} >info about me</motion.p>
    </div>
  )
}

export default InfoPage
