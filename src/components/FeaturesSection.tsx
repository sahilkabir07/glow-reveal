
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Heart, Hand } from 'lucide-react';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

    gsap.fromTo(featuresRef.current?.children || [],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-rose-600" />,
      title: "Big Ingredients",
      description: "Powerful natural compounds that deliver visible results"
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-600" />,
      title: "Everything Natural",
      description: "100% natural formulations without harsh chemicals"
    },
    {
      icon: <Hand className="w-8 h-8 text-rose-600" />,
      title: "All Handmade",
      description: "Carefully crafted in small batches with love and attention"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-rose-900 mb-16"
        >
          Your Skin Deserves the Best Care
        </h2>
        
        <div ref={featuresRef} className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4 group">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-rose-100 rounded-full group-hover:bg-rose-200 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-rose-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-rose-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
