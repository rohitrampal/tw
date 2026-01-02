import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, RefreshCw, Brain, Shield } from 'lucide-react';

export default function GovernanceServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">Governance Intelligence Program</h1>
            <p className="body-large text-gray-100 mb-8">
              Full G2P framework, real-time dashboards, AI anomaly detection—60 days to autonomous governance
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Establish Governance</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'G2P framework implementation (6 methodologies, 5 indices)',
              'Governance framework design (policies, approval workflows, escalation)',
              'PraXio™ platform setup and integration',
              'Real-time KPI dashboards and alerts',
              '12-week implementation and stabilization',
              'Quarterly governance reviews (12 months)',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                <p className="body-default text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">The Governance Loop</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { icon: RefreshCw, title: 'Plan', desc: 'Set monthly targets and governance cadences' },
                { icon: Brain, title: 'Monitor', desc: 'Real-time dashboard visibility' },
                { icon: Shield, title: 'Analyze', desc: 'Weekly governance reviews and trend analysis' },
                { icon: RefreshCw, title: 'Improve', desc: 'Continuous improvement workshops' },
                { icon: Brain, title: 'Evolve', desc: 'Scale governance as business grows' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="card text-center">
                    <Icon className="w-10 h-10 text-teal-500 mx-auto mb-3" />
                    <h3 className="heading-h4 mb-2">{item.title}</h3>
                    <p className="body-small text-gray-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">G2P Indices Tracked</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { name: 'PAR', desc: 'Prediction Accuracy (forecast consistency)' },
                { name: 'AQ', desc: 'Autonomy Quotient (team empowerment)' },
                { name: 'CLS', desc: 'Cognitive Load (decision-maker burden)' },
                { name: 'LV', desc: 'Learning Velocity (adaptation speed)' },
                { name: 'MTTAR', desc: 'Mean Time to Auto-Resolution (resilience)' },
              ].map((index, i) => (
                <div key={i} className="card text-center">
                  <div className="text-3xl font-bold text-gold-300 mb-2">{index.name}</div>
                  <p className="body-small text-gray-600">{index.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card bg-navy-500 text-white mb-12">
            <h3 className="heading-h3 mb-4">Investment & ROI</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="body-small text-gray-300 mb-2">Investment</p>
                <p className="heading-h3 text-gold-300">₹4,99,999</p>
                <p className="body-small text-gray-300 mt-2">60 days + 12-month partnership</p>
              </div>
              <div>
                <p className="body-small text-gray-300 mb-2">Typical ROI</p>
                <p className="heading-h3 text-teal-400">₹50–80L</p>
                <p className="body-small text-gray-300 mt-2">In cost savings + governance maturity</p>
                <p className="body-small text-gray-300">Governance score improvement: +25–35 points</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to Establish Governance?</h2>
          <p className="body-large text-gray-600 mb-8">
            Transform your operations with measurable governance intelligence
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Schedule Your Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
