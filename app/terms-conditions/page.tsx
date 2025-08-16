

import { LinkTextEffect } from "@/components/effect/useLinkTextEffect"
import LinkIcons from "@/components/LinkIcons"
import { Metadata } from "next";
import Link from "next/link"
import { SiMailgun } from "react-icons/si"

const siteUrl = "https://nickdstudio.online";
export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Nick D Studio Terms & Conditions: Review our service agreements, usage policies & client responsibilities for digital marketing & web development.",
  alternates: {
    canonical: `${siteUrl}/terms-conditions`,
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full mx-auto px-6 py-8 md:py-12">

        {/* Main Heading */}
        <h1 className="text-[6.5vw] sm:text-4xl font-bold mb-6">
          Terms &amp; Conditions
        </h1>

        {/* Effective Date */}
        <p className="text-sm sm:text-base text-gray-300 mb-8">
          <strong>Effective Date:</strong> 14 August 2025
        </p>

        {/* Intro Paragraph */}
        <p className="text-sm sm:text-base mb-6">
          These Terms and Conditions (&apos;Terms&apos;) govern your use of the services provided by <strong>NickdStudio</strong> 
          (Google &amp; Facebook Ads, Web Design &amp; Development, and Google SEO). 
          By accessing or using our website or services, you agree to be bound by these Terms. 
          If you do not agree with any part of these Terms, you should not use our services.
        </p>

        {/* 1. Services */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3">1. Services</h2>
        <p className="text-sm sm:text-base mb-6">
          We offer digital marketing and web-related services including advertisement campaigns, SEO optimization,
          and website development. The specific scope of work will be defined in individual agreements or proposals.
        </p>

        {/* 2. Use of Our Services */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3">2. Use of Our Services</h2>
        <ul className="text-sm sm:text-base list-disc list-inside ml-6 space-y-1 mb-6">
          <li>You agree to use our services only for lawful purposes.</li>
          <li>You must provide accurate and complete information when requested.</li>
          <li>Unauthorized copying, duplication, or misuse of our content or deliverables is prohibited.</li>
        </ul>

        {/* 3. Payment Terms */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3">3. Payment &amp; Billing</h2>
        <p className="text-sm sm:text-base mb-6">
          Payments for services must be made as per the agreed schedule in the proposal or invoice. 
          Late payments may incur additional charges or suspension of services.
        </p>

        {/* 4. Intellectual Property */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3">4. Intellectual Property</h2>
        <p className="text-sm sm:text-base mb-6">
          All content, designs, and code produced by NickdStudio remain our intellectual property until full payment is received.
          After payment, ownership rights will be transferred as agreed in the contract.
        </p>

        {/* 5. Limitation of Liability */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3">5. Limitation of Liability</h2>
        <p className="text-sm sm:text-base mb-6">
          We are not liable for any indirect, incidental, or consequential damages resulting from the use of our services.
          Our maximum liability shall not exceed the fees paid for the specific service.
        </p>

        {/* 6. Third-Party Tools & Links */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3">6. Third-Party Tools &amp; Links</h2>
        <p className="text-sm sm:text-base mb-6">
          Our services may integrate third-party tools (Google Ads, Facebook Ads, analytics tools, etc.).
          We are not responsible for the policies, availability, or performance of these third-party services.
        </p>

        {/* 7. Termination */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3">7. Termination</h2>
        <p className="text-sm sm:text-base mb-6">
          We reserve the right to suspend or terminate services if you violate these Terms or engage in conduct harmful 
          to our business integrity.
        </p>

        {/* 8. Changes to Terms */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3">8. Changes to These Terms</h2>
        <p className="text-sm sm:text-base mb-6">
          We may update these Terms from time to time. Changes will be posted on this page with the updated Effective Date.
        </p>

        {/* 9. Governing Law */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3">9. Governing Law</h2>
        <p className="text-sm sm:text-base mb-6">
          These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
        </p>

        {/* 10. Contact */}
        <h2 className="text-sm sm:text-2xl font-semibold mt-10 mb-3">10. Contact Us</h2>
        <p className="text-sm sm:text-base mb-2">
          If you have any questions about these Terms, please contact us at:
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

        {/* Footer Note */}
        <p className="text-sm sm:text-base mt-10 text-gray-300 italic">
          Note: These Terms &amp; Conditions are provided for informational purposes only. 
          Please consult legal counsel to ensure compliance with applicable laws.
        </p>

      </div>
    </div>
  )
}
