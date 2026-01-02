import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Eye, FileText, Brain, Shield } from 'lucide-react';

export default function PraxioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">PraXio™ – Your Operational Governance Command Center</h1>
            <p className="body-large text-gray-100 mb-8">
              Real-time dashboards, automated reporting, AI anomaly detection—all in one unified platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/consulting/praxio/demo">Request PraXio™ Demo</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/consulting/praxio/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">What Is PraXio™?</h2>
          <div className="card mb-12">
            <p className="body-large text-gray-700 mb-4">
              PraXio™ is a unified governance and operations platform built exclusively for TwelfthKey Consulting clients. Unlike fragmented tools (Excel, Slack, email), PraXio™ centralizes all operational data, governance metrics, and team collaboration in one transparent, easy-to-navigate interface.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Real-time visibility (no lag)',
                'Automated reporting (no manual updates)',
                'AI-driven alerts (predict before crisis)',
                'Team accountability (transparent, governed)',
                'Scalable (grows with your business)',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="body-default text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="heading-h2 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Eye,
                title: 'Real-time KPI Dashboards',
                desc: 'Every metric visible, updated live',
              },
              {
                icon: FileText,
                title: 'Automated Reporting',
                desc: 'Monthly compliance, performance reports auto-generated',
              },
              {
                icon: Brain,
                title: 'AI Anomaly Detection',
                desc: 'Alerts when metrics deviate from norm',
              },
              {
                icon: Shield,
                title: 'Role-based Access',
                desc: 'CEO, CBO, team leads, individual contributors see what they need',
              },
              {
                icon: Brain,
                title: 'Integration',
                desc: 'Connects to HRMS, CRM, ERP, finance systems',
              },
              {
                icon: Eye,
                title: 'Mobile-responsive',
                desc: 'Governance on the go',
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="card">
                  <Icon className="w-10 h-10 text-teal-500 mb-3" />
                  <h3 className="heading-h4 mb-2">{feature.title}</h3>
                  <p className="body-default text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to Experience PraXio™?</h2>
          <p className="body-large text-gray-600 mb-8">
            See how PraXio™ can transform your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/praxio/demo">Request Demo</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/consulting/praxio/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
