import { calculateROI, type ROIInput } from '../roi';

describe('ROI Calculator', () => {
  describe('calculateROI', () => {
    it('should calculate ROI correctly for normal inputs', () => {
      const input: ROIInput = {
        totalCost: 100000,
        monthlyBenefits: 20000,
        implementationDuration: 2,
      };

      const result = calculateROI(input);

      expect(result.roi).toBeGreaterThan(0);
      expect(result.paybackPeriod).toBeGreaterThan(0);
      expect(result.netBenefit).toBeGreaterThan(0);
    });

    it('should handle zero cost', () => {
      const input: ROIInput = {
        totalCost: 0,
        monthlyBenefits: 10000,
        implementationDuration: 0,
      };

      const result = calculateROI(input);
      // ROI should be infinite or very large
      expect(result.roi).toBeGreaterThan(0);
      expect(result.paybackPeriod).toBe(0);
    });

    it('should handle zero monthly benefits', () => {
      const input: ROIInput = {
        totalCost: 100000,
        monthlyBenefits: 0,
        implementationDuration: 0,
      };

      const result = calculateROI(input);
      expect(result.roi).toBeLessThan(0);
      expect(result.paybackPeriod).toBeGreaterThan(60); // Should be very large
    });

    it('should account for implementation duration', () => {
      const inputNoDuration: ROIInput = {
        totalCost: 100000,
        monthlyBenefits: 20000,
        implementationDuration: 0,
      };

      const inputWithDuration: ROIInput = {
        totalCost: 100000,
        monthlyBenefits: 20000,
        implementationDuration: 6,
      };

      const resultNoDuration = calculateROI(inputNoDuration);
      const resultWithDuration = calculateROI(inputWithDuration);

      // With implementation duration, first year benefit is lower
      expect(resultWithDuration.netBenefit).toBeLessThan(resultNoDuration.netBenefit);
    });

    it('should calculate scenarios correctly', () => {
      const input: ROIInput = {
        totalCost: 100000,
        monthlyBenefits: 20000,
        implementationDuration: 2,
      };

      const result = calculateROI(input);

      expect(result.scenarios).toHaveProperty('conservative');
      expect(result.scenarios).toHaveProperty('realistic');
      expect(result.scenarios).toHaveProperty('optimistic');

      // Optimistic should have better ROI
      expect(result.scenarios.optimistic.roi).toBeGreaterThanOrEqual(result.scenarios.realistic.roi);
      // Conservative should have worse ROI
      expect(result.scenarios.conservative.roi).toBeLessThanOrEqual(result.scenarios.realistic.roi);
    });

    it('should calculate break-even month correctly', () => {
      const input: ROIInput = {
        totalCost: 100000,
        monthlyBenefits: 20000,
        implementationDuration: 2,
      };

      const result = calculateROI(input);
      expect(result.breakEvenMonth).toBeGreaterThan(0);
      expect(result.breakEvenMonth).toBeLessThanOrEqual(result.paybackPeriod + 2);
    });

    it('should calculate total benefit over 3 years', () => {
      const input: ROIInput = {
        totalCost: 100000,
        monthlyBenefits: 20000,
        implementationDuration: 0,
      };

      const result = calculateROI(input);
      // Should be approximately: (20000 * 12 * 3) - 100000 = 620000
      expect(result.totalBenefit).toBeGreaterThan(0);
    });

    it('should handle very large costs', () => {
      const input: ROIInput = {
        totalCost: 10000000,
        monthlyBenefits: 200000,
        implementationDuration: 3,
      };

      const result = calculateROI(input);
      expect(result.roi).toBeGreaterThan(-100); // Should not be extremely negative
      expect(result.paybackPeriod).toBeLessThan(60);
    });

    it('should handle very small monthly benefits', () => {
      const input: ROIInput = {
        totalCost: 100000,
        monthlyBenefits: 100,
        implementationDuration: 0,
      };

      const result = calculateROI(input);
      expect(result.roi).toBeLessThan(0);
      expect(result.paybackPeriod).toBeGreaterThan(60);
    });

    it('should handle implementation duration longer than 12 months', () => {
      const input: ROIInput = {
        totalCost: 100000,
        monthlyBenefits: 20000,
        implementationDuration: 18,
      };

      const result = calculateROI(input);
      // First year benefit should be 0 or negative
      expect(result.netBenefit).toBeLessThanOrEqual(0);
    });

    it('should use annualBenefits if provided', () => {
      const input: ROIInput = {
        totalCost: 100000,
        monthlyBenefits: 10000,
        implementationDuration: 0,
        annualBenefits: 150000, // Different from monthly * 12
      };

      const result = calculateROI(input);
      // Should use annualBenefits (150000) instead of monthlyBenefits * 12 (120000)
      expect(result.netBenefit).toBe(50000); // 150000 - 100000
    });

    it('should handle negative ROI correctly', () => {
      const input: ROIInput = {
        totalCost: 100000,
        monthlyBenefits: 5000,
        implementationDuration: 0,
      };

      const result = calculateROI(input);
      // Annual benefit: 5000 * 12 = 60000, Cost: 100000
      // ROI: ((60000 - 100000) / 100000) * 100 = -40%
      expect(result.roi).toBeLessThan(0);
      expect(result.netBenefit).toBeLessThan(0);
    });

    it('should handle edge case: benefits exactly equal to cost', () => {
      const input: ROIInput = {
        totalCost: 100000,
        monthlyBenefits: 8333.33, // Approximately 100000 / 12
        implementationDuration: 0,
      };

      const result = calculateROI(input);
      expect(result.roi).toBeCloseTo(0, 0);
    });
  });
});

