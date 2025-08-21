import React from 'react'
import { RiTaskFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <nav className='max-w-7xl mx-auto h-16 flex items-center gap-3 px-5'>
            <div className='flex items-center'>
                < RiTaskFill size={40}/>
                <h1>Task Manager</h1>
            </div>
        </nav>
    )
}

export default Navbar