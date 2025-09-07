import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AddTaskMOdal } from '@/module/tasks/AddTaskModal';
import TaskCard from '@/module/tasks/TaskCard';
import { selectTask, updateFilter } from '@/redux/features/task/taskSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import React from 'react'

export default function Tasks() {
  const tasks = useAppSelector(selectTask);
  const dispatch = useAppDispatch();
  console.log(tasks)
  return (
    <div className='max-w-7xl mx-auto p-4 my-2'>
      <div className='flex justify-between items-center'>
        <h1>Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList  className='w-full grid grid-cols-4'>
            <TabsTrigger onClick={()=> dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskMOdal />
      </div>
      {tasks.map((task) =>
        <TaskCard key={task.id}
          task={task} />)}
    </div>
  )
}
