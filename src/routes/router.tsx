import Mainlayout from "@/layout/Mainlayout";
import Tasks from "@/pages/Tasks";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,
        children:[
            {
                path: "/tasks",
                element: <Tasks/>
            }
        ]
    }
])