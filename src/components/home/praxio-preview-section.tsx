import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Eye, FileText, Brain } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Real-time Visibility',
    description: 'Every task, update, KPI visible and governable in seconds.',
  },
  {
    icon: FileText,
    title: 'Automated Reporting',
    description: 'Eliminate manual updates—PraXio™ auto-generates governance reports.',
  },
  {
    icon: Brain,
    title: 'AI Anomaly Detection',
    description: 'Predictive alerts spot issues before they spiral into crises.',
  },
];

export function PraxioPreviewSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-h2 mb-4">Experience PraXio™—Your Governance Command Center</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Real-time dashboards, automated reporting, AI-driven insights
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-500" aria-hidden="true" />
                </div>
                <h3 className="heading-h4 mb-2">{feature.title}</h3>
                <p className="body-default text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" asChild size="lg">
            <Link href="/consulting/praxio/demo">Request PraXio™ Demo</Link>
          </Button>
          <Button variant="secondary" asChild size="lg">
            <Link href="/consulting/praxio">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

