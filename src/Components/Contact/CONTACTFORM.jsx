import React from 'react';
import HeadingTitle from '../Share/HeadingTitle';
import { FaPaperPlane } from 'react-icons/fa';

const CONTACTFORM = () => {
    return (
        <div>
            <HeadingTitle subHeading={"Send Us a Message"} heading={"CONTACT FORM"}></HeadingTitle>

            <div className="flex justify-center items-center min-h-screen bg-gray-100 md:mx-20">
                <div className="w-full md:w-10/12 p-8 rounded-lg shadow-md">
                    <form className="space-y-4">

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Enter your phone number"
                                className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message<span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                placeholder="Write your message here"
                                rows="4"
                                className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="captcha"
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="captcha" className="ml-2 text-sm text-gray-600">
                                I'm not a robot
                            </label>
                        </div>

                        <div className='mx-auto flex justify-center'>
                            <button
                                type="submit"
                                className="w-fit bg-yellow-600 text-white font-semibold py-2 px-4 hover:bg-yellow-700 transition duration-300 mx-auto flex items-center gap-2"
                            >
                                Send Message <FaPaperPlane />
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default CONTACTFORM;