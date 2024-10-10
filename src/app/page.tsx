import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Services from "@/components/Services";

export default function Home() {
  return (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Services />
  </div>  
  );
}
