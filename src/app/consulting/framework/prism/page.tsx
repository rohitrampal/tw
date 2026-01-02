import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Eye, Target, TrendingUp } from 'lucide-react';

export default function PrismMethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">PRISM – Experience-Driven Governance</h1>
            <p className="body-large text-gray-100 mb-8">
              Experience-driven governance (CXEX)—optimize customer experience and retention
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Apply PRISM to Your Business</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">When to Use PRISM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Customer experience optimization',
              'Customer retention challenges',
              'NPS and CSAT improvements needed',
              'Customer lifecycle management',
            ].map((item, i) => (
              <div key={i} className="card">
                <p className="body-default text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">Key Focus: Customer Experience Quotient (CXQ)</h2>
            <div className="card bg-teal-50 border-2 border-teal-500">
              <p className="body-large text-gray-700 mb-4">
                PRISM optimizes customer experience by mapping customer journeys, identifying pain points, and implementing governance loops that ensure consistent, high-quality experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'Customer journey mapping',
                  'Experience governance loops',
                  'Real-time CX monitoring',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-teal-500" />
                    <p className="body-default text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-navy-500 text-white mb-12">
            <h2 className="heading-h2 mb-6">Expected Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Customer Experience Quotient (CXQ) improved 25+ points',
                'NPS improved 20–30 points',
                'Customer churn reduced 15–25%',
                'Customer lifetime value increased',
              ].map((outcome, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-gold-300 flex-shrink-0 mt-1" />
                  <p className="body-default text-gray-200">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to Optimize Customer Experience?</h2>
          <p className="body-large text-gray-600 mb-8">
            Transform customer experience with governance
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Book Discovery Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
