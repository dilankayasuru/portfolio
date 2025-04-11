import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  );
}
