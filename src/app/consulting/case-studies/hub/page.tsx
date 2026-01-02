import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TrendingUp, Building2, Smartphone, Factory, ShoppingCart } from 'lucide-react';

const caseStudies = [
  {
    icon: Building2,
    title: 'Banking Operations',
    industry: 'Banking',
    size: '45 Cr revenue, 200+ employees',
    challenge: 'Process errors slowing transactions, compliance gaps',
    result: '68% error reduction, audit findings → near zero',
    href: '/consulting/case-studies/banking',
  },
  {
    icon: TrendingUp,
    title: 'FinTech Scale-Up',
    industry: 'FinTech',
    size: 'Scale-up, 50-500 employees',
    challenge: 'Cost leakage + weak governance oversight',
    result: '₹44L cost recovery in 3 months, governance score 62 → 92',
    href: '/consulting/case-studies/fintech',
  },
  {
    icon: Smartphone,
    title: 'Telecom Transformation',
    industry: 'Telecom',
    size: 'MSME, 100+ employees',
    challenge: 'Customer onboarding bottlenecks limiting growth',
    result: '3x capacity increase, customer churn ↓ 21%',
    href: '/consulting/case-studies/telecom',
  },
  {
    icon: Factory,
    title: 'MSME Manufacturing',
    industry: 'Manufacturing',
    size: 'MSME, 150+ employees',
    challenge: 'SLA compliance issues, team burnout',
    result: '64% SLA improvement, burnout risk ↓ 37%',
    href: '/consulting/case-studies/msme',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Fulfillment',
    industry: 'E-commerce',
    size: 'Scale-up, 200+ employees',
    challenge: 'Operational unpredictability, cost overruns',
    result: '49% predictability improvement, 36% cost reduction',
    href: '/consulting/case-studies/ecommerce',
  },
];

export default function CaseStudiesHubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-hero mb-6 text-white">Real Results From Real Clients</h1>
            <p className="body-large text-gray-100">
              See how TwelfthKey transformed operations across banking, FinTech, SaaS, and beyond
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <div key={index} className="card">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-teal-500" aria-hidden="true" />
                  </div>
                  <div className="mb-2">
                    <span className="body-small text-gray-500">{study.industry}</span>
                    <span className="body-small text-gray-500 mx-2">•</span>
                    <span className="body-small text-gray-500">{study.size}</span>
                  </div>
                  <h2 className="heading-h4 mb-3">{study.title}</h2>
                  <div className="mb-4">
                    <p className="body-small font-semibold text-gray-700 mb-1">Challenge:</p>
                    <p className="body-default text-gray-600 mb-3">{study.challenge}</p>
                    <p className="body-small font-semibold text-gray-700 mb-1">Result:</p>
                    <p className="body-default text-gray-600">{study.result}</p>
                  </div>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={study.href}>Read Full Story</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to See Similar Results?</h2>
          <p className="body-large text-gray-600 mb-8">
            Get a custom assessment for your business
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Get Custom Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

