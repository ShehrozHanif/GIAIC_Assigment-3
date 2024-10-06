"use client"

import Navbar from "./(Pages)/Navbar";
import Footer from "./(Pages)/Footer";
import NavigateButtons from "./(Pages)/UseRouter/page";


export default function Home() {
  return (
    <div>
     {/* I render Navbar in layout.tsx so in that case i dont need to render Navbar.tsx at every Page */}

     <h1 className='text-3xl font-bold flex justify-center items-center mt-10 '>
      Welcome To Home Page
     </h1>

     <NavigateButtons/>

      {/* I render Footer in layout.tsx so in that case i dont need to render Footer.tsx at every Page */}

    </div>

    






  );
}
