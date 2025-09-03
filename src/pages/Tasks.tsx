import TaskCard from '@/module/tasks/TaskCard';
import { useAppSelector } from '@/redux/hook'
import React from 'react'

export default function Tasks() {
  const tasks = useAppSelector((state) => state.todo.tasks);
  console.log(tasks)
  return (
    <div className='max-w-7xl mx-auto p-4'>
      {tasks.map((task, idx) => <TaskCard key={idx}  task={task}/>)}
    </div>
  )
}
