"use client"

import { useState } from 'react';
import Button from '@/components/effect/Button';

interface FormData {
  access_key: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
}

export default function CFS2() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const target = e.currentTarget;
    const formData: FormData = {
      access_key: "e0464496-9fa8-41e6-b820-1042ee3f57b7", // Replace with actual Web3Forms access key
      name: (target.elements.namedItem('fullname') as HTMLInputElement).value,
      company: (target.elements.namedItem('company') as HTMLInputElement).value,
      email: (target.elements.namedItem('email') as HTMLInputElement).value,
      phone: (target.elements.namedItem('phone') as HTMLInputElement).value,
      message: (target.elements.namedItem('message') as HTMLTextAreaElement).value
    };

    setStatus("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message Sent Successfully!");
        target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <div className="shrink-0 w-full lg:w-[50%] h-full md:px-10 py-5 max-md:pt-3">
      <h2 className="text-[10vw] md:text-[6.5vw] lg:text-[3em] xl:text-[4em] font-medium font-[f1] leading-[1.2] opacity-[.95]">
        Let&apos;s talk
      </h2>

      <form className="w-full mt-8 lg:mt-5" onSubmit={handleSubmit}>
        <div className="w-full flex items-center gap-5">
          <input 
            type="text" 
            name="fullname"
            placeholder="Full name"
            className="w-1/2 bg-transparent border-b border-zinc-400 outline-none py-3 
                       text-[3.8vw] md:text-[1em] xl:text-[1.1em] text-zinc-300 font-medium
                       placeholder:text-gray-400/80"
            required
          />
          <input 
            type="text"
            name="company"
            placeholder="Company"
            required
            className="w-1/2 bg-transparent border-b border-zinc-400 outline-none py-3
                       text-[3.8vw] md:text-[1em] xl:text-[1.1em] text-zinc-300 font-medium 
                       placeholder:text-gray-400/80"
          />
        </div>

        <div className="w-full flex items-center gap-5 mt-5">
          <input 
            type="email"
            name="email"
            placeholder="Email"
            className="w-1/2 bg-transparent border-b border-zinc-400 outline-none py-3
                       text-[3.8vw] md:text-[1em] xl:text-[1.1em] text-zinc-300 font-medium 
                       placeholder:text-gray-400/80"
            required
          />
          <input 
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            className="w-1/2 bg-transparent border-b border-zinc-400 outline-none py-3
                       text-[3.8vw] md:text-[1em] xl:text-[1.1em] text-zinc-300 font-medium 
                       placeholder:text-gray-400/80"
          />
        </div>

        <textarea
          name="message"
          placeholder="We'd love to hear more about your project!"
          rows={4}
          className="w-full bg-transparent border-b border-zinc-400 outline-none py-3
                     text-[3.8vw] md:text-[1em] xl:text-[1.1em] text-zinc-300 font-medium
                     placeholder:text-gray-400/80 mt-5 resize-none"
          required
        ></textarea>

        <button type='submit' className='mt-8 pl-5 max-md:scale-[.85]'>
          <Button title='Send Message' anm2={true} />
        </button>

        {status && <p className="mt-4 text-sm text-zinc-400">{status}</p>}
      </form>
    </div>
  );
}
