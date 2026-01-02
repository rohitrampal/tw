'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { calculateGovernanceMaturity, type GovernanceMaturityInput } from '@/lib/calculators/governance-maturity';
import { trackCalculatorStart, trackCalculatorComplete } from '@/lib/analytics/events';

export default function GovernanceMaturityPage() {
  const [step, setStep] = useState<'form' | 'result'>('form');
  const [formData, setFormData] = useState<GovernanceMaturityInput>({
    policyClarity: 0,
    processReviews: 0,
    automation: 0,
    riskManagement: 0,
    accountability: 0,
  });
  const [result, setResult] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', name: '', companyName: '' });

  const handleChange = (field: keyof GovernanceMaturityInput, value: number) => {
    setFormData((prev) => ({ ...prev, [field]: Math.max(0, Math.min(100, value)) }));
  };

  const handleCalculate = async () => {
    trackCalculatorStart('governance_maturity');
    const calculatedResult = calculateGovernanceMaturity(formData);
    setResult(calculatedResult);
    setStep('result');
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    trackCalculatorComplete('governance_maturity', result.overallMaturity);

    try {
      const response = await fetch('/api/calculators/governance-maturity', {
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
    const maturityColors = {
      Initial: 'text-gray-500',
      Developing: 'text-warning-500',
      Mature: 'text-teal-500',
      Leading: 'text-gold-300',
    }[result.maturityLevel];

    return (
      <div className="min-h-screen bg-gray-50 section-padding">
        <div className="container-custom max-w-4xl">
          <div className="card mb-8">
            <h1 className="heading-h2 mb-4">Governance Maturity Assessment</h1>
            
            <div className="text-center mb-8 p-6 bg-navy-500 text-white rounded-lg">
              <p className="body-small text-gray-200 mb-2">Overall Maturity Score</p>
              <div className={`text-5xl font-bold mb-2 ${maturityColors}`}>
                {result.overallMaturity}/100
              </div>
              <p className="body-default text-gray-200">
                Maturity Level: <strong>{result.maturityLevel}</strong>
              </p>
            </div>

            <div className="mb-8">
              <h3 className="heading-h4 mb-4">Dimension Scores</h3>
              <div className="space-y-4">
                {Object.entries(result.dimensions).map(([key, dim]: [string, any]) => (
                  <div key={key} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-teal-500">{dim.score}/100</span>
                        <span className={`px-3 py-1 rounded text-sm ${
                          dim.level === 'Leading' ? 'bg-gold-100 text-gold-700' :
                          dim.level === 'Mature' ? 'bg-teal-100 text-teal-700' :
                          dim.level === 'Developing' ? 'bg-warning-100 text-warning-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {dim.level}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          dim.level === 'Leading' ? 'bg-gold-300' :
                          dim.level === 'Mature' ? 'bg-teal-500' :
                          dim.level === 'Developing' ? 'bg-warning-500' :
                          'bg-gray-400'
                        }`}
                        style={{ width: `${dim.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {result.improvements.length > 0 && (
              <div className="mb-8">
                <h3 className="heading-h4 mb-4">Improvements Needed</h3>
                <div className="space-y-4">
                  {result.improvements.map((improvement: any, i: number) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{improvement.dimension}</h4>
                        <span className={`px-3 py-1 rounded text-sm ${
                          improvement.priority === 'High' ? 'bg-error-100 text-error-700' :
                          improvement.priority === 'Medium' ? 'bg-warning-100 text-warning-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {improvement.priority} Priority
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mb-2">
                        <div>
                          <p className="body-small text-gray-600">Current</p>
                          <p className="text-xl font-bold text-gray-700">{improvement.currentScore}/100</p>
                        </div>
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-teal-500 h-2 rounded-full"
                              style={{ width: `${improvement.currentScore}%` }}
                            />
                          </div>
                        </div>
                        <div>
                          <p className="body-small text-gray-600">Target</p>
                          <p className="text-xl font-bold text-teal-500">{improvement.targetScore}/100</p>
                        </div>
                      </div>
                      <p className="body-small text-gray-600">{improvement.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <h3 className="heading-h4 mb-4">Recommendations</h3>
              <ul className="space-y-2">
                {result.recommendations.map((rec: string, i: number) => (
                  <li key={i} className="body-default text-gray-700 flex items-start">
                    <span className="text-gold-300 mr-2">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
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
          <h1 className="heading-h2 mb-6">Governance Maturity Calculator</h1>
          <p className="body-default text-gray-600 mb-8">
            Full governance health across 5 dimensions
          </p>

          <div className="space-y-6">
            {[
              { key: 'policyClarity', label: 'Policy Clarity', desc: 'How clear and documented your governance policies are (0-100)' },
              { key: 'processReviews', label: 'Process Reviews', desc: 'Frequency and effectiveness of process reviews (0-100)' },
              { key: 'automation', label: 'Automation', desc: 'Level of governance workflow automation (0-100)' },
              { key: 'riskManagement', label: 'Risk Management', desc: 'Proactive risk monitoring and mitigation (0-100)' },
              { key: 'accountability', label: 'Accountability', desc: 'Clear accountability frameworks and ownership (0-100)' },
            ].map((field) => (
              <div key={field.key}>
                <label className="block font-semibold mb-2">
                  {field.label}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full"
                  value={formData[field.key as keyof GovernanceMaturityInput]}
                  onChange={(e) => handleChange(field.key as keyof GovernanceMaturityInput, parseInt(e.target.value))}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="body-small text-gray-500">{field.desc}</span>
                  <span className="font-bold text-teal-500">{formData[field.key as keyof GovernanceMaturityInput]}/100</span>
                </div>
              </div>
            ))}

            <Button
              variant="primary"
              onClick={handleCalculate}
              className="w-full"
            >
              Calculate Governance Maturity
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
