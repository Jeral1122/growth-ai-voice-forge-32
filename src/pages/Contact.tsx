import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBarDemo } from '../components/ui/navbar-demo';
import Footer from '../components/Footer';
import { BackgroundLayout } from '../components/layout/BackgroundLayout';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
const ContactPage = () => {
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
        <title>Contact Us - GrowthAI</title>
        <meta name="description" content="Get in touch with GrowthAI for your AI automation consultation. Book a free strategy session worth $1,000." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <NavBarDemo />
      
      <main className="pt-20">
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-neon-green via-gold to-neon-green bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-open-sans max-w-5xl mx-auto leading-relaxed">
                Ready to transform your business with AI voice agents? Schedule a personalized demo and see how GROWTH AI can double your revenue.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-white mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-gray-400 font-open-sans mb-8 text-lg leading-relaxed">
                    We're here to help you succeed. Whether you have questions about our platform, 
                    need technical support, or want to explore partnership opportunities, 
                    our team is ready to assist.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-neon-green" />
                    </div>
                    <div>
                      <h3 className="text-white font-montserrat font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-400 font-open-sans">Info@growthaipro.net</p>
                      <p className="text-gray-500 font-open-sans text-sm"></p>
                    </div>
                  </div>

                  

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-neon-green" />
                    </div>
                    <div>
                      <h3 className="text-white font-montserrat font-semibold mb-1">Based In</h3>
                      <p className="text-gray-400 font-open-sans">Global Operations<br />Serving Worldwide</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-white font-montserrat font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/growthaipro/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-neon-green/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <Instagram size={20} className="text-gray-400 hover:text-neon-green" />
                    </a>
                    <a href="https://www.facebook.com/people/Growth-AI/61575534516251/?_rdr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-neon-green/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <Facebook size={20} className="text-gray-400 hover:text-neon-green" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Booking Widget */}
              <div className="animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
                <div className="bg-gradient-to-br from-charcoal/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mx-0 my-0 px-0 py-0">
                  <iframe src="https://api.leadconnectorhq.com/widget/booking/3XxWPpJbBR88wK2XDF1A" style={{
                  width: '100%',
                  height: '600px',
                  border: 'none',
                  overflow: 'hidden',
                  borderRadius: '12px'
                }} scrolling="no" id="contact-booking-widget" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </BackgroundLayout>;
};
export default ContactPage;