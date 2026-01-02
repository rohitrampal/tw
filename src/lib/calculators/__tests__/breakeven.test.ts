import { calculateBreakEven, type BreakEvenInput } from '../breakeven';

describe('Break-Even Calculator', () => {
  describe('calculateBreakEven', () => {
    it('should calculate break-even correctly for normal inputs', () => {
      const input: BreakEvenInput = {
        investmentCost: 100000,
        monthlySavings: 20000,
        monthlyRevenueIncrease: 10000,
        rampUpTime: 2,
      };

      const result = calculateBreakEven(input);

      expect(result.breakEvenMonths).toBeGreaterThan(0);
      expect(result.netROI).toBeGreaterThan(0);
      expect(result.totalBenefits).toBeGreaterThan(0);
    });

    it('should handle zero savings', () => {
      const input: BreakEvenInput = {
        investmentCost: 100000,
        monthlySavings: 0,
        monthlyRevenueIncrease: 0,
        rampUpTime: 0,
      };

      const result = calculateBreakEven(input);
      // Should handle division by zero or return a very large number
      expect(result.breakEvenMonths).toBeGreaterThanOrEqual(0);
    });

    it('should handle zero investment cost', () => {
      const input: BreakEvenInput = {
        investmentCost: 0,
        monthlySavings: 10000,
        monthlyRevenueIncrease: 5000,
        rampUpTime: 0,
      };

      const result = calculateBreakEven(input);
      expect(result.breakEvenMonths).toBe(0);
      expect(result.netROI).toBeGreaterThan(0);
    });

    it('should account for ramp-up time', () => {
      const inputNoRamp: BreakEvenInput = {
        investmentCost: 100000,
        monthlySavings: 20000,
        monthlyRevenueIncrease: 10000,
        rampUpTime: 0,
      };

      const inputWithRamp: BreakEvenInput = {
        investmentCost: 100000,
        monthlySavings: 20000,
        monthlyRevenueIncrease: 10000,
        rampUpTime: 6,
      };

      const resultNoRamp = calculateBreakEven(inputNoRamp);
      const resultWithRamp = calculateBreakEven(inputWithRamp);

      // With ramp-up, break-even should take longer
      expect(resultWithRamp.breakEvenMonths).toBeGreaterThanOrEqual(resultNoRamp.breakEvenMonths);
    });

    it('should calculate scenarios correctly', () => {
      const input: BreakEvenInput = {
        investmentCost: 100000,
        monthlySavings: 20000,
        monthlyRevenueIncrease: 10000,
        rampUpTime: 2,
      };

      const result = calculateBreakEven(input);

      expect(result.scenarios).toHaveProperty('conservative');
      expect(result.scenarios).toHaveProperty('realistic');
      expect(result.scenarios).toHaveProperty('optimistic');

      // Optimistic should have better ROI than realistic
      expect(result.scenarios.optimistic.roi).toBeGreaterThanOrEqual(result.scenarios.realistic.roi);
      // Conservative should have worse ROI than realistic
      expect(result.scenarios.conservative.roi).toBeLessThanOrEqual(result.scenarios.realistic.roi);
    });

    it('should handle very large investment costs', () => {
      const input: BreakEvenInput = {
        investmentCost: 10000000,
        monthlySavings: 200000,
        monthlyRevenueIncrease: 100000,
        rampUpTime: 3,
      };

      const result = calculateBreakEven(input);
      expect(result.breakEvenMonths).toBeGreaterThan(0);
      expect(result.breakEvenMonths).toBeLessThan(60); // Should complete within reasonable time
    });

    it('should handle very small monthly benefits', () => {
      const input: BreakEvenInput = {
        investmentCost: 100000,
        monthlySavings: 100,
        monthlyRevenueIncrease: 50,
        rampUpTime: 0,
      };

      const result = calculateBreakEven(input);
      expect(result.breakEvenMonths).toBeGreaterThan(0);
      expect(result.breakEvenMonths).toBeLessThan(60);
    });

    it('should calculate break-even date correctly', () => {
      const input: BreakEvenInput = {
        investmentCost: 100000,
        monthlySavings: 20000,
        monthlyRevenueIncrease: 10000,
        rampUpTime: 0,
      };

      const result = calculateBreakEven(input);
      expect(result.breakEvenDate).toMatch(/\d{1,2}, \d{4}/); // Format: "Month Day, Year"
    });

    it('should handle negative values gracefully', () => {
      const input: BreakEvenInput = {
        investmentCost: -100000, // Negative investment
        monthlySavings: 20000,
        monthlyRevenueIncrease: 10000,
        rampUpTime: 0,
      };

      // Should not throw, but may produce unexpected results
      expect(() => calculateBreakEven(input)).not.toThrow();
    });

    it('should handle ramp-up time longer than 12 months', () => {
      const input: BreakEvenInput = {
        investmentCost: 100000,
        monthlySavings: 20000,
        monthlyRevenueIncrease: 10000,
        rampUpTime: 18,
      };

      const result = calculateBreakEven(input);
      // Should still calculate, but may take longer
      expect(result.breakEvenMonths).toBeGreaterThan(0);
    });

    it('should ensure payback period is reasonable', () => {
      const input: BreakEvenInput = {
        investmentCost: 100000,
        monthlySavings: 20000,
        monthlyRevenueIncrease: 10000,
        rampUpTime: 2,
      };

      const result = calculateBreakEven(input);
      // Payback should be less than or equal to break-even months
      expect(result.paybackPeriod).toBeGreaterThan(0);
      expect(result.paybackPeriod).toBeLessThanOrEqual(result.breakEvenMonths + 5);
    });
  });
});

