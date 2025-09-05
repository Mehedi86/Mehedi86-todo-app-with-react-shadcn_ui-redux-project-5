import type { Itask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";



interface InitialState {
    tasks: Itask[];
    filter: "all" | "low" | "Medium" | "High";
}

const initialState: InitialState = {
    tasks: [
        {
            id: "skldjfoidswej",
            isCompleted: false,
            title: 'osiflkwjeiy',
            description: 'sdofywpoe;weko;lskdhjpoewiuproljkwe3n',
            priority: 'medium',
            due_date: '10.6.25'
        }
    ],
    filter: 'all'
}

type draftTask = Pick<Itask, "title" | "description" | "due_date" | "priority">

const createTask = (taskData: draftTask): Itask => {
    return {
        id: nanoid(),
        isCompleted: false,
        ...taskData
    }
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Itask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            console.log(action)
            state.tasks.forEach((task) => task.id === action.payload ? task.isCompleted = !task.isCompleted : task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        updateTask: (state, action: PayloadAction<{id:string, data:Partial<Itask>}>) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if(task){
                Object.assign(task, action.payload.data)
            }
            
        }
    }
})

export const { addTask, toggleCompleteState, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;