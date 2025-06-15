import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import Section1 from "@/components/Section1";

export default function Home() {
  return <>
    <HeroSection />
    <Section1 />
  </>
}
