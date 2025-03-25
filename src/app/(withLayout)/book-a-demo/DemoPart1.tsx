'use client'
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/images/raaya_logo.png'
import Link from 'antd/es/typography/Link';

const DemoPart1 = () => {

    const navigation = [
        { label: 'Home', route: '/' },
        { label: 'Services', route: '/services' },
        { label: 'Portfolio', route: '/#portfolio' },
        { label: 'Reviews', route: '/#reviews' },
        { label: 'Pricing', route: '/pricing' },
        { label: 'White level', route: '/white-level' }
    ];

    return (
        <div className="rounded-3xl h-fit bg-white p-6 lg:w-[550px] lg:min-w-80 w-full">

            <Image src={logo} alt="Raaya Social Logo" className=" mb-6 w-32" />

            <h1 className="lg:text-5xl md:text-4xl text-3xl mb-4 poppins-medium">Let’s with Roya Social?</h1>

            <p className="text-gray-600  text-sm mb-6">
                Raaya Social Takes Care Of Your Social Media Posts For A Flat Monthly Price. Quality Content, Posted To All Your Social Media Channels. Take Your Socials To The Next Level:
            </p>


            <div className="flex items-center mb-4">
                <span className="material-icons text-gray-500 mr-2">schedule</span>
                <p className="text-gray-700 text-sm">20 Min Free 20 Min Google Meet Call</p>
            </div>
            <div className="flex items-center mb-6">
                <span className="material-icons text-gray-500 mr-2">event</span>
                <p className="text-gray-700 text-sm">12.00am - 12.00am, Monday, 21 Aug 2024</p>
            </div>

            <div className="mt-4">
                <h2 className="text-gray-800 font-semibold mb-2">Relevant Links</h2>
                <ul className="space-y-2 flex flex-col">
                    {
                        navigation.map((item, index) => {
                            return <Link key={index} ><li className={"poppins-semibold underline"}>{item.label}</li></Link>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default DemoPart1;