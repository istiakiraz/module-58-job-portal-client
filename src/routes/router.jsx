import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>
            },
            {
               path: 'register',
               Component: Register,
               

            }
        ]
    }
])