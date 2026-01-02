export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="container-custom max-w-4xl">
        <div className="card">
          <h1 className="heading-h2 mb-6">Cookie Policy</h1>
          <p className="body-small text-gray-500 mb-8">Last updated: December 2025</p>

          <div className="space-y-6">
            <section>
              <h2 className="heading-h4 mb-3">What Are Cookies?</h2>
              <p className="body-default text-gray-700">
                Cookies are small text files stored on your device when you visit our website. They help us provide a better experience and analyze site usage.
              </p>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">Types of Cookies We Use</h2>
              <div className="space-y-4">
                {[
                  {
                    type: 'Essential Cookies',
                    desc: 'Required for the website to function properly',
                  },
                  {
                    type: 'Analytics Cookies',
                    desc: 'Help us understand how visitors use our site (Google Analytics)',
                  },
                  {
                    type: 'Functional Cookies',
                    desc: 'Remember your preferences and settings',
                  },
                ].map((cookie, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{cookie.type}</h3>
                    <p className="body-default text-gray-600">{cookie.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">Managing Cookies</h2>
              <p className="body-default text-gray-700">
                You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
