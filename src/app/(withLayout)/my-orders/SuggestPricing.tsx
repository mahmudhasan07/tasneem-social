'use client'
import PriceCard from "@/Components/common/Card/PriceCard";
import Loader from "@/Components/UI/Loader/Loader";
import useFetch1 from "@/lib/useFetch1";
// import Image from "next/image";

export default function pricing() {
    interface Options {
        service: string;
        price: number;
        time: string
      }
    interface Services {
        service: string;
        description: string;
        image: string;
        basePrice: number;
        options: Options[];
        category: {
          categoryName: string;
          imageUrl: string;
        };
      }
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isLoading } = useFetch1("provide-service");
    return (
        <div className="w-full py-8 md:py-12">
            <h1 className="text-[32px] font-semibold  mb-6">Suggested Pricing For You</h1>
            <div className="grid gap-6 md:grid-cols-3  ">
                {isLoading == true ? (
                    <Loader />
                ) : (
                    data?.result?.result.map((e: Services, idx: number) => (
                            <PriceCard e={e} idx={idx} key={idx}></PriceCard>
                    ))
                )}

                {/* {[1, 2, 3].map((i) => ( */}
                {/* <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <div className="w-12 h-12 border rounded-2xl flex items-center justify-center">
                                <Image src={'/images/videoicon.png'} alt={'video'} width={24} height={24} />
                            </div>
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-50 text-gray-600">
                                SOCIAL MEDIA
                            </span>
                        </div>

                        <h2 className="text-xl font-bold mb-2">Short-Form Videos</h2>
                        <p className="text-gray-600 text-sm mb-8">
                            Simple 15-60 second videos for TikTok, Reels, and Shorts.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <span className="text-4xl font-bold">$99</span>
                                <p className="text-[16px] text-gray-500 mt-1 font-semibold">Pricing from</p>
                            </div>

                            <div className="relative">
                                <select className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm">
                                    <option value="4">4 videos - $99/mo</option>
                                    <option value="8">8 videos - $189/mo</option>
                                    <option value="12">12 videos - $279/mo</option>
                                </select>
                            </div>

                            <button className="btn hover:shadow-lg hover:scale-105 w-full border bg-gradient-to-t from-[#6A2F9B] to-[#B564F7] text-white font-medium py-3 rounded-md transition-all">
                                Buy stand-alone
                                <span className="ml-2">→</span>
                            </button>
                        </div>
                    </div> */}
                {/* ))} */}
            </div>
        </div>
    );
}