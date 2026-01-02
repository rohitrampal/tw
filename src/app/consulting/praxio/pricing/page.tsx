import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const tiers = [
  {
    name: 'Governance',
    price: 4.99,
    priceAnnual: 414,
    users: 'Up to 10',
    features: [
      '3 basic dashboards',
      'Monthly, basic reporting',
      'No AI monitoring',
      'Basic integrations (2–3)',
      'Email support',
      'Month-to-month contract',
    ],
    color: 'teal',
  },
  {
    name: 'Reporting',
    price: 7.99,
    priceAnnual: 663,
    users: 'Up to 10',
    features: [
      '5 custom dashboards',
      'Weekly + monthly reporting',
      'No AI monitoring',
      'Extended integrations (5–7)',
      'Email + chat support',
      'Month-to-month contract',
    ],
    color: 'teal',
  },
  {
    name: 'Analytics',
    price: 11.99,
    priceAnnual: 995,
    users: 'Up to 10',
    features: [
      '13 real-time dashboards',
      'Daily + custom reporting',
      'Anomaly detection',
      'Full integrations (20+)',
      'Priority support',
      '6-month minimum contract',
    ],
    color: 'gold',
    popular: true,
  },
  {
    name: 'AIQuantum',
    price: 19.99,
    priceAnnual: 1659,
    users: 'Up to 50',
    features: [
      'Unlimited dashboards',
      'Real-time + AI reporting',
      'Full AI suite',
      'White-label API',
      'Dedicated CSM',
      '12-month minimum contract',
    ],
    color: 'gold',
  },
];

export default function PraxioPricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-hero mb-6 text-white">PraXio™ Pricing – Transparent, Scalable, Fair</h1>
            <p className="body-large text-gray-100">
              4 tiers to fit your governance maturity and team size
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`card relative ${tier.popular ? 'border-2 border-gold-300 bg-gold-50' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-300 text-navy-500 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="heading-h3 mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-navy-500">
                    ₹{tier.price}/user/mo
                  </div>
                  <p className="body-small text-gray-600">
                    (₹{tier.priceAnnual.toLocaleString('en-IN')}/mo equivalent)
                  </p>
                </div>
                <p className="body-small text-gray-600 mb-4">{tier.users} users included</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="body-small text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? 'primary' : 'outline'}
                  className="w-full"
                  asChild
                >
                  <Link href="/consulting/praxio/demo">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="card bg-navy-500 text-white mb-12">
            <h2 className="heading-h2 mb-6 text-white">Billing & Discounts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="body-default font-semibold mb-2">Annual Prepay</p>
                <p className="body-large text-gold-300">10% discount</p>
              </div>
              <div>
                <p className="body-default font-semibold mb-2">Multi-year (3-year)</p>
                <p className="body-large text-gold-300">15% discount</p>
              </div>
              <div>
                <p className="body-default font-semibold mb-2">Free Trial</p>
                <p className="body-large text-gold-300">14 days, all features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Not Sure Which Tier?</h2>
          <p className="body-large text-gray-600 mb-8">
            Start with a free trial and upgrade as you grow
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/praxio/demo">Start Free Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
