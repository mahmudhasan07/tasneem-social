"use client";
import Image from "next/image";
import React from "react";
import right from "@/assets/images/right.png";
import provide from "@/assets/images/provide.png";
import useFetch1 from "@/lib/useFetch1";
import Loader from "@/Components/UI/Loader/Loader";
import line from "@/assets/images/Line 1.png";
import Button from "@/Components/UI/Button/Button";

interface OptionsInterface {
  price: number;
  service: string;
  time: string;
}

const ShortVideoService = () => {
  const {data, isLoading}  = useFetch1(`category/673bfd9b4e0582c597050ff8`);
  console.log(data);

  return (
    <section className="lg:py-20 py-10 lg:px-20 space-y-5 md:px-12 px-5">
      <h1 className="lg:text-5xl text-center md:text-4xl text-3xl font-bold">
        All-Inclusive <span className="text-primary">Creative Services</span>
      </h1>
      <p className="w-1/2 text-center mx-auto">
        Our fixed monthly rate covers all your creative needs, with predictable
        pricing, no contracts, and unlimited revisions. Explore our services to
        find the perfect solution for your brand’s growth!
      </p>
      <div className="flex flex-wrap justify-between bg-white rounded-lg py-5">
        <div id="provide" className="px-7 py-2 md:w-[45%] rounded-xl">
          <div className="flex gap-2 my-6">
            <Image width={40} src={provide} alt="provide" />
            <h1 className="text-2xl my-auto">What We provide ?</h1>
          </div>
          <div className="space-y-5">
            <div id="provide_content" className="flex gap-3">
              <Image
                width={20}
                src={right}
                className="mb-auto mt-1"
                alt="right"
              />
              <div>
                <h1 className="text-lg">Low-cost, high quality</h1>
                <p>
                  Most agencies charge way too much. We are a lean team with
                  streamlined workflows and a platform built from the ground up
                  that allows us to charge much less.
                </p>
              </div>
            </div>
            <div id="provide_content" className="flex gap-3">
              <Image
                width={20}
                src={right}
                className="mb-auto mt-1"
                alt="right"
              />
              <div>
                <h1 className="text-lg">Full transparency</h1>
                <p>
                  Most agencies charge way too much. We are a lean team with
                  streamlined workflows and a platform built from the ground up
                  that allows us to charge much less.
                </p>
              </div>
            </div>
            <div id="provide_content" className="flex gap-3">
              <Image
                width={20}
                src={right}
                className="mb-auto mt-1"
                alt="right"
              />
              <div>
                <h1 className="text-lg">Cancel anytime</h1>
                <p>
                  Most agencies charge way too much. We are a lean team with
                  streamlined workflows and a platform built from the ground up
                  that allows us to charge much less.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="line" className="my-auto">
          <Image src={line} alt="line" width={3} height={10}></Image>
        </div>
        <div id="services" className="px-7 py-2 md:w-[45%] space-y-3 relative  rounded-xl">
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
                  <p className={`px-3 py-1 border-2 w-fit rounded-lg absolute text-sm -top-3 bg-[#475467] text-white ${idx==1 ? "block" : "hidden"}`}>Most popular</p>
                    <h1 className="text-lg poppins-semibold">
                      {e?.service.split(" ")[0]} Short form video - ${e.price}/{" "}
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
        <div className="mx-auto">
            <Button>Get started</Button>
        </div>
      </div>
    </section>
  );
};

export default ShortVideoService;
