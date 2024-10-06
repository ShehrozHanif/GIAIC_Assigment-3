import React from 'react'
import Link from 'next/link'
const Navbar = () => {   // Add this File to layout.tsx so we dont need to render Navbar at every page
  return (
    <div>
        <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center p-4">
    <div>
        {/* <Image src={logo} alt="bird" width={100} height={100}/> */}
    </div>

    <div className="flex flex-1 justify-center gap-10">
        <Link href={"/"}>
        <button className="hover:text-white hover:bg-blue-500 transition-colors duration-300 px-4 py-2 rounded-lg text-lg">Home</button>
        </Link>
        <Link href={"/About"}>
        <button className="hover:text-white hover:bg-blue-500 transition-colors duration-300 px-4 py-2 rounded-lg text-lg">About</button>
        </Link>
        <Link href={"/Contact"}>
        <button className="hover:text-white hover:bg-blue-500 transition-colors duration-300 px-4 py-2 rounded-lg text-lg">Contact</button>
        </Link>

        <Link href={"/Login"}>
        <button className="hover:text-white hover:bg-blue-500 transition-colors duration-300 px-4 py-2 rounded-lg text-lg">Login</button>

        </Link>
        
    </div>
    <div>

    </div>
  </div>


    </div>
  )
}

export default Navbar
