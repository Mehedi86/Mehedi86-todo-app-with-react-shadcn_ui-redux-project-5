import type { Itask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState  {
    task : Itask[]
}

const initialState: InitialState = {
    task: [
        
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export default taskSlice.reducer;