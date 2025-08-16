import NotFoundComingSoon from "@/components/NotFoundComingSoon";
import { Metadata } from "next";

const siteUrl = "https://nickdstudio.online";
export const metadata: Metadata = {
  title: "Coming Soon",
  description: "Coming Soon! Expert digital marketing & web development services. Professional solutions for your online growth. Contact us today!",
  alternates: {
    canonical: `${siteUrl}/coming-soon`,
  },
};

export default function page() {
  return (
    <>
    <NotFoundComingSoon title="Coming Soon" size='7' size2="30"/>
    </>
  )
}
