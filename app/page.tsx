import BioSection from "@/components/sections/bio-section";
import WorkSection from "@/components/sections/work-section";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function Page() {
  return (
    <>
      <main className="relative h-screen w-full overflow-hidden max-w-4xl mx-auto">
        <BioSection />
        <WorkSection />
      </main>

      {/* <DotPattern
        glow={true}
        className="mask-[radial-gradient(800px_circle_at_center,white,transparent)]"
      /> */}
    </>
  );
}
