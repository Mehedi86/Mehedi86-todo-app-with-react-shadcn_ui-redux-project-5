import { cn } from '@/lib/utils';
import { deleteTask, toggleCompleteState} from '@/redux/features/task/taskSlice';
import { useAppDispatch } from '@/redux/hook';
import type { Itask } from '@/types';

import { RiDeleteBin6Line } from "react-icons/ri";

import { UpdateTaskModal } from './UpdateTaskModal';


interface IProps {
    task: Itask
}

export default function TaskCard({ task }: IProps) {
    const dispatch = useAppDispatch()
    return (
        <div className='border border-neutral-600 my-2 space-y-4 px-2 '>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    {/* indicator sign */}
                    <div className={cn("w-3 h-3 rounded-full", {
                        "bg-green-500": task.priority === 'low',
                        "bg-yellow-500": task.priority === 'medium', "bg-red-500": task.priority === 'high'
                    })}></div>
                    <h2 className={cn({ 'line-through': task.isCompleted })}>{task.title}</h2>
                </div>
                <div className='flex items-center gap-2'>
                    {/* update button */}
                    <UpdateTaskModal task={task} />
                    {/* delete button */}
                    <button className='cursor-pointer' onClick={() => dispatch(deleteTask(task.id))}><RiDeleteBin6Line /></button>
                    <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={() => dispatch(toggleCompleteState(task.id))}
                    />
                </div>
            </div>
            <div>
                <h2>{task.description}</h2>
            </div>
        </div>
    )
}
