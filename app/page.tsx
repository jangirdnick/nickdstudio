"use client"

import RoundCurcul from "@/components/effect/RoundCurcul";
import Hero from "@/components/home/landing/Hero";
import ShowReviews from "@/components/home/section2/ShowReviews";
import OurServices from "@/components/home/section3/OurServices";
import Work from "@/components/home/section4/Work";
import ClientTestimonials from "@/components/home/section5/ClientTestimonials";
import Contact from "@/components/home/section6/Contact";
import FAQ from "@/components/home/section7/FAQ";

export default function Home() {

  return (
    <>
      <RoundCurcul />
      <Hero />
      <ShowReviews />
      <OurServices />
      <Work />
      <ClientTestimonials />
      <Contact />
      <FAQ />
    </>
  )
}
