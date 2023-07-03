import About from "@/Home/About";
import Contacts from "@/Home/Contacts";
import Hero from "@/Home/Hero";
import Projects from "@/Home/Projects";
import Skills from "@/Home/Skills";

export const metadata = {
  title: "My PortFolio || Tahsin ",
  description: "Portfolio website",
};
export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contacts></Contacts>
    </div>
  );
}
