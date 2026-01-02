export default function DisputeResolutionPage() {
  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="container-custom max-w-4xl">
        <div className="card">
          <h1 className="heading-h2 mb-6">Dispute Resolution</h1>
          <p className="body-small text-gray-500 mb-8">Last updated: December 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="heading-h4 mb-3">1. Informal Resolution</h2>
              <p className="body-default text-gray-700">
                We encourage parties to resolve disputes informally through direct communication. Please contact us at{' '}
                <a href="mailto:support@twelfthkey.com" className="text-teal-500 hover:underline">
                  support@twelfthkey.com
                </a>
                {' '}to discuss any concerns.
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">2. Arbitration</h2>
              <p className="body-default text-gray-700">
                Any disputes that cannot be resolved informally shall be resolved through binding arbitration in Mumbai, India, in accordance with the Arbitration and Conciliation Act, 2015.
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">3. Governing Law</h2>
              <p className="body-default text-gray-700">
                This agreement is governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

