export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="container-custom max-w-4xl">
        <div className="card">
          <h1 className="heading-h2 mb-6">Refund Policy</h1>
          <p className="body-small text-gray-500 mb-8">Last updated: December 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="heading-h4 mb-3">One-Time Services</h2>
              <p className="body-default text-gray-700">
                100% refund within 30 days if engagement has not been initiated. No refunds after commitment begins, except in cases of natural calamity or medical emergency (evaluated case-by-case).
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">Ongoing Services</h2>
              <p className="body-default text-gray-700">
                For monthly retainer services (e.g., Fractional CBO), cancellation requires 30 days written notice. No refunds for services already rendered.
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">PraXio™ Platform</h2>
              <p className="body-default text-gray-700">
                PraXio™ subscriptions can be cancelled at any time. No refunds for the current billing period, but service will not renew.
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">Contact</h2>
              <p className="body-default text-gray-700">
                For refund requests, contact:{' '}
                <a href="mailto:support@twelfthkey.com" className="text-teal-500 hover:underline">
                  support@twelfthkey.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
