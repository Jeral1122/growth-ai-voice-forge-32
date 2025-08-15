import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { NavBarDemo } from '../components/ui/navbar-demo';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/ui/faq-section';
import Footer from '../components/Footer';
import { CTASection } from '../components/sections/CTASection';
const Demo = () => {
  const navigate = useNavigate();
  const handleBookStrategyCall = () => {
    navigate('/book-demo');
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };
  const faqs = [{
    question: "What can GROWTH AI do for my business?",
    answer: "GROWTH AI can handle inbound calls, qualify leads, book appointments, conduct outbound sales calls, follow up with prospects, and integrate with your existing CRM systems. Our AI agents work 24/7 with perfect memory and consistent performance."
  }, {
    question: "How is GROWTH AI different from other chatbots?",
    answer: "Unlike generic chatbots, GROWTH AI is specifically trained for voice conversations and sales processes. We provide custom conversation flows, seamless CRM integration, and human-like voice quality that your customers won't distinguish from real agents."
  }, {
    question: "Is my data secure with GROWTH AI?",
    answer: "Yes, we use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and secure data handling practices. Your customer data and business information are protected with the highest security standards."
  }, {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 technical support, dedicated account management for Enterprise clients, comprehensive onboarding, and ongoing optimization of your AI agents based on performance data."
  }, {
    question: "How quickly can I get started?",
    answer: "Most clients are up and running within 24-48 hours. We handle the technical setup, train the AI on your specific business needs, and provide testing before going live."
  }];
  return <BackgroundLayout>
      <NavBarDemo />

      {/* Main content with top padding to account for navbar */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 sm:pt-20">
        {/* Phone Icon */}
        <div className="mb-6 sm:mb-8 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
          <Phone size={48} className="text-neon-green sm:hidden" />
          
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 text-center font-montserrat px-2 animate-slide-up opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
          Meet Your New <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">AI Workforce</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 text-center max-w-4xl font-open-sans animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
          We build custom AI systems that replace staff, streamline operations, automate support, and follow up faster than any human ever could.
        </p>

        {/* Strategy Call Button */}
        <div className="animate-slide-up opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
          <button onClick={handleBookStrategyCall} className="bg-neon-green hover:bg-neon-green/90 text-black font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-green/20 font-montserrat">
            Book a Free Strategy Call
          </button>
        </div>

      </div>

      {/* AI Agents Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6 text-white">
              AI Agents Custom-Built to Solve Your Most <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">Expensive Bottlenecks</span>
            </h2>
          </div>

          {/* First Row of Agents */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-neon-green/30 transition-all duration-300">
              <Phone className="text-neon-green mb-4" size={32} />
              <h3 className="text-xl font-montserrat font-semibold text-white mb-3">Voice Sales Agent</h3>
              <p className="text-gray-300 font-open-sans mb-4">Handles calls, qualifies prospects, books meetings automatically</p>
              
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-neon-green/30 transition-all duration-300">
              <div className="text-neon-green mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-3">Follow-Up Agent</h3>
              <p className="text-gray-300 font-open-sans mb-4">Calls, emails, and texts prospects who ghost or no-show</p>
              
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-neon-green/30 transition-all duration-300">
              <div className="text-neon-green mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-3">Inbound Receptionist Agent</h3>
              <p className="text-gray-300 font-open-sans mb-4">Handles incoming calls and routes them intelligently</p>
              
            </div>
          </div>

          {/* Second Row of Agents */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-neon-green/30 transition-all duration-300">
              <div className="text-neon-green mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10,9 9,9 8,9" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-3">Support Ticket Agent</h3>
              <p className="text-gray-300 font-open-sans mb-4">Responds to common questions via email or chat instantly</p>
              
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-neon-green/30 transition-all duration-300">
              <div className="text-neon-green mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-3">CRM & Data Cleaner Agent</h3>
              <p className="text-gray-300 font-open-sans mb-4">Organizes, deduplicates, and enriches your database</p>
              
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-neon-green/30 transition-all duration-300">
              <div className="text-neon-green mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-3">Outreach/Prospector Agent</h3>
              <p className="text-gray-300 font-open-sans mb-4">Finds prospects, summarizes company info, preps CRM</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* How Systems Work Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6 text-white">
              How Our <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">AI Systems</span> Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-neon-green/20 to-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <div className="text-neon-green">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-4">Custom Design</h3>
              <p className="text-gray-300 font-open-sans">We design the system around your business (no plug-and-play solutions)</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-neon-green/20 to-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <div className="text-neon-green">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-4">AI Team Deployment</h3>
              <p className="text-gray-300 font-open-sans">You get a team of AI 'employees' doing the heavy lifting</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-neon-green/20 to-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <div className="text-neon-green">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-4">Optimization</h3>
              <p className="text-gray-300 font-open-sans">You monitor performance — we optimize continuously</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Comparison */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6 text-white">
              Before & After <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">Business Comparison</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Before AI */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-red-500/30">
              <h3 className="text-2xl font-montserrat font-bold text-red-400 mb-6">Before AI</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-red-400 mr-3">✗</div>
                  <span className="text-gray-300 font-open-sans">Missed prospects</span>
                </div>
                <div className="flex items-center">
                  <div className="text-red-400 mr-3">✗</div>
                  <span className="text-gray-300 font-open-sans">Slow follow-ups</span>
                </div>
                <div className="flex items-center">
                  <div className="text-red-400 mr-3">✗</div>
                  <span className="text-gray-300 font-open-sans">Manual data entry</span>
                </div>
                <div className="flex items-center">
                  <div className="text-red-400 mr-3">✗</div>
                  <span className="text-gray-300 font-open-sans">High labor costs</span>
                </div>
                <div className="flex items-center">
                  <div className="text-red-400 mr-3">✗</div>
                  <span className="text-gray-300 font-open-sans">Team burnout</span>
                </div>
              </div>
            </div>

            {/* With AI Agents */}
            <div className="bg-gradient-to-br from-neon-green/20 to-gold/20 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-neon-green/30">
              <h3 className="text-2xl font-montserrat font-bold text-neon-green mb-6">With AI Agents</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-neon-green mr-3">✓</div>
                  <span className="text-gray-300 font-open-sans">Instant responses</span>
                </div>
                <div className="flex items-center">
                  <div className="text-neon-green mr-3">✓</div>
                  <span className="text-gray-300 font-open-sans">Auto-booking</span>
                </div>
                <div className="flex items-center">
                  <div className="text-neon-green mr-3">✓</div>
                  <span className="text-gray-300 font-open-sans">Full pipeline visibility</span>
                </div>
                <div className="flex items-center">
                  <div className="text-neon-green mr-3">✓</div>
                  <span className="text-gray-300 font-open-sans">Lean team</span>
                </div>
                <div className="flex items-center">
                  <div className="text-neon-green mr-3">✓</div>
                  <span className="text-gray-300 font-open-sans">24/7 operation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <TestimonialsSection />
      <FAQSection title="Common Questions" description="Everything you need to know about GROWTH AI" faqs={faqs} />
      <Footer />
    </BackgroundLayout>;
};
export default Demo;