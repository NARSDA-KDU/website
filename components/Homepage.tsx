import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import { motion } from 'framer-motion'

type props = {
  
}
 
function Homepage  ( {}:props) {

  const [text] = useTypewriter({
    words: ['Do  ', 'you', ' Love', 'space!'],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
 
        


    


  return (
    <section  className="sticky items-center justify-between h-screen px-8 mx-auto xl:flex " >
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


            <h1 className="space-y-3 text-4xl font-semibold tracking-wide lg:text-6xl xl:text-7xl" >
                <span className="block text-transparent text-white uppercase bg-clip-text " > Welcome to NASRDA  </span>
                <span className="block font-bold md:text-[60px] text-white font-serif " >{text}</span>
                <p  className="text-[20px] text-[#fff] " >something about us </p>
                <p  className="text-[20px] text-[#fff] " >something about us </p>
                <p  className="text-[20px] text-[#fff] " >something about us </p>
                </h1>
=======
        
            <div className="space-x-8 text-white " >
                {/* <Button title="Order Now" />  */}
                <a className=" inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                 dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" > Learn More </a>
            </div>
        </motion.div>
     
      
        <motion.div className="relative mx-5 h-[300px] w-[300px]  lg:h-[400px] lg:w-[400px] transition-all  duration-500 md:inline xl:h-[650px] xl:w-[600px]"
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
      

     
       
       
        <div  className=" p-9"> <img src='/img/bg-1.jpg'  width={500} height={1000}  /> </div>
      
       
        
       </motion.div> 
       
      
    </section>
  )
}

export default Homepage
 