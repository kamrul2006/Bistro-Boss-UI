import React, { useContext, useEffect, useState } from "react";
import { FaGoogle, FaFacebook, FaGithub, FaEyeSlash, FaEye } from "react-icons/fa";
import bg from "../../assets/others/authentication.png"
import ill from "../../assets/others/authentication1.png"

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const LoginPage = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const [show, setShow] = useState(false)
    const ShowPassWord = (e) => {
        e.preventDefault();
        setShow(!show)
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const navigate = useNavigate()

    //---------- Context use----------------------

    const { LoginUser, setUser, GoogleLogin } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        let user_captcha_value = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha_value) == true) {
            alert('Captcha Matched');
        }
        else {
            alert('Captcha Does Not Match');
            return;
        }

        //-------------------------login with email and password--------------------
        LoginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                setSuccess('Sign Up Successful.')
                navigate(location.state ? location.state : '/')
            })
            .catch((error) => {
                // console.log(error)
                // navigate(location.state ? location.state : '/')
                if (error) { setError('Password or Email is invalid..!') }
            });
    }

    //------------------- HAndle google--------------
    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then((res) => {
                // console.log(res.user)
                setUser(res.user)
                setSuccess('Sign Up Successful.')
                navigate(location.state ? location.state : '/')
            })
            .catch(err => {
                // console.log(err);
                setUser(null)
            })
    }



    return (
        <div className="flex items-center justify-center min-h-screen py-10 bg-gray-100" style={{ background: `url(${bg})` }} >
            <div className="bg-white shadow-xl border border-black rounded-lg flex overflow-hidden w-4/5 max-w-4xl" style={{ background: `url(${bg})` }} >
                {/* Left Side */}
                <div className="w-1/2  flex items-center justify-center" >
                    <img
                        src={ill}
                        alt="Login Illustration"
                        className="w-3/4"
                    />
                </div>

                {/* Right Side */}
                <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                                placeholder="Type here"
                                required
                            />
                        </div>
                        {/* Password Field */}
                        <div className="relative">
                            <label className="my-1 text-sm font-semibold">
                                Password
                            </label>
                            <input
                                type={show ? "text" : "password"}
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 text-black border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                                placeholder="Enter Password. "
                                required
                            />

                            <button onClick={ShowPassWord} className="btn btn-ghost btn-xs absolute right-3 top-8 text-lg text-black">
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>


                        <div className="p-4 bg-white rounded-xl">
                            <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
                                Captcha
                            </label>
                            <div className="flex items-center justify-between">
                                {/* <span className="font-mono text-lg text-gray-800">UAg1uo</span> */}
                                <LoadCanvasTemplate />
                            </div>


                            <input
                                type="text"
                                // id="captcha"
                                id="user_captcha_input"
                                // onChange={doSubmit}
                                className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                                placeholder="Type here"
                            />
                        </div>

                        {error && <p className="text-xs font-semibold text-red-500 text-center">{error}</p>}
                        {success && <p className="text-xs font-semibold text-green-500 text-center">{success}</p>}

                        <button
                            type="submit"
                            className="w-full py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-medium rounded-md"
                        >
                            Sign in
                        </button>
                    </form>


                    <p className="mt-4 text-center text-sm text-gray-600">
                        New here?{" "}
                        <a href="/register" className="text-yellow-500 hover:underline hover:font-bold">
                            Create a New Account
                        </a>
                    </p>
                    <div className="mt-2 text-center">
                        <p className="text-sm text-gray-600">Or sign in with</p>

                        <div className="flex justify-center space-x-4 mt-2">
                            <button onClick={HandleGoogleLogin} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                                <FaGoogle className="text-red-500 text-xl" />
                            </button>
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                                <FaFacebook className="text-blue-500 text-xl" />
                            </button>
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                                <FaGithub className="text-gray-800 text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
