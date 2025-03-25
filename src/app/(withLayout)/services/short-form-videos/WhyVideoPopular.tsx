import Image from 'next/image';
import React from 'react';
import images from '@/assets/images/popular-video.png'
import Button from '@/Components/UI/Button/Button';

const WhyVideoPopular = () => {
    return (
        <section className='lg:py-12 py-8 lg:px-28 md:px-12 px-5'>
            <div className='flex gap-12'>
                <Image src={images} width={400} alt='image'></Image>
                <div className='space-y-5 my-auto'>
                    <h1 className='lg:text-5xl md:text-4xl text-3xl poppins-semibold' >Why is short-form video so popular?</h1>
                    <p>Video content in the short form is not new. In actuality, the 2012-released short-form video app Vine was a pioneer of the genre</p>
                    <p>But as tech giants like Instagram, TikTok, and YouTube launched short-form video features of their own, what had initially been a niche platform grew into something much larger.</p>
                    <Button>Book a demo</Button>
                </div>
            </div>
        </section>
    );
};

export default WhyVideoPopular;