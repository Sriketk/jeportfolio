import { FocusCards } from "@/components/ui/focus-cards";
import jedunk from "../../../../public/jedunk.jpeg";
import shorty from "../../../../public/shorty.jpeg";
import pac from "../../../../public/pac.jpeg";
import lion from "../../../../public/lion.jpeg";
import beachouse from "../../../../public/portraits/beachhouse.jpeg";
import colorfulLion from "../../../../public/portraits/colorfulLion.jpeg";
import kobemural from "../../../../public/portraits/kobemural.jpeg";
import mansion from "../../../../public/portraits/mansion.jpeg";
import trombone from "../../../../public/portraits/trombone.jpeg";
import goldenkobe from "../../../../public/portraits/goldenkobe.jpeg";
import deron from "../../../../public/portraits/deron.jpeg";
import jewife from "../../../../public/portraits/je-wife.jpeg";


export default function Portraits() {
  const cards = [
    {
      title: "Jeremy Evans Dunk Contest",
      src: jedunk.src,
    },
    {
      title: "Badu",
      src: shorty.src,
    },
    {
      title: "Tupac",
      src: pac.src,
    },
    {
      title: "Lion",
      src: lion.src,
    },
    {
      title: "Jeremy Evans  Contest",
      src: jedunk.src,
    },
    {
      title: " Erykah Badu",
      src: shorty.src,
    },
   
    {
      title: "Beach House",
      src: beachouse.src,
    },
    {
      title: "Colorful Lion",
      src: colorfulLion.src,
    },
   
    { title: "Kobe Mural", src: kobemural.src },
    {
      title: "Mansion",
      src: mansion.src,
    },
    {
      title: "Trombone",
      src: trombone.src,
    },
    {
      title: "Golden Kobe",
      src: goldenkobe.src,
    },
    {
      title: "Deron",
      src: deron.src,
    },
    {
      title: "Jewife",
      src: jewife.src,
    },
  ];
  return <FocusCards cards={cards} />;
}
