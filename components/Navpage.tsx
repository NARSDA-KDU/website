import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type props = {}

function Navpage  ({}:props) {
  return (
    //  Used frame motion for the the transition
    <header  className="sticky top-0 z-20 flex items-start justify-between xl:items-center " >
    <  motion.div 
    initial={{
      x:-500,
     opacity:0,
      scale:0.5 

    }}

    animate={{
      x: - 0,
      opacity:1,
      scale:1
    }}

    transition={{
      duration:1.5,
    }}
    >
{/* made use of react icons */}
      <SocialIcon url="https://github.com/NARSDA-KDU" fgColor="gray" bgColor="transparent" />

      <SocialIcon url="https://twitter.com/s1ntaxe770r" fgColor="gray" bgColor="transparent" />

      <SocialIcon url="https://www.youtube.com/sonnysangha" fgColor="gray" bgColor="transparent" />
    </motion.div>

    < div 
    

    
    className="flex flex-row p-2 mx-10 text-gray-300 cursor-pointer" >
    
      <div classname="mx-4" ><img src='/img/kdu.png'  width={50} height={50}  /></div>
      <div><img src='/img/nasrda.png'  width={50} height={50}  /></div>

     
      
  

    
    </div>
    </header>
  )
}

export default Navpage