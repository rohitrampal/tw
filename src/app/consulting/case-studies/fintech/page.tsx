import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TrendingUp, DollarSign, Target } from 'lucide-react';

export default function FinTechCaseStudyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">FinTech Scale-Up Transformation</h1>
            <p className="body-large text-gray-100 mb-8">
              40% PAR Improvement, ₹44L Cost Recovery in 3 Months
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="card mb-8">
            <h2 className="heading-h3 mb-4">Company Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="body-small text-gray-600 mb-1">Industry</p>
                <p className="body-default font-semibold">FinTech</p>
              </div>
              <div>
                <p className="body-small text-gray-600 mb-1">Stage</p>
                <p className="body-default font-semibold">Scale-Up</p>
              </div>
              <div>
                <p className="body-small text-gray-600 mb-1">Employees</p>
                <p className="body-default font-semibold">50-500</p>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="heading-h3 mb-4">Challenge</h2>
            <p className="body-large text-gray-700 mb-4">
              Cost Leakage + Weak Governance Oversight
            </p>
            <ul className="space-y-2">
              {[
                'Significant revenue leakage from operational inefficiencies',
                'Weak governance oversight leading to inconsistent execution',
                'Governance maturity score: 62/100',
                'Lack of real-time visibility into operations',
                'Manual processes causing delays and errors',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-error-500 flex-shrink-0 mt-1" />
                  <p className="body-default text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card mb-8">
            <h2 className="heading-h3 mb-4">Approach: Governance Intelligence Program</h2>
            <p className="body-default text-gray-700 mb-4">
              Implemented full G2P framework with PraXio™ platform for real-time governance.
            </p>
          </div>

          <div className="card mb-8 bg-navy-500 text-white">
            <h2 className="heading-h3 mb-6 text-white">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { metric: 'Governance Score', before: '62/100', after: '92/100', improvement: '+30 points' },
                { metric: 'Cost Recovery', before: 'N/A', after: '₹44L', improvement: 'In 3 months' },
                { metric: 'PAR Improvement', before: 'Baseline', after: '+40%', improvement: 'Prediction accuracy' },
                { metric: 'Operational Visibility', before: 'Manual reports', after: 'Real-time dashboards', improvement: 'PraXio™ platform' },
              ].map((result, i) => (
                <div key={i} className="border border-navy-400 rounded-lg p-4">
                  <p className="body-small text-gray-300 mb-2">{result.metric}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="body-default text-gray-400">{result.before}</span>
                    <span className="text-gold-300">→</span>
                    <span className="body-default font-semibold text-white">{result.after}</span>
                  </div>
                  <p className="body-small text-gold-300">{result.improvement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready for Similar Results?</h2>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Book Discovery Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

