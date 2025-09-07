import type { RootState } from "@/redux/store";
import type { Itask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";



interface InitialState {
    tasks: Itask[];
    filter: "all" | "low" | "medium" | "high";
}

const initialState: InitialState = {
    tasks: [
        {
            id: "skldjfoidswej",
            isCompleted: false,
            title: 'osiflkwjeiy',
            description: 'sdofywpoe;weko;lskdhjpoewiuproljkwe3n',
            priority: 'medium',
            due_date: '10.6.25',
            assingnedTo: 'Amir Hossain'
        }
    ],
    filter: 'all'
}

type draftTask = Pick<Itask, "title" | "description" | "due_date" | "priority"| "assingnedTo">

const createTask = (taskData: draftTask): Itask => {
    return {
        ...taskData,
        id: nanoid(),
        isCompleted: false,
        assingnedTo: taskData.assingnedTo ? taskData.assingnedTo : null
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
        updateTask: (state, action: PayloadAction<{ id: string, data: Partial<Itask> }>) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) {
                Object.assign(task, action.payload.data)
            }

        },
        updateFilter: (state, action: PayloadAction<"all" | "low" | "medium" | "high">) => {
            state.filter = action.payload;
        }
    }
})

export const selectTask = (state: RootState) => {
    const filter = state.todo.filter;
    if (filter === 'low') {
        return state.todo.tasks.filter(task => task.priority === "low")
    }
    else if (filter === 'medium') {
        return state.todo.tasks.filter(task => task.priority === "medium")
    }
    else if (filter === 'high') {
        return state.todo.tasks.filter(task => task.priority === "high")
    }
    else {
        return state.todo.tasks
    }
}

export const { addTask, toggleCompleteState, deleteTask, updateTask, updateFilter } = taskSlice.actions;

export default taskSlice.reducer;