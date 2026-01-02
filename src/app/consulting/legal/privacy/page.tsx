export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="container-custom max-w-4xl">
        <div className="card">
          <h1 className="heading-h2 mb-6">Privacy Policy</h1>
          <p className="body-small text-gray-500 mb-8">Last updated: December 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="heading-h4 mb-3">1. Information We Collect</h2>
              <p className="body-default text-gray-700 mb-2">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="body-default text-gray-700">Name, email address, phone number</li>
                <li className="body-default text-gray-700">Company name and industry</li>
                <li className="body-default text-gray-700">Calculator responses and results</li>
                <li className="body-default text-gray-700">Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">2. How We Use Your Information</h2>
              <p className="body-default text-gray-700 mb-2">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="body-default text-gray-700">Provide and improve our services</li>
                <li className="body-default text-gray-700">Send you calculator reports and communications</li>
                <li className="body-default text-gray-700">Respond to your inquiries</li>
                <li className="body-default text-gray-700">Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">3. Data Protection</h2>
              <p className="body-default text-gray-700">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">4. Your Rights</h2>
              <p className="body-default text-gray-700 mb-2">
                Under GDPR and applicable data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="body-default text-gray-700">Access your personal data</li>
                <li className="body-default text-gray-700">Rectify inaccurate data</li>
                <li className="body-default text-gray-700">Request deletion of your data</li>
                <li className="body-default text-gray-700">Object to processing</li>
                <li className="body-default text-gray-700">Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">5. Contact Us</h2>
              <p className="body-default text-gray-700">
                For privacy-related inquiries, contact us at:{' '}
                <a href="mailto:privacy@twelfthkey.com" className="text-teal-500 hover:underline">
                  privacy@twelfthkey.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

