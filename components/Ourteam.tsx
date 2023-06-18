import React from 'react';
import Image from 'next/image';

const people = [
    {
      name: 'Tokula Emmanuel',
      role: 'Co-Founder / CEO',
      img: '/img/tokula.png',
    },
    {
      name: 'Oyetunji Jubril',
      role: 'Co-Founder / CEO',
      img: '/img/jubril.png',
    },
    {
      name: 'Olanrewaju Israel',
      role: 'Co-Founder / CEO',
      img: '/img/israel.png',
    },
    {
      name: 'Obijiofor Marvellous',
      role: 'Co-Founder / CEO',
      img: '/img/mex.png',
    },
    {
      name: 'Abiola-Sanni Zainab',
      role: 'Co-Founder / CEO',
      img: '/img/zainab.png',
    },
    {
      name: 'Abiola-Sanni Hadijat',
      role: 'Co-Founder / CEO',
      img: '/img/',
    },
    {
      name: 'Ajani Bolade',
      role: 'Co-Founder / CEO',
      img: '/img/',
    },
    {
      name: 'Basil Nonso',
      role: 'Co-Founder / CEO',
      img: '/img/',
    },
    {
      name: 'Oyekola Theophilus',
      role: 'Co-Founder / CEO',
      img: '/img/',
    },
    // More people...
  ]
  
  function Ourteam() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Koladaisi University (KDU) after approval by the Federal Executive Council was licensed by the National Universities Commission to operate as a Private...
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.img} alt={person.name}/>
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
export default Ourteam