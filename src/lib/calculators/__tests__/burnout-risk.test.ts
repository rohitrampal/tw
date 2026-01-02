import { calculateBurnoutRisk, type BurnoutRiskInput } from '../burnout-risk';

describe('Burnout Risk Calculator', () => {
  describe('calculateBurnoutRisk', () => {
    it('should calculate risk correctly for normal inputs', () => {
      const input: BurnoutRiskInput = {
        averageOvertime: 10,
        deadlineMissRate: 20,
        employeeEngagement: 70,
        absenteeismRate: 5,
        workloadScore: 60,
      };

      const result = calculateBurnoutRisk(input);

      expect(result.riskScore).toBeGreaterThanOrEqual(0);
      expect(result.riskScore).toBeLessThanOrEqual(100);
      expect(['Low', 'Moderate', 'High', 'Critical']).toContain(result.overallRisk);
    });

    it('should classify risk levels correctly', () => {
      const testCases = [
        { input: { averageOvertime: 5, deadlineMissRate: 10, employeeEngagement: 90, absenteeismRate: 2, workloadScore: 40 }, expected: 'Low' },
        { input: { averageOvertime: 10, deadlineMissRate: 30, employeeEngagement: 70, absenteeismRate: 5, workloadScore: 50 }, expected: 'Moderate' },
        { input: { averageOvertime: 15, deadlineMissRate: 50, employeeEngagement: 50, absenteeismRate: 10, workloadScore: 70 }, expected: 'High' },
        { input: { averageOvertime: 25, deadlineMissRate: 80, employeeEngagement: 30, absenteeismRate: 20, workloadScore: 90 }, expected: 'Critical' },
      ];

      testCases.forEach(({ input, expected }) => {
        const result = calculateBurnoutRisk(input);
        expect(result.overallRisk).toBe(expected);
      });
    });

    it('should calculate individual factor risks', () => {
      const input: BurnoutRiskInput = {
        averageOvertime: 20,
        deadlineMissRate: 50,
        employeeEngagement: 40,
        absenteeismRate: 15,
        workloadScore: 80,
      };

      const result = calculateBurnoutRisk(input);

      expect(result.factors).toHaveProperty('overtime');
      expect(result.factors).toHaveProperty('deadlines');
      expect(result.factors).toHaveProperty('engagement');
      expect(result.factors).toHaveProperty('absenteeism');
      expect(result.factors).toHaveProperty('workload');

      Object.values(result.factors).forEach((factor) => {
        expect(factor).toHaveProperty('risk');
        expect(factor).toHaveProperty('score');
        expect(['Low', 'Moderate', 'High', 'Critical']).toContain(factor.risk);
        expect(factor.score).toBeGreaterThanOrEqual(0);
        expect(factor.score).toBeLessThanOrEqual(100);
      });
    });

    it('should invert engagement score (lower engagement = higher risk)', () => {
      const inputLow: BurnoutRiskInput = {
        averageOvertime: 5,
        deadlineMissRate: 10,
        employeeEngagement: 30, // Low engagement
        absenteeismRate: 5,
        workloadScore: 50,
      };

      const inputHigh: BurnoutRiskInput = {
        averageOvertime: 5,
        deadlineMissRate: 10,
        employeeEngagement: 90, // High engagement
        absenteeismRate: 5,
        workloadScore: 50,
      };

      const resultLow = calculateBurnoutRisk(inputLow);
      const resultHigh = calculateBurnoutRisk(inputHigh);

      expect(resultLow.factors.engagement.score).toBeGreaterThan(resultHigh.factors.engagement.score);
    });

    it('should generate recommendations for high risk factors', () => {
      const input: BurnoutRiskInput = {
        averageOvertime: 20,
        deadlineMissRate: 50,
        employeeEngagement: 40,
        absenteeismRate: 15,
        workloadScore: 80,
      };

      const result = calculateBurnoutRisk(input);
      expect(result.recommendations.length).toBeGreaterThan(0);
    });

    it('should handle zero overtime', () => {
      const input: BurnoutRiskInput = {
        averageOvertime: 0,
        deadlineMissRate: 20,
        employeeEngagement: 80,
        absenteeismRate: 5,
        workloadScore: 50,
      };

      const result = calculateBurnoutRisk(input);
      expect(result.factors.overtime.score).toBe(0);
      expect(result.factors.overtime.risk).toBe('Low');
    });

    it('should handle very high overtime (20+ hours)', () => {
      const input: BurnoutRiskInput = {
        averageOvertime: 25,
        deadlineMissRate: 20,
        employeeEngagement: 70,
        absenteeismRate: 5,
        workloadScore: 50,
      };

      const result = calculateBurnoutRisk(input);
      expect(result.factors.overtime.score).toBe(100);
      expect(result.factors.overtime.risk).toBe('Critical');
    });

    it('should amplify absenteeism risk', () => {
      const input: BurnoutRiskInput = {
        averageOvertime: 5,
        deadlineMissRate: 10,
        employeeEngagement: 80,
        absenteeismRate: 20, // 20% absenteeism
        workloadScore: 50,
      };

      const result = calculateBurnoutRisk(input);
      // Absenteeism should be amplified (20 * 2 = 40)
      expect(result.factors.absenteeism.score).toBe(40);
    });

    it('should set urgency based on overall risk', () => {
      const input: BurnoutRiskInput = {
        averageOvertime: 25,
        deadlineMissRate: 80,
        employeeEngagement: 30,
        absenteeismRate: 25,
        workloadScore: 90,
      };

      const result = calculateBurnoutRisk(input);
      expect(result.urgency).toBe('Critical');
      expect(result.recommendations.some((rec) => rec.includes('URGENT'))).toBe(true);
    });

    it('should handle edge case: all factors at minimum', () => {
      const input: BurnoutRiskInput = {
        averageOvertime: 0,
        deadlineMissRate: 0,
        employeeEngagement: 100,
        absenteeismRate: 0,
        workloadScore: 0,
      };

      const result = calculateBurnoutRisk(input);
      expect(result.overallRisk).toBe('Low');
      expect(result.riskScore).toBeLessThan(30);
    });

    it('should handle edge case: all factors at maximum', () => {
      const input: BurnoutRiskInput = {
        averageOvertime: 30,
        deadlineMissRate: 100,
        employeeEngagement: 0,
        absenteeismRate: 50,
        workloadScore: 100,
      };

      const result = calculateBurnoutRisk(input);
      expect(result.overallRisk).toBe('Critical');
      expect(result.riskScore).toBeGreaterThan(70);
    });
  });
});

