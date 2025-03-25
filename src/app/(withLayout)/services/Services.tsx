"use client";
import BlogCard from "@/Components/common/Card/BlogCard";
import Card from "@/Components/common/Card/Card";
import Loader from "@/Components/UI/Loader/Loader";
import useFetch1 from "@/lib/useFetch1";
import Image from "next/image";
import React, { useState } from "react";

interface Category {
  categoryName: string;
  id: string;
  imageUrl: string;
}

interface CategoryList {
  id: string;
  categoryId: string;
  description: string;
  userAvatar: string;
  name: string;
  image: string;
}

const Services = () => {
  const [buttonID, setButtonID] = useState<number>(1);
  const {data, isLoading}  = useFetch1("category");
  const [category, setCategory] = useState<string>("673bfd9b4e0582c597050ff8");
  const{data : serviceData, isLoading : serviceLoader}  = useFetch1("service", `search=${category}`);

  const handleService = (idx: number, id: string) => {
    setCategory(id);
    setButtonID(idx + 1);
  };

  return (
    <section className="lg:py-20 py-10 lg:px-28 md:px-12 px-5">
      <h1 className="md:text-5xl text-3xl poppins-semibold text-center">
        Explore your <span className="text-primary">desired services</span>
      </h1>
      <div
        id="category"
        className="flex lg:justify-between justify-start my-7 gap-5 flex-wrap"
      >
        {isLoading? (
          <p className="flex justify-center">loading</p>
        ) : (
          data?.result.map((e: Category, idx: number) => {
            return (
              <div
                key={idx}
                onClick={() => handleService(idx, e?.id)}
                className={
                  buttonID == idx + 1
                    ? "border-2 rounded-xl order-first flex py-3 px-4 gap-3  border-[#B564F7] text-[#B564F7]"
                    : "border-2 border-[#98A2B3] order-first rounded-xl flex py-3 px-4 gap-3 "
                }
              >
                <Image
                  width={30}
                  height={5}
                  src={e.imageUrl}
                  alt={e.categoryName}
                ></Image>
                <button className="lg:text-lg">{e.categoryName}</button>
              </div>
            );
          })
        )}
      </div>

      <div
        id="category-service"
        className="flex md:justify-start justify-center my-7 gap-5 flex-wrap"
      >
        {serviceLoader ? (
          // <p className='w-full flex justify-center'>loading</p>
          <Loader></Loader>
        ) : serviceData?.result.result.length > 0 ? (
          serviceData?.result.result.map((e: CategoryList, idx: number) => {
            if (e.categoryId === "673bfe0d4e0582c597050ffc") {
              return <BlogCard key={idx} e={e}></BlogCard>;
            } else {
              return <Card key={idx} e={e}></Card>;
            }
          })
        ) : (
          <p className="w-full flex justify-center text-lg">
            No desired services found
          </p>
        )}
      </div>
    </section>
  );
};

export default Services;
