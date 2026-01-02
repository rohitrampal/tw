import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search, Map, Monitor } from 'lucide-react';

export default function HowWeHelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">Unlock Operational Excellence. Achieve Measurable Results.</h1>
            <p className="body-large text-gray-100 mb-8">
              TwelfthKey Consulting combines expert leadership, proven frameworks, and intelligent platforms—delivering rapid, quantifiable improvements for startups and MSMEs.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Book Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 text-center mb-12">Our Method Blends Consulting, Execution, and Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="heading-h4 mb-3">Strategic Assessment</h3>
              <p className="body-default text-gray-600 mb-4">
                Identify biggest opportunities and bottlenecks using G2P lens and proven diagnostics.
              </p>
              <Button variant="outline" asChild>
                <Link href="/consulting/services/assessment">See Assessment Details</Link>
              </Button>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Map className="w-8 h-8 text-gold-300" />
              </div>
              <h3 className="heading-h4 mb-3">Tailored Solutions</h3>
              <p className="body-default text-gray-600 mb-4">
                Deploy G2P methodologies, build SOPs, implement workflows, wire dashboards.
              </p>
              <Button variant="outline" asChild>
                <Link href="/consulting/framework">View G2P Framework</Link>
              </Button>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="heading-h4 mb-3">Measurable Governance</h3>
              <p className="body-default text-gray-600 mb-4">
                Automated reporting, real-time KPIs, continuous improvement loops via PraXio™.
              </p>
              <Button variant="outline" asChild>
                <Link href="/consulting/praxio">Explore PraXio™</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

