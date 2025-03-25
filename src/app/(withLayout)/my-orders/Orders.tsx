/* eslint-disable react/jsx-no-undef */
"use client";
import useFetch1 from "@/lib/useFetch1";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";


import React from "react";
import SuggestPricing from "./SuggestPricing";
import Banner from "./Banner";
import Link from "next/link";

const Orders = () => {
  const { data: orders } = useFetch1(
    "payment/logged-user-transactions"
  );

  console.log(orders);
  


  return (
    <section>
      <div className="container  lg:px-28 md:px-12 px-5 py-[60px]">
        {/* {isLoading ? "" : ""} */}
        {/* {orders?.map((e, idx) => (
          <div key={idx}></div>
        ))} */}
        <h1 className="font-semibold text-3xl mb-6"> Your Order List</h1>


        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center gap-4">



        {orders?.result?.length > 0 ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        orders.result.map((order:any) => (
          <div key={order.id} className="flex bg-white rounded-[16px] items-center gap-4 p-4 shadow-md">
            <div className="relative">
              <Image
                src={order.order.image}
                alt={order.order.service}
                width={259}
                height={261}
                className="rounded-md"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <button className="text-white text-3xl bg-black bg-opacity-50 px-6 py-4 rounded-full">
                  <FaPlay />
                </button>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-2xl">{order.order.service}</h2>
              <p className="text-[#344054] leading-7 pb-4">{order.order.description}</p>
              <hr />

              <p className="text-[#82838E] text-sm font-medium pt-3">Total Charged</p>
              <h2 className="font-semibold text-[#232327] text-4xl leading">${order.totalAmount / 100}</h2>

              {/* Conditional Rendering */}
              {order.orderStatus == "PENDING" ? (
                <button className="w-full text-2xl flex items-center gap-2 py-3 bg-[#E2E2E280] hover:shadow-lg hover:scale-105 transition-all border mt-4 outline-none border-primary rounded-xl justify-center">
                  <Image src={"/images/videoicon.png"} alt={"video"} width={24} height={24} />
                  <h2 className="text-[16px] font-medium">Order is processing</h2>
                </button>
              ) : (
                <div className="flex lg:flex-row md:flex-col flex-row items-center gap-2">
                  <button className="w-full text-2xl flex items-center gap-2 py-3 hover:shadow-lg hover:scale-105 transition-all bg-[#0CCB2F1A] border mt-4 outline-none border-[#0CCB2F80] rounded-xl justify-center">
                    <Image src={"/images/videoicon.png"} alt={"video"} width={24} height={24} />
                    <h2 className="text-[16px] font-medium">Delivered</h2>
                  </button>
                  <Link
                    href={`/my-orders/addReview/${order?.order?.id}`}
                    className="w-full text-2xl flex items-center gap-2 py-3 mt-4 outline-none border hover:shadow-lg hover:scale-105 transition-all bg-gradient-to-t from-[#6A2F9B] to-[#B564F7] rounded-xl justify-center"
                  >
                    <Image src={"/images/reviewicon.png"} alt={"review"} width={24} height={24} />
                    <h2 className="text-[16px] font-medium text-white">Review</h2>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-gray-600">No orders available</h2>
        </div>
      )}

         {/*         <div className='flex lg:flex-row md:flex-col flex-row items-center gap-2'>
                <button
                    className='w-full text-2xl flex items-center gap-2 py-3 hover:shadow-lg hover:scale-105 transition-all bg-[#0CCB2F1A] border mt-4  outline-none border-[#0CCB2F80] rounded-xl justify-center'>
                  <Image src={'/images/videoicon.png'} alt={'video'} width={24} height={24}/>
                  <h2 className='text-[16px] font-medium'>Delivered</h2>
                </button>
                <Link href='/my-orders/addReview'
                    className='w-full  text-2xl flex items-center gap-2 py-3   mt-4  outline-none border hover:shadow-lg hover:scale-105 transition-all bg-gradient-to-t from-[#6A2F9B] to-[#B564F7] rounded-xl justify-center'>
                  <Image src={'/images/reviewicon.png'} alt={'video'} width={24} height={24}/>
                  <h2 className='text-[16px] font-medium text-white'>Review</h2>
                </Link>
              </div>
               */}

        </div>


      <SuggestPricing/>


      </div>
         <Banner/>
    </section>
  );
};

export default Orders;
