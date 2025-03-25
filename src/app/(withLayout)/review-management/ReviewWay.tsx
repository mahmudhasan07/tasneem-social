import Image from 'next/image';

export default function ReviewWay() {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className="text-left">
                    <h3 className="text-[48px] font-bold text-gray-900 mb-4">
                    Generate reviews your way
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                    No matter who or where your customers are, Get Reviews offers <br/> the perfect combination of ways to reach them.
                    </p>

                </div>
                <div className='flex flex-col border p-6 rounded-lg space-y-6 max-w-[500px]'>
                    <div className='flex gap-2 items-start'>
                        <Image src={'/images/verified.png'} width={24} height={24} alt='verfyicon' />
                        <div>
                            <h2 className='font-medium text-xl'>SMS</h2>
                            <p className='text-[16px] text-[#344054]'>Reach your customers right in the palm of their hands for a 98% open rate.**</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <Image src={'/images/verified.png'} width={24} height={24} alt='verfyicon' />
                        <div>
                            <h2 className='font-medium text-xl'>Email</h2>
                            <p className='text-[16px] text-[#344054]'>Send personalized, on-brand emails to your customers with ease.</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <Image src={'/images/verified.png'} width={24} height={24} alt='verfyicon' />
                        <div>
                            <h2 className='font-medium text-xl'>Link from anywhere!</h2>
                            <p className='text-[16px] text-[#344054]'>QR Codes, Printed receipts, email footers, flyers, in-store signage — the sky’s the limit.</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}
