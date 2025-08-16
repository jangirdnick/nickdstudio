import OurServices from '@/components/home/section3/OurServices'
import { Metadata } from 'next';
import React from 'react'

const siteUrl = "https://nickdstudio.online";
export const metadata: Metadata = {
  title: "Services",
  description: "Professional digital marketing & web development services by Nick D Studio. Expert SEO, website design & development, social media & branding solutions.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

export default function page() {
  return (
    <>
     <OurServices linkBtn={false} border2={true}/>
    </>
  )
}
