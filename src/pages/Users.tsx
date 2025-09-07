import { AddUserModal } from '@/module/users/AddUserModal'
import UserCard from '@/module/users/UserCard'
import { selectUsers } from '@/redux/features/user/userSlice'
import { useAppSelector } from '@/redux/hook'


export default function Users() {
  const users = useAppSelector(selectUsers);
  console.log(users)
  return (
    <div className='max-w-7xl mx-auto p-4'>
      <div className='flex justify-between items-center my-2'>
        <h1>Users</h1>
        <AddUserModal />
      </div>
      {users.map((user) =>
        <UserCard key={user.id}
          user={user} />)}
    </div>
  )
}
