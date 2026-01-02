export default function DPAPage() {
  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="container-custom max-w-4xl">
        <div className="card">
          <h1 className="heading-h2 mb-6">Data Processing Agreement</h1>
          <p className="body-small text-gray-500 mb-8">Last updated: December 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="heading-h4 mb-3">1. Purpose</h2>
              <p className="body-default text-gray-700">
                This Data Processing Agreement (DPA) governs the processing of personal data by TwelfthKey Consulting on behalf of our clients in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">2. Data Processing</h2>
              <p className="body-default text-gray-700">
                We process personal data only as instructed by the client and in accordance with applicable data protection laws, including GDPR and the Information Technology Act, 2000 (India).
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">3. Security Measures</h2>
              <p className="body-default text-gray-700">
                We implement appropriate technical and organizational measures to ensure the security of personal data, including encryption, access controls, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">4. Contact</h2>
              <p className="body-default text-gray-700">
                For DPA requests, contact:{' '}
                <a href="mailto:compliance@twelfthkey.com" className="text-teal-500 hover:underline">
                  compliance@twelfthkey.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

