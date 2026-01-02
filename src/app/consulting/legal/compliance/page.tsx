import { Shield, Lock, CheckCircle, FileCheck } from 'lucide-react';

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="container-custom max-w-4xl">
        <div className="card">
          <h1 className="heading-h2 mb-6">Compliance & Certifications</h1>

          <div className="space-y-8">
            <section>
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="heading-h4 mb-2">PCI-DSS Compliance</h2>
                  <p className="body-default text-gray-700">
                    We maintain PCI-DSS compliance for payment processing. All payment data is encrypted and handled according to PCI-DSS standards.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4 mb-4">
                <Lock className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="heading-h4 mb-2">GDPR Compliance</h2>
                  <p className="body-default text-gray-700">
                    We comply with the General Data Protection Regulation (GDPR) for EU clients. We implement appropriate technical and organizational measures to protect personal data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4 mb-4">
                <FileCheck className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="heading-h4 mb-2">ISO 27001 Path</h2>
                  <p className="body-default text-gray-700">
                    We are on the path to ISO 27001 certification for information security management. Our security practices align with ISO 27001 standards.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="heading-h4 mb-2">Data Processing Agreements</h2>
                  <p className="body-default text-gray-700">
                    Data Processing Agreements (DPAs) are available on request for enterprise clients. Contact us at{' '}
                    <a href="mailto:compliance@twelfthkey.com" className="text-teal-500 hover:underline">
                      compliance@twelfthkey.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="heading-h4 mb-3">Audit Logs</h2>
              <p className="body-default text-gray-700">
                We maintain comprehensive audit logs for compliance evidence collection. All access, modifications, and data processing activities are logged.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
