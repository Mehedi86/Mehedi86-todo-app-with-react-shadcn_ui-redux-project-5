import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    users: IUser[]
}

const initialState: InitialState = {
    users: [
        {
            id: 'jd;slksjd;flsd',
            name: 'Faysal Hossain'
        },
        {
            id: 'jd;slksjd;flsdsd',
            name: 'Amir Hossain'
        },
        {
            id: 'jd;slksjd;flsdesds',
            name: 'Iqbal Hossain'
        }
    ]
}

type draftUser = Pick<IUser, "name">

const createUser = (userData: draftUser): IUser => {

    return { id: nanoid(), ...userData }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            const userData = createUser(action.payload);
            state.users.push(userData)
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    }
})

export const selectUsers = (state: RootState) => state.user.users;

export const {addUser, deleteUser} = userSlice.actions;

export default userSlice.reducer