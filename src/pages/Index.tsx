
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PortraitSection from '@/components/PortraitSection';
import ProductsSection from '@/components/ProductsSection';
import BannerSection from '@/components/BannerSection';
import FAQSection from '@/components/FAQSection';
import FooterSection from '@/components/FooterSection';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(pageRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50">
      <HeroSection />
      <FeaturesSection />
      <PortraitSection />
      <ProductsSection />
      <BannerSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
