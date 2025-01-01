import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import HomeLayout from "./Layouts/HomeLayout";
import ContuctUsLayout from "./Layouts/ContuctUsLayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <h1>error</h1>,
        children: [
            {
                path: '/',
                element: <HomeLayout />
            },
            {
                path: '/Contact',
                element: <ContuctUsLayout />
            },
        ]
    },
]);

export default router;


