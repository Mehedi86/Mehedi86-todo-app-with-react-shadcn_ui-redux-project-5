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
        }
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export default taskSlice.reducer;