import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Hexagon, RefreshCw, Target } from 'lucide-react';

export default function ParseMethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">PARSE – Strategic Reset and Realignment</h1>
            <p className="body-large text-gray-100 mb-8">
              Navigate crisis recovery and organizational restructuring with precision
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Apply PARSE to Your Business</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">When to Use PARSE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Crisis recovery and turnaround',
              'Organizational restructuring needed',
              'Strategic realignment required',
              'Mission-critical recovery situations',
            ].map((item, i) => (
              <div key={i} className="card">
                <p className="body-default text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">PARSE Framework</h2>
            <div className="space-y-6">
              {[
                {
                  letter: 'P',
                  word: 'Plan',
                  desc: 'Strategic planning and crisis assessment',
                  icon: Target,
                },
                {
                  letter: 'A',
                  word: 'Align',
                  desc: 'Align resources and priorities',
                  icon: RefreshCw,
                },
                {
                  letter: 'R',
                  word: 'Reset',
                  desc: 'Reset processes and governance',
                  icon: Hexagon,
                },
                {
                  letter: 'S',
                  word: 'Execute',
                  desc: 'Execute with precision and monitoring',
                  icon: Target,
                },
                {
                  letter: 'E',
                  word: 'Evolve',
                  desc: 'Evolve and scale the solution',
                  icon: RefreshCw,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="card">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl font-bold text-teal-500">{item.letter}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="heading-h4 mb-2">{item.word}</h3>
                        <p className="body-default text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card bg-navy-500 text-white mb-12">
            <h2 className="heading-h2 mb-6">Key Metric: Strategic Governance Index (SGI)</h2>
            <p className="body-large text-gray-200">
              Measures strategic alignment and governance effectiveness during transformation
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to Apply PARSE?</h2>
          <p className="body-large text-gray-600 mb-8">
            Strategic reset requires expert guidance
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Book Discovery Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
