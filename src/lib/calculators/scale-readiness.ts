/**
 * Scale Readiness Analyzer
 * Assesses if business is ready for 2-3x growth
 */

export interface ScaleReadinessInput {
  teamReadiness: number; // 0-100
  sopMaturity: number; // 0-100
  collaborationScore: number; // 0-100
  kpiTracking: number; // 0-100
  scalabilityScore: number; // 0-100
}

export interface ScaleReadinessResult {
  overallScore: number;
  readiness: 'Not Ready' | 'Partially Ready' | 'Ready' | 'Highly Ready';
  bottlenecks: string[];
  gaps: {
    area: string;
    currentScore: number;
    targetScore: number;
    priority: 'High' | 'Medium' | 'Low';
  }[];
  recommendations: string[];
}

/**
 * Calculate scale readiness
 */
export function calculateScaleReadiness(input: ScaleReadinessInput): ScaleReadinessResult {
  const { teamReadiness, sopMaturity, collaborationScore, kpiTracking, scalabilityScore } = input;

  // Weighted average
  const weights = {
    teamReadiness: 0.25,
    sopMaturity: 0.25,
    collaborationScore: 0.20,
    kpiTracking: 0.15,
    scalabilityScore: 0.15,
  };

  const overallScore =
    teamReadiness * weights.teamReadiness +
    sopMaturity * weights.sopMaturity +
    collaborationScore * weights.collaborationScore +
    kpiTracking * weights.kpiTracking +
    scalabilityScore * weights.scalabilityScore;

  // Determine readiness level
  let readiness: ScaleReadinessResult['readiness'];
  if (overallScore < 50) readiness = 'Not Ready';
  else if (overallScore < 70) readiness = 'Partially Ready';
  else if (overallScore < 85) readiness = 'Ready';
  else readiness = 'Highly Ready';

  // Identify bottlenecks
  const bottlenecks: string[] = [];
  if (teamReadiness < 60) bottlenecks.push('Team capacity and skills');
  if (sopMaturity < 60) bottlenecks.push('Process standardization');
  if (collaborationScore < 60) bottlenecks.push('Cross-functional collaboration');
  if (kpiTracking < 60) bottlenecks.push('Performance visibility');
  if (scalabilityScore < 60) bottlenecks.push('System scalability');

  // Identify gaps
  const gaps: ScaleReadinessResult['gaps'] = [];
  const areas = [
    { name: 'Team Readiness', score: teamReadiness, target: 80 },
    { name: 'SOP Maturity', score: sopMaturity, target: 85 },
    { name: 'Collaboration', score: collaborationScore, target: 75 },
    { name: 'KPI Tracking', score: kpiTracking, target: 80 },
    { name: 'Scalability', score: scalabilityScore, target: 75 },
  ];

  areas.forEach((area) => {
    if (area.score < area.target) {
      gaps.push({
        area: area.name,
        currentScore: area.score,
        targetScore: area.target,
        priority: area.score < 50 ? 'High' : area.score < 70 ? 'Medium' : 'Low',
      });
    }
  });

  // Generate recommendations
  const recommendations: string[] = [];
  if (sopMaturity < 70) {
    recommendations.push('Build comprehensive SOP library (Operational Excellence Foundation)');
  }
  if (kpiTracking < 70) {
    recommendations.push('Implement real-time KPI dashboards (Analytics Visualization Suite)');
  }
  if (teamReadiness < 70) {
    recommendations.push('Invest in team training and capacity building');
  }
  if (collaborationScore < 70) {
    recommendations.push('Establish cross-functional governance frameworks');
  }
  if (overallScore < 70) {
    recommendations.push('Consider Governance Intelligence Program for comprehensive readiness');
  }

  return {
    overallScore: Math.round(overallScore * 10) / 10,
    readiness,
    bottlenecks,
    gaps,
    recommendations,
  };
}

