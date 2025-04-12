import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Work } from "./sections/Work";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  );
}