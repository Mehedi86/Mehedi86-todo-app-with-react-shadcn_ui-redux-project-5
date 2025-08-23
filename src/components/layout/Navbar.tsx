import React from 'react'
import { RiTaskFill } from "react-icons/ri";
import { Link } from 'react-router';
import { ModeToggle } from '../ModeToggle';

const Navbar = () => {
    return (
        <nav className='max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5 border'>
            {/* left side logo */}
            <div className='flex items-center'>
                < RiTaskFill size={40} />
                <h1>Task Manager</h1>
            </div>
            {/* middle side nav items */}
            <div>
                <Link to="/tasks">Tasks</Link>

            </div>

            {/* right side items */}
            <div className='flex gap-4 items-center'>
                <div>
                    <ModeToggle />
                </div>
                <Link to="/tasks">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar