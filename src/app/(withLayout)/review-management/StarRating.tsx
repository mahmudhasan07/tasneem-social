import React from "react";

const StarRating: React.FC = () => {
    return (
        <section className="py-12 px-6 lg:px-20 ">
            <div className="max-w-[1400px] mx-auto">
                {/* Title and Subtitle */}
                <div className="mb-10 text-center ">
                    <h2 className="text-[48px] md:text-4xl font-bold text-gray-900">
                        Your star rating is just the part
                    </h2>
                    <p className="text-lg text-gray-600 mt-3">
                        Automatically invite customers to share their feedback on the sites
                        that matter to you. Handpick from 60+ review sites to include in
                        your campaigns.
                    </p>
                </div>

                {/* Stats and Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-2 gap-10">
                    {/* Column 1 */}
                    <div className="text-left">
                        <h3 className="text-[48px] font-bold text-gray-900 mb-4">
                            Consumers expect more than just a high star rating.
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            93% of customers say online reviews had an impact on their buying
                            decisions. With Feedbird, you’ll bring more customers in the door
                            with better and more frequent reviews, just by texting and
                            automating review requests.
                        </p>
                        <button className="mt-6 px-6 py-3 text-primary font-medium border border-primary rounded-lg hover:bg-primary hover:text-white transition">
                            Book a demo
                        </button>
                    </div>

                    {/* Column 2 */}
                    <div >

                        <div className="space-y-6 grid grid-cols-2 items-baseline justify-between">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                    69% of consumers
                                </h4>
                                <p className="text-gray-600 text-base">
                                    Trust only business reviews posted within the last month for
                                    accurate, up-to-date insights.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                    70% of people
                                </h4>
                                <p className="text-gray-600 text-base">
                                    Only choose businesses with a star rating or higher to ensure
                                    quality and satisfaction.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                    10 reviews
                                </h4>
                                <p className="text-gray-600 text-base">
                                    Is the average number of reviews a consumer will read before
                                    making a decision.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Detailed reviews
                                </h4>
                                <p className="text-gray-600 text-base">
                                    A mix of detailed reviews influences purchase decisions more
                                    effectively.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default StarRating;
