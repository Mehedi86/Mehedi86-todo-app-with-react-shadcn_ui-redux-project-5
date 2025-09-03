import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

export default function TaskCard() {
    return (
        <div className='border border-neutral-600 my-2 space-y-4 px-2 '>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    {/* indicator sign */}
                    <div className='bg-green-700 w-4 h-4 rounded-full'></div>
                    <h2>Task Name</h2>
                </div>
                <div className='flex items-center gap-2'>
                    {/* delete button */}
                    <span><RiDeleteBin6Line /></span>
                    <input type="checkbox" />
                </div>
            </div>
            <div>
                <h2>Task Details in the paragraph</h2>
            </div>
        </div>
    )
}
