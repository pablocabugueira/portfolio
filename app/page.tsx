import { HeroSection } from "./components/pages/home";
import { KnownTechs } from "./components/pages/home/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
    </>
  )
}