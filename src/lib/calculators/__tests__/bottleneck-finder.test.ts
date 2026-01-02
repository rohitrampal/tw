import { calculateBottleneck, type BottleneckInput } from '../bottleneck-finder';

describe('Bottleneck Finder Calculator', () => {
  describe('calculateBottleneck', () => {
    it('should calculate bottleneck index correctly', () => {
      const input: BottleneckInput = {
        averageApprovalTime: 24,
        numberOfApprovalLayers: 3,
        decisionDelayFrequency: 30,
        escalationEffectiveness: 70,
        autonomyLevel: 60,
      };

      const result = calculateBottleneck(input);

      expect(result.bottleneckIndex).toBeGreaterThanOrEqual(0);
      expect(result.bottleneckIndex).toBeLessThanOrEqual(100);
      expect(['Low', 'Moderate', 'High', 'Critical']).toContain(result.severity);
    });

    it('should classify severity correctly', () => {
      const testCases = [
        { input: { averageApprovalTime: 4, numberOfApprovalLayers: 1, decisionDelayFrequency: 10, escalationEffectiveness: 90, autonomyLevel: 90 }, expected: 'Low' },
        { input: { averageApprovalTime: 24, numberOfApprovalLayers: 2, decisionDelayFrequency: 30, escalationEffectiveness: 70, autonomyLevel: 70 }, expected: 'Moderate' },
        { input: { averageApprovalTime: 48, numberOfApprovalLayers: 4, decisionDelayFrequency: 60, escalationEffectiveness: 50, autonomyLevel: 50 }, expected: 'High' },
        { input: { averageApprovalTime: 72, numberOfApprovalLayers: 6, decisionDelayFrequency: 90, escalationEffectiveness: 20, autonomyLevel: 20 }, expected: 'Critical' },
      ];

      testCases.forEach(({ input, expected }) => {
        const result = calculateBottleneck(input);
        expect(result.severity).toBe(expected);
      });
    });

    it('should calculate individual factor scores', () => {
      const input: BottleneckInput = {
        averageApprovalTime: 48,
        numberOfApprovalLayers: 5,
        decisionDelayFrequency: 50,
        escalationEffectiveness: 40,
        autonomyLevel: 30,
      };

      const result = calculateBottleneck(input);

      expect(result.factors).toHaveProperty('approvalTime');
      expect(result.factors).toHaveProperty('layers');
      expect(result.factors).toHaveProperty('delays');
      expect(result.factors).toHaveProperty('escalation');
      expect(result.factors).toHaveProperty('autonomy');

      Object.values(result.factors).forEach((factor) => {
        expect(factor).toHaveProperty('score');
        expect(factor).toHaveProperty('impact');
        expect(['Minimal', 'Moderate', 'Significant', 'Critical']).toContain(factor.impact);
      });
    });

    it('should invert escalation effectiveness (lower = higher bottleneck)', () => {
      const inputLow: BottleneckInput = {
        averageApprovalTime: 24,
        numberOfApprovalLayers: 3,
        decisionDelayFrequency: 30,
        escalationEffectiveness: 20, // Low effectiveness
        autonomyLevel: 60,
      };

      const inputHigh: BottleneckInput = {
        averageApprovalTime: 24,
        numberOfApprovalLayers: 3,
        decisionDelayFrequency: 30,
        escalationEffectiveness: 90, // High effectiveness
        autonomyLevel: 60,
      };

      const resultLow = calculateBottleneck(inputLow);
      const resultHigh = calculateBottleneck(inputHigh);

      expect(resultLow.factors.escalation.score).toBeGreaterThan(resultHigh.factors.escalation.score);
    });

    it('should invert autonomy level (lower = higher bottleneck)', () => {
      const inputLow: BottleneckInput = {
        averageApprovalTime: 24,
        numberOfApprovalLayers: 3,
        decisionDelayFrequency: 30,
        escalationEffectiveness: 70,
        autonomyLevel: 20, // Low autonomy
      };

      const inputHigh: BottleneckInput = {
        averageApprovalTime: 24,
        numberOfApprovalLayers: 3,
        decisionDelayFrequency: 30,
        escalationEffectiveness: 70,
        autonomyLevel: 90, // High autonomy
      };

      const resultLow = calculateBottleneck(inputLow);
      const resultHigh = calculateBottleneck(inputHigh);

      expect(resultLow.factors.autonomy.score).toBeGreaterThan(resultHigh.factors.autonomy.score);
    });

    it('should calculate approval time score correctly (48+ hours = 100%)', () => {
      const input: BottleneckInput = {
        averageApprovalTime: 50,
        numberOfApprovalLayers: 3,
        decisionDelayFrequency: 30,
        escalationEffectiveness: 70,
        autonomyLevel: 60,
      };

      const result = calculateBottleneck(input);
      expect(result.factors.approvalTime.score).toBe(100);
    });

    it('should calculate layers score correctly (5+ layers = 100%)', () => {
      const input: BottleneckInput = {
        averageApprovalTime: 24,
        numberOfApprovalLayers: 6,
        decisionDelayFrequency: 30,
        escalationEffectiveness: 70,
        autonomyLevel: 60,
      };

      const result = calculateBottleneck(input);
      expect(result.factors.layers.score).toBe(100);
    });

    it('should estimate time wasted correctly', () => {
      const input: BottleneckInput = {
        averageApprovalTime: 24,
        numberOfApprovalLayers: 3,
        decisionDelayFrequency: 30,
        escalationEffectiveness: 70,
        autonomyLevel: 60,
      };

      const result = calculateBottleneck(input);
      // Should be approximately: 24 * 3 * 20 = 1440 hours
      expect(result.estimatedTimeWasted).toBeGreaterThan(0);
      expect(result.estimatedTimeWasted).toBeLessThan(10000);
    });

    it('should generate recommendations for high bottleneck factors', () => {
      const input: BottleneckInput = {
        averageApprovalTime: 60,
        numberOfApprovalLayers: 5,
        decisionDelayFrequency: 70,
        escalationEffectiveness: 30,
        autonomyLevel: 20,
      };

      const result = calculateBottleneck(input);
      expect(result.recommendations.length).toBeGreaterThan(0);
    });

    it('should handle zero approval time', () => {
      const input: BottleneckInput = {
        averageApprovalTime: 0,
        numberOfApprovalLayers: 1,
        decisionDelayFrequency: 10,
        escalationEffectiveness: 90,
        autonomyLevel: 90,
      };

      const result = calculateBottleneck(input);
      expect(result.factors.approvalTime.score).toBe(0);
      expect(result.bottleneckIndex).toBeLessThan(30);
    });

    it('should handle edge case: all factors optimal', () => {
      const input: BottleneckInput = {
        averageApprovalTime: 2,
        numberOfApprovalLayers: 1,
        decisionDelayFrequency: 5,
        escalationEffectiveness: 100,
        autonomyLevel: 100,
      };

      const result = calculateBottleneck(input);
      expect(result.severity).toBe('Low');
      expect(result.bottleneckIndex).toBeLessThan(30);
    });

    it('should handle edge case: all factors worst', () => {
      const input: BottleneckInput = {
        averageApprovalTime: 100,
        numberOfApprovalLayers: 10,
        decisionDelayFrequency: 100,
        escalationEffectiveness: 0,
        autonomyLevel: 0,
      };

      const result = calculateBottleneck(input);
      expect(result.severity).toBe('Critical');
      expect(result.bottleneckIndex).toBeGreaterThan(70);
    });
  });
});

