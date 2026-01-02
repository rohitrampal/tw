'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, DollarSign, CheckCircle, Percent } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '35–59%', label: 'Operational Improvements', suffix: '' },
  { icon: DollarSign, value: '45–90L', label: 'Annual Cost Savings', suffix: '' },
  { icon: CheckCircle, value: '12+', label: 'Successful Case Studies', suffix: '' },
  { icon: Percent, value: '65–80%', label: 'vs Full-Time CXO Cost', suffix: '' },
];

export function ProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    if (isInView && !counted) {
      setCounted(true);
    }
  }, [isInView, counted]);

  return (
    <section ref={ref} className="section-padding bg-navy-500 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-h2 mb-4 text-white">Proven Results, Quantified Outcomes</h2>
          <p className="body-large text-gray-100 max-w-2xl mx-auto">
            Real businesses, real transformations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-navy-500" aria-hidden="true" />
                </div>
                <div className="heading-h3 text-gold-300 mb-2">{stat.value}{stat.suffix}</div>
                <p className="body-default text-gray-200">{stat.label}</p>
              </div>
            );
          })}
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="body-large italic text-gray-100 mb-4">
            "TwelfthKey's G2P Framework helped us improve prediction accuracy by 35% and save ₹45L annually. Execution changed from chaotic to governed in 90 days."
          </blockquote>
          <p className="body-default text-gray-300">
            — Chief Business Officer, Leading Bank (anonymized)
          </p>
        </div>
      </div>
    </section>
  );
}

