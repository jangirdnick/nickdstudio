import Contact from '@/components/home/section6/Contact'
import { Metadata } from 'next';

const siteUrl = "https://nickdstudio.online";
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Nick D Studio for digital marketing and web development services.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};


export default function page() {

  return (
    <div className='-mt-10'>
     <Contact border2={true} />
    </div>
  )
}
