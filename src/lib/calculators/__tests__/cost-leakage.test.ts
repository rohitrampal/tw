import { calculateCostLeakage, type CostLeakageInput } from '../cost-leakage';

describe('Cost Leakage Calculator', () => {
  describe('calculateCostLeakage', () => {
    it('should calculate leakage correctly for normal inputs', () => {
      const input: CostLeakageInput = {
        monthlyRevenue: 1000000,
        slaBreachRate: 5,
        manualReworkRate: 10,
        processErrorRate: 3,
        averageErrorCost: 5000,
      };

      const result = calculateCostLeakage(input);

      expect(result.monthlyLeakage).toBeGreaterThan(0);
      expect(result.annualLeakage).toBe(result.monthlyLeakage * 12);
      expect(result.breakdown).toHaveProperty('slaBreaches');
      expect(result.breakdown).toHaveProperty('manualRework');
      expect(result.breakdown).toHaveProperty('processErrors');
    });

    it('should classify severity correctly', () => {
      const lowInput: CostLeakageInput = {
        monthlyRevenue: 1000000,
        slaBreachRate: 1,
        manualReworkRate: 1,
        processErrorRate: 1,
        averageErrorCost: 1000,
      };

      const lowResult = calculateCostLeakage(lowInput);
      expect(['Low', 'Moderate']).toContain(lowResult.severity);

      const highInput: CostLeakageInput = {
        monthlyRevenue: 1000000,
        slaBreachRate: 15,
        manualReworkRate: 20,
        processErrorRate: 10,
        averageErrorCost: 10000,
      };

      const highResult = calculateCostLeakage(highInput);
      expect(['High', 'Critical']).toContain(highResult.severity);
    });

    it('should handle zero revenue', () => {
      const input: CostLeakageInput = {
        monthlyRevenue: 0,
        slaBreachRate: 10,
        manualReworkRate: 10,
        processErrorRate: 5,
        averageErrorCost: 5000,
      };

      const result = calculateCostLeakage(input);
      expect(result.monthlyLeakage).toBeGreaterThanOrEqual(0);
    });

    it('should handle zero rates', () => {
      const input: CostLeakageInput = {
        monthlyRevenue: 1000000,
        slaBreachRate: 0,
        manualReworkRate: 0,
        processErrorRate: 0,
        averageErrorCost: 5000,
      };

      const result = calculateCostLeakage(input);
      expect(result.monthlyLeakage).toBeGreaterThanOrEqual(0);
    });

    it('should handle 100% rates', () => {
      const input: CostLeakageInput = {
        monthlyRevenue: 1000000,
        slaBreachRate: 100,
        manualReworkRate: 100,
        processErrorRate: 100,
        averageErrorCost: 5000,
      };

      const result = calculateCostLeakage(input);
      expect(result.monthlyLeakage).toBeGreaterThan(0);
      expect(result.severity).toBe('Critical');
    });

    it('should generate recommendations for high breach rates', () => {
      const input: CostLeakageInput = {
        monthlyRevenue: 1000000,
        slaBreachRate: 15,
        manualReworkRate: 5,
        processErrorRate: 3,
        averageErrorCost: 5000,
      };

      const result = calculateCostLeakage(input);
      expect(result.recommendations.length).toBeGreaterThan(0);
      expect(result.recommendations.some((rec) => rec.includes('SLA'))).toBe(true);
    });

    it('should generate recommendations for high rework rates', () => {
      const input: CostLeakageInput = {
        monthlyRevenue: 1000000,
        slaBreachRate: 5,
        manualReworkRate: 20,
        processErrorRate: 3,
        averageErrorCost: 5000,
      };

      const result = calculateCostLeakage(input);
      expect(result.recommendations.some((rec) => rec.includes('rework') || rec.includes('SOP'))).toBe(true);
    });

    it('should handle very large revenue values', () => {
      const input: CostLeakageInput = {
        monthlyRevenue: 100000000,
        slaBreachRate: 5,
        manualReworkRate: 10,
        processErrorRate: 3,
        averageErrorCost: 5000,
      };

      const result = calculateCostLeakage(input);
      expect(result.monthlyLeakage).toBeGreaterThan(0);
      expect(result.annualLeakage).toBe(result.monthlyLeakage * 12);
    });

    it('should handle negative values gracefully', () => {
      const input: CostLeakageInput = {
        monthlyRevenue: 1000000,
        slaBreachRate: -5, // Negative should be handled
        manualReworkRate: 10,
        processErrorRate: 3,
        averageErrorCost: 5000,
      };

      // Should not throw, but may produce unexpected results
      expect(() => calculateCostLeakage(input)).not.toThrow();
    });

    it('should calculate breakdown components correctly', () => {
      const input: CostLeakageInput = {
        monthlyRevenue: 1000000,
        slaBreachRate: 10,
        manualReworkRate: 15,
        processErrorRate: 5,
        averageErrorCost: 10000,
      };

      const result = calculateCostLeakage(input);

      expect(result.breakdown.slaBreaches).toBeGreaterThanOrEqual(0);
      expect(result.breakdown.manualRework).toBeGreaterThanOrEqual(0);
      expect(result.breakdown.processErrors).toBeGreaterThanOrEqual(0);
      expect(
        Math.round(result.breakdown.slaBreaches + result.breakdown.manualRework + result.breakdown.processErrors)
      ).toBeCloseTo(result.monthlyLeakage, -2);
    });

    it('should handle edge case: all rates at maximum', () => {
      const input: CostLeakageInput = {
        monthlyRevenue: 1000000,
        slaBreachRate: 100,
        manualReworkRate: 100,
        processErrorRate: 100,
        averageErrorCost: 100000,
      };

      const result = calculateCostLeakage(input);
      expect(result.severity).toBe('Critical');
      expect(result.recommendations.length).toBeGreaterThan(0);
    });
  });
});

