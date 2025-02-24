"use client";
import { useEffect, useMemo, useState } from "react";
import { Typewriter } from "@/components/ui/typewriter-text";
import DownwardArrow from "./downwardArrow";
import Image from "next/image";
import newLogo from "../../../public/newLogo.jpeg";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Hooper", "Designer", "Sculptor", "Painter", "Artist"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 pt-44 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <Image
                src={newLogo}
                alt="logo"
                width={500}
                height={500}
              />
              <div className="text-spektr-cyan-50">Jeremy Evans</div>
              <Typewriter
                text={["Hooper", "Designer", "Sculptor", "Painter", "Artist"]}
                speed={120}
                loop={true}
                className="text-5xl tracking-tight font-medium"
              />
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Scroll down for a preview
            </p>
            <DownwardArrow />
          </div>
          <div className="flex flex-row gap-3"></div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
