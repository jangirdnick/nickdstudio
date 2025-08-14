import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";

export default function LinkIcons({ gap, effect2 }: { gap?: number; effect2?: boolean }) {
  const socialLinks = [
    { href: "https://bit.ly/nds_digital", icon: <FaInstagram /> },
    { href: "https://bit.ly/nds_digital_fb", icon: <GrFacebookOption /> },
    { href: "https://www.youtube.com/@nickdstudio", icon: <FaYoutube /> },
    { href: "https://bit.ly/nds_linkedin", icon: <FaLinkedinIn /> },
    { href: "https://wa.me/918209814681?text=Hello%2C%20I%20want%20to%20book%20a%20consultation%20call.", icon: <IoLogoWhatsapp /> }, // WhatsApp direct chat link
  ];

  const baseClasses = `shrink-0 w-fit text-[3vw] md:text-[2vw] lg:text-[.8em] xl:text-[.9em] px-2 py-2 border rounded-full cursor-pointer ease-in-out duration-150`;

  return (
    <div className={`flex ${gap ? `gap-${gap}` : "gap-3"}`}>
      {socialLinks.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} 
            ${effect2 ? "!text-black bg-orange-400 border-zinc-800 hover:bg-transparent hover:!text-white hover:border-zinc-800" 
                      : "!text-zinc-200 border-zinc-400 hover:bg-orange-400 hover:!text-black hover:border-black"}`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
