import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Link, scroller } from 'react-scroll';
import { motion } from "framer-motion"
import { Navbar } from "flowbite-react";

type props = {}

function Navpage  ({}:props) {
  return (
    <div className='sticky top-0 z-10'>
      <Navbar
        fluid={true}
        rounded={true}
        className='bg-white bg-opacity-80'
      >
        <Navbar.Brand href="#homepage/">
          <img
            src="/img/nasrdalogo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            NASRDA
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="#homepage"
            active={true}
            className='smooth-scroll'
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/#about" className='smooth-scroll'>
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Services
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/#footer" className='smooth-scroll'>
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navpage