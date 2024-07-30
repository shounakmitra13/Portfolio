"use-client";
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      <Spotlight className="absolute top-40 -left-11 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="absolute top-10 -left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="absolute top-30 -left-80 h-[80vh] w-[50vw]" fill="blue" />
      <div className="h-screen w-full dark:bg-black bg-white flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center my-20">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
             This is a Dynamic Webpage Created using NextJS
            </h2>
            <TextGenerateEffect 
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="From Concept to Reality: Crafting Perfect User Experiences"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi, I&apos;m Shounak Mitra,a Computer Science Engineering student, currently in my 4th year.
            </p>
            <a href="#about">
<MagicButton 
title="Let's look into my portfolio now"
icon={<FaLocationArrow />}
position={'right'}
/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
