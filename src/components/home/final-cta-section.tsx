import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FinalCTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gold-300 to-gold-400 text-navy-500">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-h2 mb-4">Ready to Transform Your Operations?</h2>
          <p className="body-large mb-8">
            Get started with a free, no-obligation discovery call
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button variant="primary" asChild size="lg" className="bg-navy-500 hover:bg-navy-600 text-white">
              <Link href="/consulting/booking">Book Your Discovery Call</Link>
            </Button>
            <Button variant="secondary" asChild size="lg" className="bg-white border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white">
              <Link href="/consulting/tools/health-check">Try Free Diagnostic</Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="bg-transparent border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white">
              <Link href="/consulting/services">Explore Services</Link>
            </Button>
          </div>
          <p className="body-small text-navy-600">
            No credit card required. No sales pressure. Just clarity.
          </p>
        </div>
      </div>
    </section>
  );
}

