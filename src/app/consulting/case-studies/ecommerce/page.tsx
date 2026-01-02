import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingCart, TrendingDown, Target } from 'lucide-react';

export default function EcommerceCaseStudyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">E-commerce Fulfillment Transformation</h1>
            <p className="body-large text-gray-100 mb-8">
              49% Predictability Improvement, 36% Cost Reduction
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="card mb-8">
            <h2 className="heading-h3 mb-4">Challenge</h2>
            <p className="body-large text-gray-700 mb-4">
              Operational Unpredictability & Cost Overruns
            </p>
            <ul className="space-y-2">
              {[
                'Unpredictable fulfillment times',
                'Cost overruns in operations',
                'Lack of real-time inventory visibility',
                'Customer complaints due to delays',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-error-500 flex-shrink-0 mt-1" />
                  <p className="body-default text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card mb-8 bg-navy-500 text-white">
            <h2 className="heading-h3 mb-6 text-white">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { metric: 'Predictability', before: 'Low', after: 'High', improvement: '+49% improvement' },
                { metric: 'Cost Reduction', before: 'Baseline', after: '36% reduction', improvement: 'Operational efficiency' },
                { metric: 'Fulfillment Time', before: 'Variable', after: 'Consistent', improvement: 'SLA compliance' },
                { metric: 'Customer Satisfaction', before: 'Baseline', after: '+28%', improvement: 'NPS improvement' },
              ].map((result, i) => (
                <div key={i} className="border border-navy-400 rounded-lg p-4">
                  <p className="body-small text-gray-300 mb-2">{result.metric}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="body-default text-gray-400">{result.before}</span>
                    <span className="text-gold-300">→</span>
                    <span className="body-default font-semibold text-white">{result.after}</span>
                  </div>
                  <p className="body-small text-gold-300">{result.improvement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready for Similar Results?</h2>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Book Discovery Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

