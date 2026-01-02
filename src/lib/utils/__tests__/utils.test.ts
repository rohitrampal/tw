import {
  cn,
  formatCurrency,
  formatIndianNumber,
  debounce,
  throttle,
  delay,
  generateId,
  isValidEmail,
  isValidIndianPhone,
  sanitizeString,
  truncate,
} from '../utils';

describe('Utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      expect(cn('foo', 'bar')).toBe('foo bar');
      expect(cn('foo', null, 'bar')).toBe('foo bar');
      expect(cn('foo', undefined, 'bar')).toBe('foo bar');
      expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
    });

    it('should handle Tailwind class conflicts', () => {
      expect(cn('p-2', 'p-4')).toContain('p-4'); // Last one wins
    });

    it('should handle empty strings', () => {
      expect(cn('', 'foo', '')).toBe('foo');
    });
  });

  describe('formatCurrency', () => {
    it('should format positive numbers correctly', () => {
      expect(formatCurrency(1000000)).toBe('₹10,00,000');
      expect(formatCurrency(50000)).toBe('₹50,000');
      expect(formatCurrency(1000)).toBe('₹1,000');
    });

    it('should format zero correctly', () => {
      expect(formatCurrency(0)).toBe('₹0');
    });

    it('should format negative numbers correctly', () => {
      expect(formatCurrency(-1000)).toBe('-₹1,000');
    });

    it('should handle decimal numbers', () => {
      expect(formatCurrency(1234.56)).toBe('₹1,235'); // Rounded
    });

    it('should handle very large numbers', () => {
      expect(formatCurrency(999999999)).toBe('₹99,99,99,999');
    });
  });

  describe('formatIndianNumber', () => {
    it('should format numbers in Lakhs', () => {
      expect(formatIndianNumber(500000)).toBe('5.0L');
      expect(formatIndianNumber(1000000)).toBe('10.0L');
    });

    it('should format numbers in Crores', () => {
      expect(formatIndianNumber(10000000)).toBe('1.0Cr');
      expect(formatIndianNumber(50000000)).toBe('5.0Cr');
    });

    it('should format numbers in Thousands', () => {
      expect(formatIndianNumber(5000)).toBe('5.0K');
      expect(formatIndianNumber(15000)).toBe('15.0K');
    });

    it('should return number as string for values less than 1000', () => {
      expect(formatIndianNumber(500)).toBe('500');
      expect(formatIndianNumber(99)).toBe('99');
    });

    it('should handle zero', () => {
      expect(formatIndianNumber(0)).toBe('0');
    });

    it('should handle negative numbers', () => {
      expect(formatIndianNumber(-5000)).toBe('-5.0K');
    });
  });

  describe('debounce', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should delay function execution', () => {
      const fn = jest.fn();
      const debouncedFn = debounce(fn, 100);

      debouncedFn();
      expect(fn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should cancel previous calls', () => {
      const fn = jest.fn();
      const debouncedFn = debounce(fn, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      jest.advanceTimersByTime(100);
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should pass arguments correctly', () => {
      const fn = jest.fn();
      const debouncedFn = debounce(fn, 100);

      debouncedFn('arg1', 'arg2');
      jest.advanceTimersByTime(100);

      expect(fn).toHaveBeenCalledWith('arg1', 'arg2');
    });
  });

  describe('throttle', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should limit function execution frequency', () => {
      const fn = jest.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn();
      expect(fn).toHaveBeenCalledTimes(1);

      throttledFn();
      expect(fn).toHaveBeenCalledTimes(1); // Still 1

      jest.advanceTimersByTime(100);
      throttledFn();
      expect(fn).toHaveBeenCalledTimes(2);
    });

    it('should pass arguments correctly', () => {
      const fn = jest.fn();
      const throttledFn = throttle(fn, 100);

      throttledFn('arg1');
      expect(fn).toHaveBeenCalledWith('arg1');
    });
  });

  describe('delay', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should return a promise that resolves after delay', async () => {
      const promise = delay(100);
      expect(promise).toBeInstanceOf(Promise);

      jest.advanceTimersByTime(100);
      await expect(promise).resolves.toBeUndefined();
    });

    it('should handle zero delay', async () => {
      const promise = delay(0);
      jest.advanceTimersByTime(0);
      await expect(promise).resolves.toBeUndefined();
    });
  });

  describe('generateId', () => {
    it('should generate a string', () => {
      const id = generateId();
      expect(typeof id).toBe('string');
      expect(id.length).toBeGreaterThan(0);
    });

    it('should generate unique IDs', () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
    });

    it('should generate alphanumeric IDs', () => {
      const id = generateId();
      expect(id).toMatch(/^[a-z0-9]+$/);
    });
  });

  describe('isValidEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('user+tag@example.com')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('user@')).toBe(false);
      expect(isValidEmail('user@.com')).toBe(false);
      expect(isValidEmail('user space@example.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(isValidEmail('a@b.c')).toBe(true); // Minimal valid email
      expect(isValidEmail('test@test.test')).toBe(true);
    });
  });

  describe('isValidIndianPhone', () => {
    it('should validate correct Indian phone numbers', () => {
      expect(isValidIndianPhone('9876543210')).toBe(true);
      expect(isValidIndianPhone('9123456789')).toBe(true);
      expect(isValidIndianPhone('6000000000')).toBe(true);
    });

    it('should handle formatted phone numbers', () => {
      expect(isValidIndianPhone('+91 9876543210')).toBe(true);
      expect(isValidIndianPhone('91-9876543210')).toBe(true);
      expect(isValidIndianPhone('(91) 9876543210')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(isValidIndianPhone('1234567890')).toBe(false); // Doesn't start with 6-9
      expect(isValidIndianPhone('987654321')).toBe(false); // Less than 10 digits
      expect(isValidIndianPhone('98765432101')).toBe(false); // More than 10 digits
      expect(isValidIndianPhone('')).toBe(false);
      expect(isValidIndianPhone('abc1234567')).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(isValidIndianPhone('9999999999')).toBe(true);
      expect(isValidIndianPhone('6000000000')).toBe(true);
    });
  });

  describe('sanitizeString', () => {
    it('should remove angle brackets', () => {
      expect(sanitizeString('<script>alert("xss")</script>')).toBe('scriptalert("xss")/script');
      expect(sanitizeString('Hello <world>')).toBe('Hello world');
    });

    it('should not modify safe strings', () => {
      expect(sanitizeString('Hello World')).toBe('Hello World');
      expect(sanitizeString('123')).toBe('123');
    });

    it('should handle empty strings', () => {
      expect(sanitizeString('')).toBe('');
    });

    it('should handle strings with only brackets', () => {
      expect(sanitizeString('<>')).toBe('');
    });
  });

  describe('truncate', () => {
    it('should truncate long strings', () => {
      expect(truncate('Hello World', 5)).toBe('Hello...');
      expect(truncate('This is a long string', 10)).toBe('This is a ...');
    });

    it('should not truncate short strings', () => {
      expect(truncate('Hello', 10)).toBe('Hello');
      expect(truncate('Hi', 5)).toBe('Hi');
    });

    it('should handle empty strings', () => {
      expect(truncate('', 10)).toBe('');
    });

    it('should handle maxLength of 0', () => {
      expect(truncate('Hello', 0)).toBe('...');
    });

    it('should handle strings equal to maxLength', () => {
      expect(truncate('Hello', 5)).toBe('Hello');
    });
  });
});

