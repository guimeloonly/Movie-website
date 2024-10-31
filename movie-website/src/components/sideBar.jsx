import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHouse, faBookmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function SideBar() {
  
  {/* modify the sidebar to be responsive */}

  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setIsOpen(!mobile)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    {/* button to open the sidebar on mobile */}
      {isMobile && (
        <button
          className="fixed top-4 left-4 z-[1001] text-white "
          onClick={toggleSidebar}
          style={{display: isMobile?'block':'none'}}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
      )}
      {/* sidebar */}
      <div className={`border w-56 h-screen fixed left-0 top-0 bg-gray-950 border-black p-10 items-center flex flex-col z-[1000] overflow-auto  transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className='items-center flex-col space-x-2 cursor-pointer mb-20 '>
            <span className='text-2xl ml-4'>
        <FontAwesomeIcon icon={faUser} style={{color:'#fff'}} size='xl' /></span>
            <h1 className='text-white text-xl mt-1 '> Login</h1>
        </div>
        <nav className='mt-20 text-2xl font-black '>
        <ul className='space-y-10'>
        <li className=' flex items-center space-x-3 group '>
        <FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} />
            <Link to='/' className=' text-gray-400 group-hover:text-white transition duration-300 cursor-pointer'>Home</Link>
        </li>
        <li className=' flex items-center space-x-3 group '>
        <FontAwesomeIcon icon={faBookmark} style={{color: "#ffffff",}} />
            <Link to='/Save' className=' text-gray-400 group-hover:text-white transition duration-300 cursor-pointer'>Saved</Link>
        </li>
        </ul>
        </nav>
       
    </div>
    </>
  )
}
