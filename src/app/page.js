import AboutSection from "@/components/AboutSection/about";
import Footer from "@/components/Footer/footer";
import { HeroSection } from "@/components/HeroSection/hero-scenes";
import ProjectsSection from "@/components/ProjectsSection/projects";
import SkillsSection from "@/components/SkillsSection/skills";


export default async function Home () {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

