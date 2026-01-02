import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, TrendingUp, Target } from 'lucide-react';

export default function MorphMethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">MORPH – Institutionalized Innovation</h1>
            <p className="body-large text-gray-100 mb-8">
              Institutionalized innovation and reinvention—accelerate idea-to-execution
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Apply MORPH to Your Business</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">When to Use MORPH</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Product launches and scaling',
              'Innovation pipeline acceleration',
              'Rapid experimentation needed',
              'Organizational reinvention',
            ].map((item, i) => (
              <div key={i} className="card">
                <p className="body-default text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">Key Focus: Learning Velocity (LV)</h2>
            <div className="card bg-gold-50 border-2 border-gold-300">
              <p className="body-large text-gray-700 mb-4">
                MORPH accelerates learning velocity by institutionalizing innovation processes, rapid prototyping, and continuous feedback loops.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'Rapid prototyping',
                  'Continuous feedback loops',
                  'Institutionalized innovation',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-gold-300" />
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
                'Learning Velocity (LV) improved 30+ points',
                'Idea throughput improved 40–50%',
                'Time-to-market reduced 25–35%',
                'Innovation success rate increased',
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
          <h2 className="heading-h2 mb-4">Ready to Accelerate Innovation?</h2>
          <p className="body-large text-gray-600 mb-8">
            Institutionalize innovation and scale faster
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Book Discovery Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
