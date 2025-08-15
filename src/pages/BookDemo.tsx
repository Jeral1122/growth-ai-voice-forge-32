import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
const BookDemo = () => {
  useEffect(() => {
    // Force reload the script and widget on each component mount
    const loadWidget = () => {
      // Remove existing script if present
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Create new script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;

      // Force reload iframe after script loads
      script.onload = () => {
        const iframe = document.getElementById('contact-booking-widget') as HTMLIFrameElement;
        if (iframe) {
          const src = iframe.src;
          iframe.src = '';
          setTimeout(() => {
            iframe.src = src;
          }, 100);
        }
      };
      document.head.appendChild(script);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadWidget, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <BackgroundLayout>
      <Helmet>
        <title>Book Demo - GROWTH AI Strategy Session</title>
        <meta name="description" content="Book a free 30-minute strategy session to discover how to replace 2 staff and save $100K+/year with AI automation." />
      </Helmet>

      <div className="min-h-screen pt-8 px-4 sm:px-6">
        {/* Back to Home Link */}
        <div className="container mx-auto max-w-7xl mb-8">
          <Link to="/" className="inline-flex items-center text-neon-green hover:text-neon-green/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="container mx-auto max-w-6xl text-center mb-12">
          <p className="text-lg sm:text-xl text-gray-300 mb-6">For Businesses Doing Over $25k/mo</p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-8">
            You're 1 Step Away from<br />
            Replacing 2 Staff and Saving<br />
            <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
              $100K+/Year
            </span> With AI
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            This quick 30-minute strategy session will show you exactly what to automate first
            <span className="text-neon-green"> — and how to get your AI agent system live in 30 days.</span>
          </p>
        </div>

        {/* Booking Widget Section */}
        <div className="container mx-auto max-w-4xl mb-16 px-2 sm:px-4">
          <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-xl p-3 sm:p-6 md:p-8 border border-gray-700/50">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-white mb-4 sm:mb-6 text-center px-2">
              Schedule Your Free Strategy Session
            </h2>
            
            <div className="bg-gradient-to-br from-charcoal/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2 sm:p-4 md:p-6">
              <iframe src="https://api.leadconnectorhq.com/widget/booking/3XxWPpJbBR88wK2XDF1A" style={{
              width: '100%',
              height: window.innerWidth <= 768 ? '700px' : '600px',
              border: 'none',
              overflow: 'hidden',
              borderRadius: '12px'
            }} scrolling="no" id="contact-booking-widget" />
            </div>
          </div>
        </div>

        {/* What You'll Get & Bonus Section */}
        <div className="container mx-auto max-w-6xl mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* What You'll Get */}
            <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-montserrat font-bold text-neon-green mb-6">What You'll Get</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-neon-green w-6 h-6 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Custom AI automation roadmap for your business</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-neon-green w-6 h-6 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Exact cost savings calculation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-neon-green w-6 h-6 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">30-day implementation timeline</span>
                </div>
              </div>
            </div>

            {/* Book Now Bonus */}
            <div className="bg-gradient-to-br from-neon-green/20 to-gold/20 backdrop-blur-sm rounded-xl p-8 border border-neon-green/30">
              <h3 className="text-2xl font-montserrat font-bold text-neon-green mb-6">Book Now Bonus</h3>
              <p className="text-gray-300 mb-4">
                <strong>FREE automation consultation (worth $1,000 USD)</strong> — we'll map out exactly how to save you $100K+ with AI.
              </p>
              <p className="text-sm text-gray-400 italic">
                *Limited to the next 3 clients only
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-br from-gray-900/80 to-charcoal/90 backdrop-blur-sm rounded-xl p-6 border border-neon-green/30 mt-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-neon-green">
              <span className="text-2xl">👉</span>
              <p className="text-lg font-medium">
                Select a time above to secure your spot and get your custom AI automation strategy
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <TestimonialsSection />
      </div>
    </BackgroundLayout>;
};
export default BookDemo;