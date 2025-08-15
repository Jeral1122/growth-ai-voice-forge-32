import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service - GrowthAI</title>
        <meta name="description" content="GrowthAI Terms of Service - Review our terms and conditions for using our marketing and automation services." />
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
          
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">GrowthAI</p>
          <p className="text-sm text-muted-foreground mt-2">Effective Date: 13th August, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground">
          <div className="bg-card p-6 rounded-lg border mb-8">
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") govern all services provided by GrowthAI ("we," "our," "us") to
              you ("client," "you," "your"). By engaging with our services, you agree to these Terms.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Scope of Services</h2>
            <p className="mb-4 text-muted-foreground">GrowthAI provides marketing and automation services including (but not limited to):</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Paid advertising campaigns</li>
              <li>AI calling systems</li>
              <li>Backend funnels and automation systems</li>
              <li>CRM integrations and support tools</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              We may also offer related consulting, design, and development work as agreed upon in writing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Payments & Refund Policy</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>All invoices are payable according to the terms stated on the invoice.</li>
              <li>No refunds will be issued after 14 days from the date of payment, as we allocate resources and pay our teams on a weekly basis.</li>
              <li>If services have been initiated, partial refunds are not available.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Performance Guarantee</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>If the agreed results are not met within 90 days, GrowthAI will continue to work at no additional cost until those results are achieved.</li>
              <li>Once results are met, the client and GrowthAI will decide whether to continue services under a new agreement.</li>
              <li>"Results" will be defined in the written agreement before work begins.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Client Responsibilities</h2>
            <p className="mb-4 text-muted-foreground">The client agrees to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide all necessary access, information, and approvals in a timely manner.</li>
              <li>Maintain any required advertising budgets and subscription costs for tools and platforms.</li>
              <li>Ensure all information provided to GrowthAI is accurate and lawful.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. No Guarantee Beyond Agreed Terms</h2>
            <p className="mb-4 text-muted-foreground">While GrowthAI is committed to delivering agreed outcomes, we cannot be held responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Market changes or industry shifts beyond our control.</li>
              <li>Client-side errors, delays, or lack of cooperation.</li>
              <li>Third-party platform changes, downtime, or account restrictions.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Limitation of Liability</h2>
            <p className="mb-4 text-muted-foreground">To the fullest extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>GrowthAI is not liable for indirect, incidental, or consequential damages.</li>
              <li>Our total liability is limited to the total amount paid by the client for the services in the 3 months prior to the claim.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Termination</h2>
            <p className="text-muted-foreground">
              Either party may terminate the agreement with written notice. Termination does not entitle the client
              to refunds outside the stated refund policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Confidentiality</h2>
            <p className="text-muted-foreground">
              All information shared between the client and GrowthAI remains confidential and will not be shared
              with third parties without written consent, except as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms are governed by the laws of the State of California. Any disputes will be resolved in
              the courts of San Diego County, California.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, email us at{' '}
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

export default TermsOfService;