import { Hero } from "./sections/Hero";
import { Logo } from "./components/Logo";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Work } from "./sections/Work";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Logo />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  );
}