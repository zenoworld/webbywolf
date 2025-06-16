import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import Section1 from "@/components/Section1";
import Section5 from "@/components/Section5";
import Banner1 from "@/components/Banner1";
import Banner2 from "@/components/Banner2";
import Section4 from "@/components/Section4";
import Section3 from "@/components/Section3";
import FormPage from "@/components/FormPage";
import Mockup from "@/components/Mockup";
import SectionImg from "@/components/SectionImg";

export default function Home() {
  return <>
    <HeroSection />
    <Section1 />
    <Section5/>
    <Banner1/>
    <Section4/>
    <Section3/>
    <Banner2/>
    <FormPage/>
    <Mockup/>
    <SectionImg/>
  </>
}
