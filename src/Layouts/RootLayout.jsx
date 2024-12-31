import { Outlet } from "react-router-dom";
import Footer from "../Components/FixedToAll/Footer";

const RootLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1>Nav bar</h1>

            <Outlet />

            <Footer />

        </div>
    );
};

export default RootLayout;