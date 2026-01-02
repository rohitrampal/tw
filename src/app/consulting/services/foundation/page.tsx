import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Clock, TrendingUp, FileText } from 'lucide-react';

export default function FoundationServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">Operational Excellence Foundation</h1>
            <p className="body-large text-gray-100 mb-8">
              Structured SOPs, governance workflows, dashboards—all in 60 days
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Build Your Foundation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Custom SOP library (30–50 SOPs)',
              'Workflow automation design',
              'KPI definition and dashboard setup',
              'Team training and change management',
              'Go-live support and stabilization',
              '3-month post-implementation support',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                <p className="body-default text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">Implementation Timeline</h2>
            <div className="space-y-6">
              {[
                { phase: 'Week 1', title: 'Kickoff, SOP prioritization' },
                { phase: 'Week 2–4', title: 'SOP creation and workflow design' },
                { phase: 'Week 5–6', title: 'Pilot testing with real teams' },
                { phase: 'Week 7–8', title: 'Refinement and full rollout' },
                { phase: 'Week 9–12', title: 'Stabilization, training, dashboard optimization' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="w-24 flex-shrink-0">
                    <p className="font-semibold text-teal-500">{item.phase}</p>
                  </div>
                  <p className="body-default text-gray-700 flex-1">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <TrendingUp className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="heading-h4 mb-2">Process Consistency</h3>
              <p className="body-default text-gray-600">Improved 40–50%</p>
            </div>
            <div className="card text-center">
              <Clock className="w-12 h-12 text-gold-300 mx-auto mb-4" />
              <h3 className="heading-h4 mb-2">Decision Speed</h3>
              <p className="body-default text-gray-600">Improved 30–40%</p>
            </div>
            <div className="card text-center">
              <FileText className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="heading-h4 mb-2">Cost Leakage</h3>
              <p className="body-default text-gray-600">Reduced 20–30%</p>
            </div>
          </div>

          <div className="card bg-navy-500 text-white">
            <h3 className="heading-h3 mb-4">Investment & ROI</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="body-small text-gray-300 mb-2">Investment</p>
                <p className="heading-h3 text-gold-300">₹2,99,999</p>
                <p className="body-small text-gray-300 mt-2">One-time, 60 days</p>
              </div>
              <div>
                <p className="body-small text-gray-300 mb-2">Typical ROI</p>
                <p className="heading-h3 text-teal-400">₹20–40L</p>
                <p className="body-small text-gray-300 mt-2">In annual cost savings</p>
                <p className="body-small text-gray-300">Payback period: 3–4 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to Build Your Foundation?</h2>
          <p className="body-large text-gray-600 mb-8">
            Start with a free assessment to identify your priorities
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Schedule Your Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
