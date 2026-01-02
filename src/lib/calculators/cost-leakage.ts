/**
 * Cost Leakage Estimator
 * Quantifies revenue lost to operational inefficiency
 */

export interface CostLeakageInput {
  monthlyRevenue: number;
  slaBreachRate: number; // Percentage (0-100)
  manualReworkRate: number; // Percentage (0-100)
  processErrorRate: number; // Percentage (0-100)
  averageErrorCost: number; // Cost per error in INR
}

export interface CostLeakageResult {
  monthlyLeakage: number;
  annualLeakage: number;
  breakdown: {
    slaBreaches: number;
    manualRework: number;
    processErrors: number;
  };
  severity: 'Low' | 'Moderate' | 'High' | 'Critical';
  recommendations: string[];
}

/**
 * Calculate cost leakage
 */
export function calculateCostLeakage(input: CostLeakageInput): CostLeakageResult {
  const { monthlyRevenue, slaBreachRate, manualReworkRate, processErrorRate, averageErrorCost } = input;

  // Weighted factors
  const w1 = 0.4; // SLA breach weight
  const w2 = 0.35; // Manual rework weight
  const w3 = 0.25; // Process error weight

  // Calculate leakage components
  const slaBreachLeakage = monthlyRevenue * (slaBreachRate / 100) * w1;
  const manualReworkLeakage = monthlyRevenue * (manualReworkRate / 100) * w2;
  const processErrorLeakage = (processErrorRate / 100) * averageErrorCost * w3;

  const monthlyLeakage = slaBreachLeakage + manualReworkLeakage + processErrorLeakage;
  const annualLeakage = monthlyLeakage * 12;

  // Determine severity
  const leakagePercentage = (monthlyLeakage / monthlyRevenue) * 100;
  let severity: CostLeakageResult['severity'];
  if (leakagePercentage < 2) severity = 'Low';
  else if (leakagePercentage < 5) severity = 'Moderate';
  else if (leakagePercentage < 10) severity = 'High';
  else severity = 'Critical';

  // Generate recommendations
  const recommendations: string[] = [];
  if (slaBreachRate > 10) {
    recommendations.push('Implement SLA monitoring dashboards and automated alerts');
  }
  if (manualReworkRate > 15) {
    recommendations.push('Standardize processes with SOPs to reduce manual rework');
  }
  if (processErrorRate > 5) {
    recommendations.push('Invest in process automation and quality control systems');
  }
  if (leakagePercentage > 5) {
    recommendations.push('Consider Business Operational Assessment to identify root causes');
  }

  return {
    monthlyLeakage: Math.round(monthlyLeakage),
    annualLeakage: Math.round(annualLeakage),
    breakdown: {
      slaBreaches: Math.round(slaBreachLeakage),
      manualRework: Math.round(manualReworkLeakage),
      processErrors: Math.round(processErrorLeakage),
    },
    severity,
    recommendations,
  };
}

