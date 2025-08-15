import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";

export default function LinkIcons({ gap, effect2 }: { gap?: number; effect2?: boolean }) {
  const socialLinks = [
    { href: "https://www.instagram.com/nds_digital", icon: <FaInstagram /> },
    { href: "https://www.facebook.com/people/nickdstudio/61579142354563", icon: <GrFacebookOption /> },
    { href: "https://www.youtube.com/@nickdstudio", icon: <FaYoutube /> },
    { href: "https://www.linkedin.com/in/nickdstudio", icon: <FaLinkedinIn /> },
    { href: "https://x.com/nickdstudio", icon: <FaXTwitter /> },
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
