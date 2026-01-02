import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calculator, TrendingUp, Target, BarChart3 } from 'lucide-react';

const tools = [
  {
    icon: Calculator,
    name: 'Operational Health Check',
    time: '5 min',
    href: '/consulting/tools/health-check',
  },
  {
    icon: TrendingUp,
    name: 'Cost Leakage Estimator',
    time: '3 min',
    href: '/consulting/tools/cost-leakage',
  },
  {
    icon: Target,
    name: 'Break-Even Calculator',
    time: '4 min',
    href: '/consulting/tools/breakeven',
  },
  {
    icon: BarChart3,
    name: 'Scale Readiness Analyzer',
    time: '3 min',
    href: '/consulting/tools/scale-readiness',
  },
];

export function ToolsPreviewSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-h2 mb-4">Which Assessment Is Right For You?</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Free tools to clarify your operational health in minutes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={index} className="card text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-teal-500" aria-hidden="true" />
                </div>
                <h3 className="heading-h4 mb-2">{tool.name}</h3>
                <p className="body-small text-gray-500 mb-4">Time: {tool.time}</p>
                <Button variant="primary" asChild className="w-full">
                  <Link href={tool.href}>
                    {tool.name.includes('Health') ? 'Start Diagnostic' :
                     tool.name.includes('Leakage') ? 'Find Leakage' :
                     tool.name.includes('Break-Even') ? 'Calculate BEP' :
                     'Check Readiness'}
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/consulting/tools">Try All 8 Tools → Tools Page</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

