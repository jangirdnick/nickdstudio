'use client'

import "@/app/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react"; // Added useRef for initial load tracking
import dynamic from "next/dynamic";
import FeatherScroll from "scrollfeather";

const PageLoading = dynamic(() => import('@/components/loading/PageLoading'), { ssr: false });

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const isInitialLoad = useRef(true); 



    useEffect(() => {
    const scroll = new FeatherScroll({});
    return () => {
      scroll.destroy();
    };
    }, []);

  useEffect(() => {
    if (!isInitialLoad.current) {
      setIsLoading(true);
    }
  }, [pathname]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (isInitialLoad.current) {
      // For initial load: Use readyState checks with minimum 2.2s
      const checkComponentsLoaded = () => {
        if (document.readyState === "complete") {
          timer = setTimeout(() => {
            setIsLoading(false);
            isInitialLoad.current = false; // Mark initial load as done
          }, 3000);
        }
      };

      checkComponentsLoaded();
      window.addEventListener("load", checkComponentsLoaded);
      interval = setInterval(checkComponentsLoaded, 1000);
    } else {
      // For route changes: Fixed delay without readyState check
      timer = setTimeout(() => setIsLoading(false), 2000); // Adjust this duration as needed (e.g., 1000-2000ms)
    }

    return () => {
      if (interval) clearInterval(interval);
      if (timer) clearTimeout(timer);
      window.removeEventListener("load", () => {}); // Safe cleanup
    };
  }, [pathname]); 

  if (isLoading) {
    return <PageLoading isLoading={isLoading} />;
  }

  return (
    <div
      className={`antialiased max-w-[1536px] md:!mx-auto md:pt-5 overflow-x-hidden`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className="w-full"
        >
          <Header />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            className="w-full md:px-5 overflow-x-hidden"
            role="main"
            id="main-content"
          >
            {children}
          </motion.main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
