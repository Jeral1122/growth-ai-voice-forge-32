import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
export const CTASection = () => {
  const navigate = useNavigate();
  const handleGetStrategy = () => {
    navigate('/book-demo');
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };
  return <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-6 sm:mb-8 text-[#a9fc06] lg:text-6xl">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-open-sans max-w-5xl mx-auto leading-relaxed">
            Join the smart businesses saving $100K+ annually with AI automation. Book your discovery call now to see how.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-charcoal/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-xl text-neon-green font-semibold mb-8 leading-relaxed text-stone-50 sm:text-2xl">
              Book this week and receive a FREE automation consultation (worth $1,000) — we'll map out your custom AI transformation plan.
            </p>
            
            <Button onClick={handleGetStrategy} className="bg-neon-green hover:bg-neon-green/90 text-black font-semibold text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-green/20 group px-4 sm:px-6 md:px-8 py-3 sm:py-4 w-full sm:w-auto max-w-sm mx-auto">
              <span>Get Your Custom AI Strategy</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </Button>
            
            <p className="text-gray-400 font-open-sans mt-6 text-lg">
              Limited to 3 new clients per month. Secure your spot now.
            </p>
          </div>
        </div>
      </div>
    </section>;
};