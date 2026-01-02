import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Clock, TrendingUp } from 'lucide-react';

export default function AssessmentServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">Business Operational Assessment</h1>
            <p className="body-large text-gray-100 mb-8">
              Deep-dive analysis revealing hidden inefficiencies, risks, and opportunity gaps
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Book Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Root cause analysis of bottlenecks and inefficiencies',
              'G2P governance maturity scorecard (5 indices)',
              'Cost leakage quantification (revenue lost to inefficiency)',
              '3–5 prioritized initiatives with ROI projections',
              'Detailed process maps (As-Is and To-Be)',
              '50-page assessment report',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                <p className="body-default text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <Clock className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="heading-h4 mb-2">Duration</h3>
              <p className="body-default text-gray-600">5–7 days</p>
            </div>
            <div className="card text-center">
              <TrendingUp className="w-12 h-12 text-gold-300 mx-auto mb-4" />
              <h3 className="heading-h4 mb-2">Typical ROI</h3>
              <p className="body-default text-gray-600">₹40–60L in recoverable leakage identified</p>
            </div>
            <div className="card text-center">
              <CheckCircle className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="heading-h4 mb-2">Quick Wins</h3>
              <p className="body-default text-gray-600">30–60 days to realize ₹10–15L savings</p>
            </div>
          </div>

          <div className="card bg-navy-500 text-white">
            <h3 className="heading-h3 mb-4">Investment & ROI</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="body-small text-gray-300 mb-2">Investment</p>
                <p className="heading-h3 text-gold-300">₹1,49,999</p>
                <p className="body-small text-gray-300 mt-2">One-time, 5–7 days</p>
              </div>
              <div>
                <p className="body-small text-gray-300 mb-2">Typical ROI</p>
                <p className="heading-h3 text-teal-400">₹40–60L</p>
                <p className="body-small text-gray-300 mt-2">In recoverable leakage identified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to Get Started?</h2>
          <p className="body-large text-gray-600 mb-8">
            Schedule your Business Operational Assessment today
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Schedule Your Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

