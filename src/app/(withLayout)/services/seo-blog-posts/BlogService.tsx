"use client";
import Image from "next/image";
import React from "react";
import right from "@/assets/images/rightBorder.png";
import useFetch1 from "@/lib/useFetch1";
import Loader from "@/Components/UI/Loader/Loader";
import line from "@/assets/images/Line 1.png";
import Button from "@/Components/UI/Button/Button";

interface OptionsInterface {
  price: number;
  service: string;
  time: string;
}

const BlogService = () => {
  const {data, isLoading}  = useFetch1(`category/673bfdec4e0582c597050ffa`);
  console.log(data);

  return (
    <section className="lg:py-20 py-10 lg:px-28 space-y-5 md:px-12 px-5">
      <h1 className="lg:text-5xl text-center md:text-4xl text-3xl font-bold">
        All-Inclusive <span className="text-primary">Creative Services</span>
      </h1>
      <p className="w-2/3 text-center mx-auto">
        Our fixed monthly rate covers all your creative needs, with predictable
        pricing, no contracts, and unlimited revisions. Explore our services to
        find the perfect solution for your brand’s growth!
      </p>
      <div className="flex flex-wrap flex-row-reverse gap-10 bg-white py-6 justify-between">
        <div
          id="provide"
          className="px-7 py-2 md:w-[25%] rounded-xl space-y-5 my-auto"
        >
          <h1 className="text-2xl poppins-medium">Include in all plans:</h1>
          <div className="flex gap-3">
            <Image
              src={right}
              alt="right"
              width={20}
              className="my-auto"
            ></Image>
            <p>Emails in your branding</p>
          </div>
          <div className="flex gap-3">
            <Image
              src={right}
              alt="right"
              width={20}
              className="my-auto"
            ></Image>
            <p>Design & copywriting</p>
          </div>
          <div className="flex gap-3">
            <Image
              src={right}
              alt="right"
              width={20}
              className="my-auto"
            ></Image>
            <p>Built in your ESP</p>
          </div>
          <div className="flex gap-3">
            <Image
              src={right}
              alt="right"
              width={20}
              className="my-auto"
            ></Image>
            <p>Responsive design</p>
          </div>
          <div className="flex gap-3">
            <Image
              src={right}
              alt="right"
              width={20}
              className="my-auto"
            ></Image>
            <p>Quality assurance</p>
          </div>
          <div className="mx-auto relative top-4">
            <Button>Get started</Button>
          </div>
        </div>
        <div id="line" className="my-auto">
          <Image src={line} alt="line" width={3} height={10}></Image>
        </div>
        <div
          id="services"
          className="px-7 py-2 md:w-[65%] space-y-3  rounded-xl"
        >
          {isLoading ? (
            <div>
              <Loader></Loader>
            </div>
          ) : (
            data?.result?.provideService[0]?.options.map(
              (e: OptionsInterface, idx: number) => (
                <div
                  key={idx}
                  className=" border-2 px-4 py-6 rounded-xl flex justify-between"
                >
                  <div className="space-y-7 relative">
                    <p
                      className={`px-3 py-1 border-2 w-fit rounded-lg absolute text-sm -top-3 bg-[#475467] text-white ${
                        idx == 1 ? "block" : "hidden"
                      }`}
                    >
                      Most popular
                    </p>
                    <h1 className="text-lg poppins-semibold">
                      {e?.service.split(" ")[0]} Email design - ${e.price}/{" "}
                      {e.time}
                    </h1>
                    <p>Tailored graphic and video content packages.</p>
                  </div>
                  <div className="my-auto">
                    <input
                      name="select"
                      type="radio"
                      className="rounded-full "
                    />
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogService;
