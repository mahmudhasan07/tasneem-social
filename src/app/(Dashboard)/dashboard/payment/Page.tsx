'use client'
import PaymentTable from "@/Components/PaymentTable/PaymentTable";
import useFetch1 from "@/lib/useFetch1";
import Image from "next/image";
import { IoArrowUpOutline } from "react-icons/io5";

// const data = [
//     { serial: 1, userName: 'John Doe', orderId: 'ORD123', amount: 150.50, purchaseDate: '2024-11-01' },
//     { serial: 2, userName: 'Jane Smith', orderId: 'ORD124', amount: 200.00, purchaseDate: '2024-11-02' },
//     { serial: 3, userName: 'Mike Johnson', orderId: 'ORD125', amount: 120.75, purchaseDate: '2024-11-03' },
//     { serial: 4, userName: 'Emily Davis', orderId: 'ORD126', amount: 250.30, purchaseDate: '2024-11-04' },
//     { serial: 5, userName: 'Chris Brown', orderId: 'ORD127', amount: 180.20, purchaseDate: '2024-11-05' },
//     { serial: 6, userName: 'Olivia Wilson', orderId: 'ORD128', amount: 220.00, purchaseDate: '2024-11-06' },
//     { serial: 7, userName: 'Ethan Moore', orderId: 'ORD129', amount: 310.10, purchaseDate: '2024-11-07' },
//     { serial: 8, userName: 'Sophia Taylor', orderId: 'ORD130', amount: 275.40, purchaseDate: '2024-11-08' },
//     { serial: 9, userName: 'Liam Anderson', orderId: 'ORD131', amount: 160.80, purchaseDate: '2024-11-09' },
//     { serial: 10, userName: 'Isabella Thomas', orderId: 'ORD132', amount: 290.90, purchaseDate: '2024-11-10' },
//     { serial: 11, userName: 'James Martinez', orderId: 'ORD133', amount: 350.25, purchaseDate: '2024-11-11' },
//     { serial: 12, userName: 'Amelia Jackson', orderId: 'ORD134', amount: 125.60, purchaseDate: '2024-11-12' },
//     { serial: 13, userName: 'Benjamin White', orderId: 'ORD135', amount: 145.90, purchaseDate: '2024-11-13' },
//     { serial: 14, userName: 'Charlotte Harris', orderId: 'ORD136', amount: 195.80, purchaseDate: '2024-11-14' },
//     { serial: 15, userName: 'Oliver Clark', orderId: 'ORD137', amount: 175.60, purchaseDate: '2024-11-15' },
//     { serial: 16, userName: 'Mia Lewis', orderId: 'ORD138', amount: 230.10, purchaseDate: '2024-11-16' },
//     { serial: 17, userName: 'Alexander Robinson', orderId: 'ORD139', amount: 120.50, purchaseDate: '2024-11-17' },
//     { serial: 18, userName: 'Amelia Walker', orderId: 'ORD140', amount: 210.30, purchaseDate: '2024-11-18' },
//     { serial: 19, userName: 'William Young', orderId: 'ORD141', amount: 180.00, purchaseDate: '2024-11-19' },
//     { serial: 20, userName: 'Grace Scott', orderId: 'ORD142', amount: 150.80, purchaseDate: '2024-11-20' }
//   ];


export default function Page() {
    // const [selectedValue, setSelectedValue] = useState('this-month');
    const { data, isLoading } = useFetch1('payment')
    console.log(data);


    // const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setSelectedValue(event.target.value);
    // };
    return (
        <div className="pt-8 pb-32 lg:px-0 px-3">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-3  grid-cols-2 gap-6 justify-between">
                    {/* Card 1 */}
                    <div className="w-full  bg-white rounded-lg ">
                        <div className="relative p-6">
                            <div className="absolute top-0 right-0">
                                <div className="relative">
                                    {/* Shape Image */}
                                    <Image
                                        src="/dashboard/shape1.png"
                                        className="w-14"
                                        width={55}
                                        height={55}
                                        alt="shape1"
                                    />
                                    {/* Icon Positioned Above */}
                                    <IoArrowUpOutline
                                        className="absolute inset-0 m-auto h-8 w-8 text-white z-10"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 font-poppins">
                                <h3 className="text-xl font-medium text-gray-900">Total purchase</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[32px] font-bold tracking-tight">320</span>
                                    <span className="text-lg text-gray-500">Packages</span>
                                </div>
                                <p className="text-base text-gray-600">Total 10 services are featured</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full  bg-white rounded-lg ">
                        <div className="relative p-6">
                            <div className="absolute top-0 right-0">
                                <div className="relative">
                                    {/* Shape Image */}
                                    <Image
                                        src="/dashboard/shape1.png"
                                        className="w-14"
                                        width={55}
                                        height={55}
                                        alt="shape1"
                                    />
                                    {/* Icon Positioned Above */}
                                    <IoArrowUpOutline
                                        className="absolute inset-0 m-auto h-8 w-8 text-white z-10"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 font-poppins">
                                <h3 className="text-xl font-medium text-gray-900">Total completion</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[32px] font-bold tracking-tight">580</span>
                                    <span className="text-lg text-gray-500">Items</span>
                                </div>
                                <p className="text-base text-gray-600">Across all categories</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full  bg-white rounded-lg ">
                        <div className="relative p-6">
                            <div className="absolute top-0 right-0">
                                <div className="relative">
                                    {/* Shape Image */}
                                    <Image
                                        src="/dashboard/shape1.png"
                                        className="w-14"
                                        width={55}
                                        height={55}
                                        alt="shape1"
                                    />
                                    {/* Icon Positioned Above */}
                                    <IoArrowUpOutline
                                        className="absolute inset-0 m-auto h-8 w-8 text-white z-10"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 font-poppins">
                                <h3 className="text-xl font-medium text-gray-900">Rating</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[32px] font-bold tracking-tight">4.8</span>
                                    <span className="text-lg text-gray-500">Out of 5</span>
                                </div>
                                <p className="text-base text-gray-600">Satisfied clients feedback</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="bg-white rounded-[16px] py-[16px] px-[24px] my-[28px]">
                    {
                        isLoading ?
                            "loading"
                            :
                            <PaymentTable data={data}></PaymentTable>
                    }
                    {/* <div className="flex flex-row items-center justify-between pb-7">
              <h3 className="text-base font-semibold">Order Placed status</h3>
              <select
                value={selectedValue}
                onChange={handleSelectChange}
                className="text-[#667085] px-3 py-2 cursor-pointer rounded-md border border-[#868fa3] focus:outline-none focus:ring-2 hover:ring-primary hover:outline-none hover:border-primary "
              >
                <option className="hover:bg-primary" value="this-month">This month</option>
                <option className="hover:bg-primary" value="last-month">Last month</option>
                <option className="hover:bg-primary" value="last-3-months">Last 3 months</option>
              </select>
            </div>
            <hr/> */}


                    {/* <PaymentChart/> */}
                </div>

            </div>
        </div>
    );
}