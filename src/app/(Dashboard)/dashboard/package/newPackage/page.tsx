'use client'
import Loader from "@/Components/UI/Loader/Loader";
import useFetch1 from "@/lib/useFetch1";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

interface BookDemoInterFace {
    id: string
    firstName: string
    lastName: string
    phoneNumber: string
    websiteUrl : string
    email : string
    shortPitch : string
    
  
  }

export default function Page() {
    const { data, isLoading } = useFetch1('demobook')
    console.log(data);

    return (
        <div className="max-w-[1200px] py-[40px] mx-auto lg:px-0 sm:px-3">
            <div className="rounded-[16px] ">
                <div className="flex flex-row items-center justify-between pb-7">
                    <h3 className="text-2xl font-semibold">All Listed Request</h3>
                    <select
                        className="text-[#667085] px-3 py-2 cursor-pointer rounded-md border border-[#868fa3] focus:outline-none focus:ring-2 hover:ring-primary hover:outline-none hover:border-primary "
                    >
                        <option className="hover:bg-primary" value="this-month">This month</option>
                        <option className="hover:bg-primary" value="last-month">Last month</option>
                        <option className="hover:bg-primary" value="last-3-months">Last 3 months</option>
                    </select>
                </div>
                <hr />

                <div>
                </div>
            </div>


            <div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 py-4">
                    {
                        isLoading ?
                            <Loader></Loader>
                            :
              
                                data?.result?.demoBooks.map((item : BookDemoInterFace) => (
                                    <div
                                        key={item.id}
                                        className="py-5 px-8 rounded-[16px] bg-white shadow-lg"
                                    >
                                        <h2 className="font-semibold font-poppins text-xl">{item?.firstName} {item?.lastName}</h2>
                                        <div className="flex items-center gap-8 py-3 leading-8 justify-between">
                                            <div className="text-[#475467]">
                                                <h2 className="flex items-center gap-2">
                                                    <FaPhone />
                                                    <span>{item.phoneNumber}</span>
                                                </h2>
                                                <h2 className="flex items-center gap-2">
                                                    <MdOutlineEmail />
                                                    <span>{item.email}</span>
                                                </h2>
                                                <Link
                                                    // href={item?.websiteUrl}
                                                    href={""}
                                                    className="flex items-center gap-2"
                                                >
                                                    <TbWorld />
                                                    <span className="underline text-blue-700 hover:text-blue-800">
                                                        {item.websiteUrl}
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-medium">Short Pitch</h2>
                                            <p className="text-[#475467] text-[18px] font-poppins leading-5 pb-4">
                                                {item.shortPitch}
                                            </p>
                                            <h2 className="text-lg font-medium pb-2">Message</h2>
                                            <textarea
                                                className="outline-none border border-[#EAECF0] hover:outline-none hover:border hover:border-primary rounded-[12px] w-full h-[100px] p-3"
                                                placeholder="Enter your message"
                                            />
                                            <div className="flex items-center gap-5 pt-3">
                                                <button className="w-full text-lg text-white rounded-[12px] bg-[#8E8E8E] py-2 transition-all hover:bg-primary">
                                                    Cancel
                                                </button>
                                                <button className="w-full text-lg text-white rounded-[12px] bg-primary py-2 transition-all hover:bg-[#8E8E8E]">
                                                    Lets Contact
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                    }
                </div>
            </div>
        </div>
    );
}