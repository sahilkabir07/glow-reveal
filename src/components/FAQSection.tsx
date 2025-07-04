
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes your skincare products different?",
      answer: "Our products are crafted with 100% natural ingredients, handmade in small batches to ensure quality and freshness. We focus on powerful botanical compounds that work in harmony with your skin's natural processes."
    },
    {
      question: "Are your products suitable for sensitive skin?",
      answer: "Yes! Our gentle formulations are designed to be suitable for all skin types, including sensitive skin. We avoid harsh chemicals and synthetic fragrances that can cause irritation."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most customers notice improvements in their skin's texture and radiance within 2-3 weeks of consistent use. For optimal results, we recommend using our products as part of a complete skincare routine."
    },
    {
      question: "Do you offer a satisfaction guarantee?",
      answer: "Absolutely! We're confident in our products and offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, we'll provide a full refund."
    }
  ];

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const toggleFAQ = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    
    const content = document.querySelector(`[data-faq="${index}"]`);
    const icon = document.querySelector(`[data-icon="${index}"]`);
    
    if (content && icon) {
      if (isOpening) {
        gsap.fromTo(content, 
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
        );
        gsap.to(icon, { rotation: 45, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(content, 
          { height: 0, opacity: 0, duration: 0.3, ease: "power2.out" }
        );
        gsap.to(icon, { rotation: 0, duration: 0.3, ease: "power2.out" });
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-rose-900 text-center mb-16"
        >
          Answers to Your Skincare Questions, All in One Place
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-rose-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-rose-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-rose-900 pr-4">
                  {faq.question}
                </h3>
                <div data-icon={index} className="flex-shrink-0">
                  <Plus className="w-6 h-6 text-rose-600" />
                </div>
              </button>
              <div 
                data-faq={index}
                className="overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <div className="p-6 pt-0 text-rose-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
