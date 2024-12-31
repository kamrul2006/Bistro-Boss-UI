import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <h1>error</h1>,
        children: [
            {
                path: '/',
                element:<div>home page</div>
            },
        ]
    },
]);

export default router;


