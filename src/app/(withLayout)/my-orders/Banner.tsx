import {FaCheck} from "react-icons/fa6";


export default function Banner() {
    return (
        <div className="mt-[110px] w-[100%]">
            <section className="relative h-[502px] flex justify-center items-center  bg-cover bg-center"
                     style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/pricingbaner.jpg')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-12 lg:px-24">
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
                        Take your socials to the next level! Let us <br/> take care of your social media posts for
                        a <br/> low monthly price.
                    </h1>
                    <div className="flex justify-center gap-6 mb-6">
                        <span className="flex gap-4 items-center text-lg font-medium text-white px-4 py-2 rounded-full">
                            <FaCheck className="bg-primary w-8 h-8 p-2 rounded-full"/>
                            Team of Professionals
                        </span>

                        <span className="flex gap-4 items-center text-lg font-medium text-white px-4 py-2 rounded-full">
                            <FaCheck className="bg-primary w-8 h-8 p-2 rounded-full"/>
                            Cancel Anytime
                        </span>
                    </div>
                    <button
                        className=" text-white text-lg py-3 px-6 rounded-[30px] hover:shadow-lg hover:scale-105  border-0 bg-gradient-to-t from-[#6A2F9B] to-[#B564F7]  font-medium transition duration-300">
                    Schedule demo now
                    </button>
                </div>
            </section>
        </div>
    );
}