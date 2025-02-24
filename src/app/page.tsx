import Image from "next/image";
import { Hero } from "@/components/ui/animated-hero";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import jedunk from "../../public/jedunk.jpeg";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const images = [
  "/shoes.jpeg",
  "/bronBall.jpeg",
  "/contoller.jpeg",
  "/shorty.jpeg",
  "/lion.jpeg",
  "/pac.jpeg",
  "/jedunk.jpeg",
  "/risingstar.jpeg",
  "/cuttingboard.jpeg",
  "/purp.jpeg",
  "/shoes.jpeg",
  "/bronBall.jpeg",

];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen  gap-16  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
        <Hero />
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            
          >
            <Image
              src={jedunk}
              alt="hero"
              height={700}
              width={700}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
        <ParallaxScroll images={images} className="mt-52 mb-36" />
      </main>
    </div>
  );
}
