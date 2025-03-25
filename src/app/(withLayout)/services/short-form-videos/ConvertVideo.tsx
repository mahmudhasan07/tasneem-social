"use client";
import React from "react";
import right from "@/assets/images/right2.png";
import videoClip from "@/assets/images/videoClip.png";
import Image, { StaticImageData } from "next/image";

const ConvertVideo = () => {
  interface contentInterFace {
    title: string;
    description: string;
    icon: StaticImageData;
    image: StaticImageData;
  }
  interface videContentInderFace {
    title: string;
    description: string;
  }

  const contentArray: contentInterFace[] = [
    {
      title: "We take raw video and/or premium stock footage",
      description:
        "Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.",
      icon: right,
      image: videoClip,
    },
    {
      title: "We structure it for views and watch-time",
      description:
        "Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.",
      icon: right,
      image: videoClip,
    },
    {
      title: "We create your unique style and theme",
      description:
        "Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.",
      icon: right,
      image: videoClip,
    },
  ];

  const videContent: videContentInderFace[] = [
    {
      title: "Instagram Reels",
      description:
        "Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.",
    },
    {
      title: "TikTok videos",
      description:
        "Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.",
    },
    {
      title: "YouTube shorts",
      description:
        "Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.",
    },
    {
      title: "Instagram Reels",
      description:
        "Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.",
    },
    {
      title: "Educational shorts",
      description:
        "Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.",
    },
    {
      title: "Instagram Reels",
      description:
        "Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.",
    },
  ];

  return (
    <section className="lg:py-10 py-7 lg:px-28 md:px-12 px-5">
      <h1 className="lg:text-4xl md:text-3xl text-2xl text-center mb-12  font-bold">
        Turn your raw video into{" "}
        <span className="text-primary">engaging clip</span>
      </h1>
      <div id="video-container" className="flex justify-between">
        {contentArray.map((e, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white w-96 flex flex-col space-y-3"
          >
            <div id="card_header" className="flex h-full gap-2">
              <Image
                width={20}
                src={e.icon}
                alt="card_img"
                className="mb-auto"
              ></Image>
              <h3 className="poppins-semibold">{e.title}</h3>
            </div>
            <div className="mt-auto">
              <Image
                width={350}
                src={e.image}
                className=""
                alt={`${e.title}`}
              />
              <p>{e.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around flex-wrap mt-10 gap-6">
        {videContent.map((e, idx) => (
          <div key={idx} className="w-96 border-2 p-4 rounded-xl space-y-3">
            <h1 className="poppins-semibold">{e.title}</h1>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConvertVideo;
