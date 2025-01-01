import { Outlet } from "react-router-dom";
import Footer from "../Components/FixedToAll/Footer";
import NavBar from "../Components/FixedToAll/NavBar";

const RootLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar />

            <Outlet />

            <Footer />

        </div>
    );
};

export default RootLayout;