
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(headlineRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(subheadingRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.5"
    )
    .fromTo(buttonRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3"
    )
    .fromTo(imageRef.current, 
      { x: 50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.8"
    );

    gsap.fromTo(paragraphRef.current, 
      { y: 30, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-rose-900 leading-tight"
          >
            GLOW NATURALLY
          </h1>
          
          <h2 
            ref={subheadingRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-rose-800 tracking-wider"
          >
            SKINCARE
          </h2>
          
          <p 
            ref={paragraphRef}
            className="text-lg md:text-xl text-rose-700 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Discover the power of natural ingredients that reveal your skin's true radiance. 
            Our carefully crafted formulations bring out your natural beauty with every application.
          </p>
          
          <div ref={buttonRef} className="pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Shop Collection
            </Button>
          </div>
        </div>

        <div ref={imageRef} className="flex justify-center lg:justify-end">
          <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://media.istockphoto.com/id/1474300446/photo/beautiful-natural-woman-extreme-close-up.jpg?s=612x612&w=0&k=20&c=sFrrhc8umADHq5RZMcxMXgYDzoJlgOlYDtT-QftMJG0="
              alt="Beautiful woman with glowing skin" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
