import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileSearch, Building2, Brain, BarChart3, Command, Briefcase } from 'lucide-react';

const services = [
  {
    icon: FileSearch,
    name: 'Business Operational Assessment',
    description: 'Root cause analysis and prioritized roadmap',
    href: '/consulting/services/assessment',
    color: 'teal',
  },
  {
    icon: Building2,
    name: 'Operational Excellence Foundation',
    description: 'Build scalable SOPs, governance loops, dashboards',
    href: '/consulting/services/foundation',
    color: 'gold',
  },
  {
    icon: Brain,
    name: 'Governance Intelligence Program',
    description: 'Full G2P implementation, real-time monitoring, continuous improvement',
    href: '/consulting/services/governance',
    color: 'teal',
  },
  {
    icon: BarChart3,
    name: 'Analytics Visualization Suite',
    description: 'AI-driven dashboards, predictive KPIs, automated alerts',
    href: '/consulting/services/analytics',
    color: 'gold',
  },
  {
    icon: Command,
    name: 'Enterprise Ops Command Center',
    description: 'Multi-org governance hub, role-based access, consolidated reporting',
    href: '/consulting/services/enterprise',
    color: 'teal',
  },
  {
    icon: Briefcase,
    name: 'Fractional CBO/COO Services',
    description: 'On-demand fractional executive, hands-on mentorship, strategic oversight',
    href: '/consulting/services/fractional-cbo',
    color: 'gold',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-hero mb-6 text-white">Our Services</h1>
            <p className="body-large text-gray-100">
              Choose the engagement model that fits your needs
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card">
                  <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 text-${service.color}-500`} aria-hidden="true" />
                  </div>
                  <h2 className="heading-h4 mb-3">{service.name}</h2>
                  <p className="body-default text-gray-600 mb-6">{service.description}</p>
                  <Button variant="outline" asChild>
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Not Sure Which Service Is Right?</h2>
          <p className="body-large text-gray-600 mb-8 max-w-2xl mx-auto">
            Start with our free Operational Health Diagnostic to identify your biggest opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" asChild size="lg">
              <Link href="/consulting/tools/health-check">Start Free Diagnostic</Link>
            </Button>
            <Button variant="secondary" asChild size="lg">
              <Link href="/consulting/booking">Book Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

