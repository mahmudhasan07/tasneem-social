'use client'
import PriceCard from "@/Components/common/Card/PriceCard";
import AddPackageDetails from "@/Components/DashboardSidebar/dashboardService/AddPackageDetails";
// import ServicePricing from "@/Components/DashboardSidebar/dashboardService/ServicePricing";
import Loader from "@/Components/UI/Loader/Loader";
import useFetch1 from "@/lib/useFetch1";
import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

export default function Page() {


    const { data, isLoading, error } = useFetch1("provide-service")
    console.log(error);

    interface Options {

        service: string
        price: number
        time : string
    }

    const [isAddingPackage, setAddingPackage] = useState(false)


    interface Services {
        service: string
        description: string
        image: string
        basePrice: number
        options: Options[]
        category: {
            categoryName: string
            imageUrl: string
        }
    }

    return (
        <div>
            <div className="max-w-[1200px] mx-auto lg:px-0 px-5">

                {isAddingPackage ? (
                    <div>
                        <AddPackageDetails />
                        {/* <ServicePricing /> */}
                    </div>
                ) : (
                    <div>
                        <div className="flex items-center justify-between">
                            <h1 className={`text-[40px] font-bold`}>
                                All your <span className="text-primary font-po">listed package</span>
                            </h1>
                            {!isAddingPackage && (
                                <button onClick={() => setAddingPackage(true)}
                                    className="btn rounded-[24px] px-7 py-2 border bg-gradient-to-t from-[#6A2F9B] to-[#B564F7] text-white flex items-center gap-3 text-lg">
                                    <IoAddCircle className="text-2xl" />
                                    Add Package
                                </button>
                            )}

                        </div>
                        <hr className="w-full border border-gray-300 mt-6 mb-10" />
                        <div className='flex flex-wrap lg:justify-start justify-center gap-5 pb-5'>
                            {
                                isLoading ?
                                    <Loader />
                                    :
                                    data?.result?.result.map((e: Services, idx: number) =>
                                        <PriceCard e={e} idx={idx} key={idx}></PriceCard>
                                    )
                            }


                        </div>
                    </div>
                )}





            </div>



        </div>
    );
}