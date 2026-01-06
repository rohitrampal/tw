'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TrendingUp, Calculator, FileText, CheckCircle } from 'lucide-react';

export default function ROIGuidePage() {
  const { t } = useTranslation(['roi-guide', 'common']);

  const sections = [
    {
      icon: Calculator,
      title: t('roi-guide:sections.calculation.title'),
      description: t('roi-guide:sections.calculation.description'),
    },
    {
      icon: TrendingUp,
      title: t('roi-guide:sections.measuring.title'),
      description: t('roi-guide:sections.measuring.description'),
    },
    {
      icon: FileText,
      title: t('roi-guide:sections.templates.title'),
      description: t('roi-guide:sections.templates.description'),
    },
    {
      icon: CheckCircle,
      title: t('roi-guide:sections.caseStudies.title'),
      description: t('roi-guide:sections.caseStudies.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-hero mb-6 text-white">{t('roi-guide:title')}</h1>
            <p className="body-large text-gray-100">
              {t('roi-guide:subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="heading-h2 mb-6">{t('roi-guide:whyMattersTitle')}</h2>
            <p className="body-large text-gray-700 mb-4">
              {t('roi-guide:whyMattersDescription')}
            </p>
            <ul className="space-y-3">
              {[
                t('roi-guide:benefits.benefit1'),
                t('roi-guide:benefits.benefit2'),
                t('roi-guide:benefits.benefit3'),
                t('roi-guide:benefits.benefit4'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                  <span className="body-default text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="card">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="heading-h4 mb-2">{section.title}</h3>
                  <p className="body-default text-gray-600">{section.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">{t('roi-guide:calculateTitle')}</h2>
          <p className="body-large text-gray-600 mb-8">
            {t('roi-guide:calculateDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/tools/roi">{t('roi-guide:tryCalculator')}</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/consulting/contact">{t('roi-guide:getCustomAnalysis')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

