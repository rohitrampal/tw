import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Calculator,
  TrendingUp,
  Target,
  BarChart3,
  AlertTriangle,
  GitBranch,
  DollarSign,
  Shield,
} from 'lucide-react';

const tools = [
  {
    icon: Calculator,
    name: 'Operational Health Diagnostic',
    description: 'Assess governance maturity across 5 G2P indices in 5 minutes',
    time: '5 min',
    href: '/consulting/tools/health-check',
    color: 'teal',
  },
  {
    icon: TrendingUp,
    name: 'Cost Leakage Estimator',
    description: 'Quantify revenue lost to operational inefficiency',
    time: '3 min',
    href: '/consulting/tools/cost-leakage',
    color: 'gold',
  },
  {
    icon: Target,
    name: 'Break-Even Point Calculator',
    description: 'When will your investments pay off?',
    time: '4 min',
    href: '/consulting/tools/breakeven',
    color: 'teal',
  },
  {
    icon: BarChart3,
    name: 'Scale Readiness Analyzer',
    description: 'Is your business ready for 2–3x growth?',
    time: '3 min',
    href: '/consulting/tools/scale-readiness',
    color: 'gold',
  },
  {
    icon: AlertTriangle,
    name: 'Team Burnout Risk Finder',
    description: 'Spot burnout triggers before they impact performance',
    time: '3 min',
    href: '/consulting/tools/burnout-risk',
    color: 'error',
  },
  {
    icon: GitBranch,
    name: 'Decision Bottleneck Finder',
    description: 'Pinpoint approval delays and slowdowns',
    time: '4 min',
    href: '/consulting/tools/bottleneck-finder',
    color: 'teal',
  },
  {
    icon: DollarSign,
    name: 'ROI Calculator',
    description: 'Project returns from operational investments',
    time: '3 min',
    href: '/consulting/tools/roi',
    color: 'gold',
  },
  {
    icon: Shield,
    name: 'Governance Maturity Calculator',
    description: 'Full governance health across 5 dimensions',
    time: '5 min',
    href: '/consulting/tools/governance-maturity',
    color: 'teal',
  },
];

export default function ToolsHubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-hero mb-6 text-white">Empower Your Business With Instant Diagnostics</h1>
            <p className="body-large mb-8 text-gray-100">
              Free tools to diagnose, quantify, and plan your path to operational excellence
            </p>
            <p className="body-default text-gold-300">
              Make better decisions in minutes, not months. Try our expert-built calculators.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={index} className="card text-center">
                  <div className={`w-16 h-16 bg-${tool.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 text-${tool.color}-500`} aria-hidden="true" />
                  </div>
                  <h3 className="heading-h4 mb-2">{tool.name}</h3>
                  <p className="body-small text-gray-600 mb-3">{tool.description}</p>
                  <p className="body-small text-gray-500 mb-4">Time: {tool.time}</p>
                  <Button variant="primary" asChild className="w-full">
                    <Link href={tool.href}>Try Now</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-h2 text-center mb-12">How Tools Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-500">1</span>
              </div>
              <h3 className="heading-h4 mb-2">Answer Questions</h3>
              <p className="body-default text-gray-600">Simple, jargon-free questions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-500">2</span>
              </div>
              <h3 className="heading-h4 mb-2">Get Instant Results</h3>
              <p className="body-default text-gray-600">Immediate feedback and score</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-500">3</span>
              </div>
              <h3 className="heading-h4 mb-2">Download Report</h3>
              <p className="body-default text-gray-600">Personalized PDF report</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-500">4</span>
              </div>
              <h3 className="heading-h4 mb-2">Book Discovery Call</h3>
              <p className="body-default text-gray-600">Discuss results with experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-h2 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card">
              <h3 className="heading-h4 mb-2">Is my data secure?</h3>
              <p className="body-default text-gray-600">
                Yes, encrypted and never shared. Deleted after 90 days unless you request follow-up.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-h4 mb-2">Do you contact me after I use a tool?</h3>
              <p className="body-default text-gray-600">
                Only if you request a callback or book a discovery call. No unsolicited sales.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-h4 mb-2">Can I use tools multiple times?</h3>
              <p className="body-default text-gray-600">
                Absolutely—track progress over time.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-h4 mb-2">How accurate are the results?</h3>
              <p className="body-default text-gray-600">
                Built on TwelfthKey's industry benchmarks and G2P framework. Your report includes context and next-step recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

