import Mainlayout from "@/layout/Mainlayout";
import Home from "@/pages/Home";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/tasks",
                element: <Tasks/>
            },
            {
                path: "/users",
                element: <Users/>
            }
        ]
    }
])