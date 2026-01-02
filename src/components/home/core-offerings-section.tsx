import { Briefcase, Hexagon, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const offerings = [
  {
    icon: Briefcase,
    title: 'Fractional CBO Services',
    description: 'Expert governance execution without full-time overhead—save 65–80%.',
    cta: 'Learn More',
    href: '/consulting/services/fractional-cbo',
  },
  {
    icon: Hexagon,
    title: 'G2P Framework™',
    description: 'PhD-backed governance framework with 6 adaptive methodologies and 5 quantified indices.',
    cta: 'Explore Framework',
    href: '/consulting/framework',
  },
  {
    icon: LayoutDashboard,
    title: 'PraXio™ SaaS Platform',
    description: 'Automated governance, reporting, analytics, AI anomaly detection—all in one app.',
    cta: 'See PraXio™ Features',
    href: '/consulting/praxio',
  },
];

export function CoreOfferingsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-h2 mb-4">TwelfthKey Delivers Operational Excellence</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Three integrated layers for measurable transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-gold-300" aria-hidden="true" />
                </div>
                <h3 className="heading-h4 mb-3">{offering.title}</h3>
                <p className="body-default text-gray-600 mb-6">{offering.description}</p>
                <Button variant="outline" asChild>
                  <Link href={offering.href}>{offering.cta}</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

