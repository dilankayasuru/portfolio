import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";

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
