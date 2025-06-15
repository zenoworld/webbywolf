import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import Section1 from "@/components/Section1";
import Section5 from "@/components/Section5";
import Banner from "@/components/Banner";
import Section4 from "@/components/Section4";

export default function Home() {
  return <>
    <HeroSection />
    <Section1 />
    <Section5/>
    <Banner/>
    <Section4/>
  </>
}
