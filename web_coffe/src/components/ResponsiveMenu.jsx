import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveMenu = ({ open, setOpen }) => {
    return (
        <div className={`${open ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 x-30 flex h-screen w-[75%] flex-col justify-between bg-[rgb(217,217,217)] px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
            <div>
                <nav className='mt-12'>
                    <ul className='flex flex-col gap-7 text-lg font-semibold text-white'>
                       <Link to="/"><button className='text-black px-3 py-2 rounded-md hover:bg-[rgb(217,217,217)] hover:text-white hover:bg-black'>Home</button></Link>
                       <Link to="/menu"><button className='text-black px-3 py-2 rounded-md hover:bg-[rgb(217,217,217)] hover:text-white hover:bg-black'>Menu</button></Link>
                       <Link to="/About"><button className='text-black px-3 py-2 rounded-md hover:bg-[rgb(217,217,217)] hover:text-white hover:bg-black'>About</button></Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ResponsiveMenu
