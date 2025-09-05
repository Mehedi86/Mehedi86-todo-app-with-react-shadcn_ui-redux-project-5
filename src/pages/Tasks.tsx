import { AddTaskMOdal } from '@/module/tasks/AddTaskModal';
import TaskCard from '@/module/tasks/TaskCard';
import { useAppSelector } from '@/redux/hook'
import React from 'react'

export default function Tasks() {
  const tasks = useAppSelector((state) => state.todo.tasks);
  console.log(tasks)
  return (
    <div className='max-w-7xl mx-auto p-4'>
      <div className='flex justify-between items-center'>
        <h1>Tasks</h1>
        <AddTaskMOdal/>
      </div>
      {tasks.map((task) =>
        <TaskCard key={task.id}
          task={task} />)}
    </div>
  )
}
