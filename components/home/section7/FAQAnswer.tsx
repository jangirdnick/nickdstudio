import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { BiPlus } from 'react-icons/bi';
 
interface FAQItem {
  question: string;
  answer: string;
}
 
interface FAQAnswerProps {
  faqAnswers: FAQItem[];
}
 
export default function FAQAnswer({ faqAnswers }: FAQAnswerProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
 
  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
 
  const variants: Variants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };
 
  return (
    <div>
      {faqAnswers.map((faq, index) => (
        <div
          key={index}
          className="my-6 bg-zinc-800/40 backdrop-blur-md border-[1.5px] border-zinc-200/30 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <button
            type="button"
            className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-zinc-200 cursor-pointer hover:bg-orange-600/40  transition-colors duration-200"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}
          >
            <span className="text-left">{faq.question}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="text-2xl text-black text-shadow-2xs text-shadow-white bg-orange-500 border-[1.5px] border-orange-500/50 shadow-sm shadow-orange-600 rounded-full"
            >
              <BiPlus />
            </motion.span>
          </button>
 
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                className="overflow-hidden"
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-heading-${index}`}
              >
                <div className="px-6 py-4 text-base text-zinc-200 border-t border-zinc-300/80">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
