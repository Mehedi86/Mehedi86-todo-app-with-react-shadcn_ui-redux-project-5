import type { IUser } from '@/types'
import React from 'react'

interface IProps {
    user: IUser
}

export default function UserCard({user}: IProps) {
  return (
    <div className='w-full p-4 border-2 flex justify-between my-1'>
        <h1>{user.name}</h1>
        <h1>Remove user</h1>
    </div>
  )
}
