"use client";
import React, { useEffect } from "react";
import design1 from "@/assets/images/emaildesign1.png";
import design2 from "@/assets/images/emaildesign2.png";
import design3 from "@/assets/images/emaildesign3.png";
import Image, { StaticImageData } from "next/image";
import Aos from "aos";
// import useFetch1 from "@/lib/useFetch1";

const EmailDesign = () => {
  interface contentInterface {
    title: string;
    description: string;
    additionalDetails: StaticImageData;
  }
  useEffect(() => {
    Aos.init({
        duration: 400,
        once: true,
    });

}, []);
//   const [serviceData] = useFetch1("service", `search=673bfdec4e0582c597050ffa`);

  const contentArray: contentInterface[] = [
    {
      title: "Fly Your Colors",
      description:
        "Exciting things happening now ❤️\n📩 Stay with Safur Hadi Man!",
      additionalDetails: design1,
    },
    {
      title: "Worksheet Title",
      description:
        "Exciting things happening now ❤️\n📩 Stay with Safur Hadi Man!",
      additionalDetails: design2,
    },
    {
      title: "Halloween Party!",
      description:
        "Exciting things happening now ❤️\n📩 Stay with Safur Hadi Man!",
      additionalDetails: design3,
    },
    {
      title: "Fly Your Colors",
      description:
        "Exciting things happening now ❤️\n📩 Stay with Safur Hadi Man!",
      additionalDetails: design1,
    },
    {
      title: "Worksheet Title",
      description:
        "Exciting things happening now ❤️\n📩 Stay with Safur Hadi Man!",
      additionalDetails: design2,
    },
    {
      title: "Fly Your Colors",
      description:
        "Exciting things happening now ❤️\n📩 Stay with Safur Hadi Man!",
      additionalDetails: design3,
    },
    {
      title: "Worksheet Title",
      description:
        "Exciting things happening now ❤️\n📩 Stay with Safur Hadi Man!",
      additionalDetails: design1,
    },
    {
      title: "Halloween Party!",
      description:
        "Exciting things happening now ❤️\n📩 Stay with Safur Hadi Man!",
      additionalDetails: design3,
    },
  ];

  return (
    <section className="lg:py-12 py-8   container lg:px-24 md:px-12 px-5 space-y-6">
      <h1 className="lg:text-5xl text-center md:text-4xl text-3xl font-bold">
        Some of our <span className="text-primary">Email design example</span>
      </h1>
      <p className="text-center w-2/3 mx-auto">
        Transition from generic templates to tailored email designs that amplify
        your brand’s message. Our emails combine the makings of a great visual
        email campaign including compelling copy, beautiful design, clever
        animation and more.
      </p>
      <div className="flex flex-wrap gap-4">
        {contentArray?.map((e, idx) => (
          <div data-aos="flip-left" key={idx} className="border text-center p-3 rounded-xl w-[300px]">
            <Image width={280} height={200} src={e.additionalDetails} alt={e.title}></Image>
            <h1 className="text-lg poppins-medium">{e.title}</h1>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmailDesign;
