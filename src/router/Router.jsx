import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import Register from "../Register/Register";
import News from "../pages/news/News";
import PrivetRouter from "./PrivetRouter";



const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch('/news.json')
                
            },
            {
                path:"/news/:id",
                element: <PrivetRouter><News></News></PrivetRouter>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])
export default router