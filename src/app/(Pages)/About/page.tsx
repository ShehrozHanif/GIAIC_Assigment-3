"use client"
import React from 'react'
import NavigationButton from '../UseRouter/page'

const About = () => {
  return (
    <div> 
      {/* I render Navbar in layout.tsx so in that case i dont need to render Navbar.tsx at every Page */}

      <h1 className='text-3xl font-bold flex justify-center items-center mt-10'>About Page</h1>
      <NavigationButton/>

     {/* I render Footer in layout.tsx so in that case i dont need to render Footer.tsx at every Page */}

    </div>
  )
}

export default About
