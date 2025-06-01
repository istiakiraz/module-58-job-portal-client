import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>,
                loader: () => fetch('http://localhost:3000/jobs')
            },
            {
               path: 'register',
               Component: Register,
            },
            {
                path: "signin",
                Component: SignIn
            }
        ]
    }
])