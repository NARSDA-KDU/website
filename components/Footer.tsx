import React from 'react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
 name : string,
 email: string,
 subject: string,
 message: string,
};


function Footer() {
    const { register, 
         handleSubmit,  } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href =`mailto:kdunasrda@gmail.com?subject=${formData.subject}&body=Hi my name is${formData.name}.${formData.message}(${formData.message})  `
    }
  return (
    <div id='footer' className="relative flex flex-col items-center h-screen px-10 mx-auto text-center text-white md:text-left md:flex-row max-w-7xl justify-evenly " >
        <h3 className="absolute  top-24 lg:top-5  tracking-[20px] uppercase text-white text-2xl" >  Contact </h3>
      <div className='flex flex-col space-y-10 ' >
        <h4 className="text-4xl font-semibold text-center " >
            I have got just what you need.{""}
            <span className="decoration-[#2a4798]/50 underline" >Lets talk</span>
            </h4>
        <div className="space-y-10" >
<div className="flex items-center justify-center space-x-5">
           <div className="text-[#2a4798] h-7 w-7 animate-pulse" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>  </div>
  <p className="text-2xl " >+2349017170032, +2349057058020</p>
    </div>
    <div className="flex items-center justify-center space-x-5">
           <div className="text-[#2a4798] h-7 w-7 animate-pulse" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
  </div>
  <p className="text-2xl " >@kdunasrda@gmail.com</p>
    </div>
    <div className="flex items-center justify-center space-x-5">
            <div className="text-[#2a4798] h-7 w-7 animate-pulse" >
            <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            </div>
              <p className="text-2xl " >KolaDaisi University</p>
            </div>
    
            
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto space-y-2 text-black w-fit" >
        <div className="flex space-x-2 " >

                <input {...register('name')} placeholder='Name'  className="contactInput" type="text" />
                <input {...register('email')} placeholder='Email'  className="contactInput"  type="email" />
        </div>

               <input {...register('subject')}   placeholder='Subject' className="contactInput"  type="text" />

               <textarea {...register('message')}  placeholder='Message' className="contactInput" /> 
               <button className=" bg-[#2a4798] py-5 px-10 rouned-md text-black font-bold" >Submit</button>              
        </form>
      </div>
    </div>
  )
}
// imported this
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Foot(){
  const { register, 
    handleSubmit,  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
   window.location.href =`mailto:kdunasrda@gmail.com?subject=${formData.subject}&body=Hi my name is${formData.name}.${formData.message}(${formData.message})  `
  }
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8" id="footer">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact</h2>
        <p className="mt-2 text-lg leading-8 text-white">
          Contact us for more info, enquiries and complaints
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
              Name
            </label>
            <div className="mt-2.5">
              <input
                {...register('name')}
                type="text"
                name="Name"
                id="Name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="Subject" className="block text-sm font-semibold leading-6 text-white">
              Subject
            </label>
            <div className="mt-2.5">
              <input
                {...register('subject')} 
                type="text"
                name="Subject"
                id="Subject"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                {...register('email')}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>NIG</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-white"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                {...register('message')}
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-white">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}

export default Foot



  