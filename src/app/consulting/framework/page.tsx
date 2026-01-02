import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Hexagon, RefreshCw, Brain, Sparkles, Eye, Shield } from 'lucide-react';

const methodologies = [
  {
    icon: RefreshCw,
    name: 'CYCLE',
    description: 'Predictive operational consistency',
    href: '/consulting/framework/cycle',
  },
  {
    icon: Hexagon,
    name: 'PARSE',
    description: 'Strategic reset and realignment',
    href: '/consulting/framework/parse',
  },
  {
    icon: Brain,
    name: 'SAGE',
    description: 'Cognitive governance for mature ecosystems',
    href: '/consulting/framework/sage',
  },
  {
    icon: Sparkles,
    name: 'MORPH',
    description: 'Institutionalized innovation and reinvention',
    href: '/consulting/framework/morph',
  },
  {
    icon: Eye,
    name: 'PRISM',
    description: 'Experience-driven governance (CXEX)',
    href: '/consulting/framework/prism',
  },
  {
    icon: Shield,
    name: 'ARC',
    description: 'Resilience and continuity (crisis-proofing)',
    href: '/consulting/framework/arc',
  },
];

export default function FrameworkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-hero mb-6 text-white">The G2P Framework™</h1>
            <p className="body-large text-gray-100 mb-8">
              PhD-backed, research-driven methodology for service companies delivering measurable operational maturity
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/framework/g2p">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 text-center mb-12">Six Adaptive Methodologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologies.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-teal-500" aria-hidden="true" />
                  </div>
                  <h3 className="heading-h4 mb-2">{method.name}</h3>
                  <p className="body-default text-gray-600 mb-6">{method.description}</p>
                  <Button variant="outline" asChild>
                    <Link href={method.href}>Explore {method.name}</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-h2 text-center mb-12">Five Quantified Indices</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { name: 'PAR', desc: 'Prediction Accuracy Rate' },
              { name: 'AQ', desc: 'Autonomy Quotient' },
              { name: 'CLS', desc: 'Cognitive Load Score' },
              { name: 'LV', desc: 'Learning Velocity' },
              { name: 'MTTAR', desc: 'Mean Time to Auto-Resolution' },
            ].map((index, i) => (
              <div key={i} className="card text-center">
                <div className="text-3xl font-bold text-gold-300 mb-2">{index.name}</div>
                <p className="body-small text-gray-600">{index.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

