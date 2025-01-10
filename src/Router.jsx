import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import HomeLayout from "./Layouts/HomeLayout";
import ContactUsLayout from "./Layouts/ContuctUsLayout";
import ErrorPage from "./Components/FixedToAll/ErrorPage";
import OurMenyLayout from "./Layouts/OurMenyLayout";
import OurShop from "./Layouts/OurShopLayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomeLayout />,
                loader: () => fetch('http://localhost:5000/menus')

            },
            {
                path: '/Contact',
                element: <ContactUsLayout />
            },
            {
                path: '/menu',
                element: <OurMenyLayout />,
                loader: () => fetch('http://localhost:5000/menus')
            },
            {
                path: '/ourShop/:cata',
                element: <OurShop />,
                loader: () => fetch('http://localhost:5000/menus')
            },
        ]
    },
]);

export default router;


