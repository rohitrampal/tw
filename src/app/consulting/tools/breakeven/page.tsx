'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { calculateBreakEven, type BreakEvenInput } from '@/lib/calculators/breakeven';
import { trackCalculatorStart, trackCalculatorComplete } from '@/lib/analytics/events';
import { formatCurrency } from '@/lib/utils';

export default function BreakEvenPage() {
  const [step, setStep] = useState<'form' | 'result'>('form');
  const [formData, setFormData] = useState<BreakEvenInput>({
    investmentCost: 0,
    monthlySavings: 0,
    monthlyRevenueIncrease: 0,
    rampUpTime: 0,
  });
  const [result, setResult] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', name: '', companyName: '' });

  const handleChange = (field: keyof BreakEvenInput, value: number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCalculate = async () => {
    trackCalculatorStart('breakeven');
    const calculatedResult = calculateBreakEven(formData);
    setResult(calculatedResult);
    setStep('result');
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    trackCalculatorComplete('breakeven', result.roi);

    try {
      const response = await fetch('/api/calculators/breakeven', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: formData,
          userInfo: userInfo.email ? userInfo : undefined,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Results saved! Check your email for the detailed report.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to save results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 'result' && result) {
    return (
      <div className="min-h-screen bg-gray-50 section-padding">
        <div className="container-custom max-w-4xl">
          <div className="card mb-8">
            <h1 className="heading-h2 mb-4">Break-Even Analysis</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-teal-50 rounded-lg">
                <p className="body-small text-gray-600 mb-2">Break-Even Period</p>
                <div className="text-4xl font-bold text-teal-500 mb-2">
                  {result.breakEvenMonths} months
                </div>
                <p className="body-small text-gray-600">Break-even date: {result.breakEvenDate}</p>
              </div>
              <div className="p-6 bg-gold-50 rounded-lg">
                <p className="body-small text-gray-600 mb-2">ROI</p>
                <div className="text-4xl font-bold text-gold-300 mb-2">
                  {result.roi}%
                </div>
                <p className="body-small text-gray-600">Net Benefit: {formatCurrency(result.netBenefit)}/year</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="heading-h4 mb-4">Scenario Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="body-small font-semibold text-gray-700 mb-2">Conservative</p>
                  <p className="text-2xl font-bold text-gray-600">{result.scenarios.conservative.roi}%</p>
                  <p className="body-small text-gray-500">Payback: {result.scenarios.conservative.payback} months</p>
                </div>
                <div className="border-2 border-teal-500 rounded-lg p-4 bg-teal-50">
                  <p className="body-small font-semibold text-teal-700 mb-2">Realistic</p>
                  <p className="text-2xl font-bold text-teal-500">{result.scenarios.realistic.roi}%</p>
                  <p className="body-small text-gray-500">Payback: {result.scenarios.realistic.payback} months</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="body-small font-semibold text-gray-700 mb-2">Optimistic</p>
                  <p className="text-2xl font-bold text-gray-600">{result.scenarios.optimistic.roi}%</p>
                  <p className="body-small text-gray-500">Payback: {result.scenarios.optimistic.payback} months</p>
                </div>
              </div>
            </div>

            <div className="mb-8 p-4 bg-navy-50 rounded-lg">
              <p className="body-default text-gray-700">
                <strong>Total Benefit (3 years):</strong> {formatCurrency(result.totalBenefit)}
              </p>
              <p className="body-default text-gray-700 mt-2">
                <strong>Payback Period:</strong> {result.paybackPeriod} months
              </p>
            </div>

            {!userInfo.email && (
              <div className="border-t pt-6 mb-6">
                <h3 className="heading-h4 mb-4">Get Your Detailed Report</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="input"
                    value={userInfo.companyName}
                    onChange={(e) => setUserInfo({ ...userInfo, companyName: e.target.value })}
                  />
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <Button variant="primary" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Get Full Report'}
              </Button>
              <Button variant="secondary" onClick={() => setStep('form')}>
                Calculate Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 section-padding">
      <div className="container-custom max-w-3xl">
        <div className="card">
          <h1 className="heading-h2 mb-6">Break-Even Point Calculator</h1>
          <p className="body-default text-gray-600 mb-8">
            Calculate when your investments will pay off
          </p>

          <div className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">
                Investment Cost (₹)
              </label>
              <input
                type="number"
                className="input"
                value={formData.investmentCost || ''}
                onChange={(e) => handleChange('investmentCost', parseFloat(e.target.value) || 0)}
                placeholder="100000"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Monthly Savings (₹)
              </label>
              <input
                type="number"
                className="input"
                value={formData.monthlySavings || ''}
                onChange={(e) => handleChange('monthlySavings', parseFloat(e.target.value) || 0)}
                placeholder="20000"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Monthly Revenue Increase (₹)
              </label>
              <input
                type="number"
                className="input"
                value={formData.monthlyRevenueIncrease || ''}
                onChange={(e) => handleChange('monthlyRevenueIncrease', parseFloat(e.target.value) || 0)}
                placeholder="10000"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Ramp-Up Time (months)
              </label>
              <input
                type="number"
                className="input"
                min="0"
                value={formData.rampUpTime || ''}
                onChange={(e) => handleChange('rampUpTime', parseInt(e.target.value) || 0)}
                placeholder="2"
              />
              <p className="body-small text-gray-500 mt-1">Time to reach full benefits</p>
            </div>

            <Button
              variant="primary"
              onClick={handleCalculate}
              className="w-full"
              disabled={!formData.investmentCost || (!formData.monthlySavings && !formData.monthlyRevenueIncrease)}
            >
              Calculate Break-Even
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
