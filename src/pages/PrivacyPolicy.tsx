import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy - GrowthAI</title>
        <meta name="description" content="GrowthAI Privacy Policy - Learn how we protect and handle your personal and business information." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">GrowthAI</p>
          <p className="text-sm text-muted-foreground mt-2">Effective Date: 13th August, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground">
          <div className="bg-card p-6 rounded-lg border mb-8">
            <p className="text-muted-foreground leading-relaxed">
              GrowthAI ("we," "our," "us") values your privacy and is committed to protecting the personal and
              business information you share with us. This policy explains how we collect, use, and safeguard
              your information.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
            <p className="mb-4 text-muted-foreground">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Contact details (name, email, phone number)</li>
              <li>Business information (company name, services, client data)</li>
              <li>Technical information (logins or credentials only when provided voluntarily for integration purposes)</li>
              <li>Any other data you choose to share with us for service delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
            <p className="mb-4 text-muted-foreground">We use your information strictly for:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Delivering and maintaining our services</li>
              <li>Improving our products and performance</li>
              <li>Providing support and responding to inquiries</li>
              <li>Internal analytics and business purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Data Privacy & Security</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>All information you provide is kept strictly confidential.</li>
              <li>Access to your information is limited to authorized GrowthAI personnel only.</li>
              <li>We do not sell, rent, or share your information with third parties without your consent, unless required by law.</li>
              <li>We use industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Third-Party Services</h2>
            <p className="text-muted-foreground">
              Some services may require integration with third-party platforms. While we only work with trusted
              providers, we are not responsible for the privacy practices of these third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Liability Disclaimer</h2>
            <p className="mb-4 text-muted-foreground">While we take every reasonable precaution to protect your data, GrowthAI is not liable for:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Losses caused by third-party breaches or unforeseen events outside our control.</li>
              <li>Damages resulting from incorrect information provided by you.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Your Rights</h2>
            <p className="mb-4 text-muted-foreground">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Request a copy of the data we hold about you.</li>
              <li>Request corrections or deletion of your information.</li>
              <li>Withdraw consent for data use at any time (may affect service delivery).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Updates to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Any changes will be posted on our website
              with a revised effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions or requests regarding this policy, email us at{' '}
              <a href="mailto:Info@growthaipro.net" className="text-primary hover:underline">
                Info@growthaipro.net
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;