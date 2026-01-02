import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, FileSearch, Map, Cog, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Discovery Pre-Engagement Call',
    duration: '45 minutes',
    description: 'Revenue, operating model, key pain points, current governance maturity',
  },
  {
    icon: FileSearch,
    title: 'Diagnostic – Business Operational Assessment',
    duration: '5–7 days',
    description: 'Deep-dive interviews, process value-stream mapping, risk modeling, governance gap analysis',
  },
  {
    icon: Map,
    title: 'Design – G2P Intervention Blueprint',
    duration: '3–5 days',
    description: 'Select primary methodology, scope phase 1 deliverables, design governance loops',
  },
  {
    icon: Cog,
    title: 'Execution – Process Excellence Implementation',
    duration: '30–90 days',
    description: 'Build SOPs, train teams, pilot routines, stabilize new value streams',
  },
  {
    icon: TrendingUp,
    title: 'Govern & Evolve – Ongoing Fractional CBO Leadership',
    duration: 'Ongoing',
    description: 'Quarterly governance reviews, continuous improvement, real-time dashboard monitoring',
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">How Our Governance-to-Performance Process Works</h1>
            <p className="body-large text-gray-100 mb-8">
              A structured path from diagnostic to dashboards, built for startups and MSMEs that need discipline without corporate bureaucracy.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Book a Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 text-center mb-12">5-Step Engagement Engine</h2>
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="card">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-teal-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-navy-500">STEP {index + 1}</span>
                        <span className="body-small text-gray-500">{step.duration}</span>
                      </div>
                      <h3 className="heading-h4 mb-3">{step.title}</h3>
                      <p className="body-default text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to Begin Your Transformation?</h2>
          <p className="body-large text-gray-600 mb-8">
            Every great business started with a single decision to improve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Book Your Discovery Call</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/consulting/tools/health-check">Try Free Diagnostic</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

