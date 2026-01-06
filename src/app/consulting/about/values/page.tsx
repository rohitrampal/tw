'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, Target, Shield, TrendingUp } from 'lucide-react';

export default function ValuesPage() {
  const { t } = useTranslation(['about-values', 'common']);

  const values = [
    {
      icon: Target,
      title: t('about-values:values.value1.title'),
      description: t('about-values:values.value1.description'),
    },
    {
      icon: Shield,
      title: t('about-values:values.value2.title'),
      description: t('about-values:values.value2.description'),
    },
    {
      icon: TrendingUp,
      title: t('about-values:values.value3.title'),
      description: t('about-values:values.value3.description'),
    },
    {
      icon: Heart,
      title: t('about-values:values.value4.title'),
      description: t('about-values:values.value4.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-hero mb-6 text-white">{t('about-values:title')}</h1>
            <p className="body-large text-gray-100">
              {t('about-values:subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="heading-h2 mb-6 text-center">{t('about-values:drivesTitle')}</h2>
            <p className="body-large text-gray-700 mb-4">
              {t('about-values:drivesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-teal-500" />
                  </div>
                  <h3 className="heading-h4 mb-3">{value.title}</h3>
                  <p className="body-default text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-h2 mb-6 text-center">{t('about-values:commitmentTitle')}</h2>
            <div className="card bg-navy-50">
              <p className="body-large text-gray-700 mb-4">
                {t('about-values:commitmentQuote')}
              </p>
              <p className="body-default text-gray-600">
                {t('about-values:commitmentDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">{t('about-values:experienceTitle')}</h2>
          <p className="body-large text-gray-600 mb-8">
            {t('about-values:experienceDescription')}
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/consulting/booking">{t('common:bookDiscoveryCall')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

