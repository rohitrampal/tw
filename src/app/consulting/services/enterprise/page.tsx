import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Building2, Users, Shield } from 'lucide-react';

export default function EnterpriseServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">Enterprise Ops Command Center</h1>
            <p className="body-large text-gray-100 mb-8">
              Multi-org governance hub, consolidated reporting, role-based dashboards for enterprise complexity
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Scale with Governance</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Multi-org governance framework',
              'Consolidated reporting (roll-up across teams/departments)',
              'Role-based access control (CEO, CBO, team leads, individual contributors)',
              'Advanced analytics and benchmarking',
              'Compliance tracking and audit trails',
              'Integration with legacy systems (ERP, HRMS, CRM)',
              'Quarterly reviews and optimization',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                <p className="body-default text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">Enterprise Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Building2,
                  title: 'Rapid M&A Integration',
                  desc: 'Align governance post-merger across organizations',
                },
                {
                  icon: Users,
                  title: 'Multi-Location Scaling',
                  desc: 'Consistent governance across offices and regions',
                },
                {
                  icon: Shield,
                  title: 'Compliance & Audit Readiness',
                  desc: 'Automated evidence collection and reporting',
                },
                {
                  icon: Building2,
                  title: 'Digital Transformation',
                  desc: 'Legacy → modern governance migration',
                },
                {
                  icon: Users,
                  title: 'Global Expansion',
                  desc: 'Multi-currency, multi-language support',
                },
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
            <h2 className="heading-h2 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Real-time consolidated dashboards (global view)',
                'Department-level governance (autonomy + oversight)',
                'Automated compliance reporting (audit-ready)',
                'Advanced analytics and trend analysis',
                'Custom governance workflows per department',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gold-300 flex-shrink-0 mt-1" />
                  <p className="body-default text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card bg-navy-500 text-white">
            <h3 className="heading-h3 mb-4">Investment & ROI</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="body-small text-gray-300 mb-2">Investment</p>
                <p className="heading-h3 text-gold-300">₹7,99,999</p>
                <p className="body-small text-gray-300 mt-2">90 days + 12-month support</p>
              </div>
              <div>
                <p className="body-small text-gray-300 mb-2">Typical ROI</p>
                <p className="heading-h3 text-teal-400">₹100–150L</p>
                <p className="body-small text-gray-300 mt-2">In operational efficiency + reduced compliance risk</p>
                <p className="body-small text-gray-300">Governance standardization across organization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to Scale with Governance?</h2>
          <p className="body-large text-gray-600 mb-8">
            Enterprise-grade governance for complex organizations
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Schedule Your Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
