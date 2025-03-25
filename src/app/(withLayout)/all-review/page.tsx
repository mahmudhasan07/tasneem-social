'use client'
import React, { useEffect } from 'react';
import '../../../Components/Banner/Banner.css';
import banner1 from '@/assets/images/banner_1.png';
import banner2 from '@/assets/images/banner_2.png';
import banner3 from '@/assets/images/banner_3.png';
import banner4 from '@/assets/images/banner_4.png';

import banner_content1 from '@/assets/images/banner-content1.png';
import banner_content2 from '@/assets/images/banner-content2.png';
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';

import Ellipse from '@/Components/UI/Ellipse/Ellipse';
import WorkingWithBusiness from '@/Components/common/WorkingWithBusiness/WorkingWithBusiness';
import Button from '@/Components/UI/Button/Button';
import Clients from '@/Components/Clients/Clients';
import AOS from 'aos';

import OurPartner from '@/Components/OurPartner/OurPartner';
import Faq from '@/Components/Faq/Faq';



const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

    }, []);

   

    return (
        <div >
            <section className='container mx-auto lg:py-20 py-10 lg:px-28 md:px-12 px-5'>
                <Ellipse className='absolute -left-24 top-72' width={550}></Ellipse>
                <div>
                    <div className='bg-white w-fit relative rounded-xl text-gray-700 border px-4 py-1 mb-3'>
                        <WorkingWithBusiness />
                    </div>
                    <div id='main_content' className='flex flex-wrap gap-5 justify-between'>
                        <div id='banner_left' data-aos="fade-right" className='lg:w-[47%] my-auto '>
                            <h1 className='md:text-5xl text-3xl poppins-semibold md:leading-tight leading-snug'>Manage <span id='social'>Content</span><br /> <span id='management'>review properly</span> starting at <span className='text-red-600'>$99</span>/month.</h1>

                            <p className='md:text-lg my-5'>
                                Tailored social media content of the highest quality, crafted for <br />
                                your business. Shared on your channels only upon your approval.
                            </p>
                            <div className='flex md:gap-7 flex-wrap gap-5 z-20'>
                                <Button>Get start now</Button>
                                <button className='rounded-[24px] bg-white px-7 py-2  text-primary border-primary border hover:shadow-lg hover:scale-105 transition-all'>Book a demo</button>
                            </div>
                        </div>
                        <div id='banner_right' data-aos="fade-left" className='flex gap-5 lg:w-[47%]'>
                            <div className='my-auto space-y-6'>
                                <Image width={250} src={banner1} alt='banner1'></Image>
                                <Image width={250} src={banner2} alt='banner2'></Image>
                            </div>
                            <div className='my-auto relative w-fit'>
                                <Image width={250} src={banner3} alt='banner3'></Image>
                                <div id='banner-content' className='absolute bottom-0 pt-10 rounded-xl'>
                                    <Image width={200} className='mx-auto px-4 pb-6' src={banner_content2} alt='banner4' />
                                    <button className='flex bg-[#3A3A3A] w-full justify-center py-2 rounded-xl text-white'>Live chat <FaArrowRight className='my-auto' /></button>
                                </div>
                            </div>
                            <div className='my-auto space-y-6 relative'>
                                <Image width={250} src={banner4} alt='banner4'></Image>
                                <div className='absolute top-0'>
                                    <Image width={200} className='mx-auto px-4 ' src={banner_content1} alt='banner4' />
                                </div>
                                <Image width={250} src={banner2} alt='banner2'></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <Ellipse className='absolute lg:block hidden right-28 rotate-180 -bottom-32' width={600}></Ellipse>
            </section>
            <Clients />

            <div className='container mx-auto'>
                <OurPartner />
                <Faq/>
            </div>
        </div>
    );
};

export default Page;
