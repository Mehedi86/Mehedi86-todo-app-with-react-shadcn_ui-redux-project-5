import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    task: {
        id: "jflskjf",
        title: "Initialize or init",
        description: "Create home page and route",
        due_date: "2025/11/25",
        isCOmpleted: false,
        priority: 'High'
    }
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export default taskSlice.reducer;