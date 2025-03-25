import React, { useEffect } from "react";
import { TbMessageDots } from "react-icons/tb";
import AOS from 'aos';


const FeaturesGrid: React.FC = () => {
  const features = [
    {
      title: "Automate review invites and reminders",
      description: "So you never miss out on getting more stars.",
    },
    {
      title: "Connect all your important review sites",
      description: "So you can manage your reputation from one place.",
    },
    {
      title: "Keep track of where reviews are coming from",
      description: "And how your reputation improves over time.",
    },
    {
      title: "Every review automatically syncs",
      description: "With your customer profiles and stores the info securely.",
    },
    {
      title: "Write accurate and personalized replies",
      description: "In seconds, so you can save time responding.",
    },
  ];
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: true,
    });

}, []);
  return (
    <section className="py-10 px-6 md:px-20 lg:px-40">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Get more reviews, attract new leads, and make more money faster.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col items-left text-left p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-primary-light text-[#667085] border-2 rounded-lg mb-4">
              <TbMessageDots size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
