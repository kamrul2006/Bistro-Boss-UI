import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaHome,
    FaCalendarAlt,
    FaHistory,
    FaShoppingCart,
    FaStar,
    FaBook,
    FaBars,
    FaPhone,
    FaUsers,
} from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import UseAdmin from "../../Hooks/UseAdmin";

const Sidebar = () => {

    // For responsive toggle
    const [isOpen, setIsOpen] = useState(false);

    // For check admin ar not
    const [isAdmin] = UseAdmin()

    // For active state
    const [activeItem, setActiveItem] = useState();

    useEffect(() => {
        if (isAdmin) {
            setActiveItem('Admin Home')
        }
        else {
            setActiveItem('User Home')
        }
    }, [])



    const toggleSidebar = () => setIsOpen(!isOpen);



    const menuItems = [
        { name: "User Home", icon: <FaHome />, path: "/dashboard/user" },
        { name: "Reservation", icon: <FaCalendarAlt />, path: "/dashboard/reservation" },
        { name: "Payment History", icon: <FaHistory />, path: "/dashboard/payment-history" },
        { name: "My Cart", icon: <FaShoppingCart />, path: "/dashboard/cart" },
        { name: "Add Review", icon: <FaStar />, path: "/dashboard/add-review" },
        { name: "My Booking", icon: <FaBook />, path: "/dashboard/my-booking" },
    ];

    const AdminMenuItems = [
        { name: "Admin Home", icon: <FaHome />, path: "/dashboard/admin" },
        { name: "Add Food", icon: <MdFoodBank />, path: "/dashboard/addFood" },
        { name: "Manege Items", icon: <TfiMenuAlt />, path: "/dashboard/ManegeItem" },
        { name: "Manage bookings", icon: <FaBook />, path: "/dashboard/ManegeBooking" },
        { name: "All Users", icon: <FaUsers />, path: "/dashboard/AllUsers" },
    ];

    const navItems = [
        { name: "Home", icon: <FaHome />, path: "/" },
        { name: "Menu", icon: <FaBars />, path: "/menu" },
        { name: "Shop", icon: <FaShoppingCart />, path: "/ourShop/salad" },
        { name: "Contact", icon: <FaPhone />, path: "/Contact" },
    ];

    return (
        <div className="sticky top-0">
            {/* Sidebar */}
            <div
                className={`bg-[#d4a657]  md:w-64 ${isOpen ? "w-6" : "w-16"
                    } min-h-screen transition-all duration-300 fixed md:static uppercase font-serif`}
            >

                <div className="p-4 flex items-center justify-between md:justify-start">
                    <h1
                        className={`text-2xl font-bold uppercase hidden md:block`}
                    >
                        Bistro Boss
                        <br />
                        {
                            isAdmin ? <span className="text-sm">Admin Home</span> :
                                <span className="text-sm">User Home</span>
                        }

                    </h1>

                    <button className="md:hidden -ml-3 text-white" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                </div>

                <div className={`${isOpen ? "hidden" : "block"
                    } transition-all duration-300 md:block`}>


                    <div className="mt-5">
                        {isAdmin ?
                            <ul>
                                {AdminMenuItems.map((item) => (
                                    <li
                                        key={item.name}
                                        className={`flex items-center gap-3 px-6 py-2 cursor-pointer ${activeItem === item.name ? "bg-[#c49c48] text-white" : "hover:bg-[#c49c48]"
                                            }`}
                                        onClick={() => setActiveItem(item.name)}
                                    >
                                        <Link to={item.path} className="flex items-center gap-3">
                                            {item.icon}
                                            <span className={`hidden md:block`}>
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul> :
                            <ul className="space-y-2">
                                {menuItems.map((item) => (
                                    <li
                                        key={item.name}
                                        className={`flex items-center gap-3 px-6 py-2 cursor-pointer ${activeItem === item.name ? "bg-[#c49c48] text-white" : "hover:bg-[#c49c48]"
                                            }`}
                                        onClick={() => setActiveItem(item.name)}
                                    >
                                        <Link to={item.path} className="flex items-center gap-3">
                                            {item.icon}
                                            <span className={`hidden md:block`}>
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>}
                    </div>


                    {/* ------------------common to all users------ */}
                    <div className="border-t border-white mt-6">
                        <ul className="mt-6 space-y-2">
                            {navItems.map((item) => (
                                <li
                                    key={item.name}
                                    className={`flex items-center gap-3 px-6 py-1 cursor-pointer ${activeItem === item.name ? "bg-[#c49c48]" : "hover:bg-[#c49c48]"
                                        }`}
                                    onClick={() => setActiveItem(item.name)}
                                >
                                    <Link to={item.path} className="flex items-center gap-3">
                                        {item.icon}
                                        <span className={`${isOpen ? "block" : "hidden"} md:block`}>
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
