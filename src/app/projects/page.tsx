"use client";
import React from "react";

import { GiConverseShoe } from "react-icons/gi";

import { IoCarSportSharp } from "react-icons/io5";
import { MdPortrait } from "react-icons/md";

import { RiLightbulbFlashFill } from "react-icons/ri";
import { IoLogoGameControllerB } from "react-icons/io";


import { HoverEffect } from "@/components/ui/card-hover-effect";


export default function Projects() {
  const projects = [
    {
      title: "Cars",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",

      icon: IoCarSportSharp,
    },
    {
      title: "Portraits",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "/projects/portraits",

      icon: MdPortrait ,
    },
    {
      title: "Shoes",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "/projects/shoes",
      icon: GiConverseShoe ,
    },
    {
      title: "Brand",
      description: "brand",
      link: "/projects/brand",
      icon: RiLightbulbFlashFill ,
    },
    {
      title: "Artifacts",
      description: "Artifacts",
      link: "/projects/artifacts",
      icon: IoLogoGameControllerB ,
    },
    // {
    //   title: "Etc.",
    //   description:
    //     "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    //   link: "https://meta.com",
    //   imageSource: etc
    // },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
