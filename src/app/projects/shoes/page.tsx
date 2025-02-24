import { InfiniteSlider } from "@/components/ui/infinite-slider";

export default function Shoes() {
  return (
    <InfiniteSlider durationOnHover={75} gap={24}>
      <img
        src="/shoes.jpeg"
        alt="Dean blunt - Black Metal 2"
        className="aspect-square w-[550px] h-[450px] rounded-[4px]"
      />
      <img
        src="/purp.jpeg"
        alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
        className="aspect-square  w-[550px] h-[450px] rounded-[4px]"
      />
      <img
        src="/grinch.jpg"
        alt="Yung Lean - Stardust"
        className="aspect-square w-[550px] h-[450px]  rounded-[4px]"
      />
      <img
        src="/prince.jpg"
        alt="Lana Del Rey - Ultraviolence"
        className="aspect-square w-[550px] h-[450px] rounded-[4px]"
      />
      <img
        src="/oilers.jpg"
        alt="A$AP Rocky - Tailor Swif"
        className="aspect-square w-[550px] h-[450px] rounded-[4px]"
      />
      <img
        src="/kitty.jpg"
        alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
        className="aspect-square w-[550px] h-[450px] rounded-[4px]"
      />
    </InfiniteSlider>
  );
}


