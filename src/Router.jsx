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
import DashBoardLayOut from "./Layouts/DashBoardLayOut";
import MyCarts from "./Components/Dashboard/MyCart";
import AllUsers from "./Components/Dashboard/AdminTools/AllUsers";
import AdminPrivet from "./Authentication/Privet/AdminPrivet";
import AddMenuItem from "./Components/Dashboard/AdminTools/AddMenuItems";
import AddItems from "./Components/Dashboard/AdminTools/AddItems";



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
        path: '/dashboard',
        element: <PrivetRout><DashBoardLayOut /></PrivetRout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard/user",
                element: < div > User Home</div>
            },
            {
                path: "/dashboard/reservation",
                element: < div > Reservation</div >
            },
            {
                path: "/dashboard/payment-history",
                element: < div > Payment History</div >
            },
            {
                path: "/dashboard/cart",
                element: <PrivetRout><MyCarts /></PrivetRout>
            },
            {
                path: "/dashboard/add-review",
                element: < div > Add Review</div >
            },
            {
                path: "/dashboard/my-booking",
                element: < div > My Booking</div >
            },
            // ------------------for admin--------------
            {
                path: "/dashboard/admin",
                element: <AdminPrivet>< div > a h</div ></AdminPrivet>
            },
            {
                path: "/dashboard/addFood",
                // element: <AdminPrivet><AddMenuItem /></AdminPrivet>
                element: <AdminPrivet><AddItems/></AdminPrivet>
            },
            {
                path: "/dashboard/ManegeItem",
                element: <AdminPrivet>< div > My Booking</div ></AdminPrivet>
            },
            {
                path: "/dashboard/ManegeBooking",
                element: <AdminPrivet>< div > My Booking</div ></AdminPrivet>
            },
            {
                path: "/dashboard/AllUsers",
                element: <AdminPrivet><AllUsers /></AdminPrivet>,
                loader: () => fetch('http://localhost:5000/users')
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


