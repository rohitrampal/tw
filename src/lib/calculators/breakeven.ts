/**
 * Break-Even Point Calculator
 * Calculates when investments will pay off
 */

export interface BreakEvenInput {
  investmentCost: number;
  monthlySavings: number;
  monthlyRevenueIncrease: number;
  rampUpTime: number; // Months
}

export interface BreakEvenResult {
  breakEvenMonths: number;
  breakEvenDate: string;
  totalBenefits: number;
  netROI: number;
  paybackPeriod: number;
  scenarioAnalysis: {
    optimistic: number;
    realistic: number;
    pessimistic: number;
  };
}

/**
 * Calculate break-even point
 */
export function calculateBreakEven(input: BreakEvenInput): BreakEvenResult {
  const { investmentCost, monthlySavings, monthlyRevenueIncrease, rampUpTime } = input;

  // Total monthly benefit
  const monthlyBenefit = monthlySavings + monthlyRevenueIncrease;

  // Simple break-even (without ramp-up)
  const simpleBreakEven = investmentCost / monthlyBenefit;

  // Account for ramp-up time
  let breakEvenMonths = simpleBreakEven;
  let cumulativeBenefit = 0;
  let month = 0;

  while (cumulativeBenefit < investmentCost && month < 60) {
    month++;
    // Gradual ramp-up benefit
    const rampUpFactor = month <= rampUpTime ? month / rampUpTime : 1;
    cumulativeBenefit += monthlyBenefit * rampUpFactor;
  }

  breakEvenMonths = month;

  // Calculate break-even date
  const breakEvenDate = new Date();
  breakEvenDate.setMonth(breakEvenDate.getMonth() + Math.ceil(breakEvenMonths));

  // Total benefits over 12 months
  const totalBenefits = monthlyBenefit * 12;

  // Net ROI
  const netROI = ((totalBenefits - investmentCost) / investmentCost) * 100;

  // Payback period
  const paybackPeriod = investmentCost / monthlyBenefit;

  // Scenario analysis
  const scenarioAnalysis = {
    optimistic: investmentCost / (monthlyBenefit * 1.2), // 20% better
    realistic: breakEvenMonths,
    pessimistic: investmentCost / (monthlyBenefit * 0.8), // 20% worse
  };

  return {
    breakEvenMonths: Math.round(breakEvenMonths * 10) / 10,
    breakEvenDate: breakEvenDate.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    totalBenefits: Math.round(totalBenefits),
    netROI: Math.round(netROI * 10) / 10,
    paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    scenarioAnalysis: {
      optimistic: Math.round(scenarioAnalysis.optimistic * 10) / 10,
      realistic: Math.round(scenarioAnalysis.realistic * 10) / 10,
      pessimistic: Math.round(scenarioAnalysis.pessimistic * 10) / 10,
    },
  };
}

