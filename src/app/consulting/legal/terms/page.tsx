export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="container-custom max-w-4xl">
        <div className="card">
          <h1 className="heading-h2 mb-6">Terms of Service</h1>
          <p className="body-small text-gray-500 mb-8">Last updated: December 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="heading-h4 mb-3">1. Service Description</h2>
              <p className="body-default text-gray-700">
                TwelfthKey Consulting provides operational excellence consulting services, including assessments, process improvement, governance implementation, and fractional CBO/COO services.
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">2. Engagement Terms</h2>
              <p className="body-default text-gray-700 mb-2">
                All engagements are subject to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="body-default text-gray-700">Written proposal and agreement</li>
                <li className="body-default text-gray-700">Payment terms as specified in proposal</li>
                <li className="body-default text-gray-700">Deliverables as outlined in scope of work</li>
                <li className="body-default text-gray-700">Timeline and milestones</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">3. Limitations of Liability</h2>
              <p className="body-default text-gray-700">
                TwelfthKey Consulting's liability is limited to the fees paid for the specific engagement. We are not liable for indirect, consequential, or incidental damages.
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">4. Dispute Resolution</h2>
              <p className="body-default text-gray-700">
                Any disputes shall be resolved through arbitration in Mumbai, India, in accordance with the Arbitration and Conciliation Act, 2015.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
