import React from 'react'

import { motion } from 'framer-motion'

type props = {
  
}
 
function Homepage  ( {}:props) {
 
   


    


  return (
    <section  className="items-center  justify-between mx-auto sticky px-8 h-screen  flex bg-black " >
        {/* Used frame motion for the the transition */}
        <  motion.div className='space-y-3' 
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
    }} >

            <h1 className="space-y-3 font-semibold tracking-wide text-5xl lg:text-6xl xl:text-5xl" >
                <span className="block  text-white  bg-clip-text text-transparent  " > Welcome to Nasrda  </span>
                <span className="block font-bold md:text-[60px] text-white font-serif " >Club</span>
                <p  className="text-[30px] text-[#fff]   tracking-wide" >something about us </p>
                <p  className="text-[30px] text-[#fff] tracking-wide" >something about us </p>
                <p  className="text-[30px] text-[#fff]  tracking-wide" >something about us </p>
            </h1>
            <div className="space-x-8 " >
                {/* <Button title="Order Now" />  Order ke?? lmao TeD*/}
                <a className="Link" > Learn More </a>
            </div>
        </motion.div>
     
      
        <motion.div className="relative mx-5 hidden h-[400px] w-[400px] transition-all  duration-500 md:inline lg:h-[650px] lg:w-[600px]"
         initial={{
          x:500,
         opacity:0,
          scale:0.5 
    
        }}
    
        animate={{
          x:  0,
          opacity:1,
          scale:1
        }}
    
        transition={{
          duration:1.5,
        }}
              > 
      

     
       
       
        <div  className=" p-9 "> <img src='/img/bg-1.jpg'  width={500} height={1000}  /> </div>
      
       
        
       </motion.div> 
       
      
    </section>
  )
}

export default Homepage
 