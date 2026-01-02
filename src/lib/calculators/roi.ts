/**
 * ROI Calculator
 * Projects returns from operational investments
 */

export interface ROIInput {
  totalCost: number;
  monthlyBenefits: number;
  implementationDuration: number; // Months
  annualBenefits?: number; // Optional, calculated if not provided
}

export interface ROIResult {
  roi: number; // Percentage
  paybackPeriod: number; // Months
  netBenefit: number; // Annual
  totalBenefit: number; // Over 3 years
  breakEvenMonth: number;
  scenarios: {
    conservative: { roi: number; payback: number };
    realistic: { roi: number; payback: number };
    optimistic: { roi: number; payback: number };
  };
}

/**
 * Calculate ROI
 */
export function calculateROI(input: ROIInput): ROIResult {
  const { totalCost, monthlyBenefits, implementationDuration, annualBenefits } = input;

  // Calculate annual benefits
  const annualBenefit = annualBenefits || monthlyBenefits * 12;

  // Account for implementation period (no benefits during implementation)
  const effectiveMonths = 12 - implementationDuration;
  const firstYearBenefit = monthlyBenefits * Math.max(0, effectiveMonths);

  // ROI calculation
  const roi = ((annualBenefit - totalCost) / totalCost) * 100;

  // Payback period (months)
  let cumulativeBenefit = 0;
  let month = implementationDuration;
  while (cumulativeBenefit < totalCost && month < 60) {
    cumulativeBenefit += monthlyBenefits;
    month++;
  }
  const paybackPeriod = month;

  // Break-even month
  const breakEvenMonth = paybackPeriod;

  // Net benefit (annual)
  const netBenefit = annualBenefit - totalCost;

  // Total benefit over 3 years
  const totalBenefit = annualBenefit * 3 - totalCost;

  // Scenario analysis
  const scenarios = {
    conservative: {
      roi: ((annualBenefit * 0.8 - totalCost) / totalCost) * 100, // 20% lower benefits
      payback: totalCost / (monthlyBenefits * 0.8),
    },
    realistic: {
      roi,
      payback: paybackPeriod,
    },
    optimistic: {
      roi: ((annualBenefit * 1.2 - totalCost) / totalCost) * 100, // 20% higher benefits
      payback: totalCost / (monthlyBenefits * 1.2),
    },
  };

  return {
    roi: Math.round(roi * 10) / 10,
    paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    netBenefit: Math.round(netBenefit),
    totalBenefit: Math.round(totalBenefit),
    breakEvenMonth: Math.round(breakEvenMonth),
    scenarios: {
      conservative: {
        roi: Math.round(scenarios.conservative.roi * 10) / 10,
        payback: Math.round(scenarios.conservative.payback * 10) / 10,
      },
      realistic: {
        roi: Math.round(scenarios.realistic.roi * 10) / 10,
        payback: Math.round(scenarios.realistic.payback * 10) / 10,
      },
      optimistic: {
        roi: Math.round(scenarios.optimistic.roi * 10) / 10,
        payback: Math.round(scenarios.optimistic.payback * 10) / 10,
      },
    },
  };
}

