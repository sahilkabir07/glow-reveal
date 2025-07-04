
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);

  const products = [
    {
      image: "https://cdn.kindlife.in/images/detailed/98/Bioreva-radiance-serum-30ml.jpg?t=1692456587",
      name: "Radiance Serum",
      price: "$45"
    },
    {
      image: "https://discoverpilgrim.com/cdn/shop/files/Squalane_Glow_Moisturizer_1080x1080_White-background-with-Stamp.jpg?v=1750910040",
      name: "Glow Moisturizer",
      price: "$38"
    },
    {
      image: "https://www.khadinatural.com/cdn/shop/files/Artboard_1_2x_53ddfa64-1c63-40a3-9725-fb03518438fa.jpg?v=1745566826&width=2400",
      name: "Natural Cleanser",
      price: "$32"
    },
    {
      image: "https://images.mamaearth.in/catalog/product/f/l/flowers-of-youth-essence-serum_2_1_1_1.jpg?format=auto&height=600",
      name: "Youth Essence",
      price: "$52"
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

    const buttons = [leftButtonRef.current, rightButtonRef.current];
    buttons.forEach(button => {
      if (button) {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { scale: 1.1, duration: 0.2, ease: "power2.out" });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.out" });
        });
      }
    });
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'right' ? scrollAmount : -scrollAmount);
      
      gsap.to(scrollContainerRef.current, {
        scrollLeft: newScrollLeft,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-rose-50">
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-rose-900 text-center mb-16"
        >
          Skincare That Brings Out Your Natural Radiance
        </h2>
        
        <div className="relative">
          <div className="flex justify-center gap-4 mb-8 md:hidden">
            <Button
              ref={leftButtonRef}
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="rounded-full border-rose-200 hover:bg-rose-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              ref={rightButtonRef}
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="rounded-full border-rose-200 hover:bg-rose-100"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <div key={index} className="flex-shrink-0 w-72 md:w-auto group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-rose-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-rose-600">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
