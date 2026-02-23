import Hero from "@/components/Hero";
import Skillsection from "@/components/Skillsection";
import Works from "@/components/Works";
import Aboutme from "@/components/Aboutme";
import Contactme from "@/components/Contactme";

export default function Home() {
  return (
    <div>
      <Hero />
      <Works />
      <Aboutme />
      <Skillsection />
      <Contactme />
    </div>
  );
}
