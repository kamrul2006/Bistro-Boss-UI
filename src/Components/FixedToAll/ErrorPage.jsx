import React from 'react';
import err from "../../assets/404.gif"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-10'>

            <img src={err} alt="404" className='w-1/2 mx-auto rounded-full' />

            <Link to={'/'}>
                <button className="btn btn-error">Go back to home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;