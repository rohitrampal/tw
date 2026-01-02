import { Button } from '@/components/ui/button';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'Banking Operations',
    challenge: 'Process errors slowing transactions, compliance gaps',
    result: '68% error reduction, audit findings → near zero',
    href: '/consulting/case-studies/banking',
  },
  {
    title: 'FinTech Scale-Up',
    challenge: 'Cost leakage + weak governance oversight',
    result: '₹44L cost recovery in 3 months, governance score 62 → 92',
    href: '/consulting/case-studies/fintech',
  },
  {
    title: 'Telecom Transformation',
    challenge: 'Customer onboarding bottlenecks limiting growth',
    result: '3x capacity increase, customer churn ↓ 21%',
    href: '/consulting/case-studies/telecom',
  },
];

export function CaseStudyPreviewSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-h2 mb-4">Success Stories From Your Industry</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Discover how we transformed operations across banking, FinTech, and beyond
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card">
              <h3 className="heading-h4 mb-3">{study.title}</h3>
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
          ))}
        </div>
      </div>
    </section>
  );
}

