'use client'
import PriceCard from '@/Components/common/Card/PriceCard';
import Loader from '@/Components/UI/Loader/Loader';
import useFetch1 from '@/lib/useFetch1';
import { usePathname } from 'next/navigation';
import React from 'react';

const Pricing = () => {
   

    const { data, isLoading } = useFetch1("provide-service")
    interface Options {

        service: string
<<<<<<< HEAD
        price: number 
        time : string
=======
        price: number
>>>>>>> d00c83c1226153c07d06c563ae39585868797175
    }


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
    const pathname = usePathname()

    return (
        <section className='lg:py-20 py-10 lg:px-28 md:px-12 px-5'>
            <div>
                {pathname === '/pricing' ? (
                    <h1 className='md:text-5xl text-3xl text-center poppins-semibold my-4'>All-Inclusive <span className='text-primary'>Creative Service</span></h1>
                ) : (

                    <h1 className='md:text-5xl text-3xl text-center poppins-semibold my-4'>Affordable <span className='text-primary'>pricing</span></h1>
                )}
                <p className='lg:text-lg text-base text-center mx-auto'>Get your creative & marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises.</p>

            </div>



            <hr className='w-full border mt-8 mb-10' />
            <div className='flex flex-wrap lg:justify-start justify-center gap-9'>
                {
                    isLoading ?
                        <Loader />
                        :
                        data?.result?.result.map((e: Services, idx: number) =>
                            <PriceCard e={e} idx={idx} key={idx}></PriceCard>
                        )
                }

            </div>
        </section>
    );
};

export default Pricing;