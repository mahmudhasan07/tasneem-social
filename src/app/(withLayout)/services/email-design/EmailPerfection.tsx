import Image from "next/image";
import React from "react";
import images from "@/assets/images/emaildesign1.png";
import Button from "@/Components/UI/Button/Button";

interface stepInterface {
  step: string;
  title: string;
  description: string;
}

const stepsArray: stepInterface[] = [
  {
    step: "Step 1",
    title: "Onboarding",
    description:
      "Complete a detailed questionnaire about your business and email objectives.",
  },
  {
    step: "Step 2",
    title: "Idea Generation",
    description:
      "Complete a detailed questionnaire about your business and email objectives.",
  },
  {
    step: "Step 3",
    title: "Email Design",
    description:
      "Complete a detailed questionnaire about your business and email objectives.",
  },
];

const EmailPerfection = () => {
  return (
    <section className="lg:py-12 py-8 lg:px-28 md:px-12 px-5 container space-y-7">
        <h1 className="lg:text-5xl md:text-4xl text-3xl poppins-semibold">Your Path to <span className="text-primary">Email Perfection</span></h1>
      <div className="flex gap-12">
        <Image src={images} width={300} className="w-[500px] h-[500px] object-cover" alt="image"></Image>
        <div className="space-y-5 my-auto">
          {stepsArray.map((e, idx) => (
            <div key={idx} className="space-y-3">
              <p className="px-2  rounded-lg bg-[#6A6A6A47] text-sm w-fit">Step 1</p>
              <h1 className="text-xl poppins-semibold">
                Onboarding
              </h1>
              <p>
                Complete a detailed questionnaire asyut business and email
                Objectives.
              </p>
            </div>
          ))}
          <div>
            <Button>Book a demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailPerfection;
