import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, Target, TrendingUp } from 'lucide-react';

export default function ArcMethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">ARC – Resilience and Continuity</h1>
            <p className="body-large text-gray-100 mb-8">
              Resilience and continuity (crisis-proofing)—build systems that auto-resolve issues
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Apply ARC to Your Business</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">When to Use ARC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Disaster recovery planning',
              'Business continuity needs',
              'High-frequency operational issues',
              'Need for automated issue resolution',
            ].map((item, i) => (
              <div key={i} className="card">
                <p className="body-default text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">Key Focus: Mean Time to Auto-Resolution (MTTAR)</h2>
            <div className="card bg-teal-50 border-2 border-teal-500">
              <p className="body-large text-gray-700 mb-4">
                ARC reduces MTTAR by automating issue detection, escalation, and resolution workflows, building resilient systems that self-correct.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'Automated issue detection',
                  'Auto-escalation workflows',
                  'Self-correcting systems',
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
                'MTTAR reduced 40–60%',
                'Operational resilience improved',
                'Manual firefighting reduced 50–70%',
                'Business continuity ensured',
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
          <h2 className="heading-h2 mb-4">Ready to Build Resilience?</h2>
          <p className="body-large text-gray-600 mb-8">
            Crisis-proof your operations with automated resilience
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Book Discovery Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
