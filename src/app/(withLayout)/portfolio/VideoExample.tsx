'use client'
import React, { useEffect, useState } from 'react';
import success from '@/assets/images/social-success.png';
import Image from 'next/image';
import reviewVideo from '@/assets/videos/reviewVideo.mp4'
import { FaPlay } from "react-icons/fa";
import Aos from 'aos';
const VideoDemo = () => {
    const [condition, setCondition] = useState<boolean>(false);


    const videoData = [
        {
            id: 1,
            src: reviewVideo,
            title: "Health and Wealth",
        },
        {
            id: 2,
            src: reviewVideo,
            title: "Financial Service",
        },
        {
            id: 3,
            src: reviewVideo,
            title: "Real State",
        },
        {
            id: 4,
            src: reviewVideo,
            title: "Home Service",
        },

    ];

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });

    }, []);


    return (
        <section id='reviews' className=' lg:px-28 pt-20 md:px-12 px-5'>
            <div className="flex flex-wrap justify-start items-center gap-5">
                <h1 className="md:text-5xl text-3xl poppins-bold flex items-center gap-3">
                    Short Videos
                    <Image className="my-auto" width={160} src={success} alt="page" />
                    
                </h1>
                <h1 className="md:text-5xl text-3xl poppins-bold text-primary">Instagram</h1>
            </div>


            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-9 gap-5  justify-center my-10'>
                {videoData.map((video) => (
                    <div key={video.id} data-aos="fade-down" className='relative w-fit mx-auto'>
                        <video className='border-2 lg:h-80  lg:w-60 md:w-52 w-40  object-cover rounded-xl' controls={condition} autoPlay={condition}>
                            <source src={video.src} type="video/mp4" />
                        </video>
                        <button onClick={() => setCondition(true)} hidden={condition} className='backdrop-blur-3xl text-4xl p-8 rounded-full text-white absolute left-1/4 top-[35%]'><FaPlay /></button>
                        <p className='text-center'>{video.title}</p>
                    </div>
                ))}


            </div>


        </section>
    );
};

export default VideoDemo;