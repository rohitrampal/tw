import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RefreshCw, Target, TrendingUp } from 'lucide-react';

export default function CycleMethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">CYCLE – Predictive Operational Consistency</h1>
            <p className="body-large text-gray-100 mb-8">
              Stabilize, optimize, and automate for reliable performance
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Apply CYCLE to Your Business</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">When to Use CYCLE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'High downtime or SLA breaches',
              'Inconsistent process execution',
              'Forecasting accuracy poor',
              'Manual firefighting common',
            ].map((item, i) => (
              <div key={i} className="card">
                <p className="body-default text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <h2 className="heading-h2 mb-8">The Four Phases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                phase: 'Coordinate',
                desc: 'Visualize processes, establish baselines',
                icon: Target,
              },
              {
                phase: 'Yield',
                desc: 'Forecast risk, model demand, set thresholds',
                icon: TrendingUp,
              },
              {
                phase: 'Calibrate',
                desc: 'Diagnose inefficiencies, optimize workflows',
                icon: RefreshCw,
              },
              {
                phase: 'Learn',
                desc: 'Capture insights, drive actionable learning',
                icon: RefreshCw,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="card text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-teal-500" />
                  </div>
                  <h3 className="heading-h4 mb-2">{item.phase}</h3>
                  <p className="body-default text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">Key Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Process consistency +40–50%',
                'Downtime reduction 30–50%',
                'SLA compliance improved 25–40%',
                'Forecast accuracy (PAR) improved 20–35 points',
              ].map((outcome, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="body-default text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card bg-navy-500 text-white mb-12">
            <h2 className="heading-h2 mb-6">Case Study: Banking Operations</h2>
            <div className="space-y-4">
              <div>
                <p className="body-default font-semibold mb-2">Challenge:</p>
                <p className="body-default text-gray-200">High error rate, slow transactions</p>
              </div>
              <div>
                <p className="body-default font-semibold mb-2">Approach:</p>
                <p className="body-default text-gray-200">CYCLE framework applied</p>
              </div>
              <div>
                <p className="body-default font-semibold mb-2">Result:</p>
                <p className="body-default text-gray-200">
                  68% error reduction, audit findings → 0, customer satisfaction +30%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to Apply CYCLE?</h2>
          <p className="body-large text-gray-600 mb-8">
            Start with a free Operational Health Diagnostic
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/tools/health-check">Start Free Diagnostic</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
