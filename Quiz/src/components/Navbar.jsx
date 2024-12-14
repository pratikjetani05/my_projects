import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo3.png'


export default function Navbar() {
    return (
        <header className="shadow-lg sticky z-50 top-0">
            <nav className="bg-orange-50 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex gap-0 items-center">
                        <img
                            src={logo}
                            className="mr-3 h-14"
                            alt="Logo"
                        />
                        <h1 className='text-black font-semibold'><strong className=' font-extrabold text-[25px] text-orange-500'>Quiz</strong> Maker</h1>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        
                        <Link
                            to="#"
                            className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                    </div>
                   
                </div>
            </nav>
        </header>
    );
}

