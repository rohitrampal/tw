import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Brain, Target, TrendingDown } from 'lucide-react';

export default function SageMethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">SAGE – Cognitive Governance</h1>
            <p className="body-large text-gray-100 mb-8">
              Cognitive governance for mature ecosystems—reduce decision-maker burden
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Apply SAGE to Your Business</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">When to Use SAGE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Decision-makers feeling overwhelmed',
              'Complex decision-making processes',
              'High cognitive load on leadership',
              'Need for decision clarity and speed',
            ].map((item, i) => (
              <div key={i} className="card">
                <p className="body-default text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">Key Focus: Cognitive Load Score (CLS)</h2>
            <div className="card bg-teal-50 border-2 border-teal-500">
              <p className="body-large text-gray-700 mb-4">
                SAGE reduces cognitive load by simplifying decision frameworks, automating routine decisions, and empowering teams with clear authorities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'Simplify dashboards',
                  'Automate routine decisions',
                  'Delegate with clear authority',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-teal-500" />
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
                'Cognitive Load Score (CLS) improved 25+ points',
                'Decision speed improved 30–40%',
                'Decision quality improved through clarity',
                'Leadership bandwidth freed for strategic work',
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
          <h2 className="heading-h2 mb-4">Ready to Reduce Cognitive Load?</h2>
          <p className="body-large text-gray-600 mb-8">
            Simplify decision-making and empower your teams
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Book Discovery Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
