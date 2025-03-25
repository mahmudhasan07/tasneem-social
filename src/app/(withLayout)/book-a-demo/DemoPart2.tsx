'use client'
import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useDispatch } from 'react-redux';
import './Demo.css'
import { BookDemoInterFace } from '@/utils/Interfaces';
import { AppDispatch } from '@/Redux/Store';
import { BookDemo } from '@/Redux/ReduxFunctions';
import { ToastContainer } from 'react-toastify';
import ShowToastify from '@/utils/ShowToastify';
// import { BookDemo } from '@/Redux/ReduxFunctions';

const DemoPart2 = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [phone, setPhoneNumber] = useState<string>();
    const [schedule, setSchedule] = useState<string>('Schedule a chat');



    const handleBookDemo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSchedule("Creating a schedule....")
        const formData = new FormData(e.currentTarget);
        const data: BookDemoInterFace = {
            firstName: formData.get('first-name') as string,
            lastName: formData.get('last-name') as string,
            email: formData.get('email') as string,
            phoneNumber: phone as string,
            selectDateTime: new Date(`${formData.get('date')} ${formData.get('time')}` as string),
            websiteUrl: formData.get('website-url') as string,
            reasonOfCall: formData.get('reason-of-call') as string,
            shortPitch: formData.get("pitch") as string,
            message: formData.get("message") as string,
        }

        console.log(data);



        dispatch(BookDemo({ data }))
            .then(res => {
                console.log(res);
                if ('payload' in res && res.payload) {
                    ShowToastify({ success: 'Demo Booked Successfully' })
                    setSchedule("Schedule a chat")

                }
                if ('error' in res && res.error) {
                    ShowToastify({ error: res?.error.message })
                    setSchedule("Schedule a chat")
                }


            })

    }


    return (
        <div>
            <div className=" p-6 bg-white shadow-lg lg:w-[650px] lg:min-w-[550px] w-full rounded-3xl">
                <h2 className="text-2xl poppins-medium mb-6">Enter details</h2>
                <form onSubmit={handleBookDemo}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First name</label>
                            <input
                                type="text"
                                placeholder="First name"
                                name='first-name'
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last name</label>
                            <input
                                type="text"
                                name="last-name"
                                required
                                placeholder="Last name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email address</label>
                            <input
                                type="email"
                                required
                                name="email"
                                placeholder="Enter your email address"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone number</label>
                            <div className="flex items-center mt-1">
                                <PhoneInput
                                    className='border border-gray-300 px-3 py-2 w-full rounded-lg input-phone-number'
                                    defaultCountry="RU"
                                    value={phone}
                                    required
                                    onChange={setPhoneNumber} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date</label>
                            <input
                                type="date"
                                placeholder='Enter your date'
                                name="date"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Time</label>
                            <input
                                type="time"
                                name='time'
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Your website URL</label>
                        <input
                            type="url"
                            name="website-url"
                            required
                            placeholder="Enter your business URL"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Why are you interested in a call?
                        </label>
                        <textarea
                            placeholder="Write the reason for call"
                            name='reason-of-call'
                            required
                            className="mt-1 block w-full px-3 py-2 h-22 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Write a short pitch</label>
                        <textarea
                            placeholder="Write a short pitch that describes you well!"
                            name='pitch'
                            required
                            className="mt-1 block w-full px-3 py-2 h-32 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Write a message</label>
                        <textarea
                            placeholder="Write a message to us!"
                            name='message'
                            required
                            className="mt-1 block w-full px-3 py-2 border h-32 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>
                    </div>
                    <div className='w-full'>
                        <button id='button' className='rounded-lg mt-7 px-7 py-2 w-full text-white'>{schedule}</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DemoPart2;