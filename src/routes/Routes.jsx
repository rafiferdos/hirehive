import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <div>404 Not Found</div>,
        children: [
            {
                path: "/",
                element: <div>Home</div>
            },
            {
                path: "/about",
                element: <div>About</div>
            }
        ]
    }
])

export default router 