import { FocusCards } from "@/components/ui/focus-cards";
import vintage from "../../../../public/vehicles/vintage.jpeg";
import bike from "../../../../public/vehicles/bike.jpeg";
import bikeflame from "../../../../public/vehicles/bikeflame.jpeg";
export default function Vehicles() {
    const cards = [
        {
          title: "Vintage",
          src: vintage.src,
        },
        {
          title: "Bike",
          src: bike.src,
        },
        {
          title: "Flamed Bike",
          src: bikeflame.src,
        },
        
      ];
      return <FocusCards cards={cards} />;
}