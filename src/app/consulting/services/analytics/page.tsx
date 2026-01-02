import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, BarChart3, Brain, Eye } from 'lucide-react';

export default function AnalyticsServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">Analytics Visualization Suite</h1>
            <p className="body-large text-gray-100 mb-8">
              AI-driven dashboards, predictive KPIs, automated alerts—turn data into decisions
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Visualize Your Data</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Custom dashboard design (10–15 dashboards)',
              'KPI definition and predictive analytics setup',
              'Real-time data integration (CRM, ERP, HR systems)',
              'AI anomaly detection and alerting',
              'Team training and dashboard navigation',
              'Monthly optimization and reporting',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                <p className="body-default text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">Dashboard Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Eye, title: 'Executive Summary', desc: 'Business health at a glance' },
                { icon: BarChart3, title: 'Operational Dashboard', desc: 'Real-time process and KPI tracking' },
                { icon: Brain, title: 'Financial Dashboard', desc: 'Revenue, cost, profitability, burn analysis' },
                { icon: BarChart3, title: 'Team & Talent', desc: 'Capacity, burnout risk, attrition trends' },
                { icon: Eye, title: 'Customer Dashboard', desc: 'NPS, churn, CSAT, pipeline health' },
                { icon: Brain, title: 'Predictive Dashboard', desc: 'Forecasted trends, anomalies, risks' },
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

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">AI-Powered Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Anomaly Detection',
                  desc: 'Automatic alert when metrics deviate from normal patterns',
                },
                {
                  title: 'Predictive Analysis',
                  desc: 'Forecast trends 30–90 days ahead with confidence intervals',
                },
                {
                  title: 'Root Cause Analysis',
                  desc: 'AI identifies why metric X changed and suggests actions',
                },
                {
                  title: 'Recommendations',
                  desc: 'Automated suggestions for improvement based on data patterns',
                },
              ].map((item, i) => (
                <div key={i} className="card">
                  <h3 className="heading-h4 mb-2">{item.title}</h3>
                  <p className="body-default text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card bg-navy-500 text-white">
            <h3 className="heading-h3 mb-4">Investment & ROI</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="body-small text-gray-300 mb-2">Investment</p>
                <p className="heading-h3 text-gold-300">₹1,99,999</p>
                <p className="body-small text-gray-300 mt-2">One-time, 45 days</p>
              </div>
              <div>
                <p className="body-small text-gray-300 mb-2">Typical ROI</p>
                <p className="heading-h3 text-teal-400">₹15–30L</p>
                <p className="body-small text-gray-300 mt-2">In better decision-making and risk prevention</p>
                <p className="body-small text-gray-300">Speed improvement: 50% faster decision cycles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to Visualize Your Data?</h2>
          <p className="body-large text-gray-600 mb-8">
            See your business in real-time with AI-powered insights
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Schedule Your Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
