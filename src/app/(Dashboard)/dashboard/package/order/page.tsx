'use client';
import Image from 'next/image';
import useFetch1 from '@/lib/useFetch1';
import Loader from '@/Components/UI/Loader/Loader';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/Redux/Store';
import { OrderStatus } from '@/Redux/ReduxFunctions';
import { TransactionsInterface } from '@/utils/Interfaces';

export default function Page() {
    const { data, isLoading, refetch, error } = useFetch1('payment')
    const dispatch = useDispatch<AppDispatch>()
    console.log(error);


    const handleStatusChange = (index: string, value: string) => {
        console.log(index, value);
        const status= value 

        dispatch(OrderStatus( {index, status} ))
        .then(res=>{
            console.log(res.payload);
            if (res.payload) {
                refetch()
            }
            
        })



    };

    return (
        <div className="max-w-[1100px] mx-auto lg:px-0 px-4">
            <div className="rounded-[16px] py-[16px] px-[24px] my-[28px]">
                <div className="flex flex-row items-center justify-between pb-7">
                    <h3 className="text-2xl font-bold">All Orders (5)</h3>
                    <select
                        className="text-[#667085] px-3 py-2 cursor-pointer rounded-md border border-[#868fa3] focus:outline-none focus:ring-2 hover:ring-primary hover:outline-none hover:border-primary"
                    >
                        <option value="this-month">This month</option>
                        <option value="last-month">Last month</option>
                        <option value="last-3-months">Last 3 months</option>
                    </select>
                </div>
                <hr />
            </div>

            <div className="flex flex-col  ">
                {
                    isLoading ?
                        <Loader></Loader>
                        :
                    
                        data?.result?.map((item : TransactionsInterface, idx : number) =>
                            <div
                                key={idx}
                                className="p-4 rounded-2xl bg-white border-2  shadow-md mb-4"
                            >
                                <div className="grid grid-cols-10 items-center justify-start gap-4 font-poppins">
                                    {/* Image */}
                                    <div className="lg:col-span-3 col-span-4">
                                        <Image
                                            src={item?.order?.image}
                                            width={700}
                                            height={197}
                                            // className='w-96 h-96'
                                            alt="order"

                                        />

                                    </div>

                                    {/* Order Information */}
                                    <div className="col-span-5">
                                        <div className="flex lg:flex-row flex-col items-center  gap-10">
                                            <div className='leading-[34px]'>
                                                <h2 className="font-semibold text-2xl ">
                                                    {/* {item.title} */}
                                                </h2>
                                                <p className="text-[16px] text-[#344054] ">
                                                    <span className="font-medium text-black">Name: </span>
                                                    {item?.customerDetails?.name}
                                                </p>
                                                <p className="text-[16px] text-[#344054] ">
                                                    <span className="font-medium text-black">Email: </span>
                                                    {item.customerDetails?.email}
                                                </p>
                                                <p className="text-[16px] text-[#344054]">
                                                    <span className="font-medium text-black">Phone: </span>
                                                    {/* {item.customerDetails.phone} */}
                                                </p>
                                            </div>
                                            <div className='leading-[34px]'>
                                                <p className="text-[16px] text-[#344054]">
                                                    <span className="font-medium text-black">Package: </span>
                                                    {/* {data.package} */}
                                                </p>
                                                <p className="text-[16px] text-[#344054]">
                                                    <span className="font-medium text-black">
                                                        Order Date
                                                    </span>
                                                    {item?.createdAt.split("T")[0]}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status Dropdown */}
                                    <div className="col-span-2 mx-auto">
                                        <select
                                            value={item.orderStatus}
                                            onChange={(e) => handleStatusChange(item.id, e.target.value)}
                                            className="text-[#667085] px-3 py-2 cursor-pointer rounded-md border border-[#868fa3] focus:outline-none focus:ring-2 hover:ring-primary hover:outline-none hover:border-primary"
                                        >
                                            <option value="PENDING">Pending</option>
                                            <option value="DELIVERED">Delivered</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    );
}
