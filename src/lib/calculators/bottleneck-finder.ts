/**
 * Decision Bottleneck Finder
 * Identifies approval delays and process slowdowns
 */

export interface BottleneckInput {
  averageApprovalTime: number; // Hours
  numberOfApprovalLayers: number;
  decisionDelayFrequency: number; // Percentage (0-100)
  escalationEffectiveness: number; // 0-100
  autonomyLevel: number; // 0-100
}

export interface BottleneckResult {
  bottleneckIndex: number; // 0-100 (higher = more bottleneck)
  severity: 'Low' | 'Moderate' | 'High' | 'Critical';
  factors: {
    approvalTime: { score: number; impact: string };
    layers: { score: number; impact: string };
    delays: { score: number; impact: string };
    escalation: { score: number; impact: string };
    autonomy: { score: number; impact: string };
  };
  recommendations: string[];
  estimatedTimeWasted: number; // Hours per month
}

/**
 * Calculate bottleneck index
 */
export function calculateBottleneck(input: BottleneckInput): BottleneckResult {
  const {
    averageApprovalTime,
    numberOfApprovalLayers,
    decisionDelayFrequency,
    escalationEffectiveness,
    autonomyLevel,
  } = input;

  // Calculate individual scores (0-100, higher = more bottleneck)
  const approvalTimeScore = Math.min(100, (averageApprovalTime / 48) * 100); // 48+ hours = 100%
  const layersScore = Math.min(100, (numberOfApprovalLayers / 5) * 100); // 5+ layers = 100%
  const delayScore = decisionDelayFrequency; // Direct mapping
  const escalationScore = 100 - escalationEffectiveness; // Inverted
  const autonomyScore = 100 - autonomyLevel; // Inverted

  // Weighted average
  const weights = {
    approvalTime: 0.30,
    layers: 0.25,
    delays: 0.20,
    escalation: 0.15,
    autonomy: 0.10,
  };

  const bottleneckIndex =
    approvalTimeScore * weights.approvalTime +
    layersScore * weights.layers +
    delayScore * weights.delays +
    escalationScore * weights.escalation +
    autonomyScore * weights.autonomy;

  // Determine severity
  let severity: BottleneckResult['severity'];
  if (bottleneckIndex < 30) severity = 'Low';
  else if (bottleneckIndex < 50) severity = 'Moderate';
  else if (bottleneckIndex < 70) severity = 'High';
  else severity = 'Critical';

  // Estimate time wasted (hours per month)
  const estimatedTimeWasted = averageApprovalTime * numberOfApprovalLayers * 20; // ~20 decisions/month

  // Generate recommendations
  const recommendations: string[] = [];
  if (approvalTimeScore > 50) {
    recommendations.push('Reduce approval time by setting SLAs and automating routine approvals');
  }
  if (layersScore > 50) {
    recommendations.push('Eliminate unnecessary approval layers and delegate decision authority');
  }
  if (delayScore > 40) {
    recommendations.push('Implement decision tracking and escalation workflows');
  }
  if (escalationScore > 50) {
    recommendations.push('Improve escalation processes and response times');
  }
  if (autonomyScore > 60) {
    recommendations.push('Empower teams with clear decision authorities (PARSE methodology)');
  }
  if (bottleneckIndex > 60) {
    recommendations.push('Consider Governance Intelligence Program to streamline decision-making');
  }

  const getImpact = (score: number): string => {
    if (score < 30) return 'Minimal';
    if (score < 50) return 'Moderate';
    if (score < 70) return 'Significant';
    return 'Critical';
  };

  return {
    bottleneckIndex: Math.round(bottleneckIndex * 10) / 10,
    severity,
    factors: {
      approvalTime: { score: Math.round(approvalTimeScore), impact: getImpact(approvalTimeScore) },
      layers: { score: Math.round(layersScore), impact: getImpact(layersScore) },
      delays: { score: Math.round(delayScore), impact: getImpact(delayScore) },
      escalation: { score: Math.round(escalationScore), impact: getImpact(escalationScore) },
      autonomy: { score: Math.round(autonomyScore), impact: getImpact(autonomyScore) },
    },
    recommendations,
    estimatedTimeWasted: Math.round(estimatedTimeWasted),
  };
}

