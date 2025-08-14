'use client'

import { LinkTextEffect } from "@/components/effect/useLinkTextEffect"
import LinkIcons from "@/components/LinkIcons"
import Link from "next/link"
import { SiMailgun } from "react-icons/si"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full mx-auto px-3 md:px-6 py-8 md:py-12">
        
        {/* Main Heading */}
        <h1 className="text-[6.5vw] sm:text-4xl font-bold mb-6 text-white">
          Privacy Policy
        </h1>

        {/* Effective Date */}
        <p className="text-sm sm:text-base text-gray-300 mb-8">
          <strong>Effective Date:</strong> 14 August 2025
        </p>

        {/* Intro */}
        <p className="text-sm sm:text-base mb-4">
          This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your
          information when you use our services, and tells you about your privacy rights and how the law protects you.
        </p>

        <p className="text-sm sm:text-base mb-6">
          By using our services (Google &amp; Facebook Ads, Web Design &amp; Development, and Google SEO), you agree to
          the collection and use of information in accordance with this policy.
        </p>

        {/* 1. Information Collection */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3 text-white">
          1. Information Collection and Use
        </h2>
        <p className="text-sm sm:text-base mb-4">
          We collect different types of information for various purposes to provide and improve our services:
        </p>
        <ul className="text-sm sm:text-base mb-4 space-y-1">
          <li><strong>Personal Information</strong> (may include, but is not limited to):</li>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Telephone Number</li>
            <li>Business Name</li>
            <li>Address</li>
          </ul>
        </ul>
        <p className="text-sm sm:text-base mb-2">We may request this information when you:</p>
        <ul className="text-sm sm:text-base list-disc list-inside ml-6 space-y-1 mb-6">
          <li>Fill out a contact form on our website</li>
          <li>Subscribe to our newsletter</li>
          <li>Request service quotes</li>
          <li>Engage in marketing campaigns through our platforms</li>
        </ul>

        {/* 2. Log Data */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3 text-white">
          2. Log Data
        </h2>
        <p className="text-sm sm:text-base mb-2">
          Whenever you visit our website, our servers automatically collect information (“Log Data”), which may include your:
        </p>
        <ul className="text-sm sm:text-base list-disc list-inside ml-6 space-y-1 mb-6">
          <li>IP Address</li>
          <li>Browser Type and Version</li>
          <li>Pages You Visit on Our Website</li>
          <li>Time and Date of Your Visit</li>
          <li>Time Spent on Each Page</li>
          <li>Other Diagnostic Data</li>
        </ul>

        {/* 3. Cookies */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3 text-white">
          3. Cookies
        </h2>
        <p className="text-sm sm:text-base mb-4">
          We use cookies and similar tracking technologies to monitor website activity and store certain information to
          improve your experience.
        </p>
        <p className="text-sm sm:text-base mb-6">
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
          disabling cookies may prevent certain features of our website from functioning properly.
        </p>

        {/* 4. Service Providers */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3 text-white">
          4. Service Providers
        </h2>
        <p className="text-sm sm:text-base mb-4">
          We may employ third-party companies and individuals to:
        </p>
        <ul className="text-sm sm:text-base list-disc list-inside ml-6 space-y-1 mb-4">
          <li>Facilitate our services</li>
          <li>Provide services on our behalf</li>
          <li>Perform service-related activities</li>
          <li>Assist us in analyzing how our services are used</li>
        </ul>
        <p className="text-sm sm:text-base mb-4">
          Examples include web hosting providers, analytics platforms like Google Analytics, advertising tools like Meta
          Business Suite, and payment processors.
        </p>
        <p className="text-sm sm:text-base mb-6">
          These third parties have access to your personal data only to perform their tasks and are obligated not to
          disclose or use it for any other purpose.
        </p>

        {/* 5. Security */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3 text-white">
          5. Security
        </h2>
        <p className="text-sm sm:text-base mb-6">
          We use commercially acceptable means (SSL encryption, firewalls, secure servers) to protect your Personal
          Information. However, please remember that no method of online transmission or electronic storage is 100%
          secure. We cannot guarantee absolute security.
        </p>

        {/* 6. Links */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3 text-white">
          6. Links to Other Sites
        </h2>
        <p className="text-sm sm:text-base mb-6">
          Our services may contain links to third-party websites. If you click on one of these links, you will be
          directed to that external site. We have no control over and assume no responsibility for the content, privacy
          policies, or practices of any third-party websites.
        </p>

        {/* 7. Children's Privacy */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3 text-white">
          7. Children’s Privacy
        </h2>
        <p className="text-sm sm:text-base mb-6">
          Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
          information from minors. If you are a parent or guardian and believe your child has provided us with personal
          information, please contact us immediately. We will promptly remove that information from our servers.
        </p>

        {/* 8. Changes */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3 text-white">
          8. Changes to This Privacy Policy
        </h2>
        <p className="text-sm sm:text-base mb-6">
          We may update this Privacy Policy from time to time. Any updates will be posted on this page with the updated
          Effective Date. We encourage you to review this Privacy Policy periodically for any changes.
        </p>

        {/* 9. Contact */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3 text-white">
          9. Contact Us
        </h2>
        <p className="text-sm sm:text-base mb-2">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <ul className="text-sm sm:text-base flex flex-col gap-2 ml-3 mb-6 space-y-1">
          <li className="flex gap-2">
            Email:{' '}
        <Link href="mailto:info@nickdstudio.online" target="_blank" className="w-fit flex items-center gap-2 text-orange-400 text-[3.5vw] md:text-[2.1vw] lg:text-[1em] xl:text-[1.2em] font-[f3] font-[100] underline underline-offset-5 leading-[1] opacity-[.7] cursor-pointer group">
          <SiMailgun className="group-hover:-translate-y-2 group-hover:translate-x-2 ease-in-out duration-300" />
          <LinkTextEffect text="info@nickdstudio.online" />
        </Link>
          </li>
          <li className="flex gap-2">
            Email:{' '}
        <Link href="mailto:contact@nickdstudio.online" target="_blank" className="w-fit flex items-center gap-2 text-orange-400 text-[3.5vw] md:text-[2.1vw] lg:text-[1em] xl:text-[1.2em] font-[f3] font-[100] underline underline-offset-5 leading-[1] opacity-[.7] cursor-pointer group">
          <SiMailgun className="group-hover:-translate-y-2 group-hover:translate-x-2 ease-in-out duration-300" />
          <LinkTextEffect text="contact@nickdstudio.online" />
        </Link>
          </li>
        </ul>

        <LinkIcons />
      </div>
    </div>
  )
}
