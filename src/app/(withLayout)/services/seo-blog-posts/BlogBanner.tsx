"use client";
import Image from "next/image";
import React from "react";
import Button from "../../../../Components/UI/Button/Button";
import WorkingWithBusiness from "../../../../Components/common/WorkingWithBusiness/WorkingWithBusiness";
import Ellipse from "../../../../Components/UI/Ellipse/Ellipse";
import blog1 from "@/assets/images/blogBanner1.png";
import blog2 from "@/assets/images/blogBanner2.png";
import BaseButton from "../../../../Components/UI/Button/Basebutton";
import linkedin from '@/assets/images/linkdin.png'
import youtube from '@/assets/images/youtube.png'
import facebook from '@/assets/images/facebook.png'
import twiter from '@/assets/images/twiter.png'
import instagram from '@/assets/images/instagram.png'
import '@/Components/Banner/Banner.css'

const BlogBanner = () => {
  return (
    <section className=" lg:py-20 py-10 lg:px-28 md:px-12 px-5">
      <Ellipse className="absolute -left-24 top-72" width={550}></Ellipse>
      <div className="">
        <div className="bg-white w-fit relative rounded-xl text-gray-700 border px-4 py-1 mb-3">
          <WorkingWithBusiness></WorkingWithBusiness>
        </div>
        <div id="main_content" className="flex flex-wrap gap-5 justify-between">
          <div id="banner_left" className="lg:w-[55%] my-auto ">
            <h1 className="md:text-5xl text-3xl poppins-semibold md:leading-tight leading-snug">
            SEO <span id="social">optimized blog posts</span>{" "}
              <span id="management">from only</span><span className="text-red-600">$99</span>/month.
            </h1>
            <p className="md:text-lg my-5">
            Professional and well branded social media content at affordable pricing. We handle the designing, visuals, captions and hashtags. We even post it for you when approved. We also offer unlimited revisions to assure that your vision is put to life. Here’s our portfolio.  
            </p>
            <div className="flex md:gap-7 flex-wrap gap-5">
              <Button>Get start now</Button>
              <BaseButton content="Book a demo" borderColor={true}></BaseButton>
            </div>
          </div>
          <div id="banner_right" className="flex gap-5 relative lg:w-[40%]">
            <div className="my-auto relative space-y-6 ml-auto"></div>
            <Image width={400} src={blog1} alt="banner1"></Image>
            <Image width={300} src={blog2} className="absolute top-56 -left-10" alt="banner2"></Image>
            {/* <div className='my-auto relative w-fit'>
                        <Image width={250} src={banner3} alt='banner3'></Image>
                        <div id='banner-content' className='absolute bottom-0 pt-10 rounded-xl'>
                            <Image width={200} className='mx-auto px-4 pb-6' src={banner_content2} alt='banner4' />
                            <button className='flex bg-[#3A3A3A] w-full justify-center py-2 rounded-xl text-white'>Live chat <FaArrowRight className='my-auto' /></button>
                        </div>

                    </div>
                    <div className='my-auto space-y-6  relative'>
                        <Image width={250} src={banner4} alt='banner4'></Image>
                        <div className='absolute top-0'>
                            <Image width={200} className='mx-auto px-4 ' src={banner_content1} alt='banner4' />
                        </div>
                        <Image width={250} src={banner2} alt='banner2'></Image>
                    </div> */}
          </div>
        </div>

        <div
          id="banner_footer"
          className="bg-white px-6 relative z-50 py-4  mt-20 w-96 rounded-xl mr-auto"
        >
          <div className="space-y-3">
            <h1 className="text-xl poppins-medium">
              Social channel we work with
            </h1>
            <div id="social_images" className="flex lg:gap-5 justify-between gap-2">
              <Image src={instagram} width={40} alt="instagram"></Image>
              <Image src={facebook} width={40} alt="facebook"></Image>
              <Image src={twiter} width={40} alt="twiter"></Image>
              <Image src={youtube} width={40} alt="youtube"></Image>
              <Image src={linkedin} width={40} alt="linkedin"></Image>
            </div>
          </div>
          {/* <div className="space-y-3 z-50">
            <h1 className="text-xl poppins-medium">
              Why we are best for you !!
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-x-10 gap-y-4">
              <h1 className="flex gap-2">
                <FaCheck className="bg-gray-200 rounded-full my-auto p-1 lg:text-xl" />
                Team Of Professionals
              </h1>
              <h1 className="flex gap-2">
                <FaCheck className="bg-gray-200 rounded-full my-auto p-1 lg:text-xl" />
                Team Of Professionals
              </h1>
              <h1 className="flex gap-2">
                <FaCheck className="bg-gray-200 rounded-full my-auto p-1 lg:text-xl" />
                Team Of Professionals
              </h1>
              <h1 className="flex gap-2">
                <FaCheck className="bg-gray-200 rounded-full my-auto p-1 lg:text-xl" />
                Team Of Professionals
              </h1>
              <h1 className="flex gap-2">
                <FaCheck className="bg-gray-200 rounded-full my-auto p-1 lg:text-xl" />
                Team Of Professionals
              </h1>
              <h1 className="flex gap-2">
                <FaCheck className="bg-gray-200 rounded-full my-auto p-1 lg:text-xl" />
                Team Of Professionals
              </h1>
            </div>
          </div> */}
        </div>
      </div>
      <Ellipse
        className="absolute lg:block hidden right-28 rotate-180 -bottom-32"
        width={600}
      ></Ellipse>
    </section>
  );
};

export default BlogBanner;
