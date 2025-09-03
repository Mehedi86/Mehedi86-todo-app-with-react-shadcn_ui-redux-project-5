import type { Itask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    tasks: Itask[];
}

const initialState: InitialState = {
    tasks: [
        {
            id: 'gfkjslfd',
            title: 'learning redux',
            description: 'learning redux is not very hard',
            due_date: '15/12/25',
            isCOmpleted: false,
            priority: 'High'
        },
        {
            id: 'gfkjslfd',
            title: 'learning redux with react',
            description: 'learning redux is not very hard but we need to consistant in learning',
            due_date: '15/12/25',
            isCOmpleted: false,
            priority: 'High'
        },
        {
            id: 'gfkjslfd',
            title: 'Next step learn Prisma',
            description: 'learning redux is not very hard but we need to consistant in learning',
            due_date: '15/12/25',
            isCOmpleted: false,
            priority: 'Medium'
        },
        {
            id: 'gfkjslfd',
            title: 'Next step learn Prisma',
            description: 'learning redux is not very hard but we need to consistant in learning',
            due_date: '15/12/25',
            isCOmpleted: false,
            priority: 'Low'
        }


    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export default taskSlice.reducer;