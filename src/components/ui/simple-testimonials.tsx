"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const SimpleTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: { quote: string; name: string }[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className={cn("max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative">
        <motion.div
          key={active}
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-center"
        >
          <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-open-sans leading-relaxed italic mb-6">
            "{testimonials[active].quote}"
          </blockquote>
          <p className="text-lg text-neon-green font-medium">— {testimonials[active].name}</p>
        </motion.div>
        
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            className="h-10 w-10 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 border border-neon-green/30 flex items-center justify-center group/button hover:from-neon-green/30 hover:to-neon-green/20 transition-all duration-300"
          >
            <IconArrowLeft className="h-5 w-5 text-neon-green transition-transform duration-300" />
          </button>
          <button
            onClick={handleNext}
            className="h-10 w-10 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/10 border border-neon-green/30 flex items-center justify-center group/button hover:from-neon-green/30 hover:to-neon-green/20 transition-all duration-300"
          >
            <IconArrowRight className="h-5 w-5 text-neon-green transition-transform duration-300" />
          </button>
        </div>
        
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                index === active 
                  ? "bg-neon-green" 
                  : "bg-gray-600 hover:bg-gray-500"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};