
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FooterSection = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-gradient-to-b from-rose-900 to-rose-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={ctaRef} className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join the Skincare Community Now
          </h2>
          <p className="text-rose-200 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to get exclusive access to new products, skincare tips, and special offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-rose-200"
            />
            <Button 
              className="bg-white text-rose-900 hover:bg-rose-50 px-8 py-2 font-semibold"
            >
              Subscribe
            </Button>
          </div>
        </div>
        
        <div className="border-t border-rose-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-rose-200">
              © 2024 Natural Glow Skincare. All rights reserved.
            </div>
            <div className="flex gap-6 text-rose-200">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
