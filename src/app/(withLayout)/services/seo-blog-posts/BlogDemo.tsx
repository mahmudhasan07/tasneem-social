"use client";
import BlogCard from "@/Components/common/Card/BlogCard";
import Loader from "@/Components/UI/Loader/Loader";
import useFetch1 from "@/lib/useFetch1";
import React from "react";

const BlogDemo = () => {
  interface CategoryList {
    id: string;
    categoryId: string;
    description: string;
    userAvatar: string;
    name: string;
    image: string;
  }
  const {data : serviceData, isLoading}  = useFetch1("service", `search=673bfe0d4e0582c597050ffc`);

  return (
    <section className="lg:py-10 py-8 lg:px-28 space-y-8 md:px-12 px-5">
      <h1 className="lg:text-5xl text-center md:text-4xl text-3xl font-bold">
        Some of our <span className="text-primary">Blog post example</span>
      </h1>
      <div className="flex flex-wrap gap-5">
        {isLoading ? (
          <div>
            <Loader></Loader>
          </div>
        ) : (
          serviceData?.result.result.map((item: CategoryList, index: number) => (
            <BlogCard key={index} e={item}></BlogCard>
          ))
        )}
      </div>
    </section>
  );
};

export default BlogDemo;
