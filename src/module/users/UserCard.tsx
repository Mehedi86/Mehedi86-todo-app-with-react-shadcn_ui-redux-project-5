import { deleteUser } from '@/redux/features/user/userSlice';
import { useAppDispatch } from '@/redux/hook'
import type { IUser } from '@/types'
import React from 'react'

interface IProps {
    user: IUser
}

export default function UserCard({user}: IProps) {
    const dispatch = useAppDispatch();
  return (
    <div className='w-full p-4 border-2 flex justify-between my-1'>
        <h1>{user.name}</h1>
        <button onClick={()=> dispatch(deleteUser(user.id))} className='cursor-pointer p-2 shadow rounded'>Remove user</button>
    </div>
  )
}
