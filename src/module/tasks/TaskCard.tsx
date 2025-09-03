import { cn } from '@/lib/utils';
import type { Itask } from '@/types';
import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

interface IProps {
        task : Itask
    }

export default function TaskCard({task} : IProps) {
    console.log(task)
    return (
        <div className='border border-neutral-600 my-2 space-y-4 px-2 '>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    {/* indicator sign */}
                    <div className={cn("w-3 h-3 rounded-full", {"bg-green-500": task.priority === 'Low',
                        "bg-yellow-500": task.priority === 'Medium', "bg-red-500": task.priority === 'High'
                    })}></div>
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
