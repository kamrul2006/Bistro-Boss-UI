import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import HomeLayout from "./Layouts/HomeLayout";
import ContactUsLayout from "./Layouts/ContuctUsLayout";
import ErrorPage from "./Components/FixedToAll/ErrorPage";
import OurMenyLayout from "./Layouts/OurMenyLayout";
import OurShop from "./Layouts/OurShopLayout";
import LoginPage from "./Authentication/Users/Loginpage";
import SignupPage from "./Authentication/Users/SignupPage";
import PrivetRout from "./Authentication/Privet/Privetrought";



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
                element: <PrivetRout><OurMenyLayout /></PrivetRout>,
                loader: () => fetch('http://localhost:5000/menus')
            },
            {
                path: '/ourShop/:cata',
                element: <PrivetRout><OurShop /></PrivetRout>,
                loader: () => fetch('http://localhost:5000/menus')
            },
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <SignupPage />
    }
]);

export default router;


