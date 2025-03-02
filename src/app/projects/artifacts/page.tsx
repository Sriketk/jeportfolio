import { FocusCards } from "@/components/ui/focus-cards";
import contoller from "../../../../public/artifacts/contoller.jpeg";
import insideoutrug from "../../../../public/artifacts/insideoutrug.jpeg";
import cuttingboard from "../../../../public/artifacts/cuttingboard.jpeg";
import jamal from "../../../../public/artifacts/jamal.jpeg";
import pigtail from "../../../../public/artifacts/pigtail.jpeg";
import nuggetball from "../../../../public/artifacts/nuggetsball.jpeg";
import youngjeball from "../../../../public/artifacts/youngjeball.jpeg";
import kirbycontroller from "../../../../public/artifacts/kirbycontroller.jpeg";
export default function Artifacts() {
  const cards = [
    {
      title: "Controller",
      src: contoller.src,
    },
    {
      title: "Inside Out Rug",
      src: insideoutrug.src,
    },
    {
      title: "Cutting Board",
      src: cuttingboard.src,
    },
    {
      title: "Jamal Murray Basketball",
      src: jamal.src,
    },
    {
      title: "Pig Tail Rug",
      src: pigtail.src,
    },
    {
      title: "Denver Nuggets Ball",
      src: nuggetball.src,
    },
    {
      title: "Jeremy Evans Western Kentucky Ball",
      src: youngjeball.src,
    },
    {
        title: "Kirby Game Controller",
        src: kirbycontroller.src,
      },
  ];
  return <FocusCards cards={cards} />;
}
