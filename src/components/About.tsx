import React from 'react';
import { Users, Award, TrendingUp, ArrowRight, Calendar, Target, Zap, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  return <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
          {/* Left Column - Visual Content */}
          <div className="relative animate-slide-up order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <TrendingUp size={48} className="text-neon-green" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
                  AI-Powered Growth
                </h3>
                <p className="text-gray-300 font-open-sans leading-relaxed">
                  Transform your business with intelligent voice agents that work 24/7 to drive revenue growth.
                </p>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-green/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-bold mb-8">
                <span className="text-white">About </span>
                <span className="bg-gradient-to-r from-neon-green to-gold bg-clip-text text-transparent">
                  GROWTH AI
                </span>
              </h2>
              <p className="text-lg text-gray-300 font-open-sans leading-relaxed mb-8">
                We revolutionize how businesses handle customer interactions through advanced AI voice technology. 
                Our intelligent agents don't just answer calls—they actively drive revenue growth by qualifying leads, 
                booking appointments, and nurturing prospects with human-like conversations.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-700/30 backdrop-blur-sm">
                <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-neon-green" />
                </div>
                <div>
                  <h3 className="text-white font-montserrat font-semibold text-base mb-2">Best Ai Solutions</h3>
                  <p className="text-gray-400 font-open-sans text-sm">
                    Trust our AI solutions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-700/30 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-montserrat font-semibold text-base mb-2">
                    Industry Leader
                  </h3>
                  <p className="text-gray-400 font-open-sans text-sm">
                    In AI voice technology
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button - Centered with Animation */}
            <div className="pt-6 flex justify-center">
              <button onClick={() => {
              navigate('/book-demo');
              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }, 100);
            }} className="bg-gradient-to-r from-neon-green to-gold text-charcoal px-8 py-4 rounded-lg font-montserrat font-semibold text-base transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-neon-green/20 flex items-center gap-3 shadow-lg animate-pulse-glow group">
                Get Started Today
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Team Section */}
        

        {/* Our Story Section */}
        
      </div>
    </section>;
};
export default About;