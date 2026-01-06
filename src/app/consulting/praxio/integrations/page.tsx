'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  DollarSign, 
  Calendar, 
  MessageSquare, 
  FileSpreadsheet,
  CheckCircle,
  Zap
} from 'lucide-react';

export default function PraxioIntegrationsPage() {
  const { t } = useTranslation(['praxio-integrations', 'common']);

  const integrations = [
    {
      icon: Building2,
      name: t('praxio-integrations:integrations.integration1.name'),
      description: t('praxio-integrations:integrations.integration1.description'),
      status: t('praxio-integrations:integrations.integration1.status'),
      color: 'teal',
    },
    {
      icon: DollarSign,
      name: t('praxio-integrations:integrations.integration2.name'),
      description: t('praxio-integrations:integrations.integration2.description'),
      status: t('praxio-integrations:integrations.integration2.status'),
      color: 'gold',
    },
    {
      icon: Users,
      name: t('praxio-integrations:integrations.integration3.name'),
      description: t('praxio-integrations:integrations.integration3.description'),
      status: t('praxio-integrations:integrations.integration3.status'),
      color: 'teal',
    },
    {
      icon: Calendar,
      name: t('praxio-integrations:integrations.integration4.name'),
      description: t('praxio-integrations:integrations.integration4.description'),
      status: t('praxio-integrations:integrations.integration4.status'),
      color: 'gold',
    },
    {
      icon: MessageSquare,
      name: t('praxio-integrations:integrations.integration5.name'),
      description: t('praxio-integrations:integrations.integration5.description'),
      status: t('praxio-integrations:integrations.integration5.status'),
      color: 'teal',
    },
    {
      icon: FileSpreadsheet,
      name: t('praxio-integrations:integrations.integration6.name'),
      description: t('praxio-integrations:integrations.integration6.description'),
      status: t('praxio-integrations:integrations.integration6.status'),
      color: 'gold',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding bg-gradient-to-br from-navy-500 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-hero mb-6 text-white">{t('praxio-integrations:title')}</h1>
            <p className="body-large text-gray-100 mb-8">
              {t('praxio-integrations:subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/consulting/praxio/demo">{t('praxio:requestDemo')}</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/consulting/praxio/pricing">{t('praxio:viewPricing')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="heading-h2 mb-4">{t('praxio-integrations:whyTitle')}</h2>
            <p className="body-large text-gray-700 mb-6">
              {t('praxio-integrations:whyDescription')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: t('praxio-integrations:benefits.benefit1.title'),
                  description: t('praxio-integrations:benefits.benefit1.description'),
                },
                {
                  icon: CheckCircle,
                  title: t('praxio-integrations:benefits.benefit2.title'),
                  description: t('praxio-integrations:benefits.benefit2.description'),
                },
                {
                  icon: Building2,
                  title: t('praxio-integrations:benefits.benefit3.title'),
                  description: t('praxio-integrations:benefits.benefit3.description'),
                },
              ].map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="card">
                    <Icon className="w-10 h-10 text-teal-500 mb-3" />
                    <h3 className="heading-h4 mb-2">{benefit.title}</h3>
                    <p className="body-default text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="heading-h2 mb-8">{t('praxio-integrations:availableTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration, index) => {
                const Icon = integration.icon;
                return (
                  <div key={index} className="card">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-${integration.color}-100 rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 text-${integration.color}-500`} aria-hidden="true" />
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                        {integration.status}
                      </span>
                    </div>
                    <h3 className="heading-h4 mb-2">{integration.name}</h3>
                    <p className="body-default text-gray-600">{integration.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card bg-navy-500 text-white">
            <h2 className="heading-h3 mb-4 text-white">{t('praxio-integrations:customTitle')}</h2>
            <p className="body-large text-gray-100 mb-6">
              {t('praxio-integrations:customDescription')}
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/consulting/contact">{t('praxio-integrations:requestCustom')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-h2 mb-4">{t('praxio-integrations:readyTitle')}</h2>
          <p className="body-large text-gray-600 mb-8">
            {t('praxio-integrations:readyDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/consulting/praxio/demo">{t('praxio:requestDemo')}</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/consulting/praxio/pricing">{t('praxio:viewPricing')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

