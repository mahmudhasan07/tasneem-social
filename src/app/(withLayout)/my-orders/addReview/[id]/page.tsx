'use client'
import { Star } from 'lucide-react'
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { AppDispatch, RootState } from "@/Redux/Store";
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { FormEvent } from 'react';
import { addReview } from '@/Redux/ReduxFunctions';
import ShowToastify from '@/utils/ShowToastify';
import { ToastContainer } from 'react-toastify';
// import useFetch1 from "@/lib/useFetch1";


export default function Page() {
    const users = useSelector((state: RootState) => state.Auth.user);
    const dispatch = useDispatch<AppDispatch>()
    const params = useParams()
    const id = params?.id as string
    console.log(params);
    const handleReview = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const rating = parseFloat(formData.get('review') as string) as number
        const review = formData.get('review-details') as string

        const reviewData = { rating, review }
        dispatch(addReview({ id, reviewData }))
        .then(res=>{
            console.log(res);
            if ('payload' in res && res.payload) {
                console.log(res.payload);
                ShowToastify({ success: "your review has been added successfully" })
                // router.replace(res?.payload.result.url)
      
              }
              if ("error" in res && res.error) {
                ShowToastify({ error: res.error.message })
              }
            
        })



    }


    return (
        <div className='container mx-auto pt-5 '>
            <Link href={'/my-orders'} className='font-medium flex items-center gap-3 hover:bg-slate-200 rounded-md p-3 w-44' > <IoIosArrowRoundBack />  Back</Link>

            <div className="w-full max-w-[900px] mx-auto my-20 rounded-2xl border border-[#E5E7EB] bg-white p-6">
                <form onSubmit={handleReview} action="">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center relative w-[55px] h-[55px] border border-orange-500 border-dashed rounded-full">
                                <Image width={47} height={47} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3pZVCjEyLPH9D4uYxQb0ESTdfSt7zqNMf5Q&s' alt="Profile" className="object-cover absolute bottom-0 right-0 h-12 w-12 rounded-full  border-orange-500" />
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-[15px] font-medium leading-none text-gray-900">{users?.name}</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 border px-2 py-2 rounded-lg">
                            <Star className="h-4 w-4 fill-current text-gray-600" />
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    min="0"
                                    max="5"
                                    step="0.1"
                                    defaultValue={4.00}
                                    name='review'
                                    className="w-12 h-6 px-1 text-sm  text-gray-600 border-none bg-transparent focus:outline-none focus:ring-0"
                                />
                                <span className="text-sm text-gray-600">/5</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* <span className="absolute -top-6 left-0 text-6xl text-gray-200">"</span> */}
                        <div className="space-y-2.5">
                            <label htmlFor="review" className="block text-base font-medium text-gray-900">Review</label>
                            <textarea
                                id="review"
                                name='review-details'
                                placeholder="Write your review"
                                className="w-full min-h-[160px] border resize-none rounded-xl  border-gray-200 p-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#9333EA] focus:ring-1 focus:ring-[#9333EA] focus:outline-none"
                            />
                        </div>
                    </div>

                    <button
                        className="w-full mt-12 border-0 bg-gradient-to-t from-[#6A2F9B] to-[#B564F7] hover:scale-95 transition-all text-white rounded-xl h-12 text-base font-medium flex items-center justify-center  duration-200"
                    >
                        Post
                        <IoIosSend className="w-4 h-4 ml-2  " />

                    </button>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

