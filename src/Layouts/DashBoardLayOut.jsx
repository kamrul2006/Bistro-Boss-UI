import React, { useEffect } from 'react';
import Sidebar from '../Components/Dashboard/SideBar';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/FixedToAll/NavBar';

const DashBoardLayOut = () => {
    useEffect(() => {
        document.title = "BISTROBoss || DashBoard"
    }, [])

    return (
        <div>
            <div className='grid grid-cols-5'>

                <div className='col-span-1'>
                    <Sidebar />
                </div>

                <div className='col-span-4'>
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default DashBoardLayOut;