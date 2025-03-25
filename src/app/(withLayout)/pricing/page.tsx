'use client'
import Pricing from "./Pricing";
import { useState } from "react";
import useFetch1 from "@/lib/useFetch1";
import Image from "next/image";
import EmailService from "../services/email-design/EmailService";

export default function Page() {
    const [buttonID, setButtonID] = useState<number>(1);
    const { data, isLoading: categoryLoader } = useFetch1('category')
    const [category, setCategory] = useState<string>('673bfd9b4e0582c597050ff8');
    console.log(category)
    interface Category {
        categoryName: string;
        id: string;
        imageUrl: string
    }
   
   
    const handleService = (idx: number, id: string) => {
        setCategory(id)
        setButtonID(idx + 1)
    }
    return (
        <div className="container">
            <div>
                <h1 className='md:text-5xl text-3xl text-center poppins-semibold my-4'>Affordable <span className='text-primary'>pricing</span></h1>

                <p className='lg:text-lg text-base text-center mx-auto pb-6'>Get your creative & marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a <br/> fixed, monthly, and predictable rate, with no contracts or surprises.</p>
                <hr/>

                <div className='flex lg:justify-between justify-start gap-5 flex-wrap max-w-[1200px] mx-auto pt-8'>
                        {
                            categoryLoader ?
                                <p className='w-full flex justify-center'>loading</p>
                                :
                                data?.result?.map((e: Category, idx: number) => {
                                    return <div key={idx} onClick={() => handleService(idx, e?.id)} className={buttonID == idx + 1 ? "border rounded-xl order-first flex py-3 px-4 gap-3  border-[#B564F7] text-[#B564F7]" : "border border-[#98A2B3] order-first rounded-xl flex py-3 px-4 gap-3 "}>
                                        <Image width={30} height={5} src={e.imageUrl} alt={e.categoryName}></Image>
                                        <button className='lg:text-lg'>{e.categoryName}</button></div>
                                })
                        }
                    </div>

                    <EmailService/>

            </div>
            <Pricing />

        </div>
    );
}