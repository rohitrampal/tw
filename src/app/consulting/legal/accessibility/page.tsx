export default function AccessibilityStatementPage() {
  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="container-custom max-w-4xl">
        <div className="card">
          <h1 className="heading-h2 mb-6">Accessibility Statement</h1>
          <p className="body-small text-gray-500 mb-8">Last updated: December 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="heading-h4 mb-3">Our Commitment</h2>
              <p className="body-default text-gray-700">
                TwelfthKey Consulting is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">WCAG 2.1 AA Compliance</h2>
              <p className="body-default text-gray-700 mb-2">
                We aim to meet WCAG 2.1 Level AA standards, including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="body-default text-gray-700">Color contrast ratios of at least 4.5:1</li>
                <li className="body-default text-gray-700">Keyboard navigation support</li>
                <li className="body-default text-gray-700">Screen reader compatibility</li>
                <li className="body-default text-gray-700">Alternative text for images</li>
                <li className="body-default text-gray-700">Reduced motion support</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">Feedback</h2>
              <p className="body-default text-gray-700">
                If you encounter accessibility barriers, please contact us at:{' '}
                <a href="mailto:accessibility@twelfthkey.com" className="text-teal-500 hover:underline">
                  accessibility@twelfthkey.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
