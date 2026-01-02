import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BarChart3, FileText, Brain, Users, Shield, Zap } from 'lucide-react';

export default function PraxioFeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">PraXio™ Features – Built for Real-Time Governance</h1>
            <p className="body-large text-gray-100">
              Everything you need to run your business with discipline and visibility
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="heading-h2 mb-8">Dashboard Builder</h2>
            <div className="card">
              <p className="body-large text-gray-700 mb-4">
                Drag-and-drop interface, no-code dashboard creation
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Executive Summary (business health at a glance)',
                  'Operations (real-time process KPIs)',
                  'Financial (revenue, cost, burn, profitability)',
                  'Team & Talent (capacity, engagement, attrition)',
                  'Customer (NPS, churn, CSAT, retention)',
                  'Predictive (forecasts, anomalies, risk alerts)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <p className="body-default text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">Automated Reporting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Daily Report', desc: 'Executive summary (key metrics, alerts, action items)' },
                { title: 'Weekly Report', desc: 'Team performance, SLA tracking, escalations' },
                { title: 'Monthly Report', desc: 'Governance health, improvement trends, recommendations' },
                { title: 'Quarterly Report', desc: 'Strategic review, capability assessment, roadmap' },
              ].map((report, i) => (
                <div key={i} className="card">
                  <FileText className="w-10 h-10 text-teal-500 mb-3" />
                  <h3 className="heading-h4 mb-2">{report.title}</h3>
                  <p className="body-default text-gray-600">{report.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">AI Anomaly Detection</h2>
            <div className="card">
              <div className="space-y-4">
                {[
                  'Learn normal patterns (first 30 days)',
                  'Set baselines per metric',
                  'Monitor in real-time',
                  'Alert when deviation >threshold (customizable)',
                  'Suggest root cause and action',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-500 font-bold">{i + 1}</span>
                    </div>
                    <p className="body-default text-gray-700 flex-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">Security & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: 'Data Encryption', desc: 'At rest and in transit' },
                { icon: Users, title: 'Role-based Access', desc: 'CEO, CBO, team leads, contributors' },
                { icon: FileText, title: 'Audit Logging', desc: 'Who accessed what, when' },
                { icon: Shield, title: 'Compliance Ready', desc: 'GDPR, SOC 2, ISO 27001 path' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="card">
                    <Icon className="w-10 h-10 text-teal-500 mb-3" />
                    <h3 className="heading-h4 mb-2">{item.title}</h3>
                    <p className="body-default text-gray-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to See PraXio™ in Action?</h2>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/praxio/demo">Request Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
