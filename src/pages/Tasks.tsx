import { useAppSelector } from '@/redux/hook'
import React from 'react'

export default function Tasks() {
  const  tasks = useAppSelector((state)=>state.todo.tasks);
  console.log(tasks)
  return (
    <div>
        This is tasks page
    </div>
  )
}
