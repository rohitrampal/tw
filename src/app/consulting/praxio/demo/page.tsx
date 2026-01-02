'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Video } from 'lucide-react';
import { trackFormSubmit } from '@/lib/analytics/events';

export default function PraxioDemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    useCase: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would send to your API
      trackFormSubmit('praxio_demo', true);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', teamSize: '', useCase: '' });
    } catch (error) {
      trackFormSubmit('praxio_demo', false);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="heading-h2 mb-4">See PraXio™ in Action</h1>
          <p className="body-large text-gray-600">
            Book a 30-minute demo with our product specialist, or start a free 14-day trial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card">
            <Video className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <h2 className="heading-h4 mb-4 text-center">Request Live Demo</h2>
            {process.env.NEXT_PUBLIC_CALENDLY_URL ? (
              <div
                className="calendly-inline-widget"
                data-url={process.env.NEXT_PUBLIC_CALENDLY_URL}
                style={{ minHeight: '500px', width: '100%' }}
              />
            ) : (
              <p className="body-default text-gray-600 text-center">
                Calendly integration not configured. Please use the form below.
              </p>
            )}
          </div>

          <div className="card">
            <Calendar className="w-12 h-12 text-gold-300 mx-auto mb-4" />
            <h2 className="heading-h4 mb-4 text-center">Start Free Trial</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  required
                  className="input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Company</label>
                <input
                  type="text"
                  className="input"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Team Size</label>
                <select
                  className="input"
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                >
                  <option value="">Select team size</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-2">Primary Use Case</label>
                <select
                  className="input"
                  value={formData.useCase}
                  onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                >
                  <option value="">Select use case</option>
                  <option value="finance">Finance</option>
                  <option value="operations">Operations</option>
                  <option value="hr">HR</option>
                  <option value="sales">Sales</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              {submitStatus === 'success' && (
                <div className="p-4 bg-success-light border border-success rounded-lg text-success-dark">
                  Request submitted! We'll contact you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-error-light border border-error rounded-lg text-error-dark">
                  Failed to submit. Please try again.
                </div>
              )}
              <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Submitting...' : 'Start Free Trial'}
              </Button>
            </form>
          </div>
        </div>

        <div className="card bg-navy-50">
          <h3 className="heading-h4 mb-4">Demo Agenda</h3>
          <div className="space-y-3">
            {[
              { time: '5 min', title: 'Your challenges & goals' },
              { time: '15 min', title: 'PraXio™ platform walkthrough (Dashboard builder, Real-time KPIs, Automated reporting, AI anomaly detection)' },
              { time: '10 min', title: 'Q&A and next steps' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="font-semibold text-teal-500">{item.time}</span>
                <p className="body-default text-gray-700 flex-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
