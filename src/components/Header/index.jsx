import React, { useRef } from 'react'
import logo from '../../assets/logos/logo.svg'
import menuicon from '../../assets/icons/menu-bars.png'

export default function Header() {

    const navbar = useRef()
    const toggle = useRef()

    /**
     * When the menu button is clicked, toggle the class 'flex' on the navbar, and toggle the class
     * 'hidden' on the navbar
     */
    const handleMenuButton = () => {
        navbar.current.classList.toggle('flex')
        navbar.current.classList.toggle('hidden')
    }


    return (
        <nav className="bg-white py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">

                <div className="flex justify-between items-center">
                    <button className="px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" ref={toggle}>
                        <img className='md:ml-5' onClick={() => handleMenuButton()} src={menuicon} alt="menu icon" />
                    </button>
                    <img src={logo} alt="weware-logo" />
                    <button className="px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden md:mt-2" />
                </div>

                <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" ref={navbar}>
                    <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 mt-1 md:mt-0 md:ml-1 md:mb-0 mb-1">Home</a>
                    <a href="#" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 mt-1 md:mt-0 md:ml-1 md:mb-0 mb-1">About</a>
                    <a href="#" className="p-2 lg:px-2 md:mx-1 text-green-500 text-center rounded outline outline-offset-2 outline-green-500 mt-1 md:mt-0  md:ml-1">Get early access</a>
                </div>
            </div>
        </nav>
    )
}