"use client";

import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json"; // Update with the correct path
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "../MagicButton"; // Ensure this import path is correct
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg"; // Ensure this import path is correct
import { GlobeDemo } from "./GridGlobe"; // Ensure this import path is correct

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('mitra.shounak13@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-transparent justify-between flex flex-col space-y-4 border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundImage:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(80,136,157,1) 20%, rgba(0,212,255,1) 100%)",
      }}
    >
      {/* Image Section */}
      <div className={cn(id === 6 && "flex justify-center h-full")}>
        {img && (
          <div className="w-full h-full absolute">
            <img
              src={img}
              alt="Image"
              className={cn(imgClassName, "object-cover object-center")}
            />
          </div>
        )}
        {spareImg && (
          <div
            className={cn(
              id === 5 && "absolute right-0 bottom-5 w-full opacity-80"
            )}
          >
            <img
              src={spareImg}
              alt="Spare Image"
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/*<div className="absolute z-50 flex items-center justify-center text-white font-bold" />*/}
          </BackgroundGradientAnimation>
        )}
      </div>

      {/* Title and Description Section */}
      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        <div className="font-sans font-extraLight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
        {id === 2 && <GlobeDemo />}
      </div>

      {id === 3 && (
        <div className="flex flex-col md:flex-row justify-between p-5 lg:p-10 space-y-4 md:space-y-0">
          {/* Left section for description/title */}
          <div className="text-section flex flex-col justify-center md:w-1/2">
            <div className="font-sans font-extraLight text-[#c1c2d3] text-sm md:text-base lg:text-lg mb-4">
             {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96">
              {title}
            </div>
          </div>
          
          {/* Right section for technology tags */}
          <div className="tags-section flex flex-col justify-center md:w-1/2 space-y-2 md:space-y-4">
            {["React.JS", "Next.JS", "TypeScript", "Java", "Git/Github", "Python and its libraries"].map((item) => (
              <span
                key={item}
                className="py-2 lg:py-3 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E] opacity-70 lg:opacity-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Animation Section for id === 6 */}
      {id === 6 && (
        <div className="mt-5 relative">
          <div className="absolute bottom-5 right-0">
            <Lottie
              options={{
                loop: copied,
                autoplay: copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                },
              }}
              isClickToPauseDisabled
            />
          </div>
          <MagicButton
            title={copied ? 'Email copied' : 'Copy my Email'}
            icon={<IoCopyOutline />}
            position="left"
            otherClasses="!-bg-[#161a31]"
            handleClick={handleCopy}
          />
        </div>
      )}
    </div>
  );
};
