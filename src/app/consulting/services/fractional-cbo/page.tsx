import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, TrendingDown, Users, Clock } from 'lucide-react';

export default function FractionalCBOPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">Fractional CBO/COO Services</h1>
            <p className="body-large text-gray-100 mb-8">
              Expert guidance, hands-on execution, strategic oversight—at 65–80% savings vs. full-time hire
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/booking">Hire Your Fractional CBO</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-h2 mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Strategic governance oversight (8–12 hours/week)',
              'Leadership mentorship and coaching',
              'Board-level reporting and recommendations',
              'Real-time dashboard monitoring and quarterly reviews',
              'Executive presence for investor/stakeholder meetings',
              'PraXio™ platform + full consulting team access',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                <p className="body-default text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">Why Fractional CBO Wins</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: TrendingDown, title: 'Cost', desc: '65–80% cheaper than full-time CXO' },
                { icon: Users, title: 'Experience', desc: 'Decades of C-suite expertise across industries' },
                { icon: Clock, title: 'Flexibility', desc: 'Scale hours based on business needs' },
                { icon: CheckCircle, title: 'De-risked', desc: 'No permanent commitment, easy off-ramp' },
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
            <h2 className="heading-h2 mb-8">Full-Time Hire vs. Fractional CBO</h2>
            <div className="card overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold">Dimension</th>
                    <th className="text-left py-3 px-4 font-semibold">Fractional CBO</th>
                    <th className="text-left py-3 px-4 font-semibold">Full-Time CXO</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dim: 'Cost', fractional: '₹1.99L/month (₹23.88L/year)', fulltime: '₹60L+/year' },
                    { dim: 'Commitment', fractional: '6 months minimum', fulltime: '2–3 year commitment' },
                    { dim: 'Onboarding', fractional: 'Immediate, tools-ready', fulltime: '3–6 month ramp' },
                    { dim: 'Flexibility', fractional: 'Scale up/down by hours', fulltime: 'Fixed headcount' },
                    { dim: 'Expertise', fractional: 'Multi-sector, proven', fulltime: 'Often single-sector' },
                    { dim: 'Tools', fractional: 'G2P + PraXio™ included', fulltime: 'Must build from scratch' },
                    { dim: 'Risk', fractional: 'Low, short-term', fulltime: 'High, long-term' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-semibold">{row.dim}</td>
                      <td className="py-3 px-4 text-teal-600">{row.fractional}</td>
                      <td className="py-3 px-4 text-gray-600">{row.fulltime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card bg-navy-500 text-white">
            <h3 className="heading-h3 mb-4">Investment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="body-small text-gray-300 mb-2">Monthly Investment</p>
                <p className="heading-h3 text-gold-300">₹1,99,999</p>
                <p className="body-small text-gray-300 mt-2">Minimum: 6-month retainer</p>
              </div>
              <div>
                <p className="body-small text-gray-300 mb-2">Capacity</p>
                <p className="heading-h3 text-teal-400">8–12 hours/week</p>
                <p className="body-small text-gray-300 mt-2">Scalable to 20+ hours for execution phases</p>
              </div>
              <div>
                <p className="body-small text-gray-300 mb-2">Meetings</p>
                <p className="heading-h3 text-teal-400">Weekly</p>
                <p className="body-small text-gray-300 mt-2">Governance review + ad-hoc strategic calls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">Ready to Hire Your Fractional CBO?</h2>
          <p className="body-large text-gray-600 mb-8">
            Get executive leadership without the full-time cost
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">Schedule Discovery Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
