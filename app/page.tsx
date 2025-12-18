import BioSection from "@/components/sections/bio-section";
import WorkSection from "@/components/sections/work-section";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Page() {
  return (
    <>
      <main className="relative h-screen w-full overflow-hidden max-w-7xl mx-auto">
        <BioSection />
        <WorkSection />
      </main>
      <FlickeringGrid
        className="absolute inset-0 -z-10"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.1}
        flickerChance={0.1}
      />
    </>
  );
}
