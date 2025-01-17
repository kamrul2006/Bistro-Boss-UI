import { Outlet } from "react-router-dom";
import Footer from "../Components/FixedToAll/Footer";
import NavBar from "../Components/FixedToAll/NavBar";
import Navbar from "../Authentication/Practise";

const RootLayout = () => {
    return (
        <div >
            <NavBar />

            <div className="max-w-7xl mx-auto mt-16">
                <Outlet />

            </div>

            <Footer />


        </div>
    );
};

export default RootLayout;