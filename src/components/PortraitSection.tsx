
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PortraitSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(imageRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={imageRef} className="relative">
          <div className="w-full max-w-md mx-auto h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://compote.slate.com/images/3fc10951-1846-462a-b79d-6c4e01b260d4.jpeg?crop=1560%2C1040%2Cx0%2Cy0"
              alt="Woman applying skincare product" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortraitSection;
