const { sum, multiply, div } = require('./02-math');

describe('test for math', () => {
  describe('test for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const result = sum(1, 3);
      expect(result).toBe(4);
    });
  });

  describe('test for multiply', () => {
    test('should multiply', () => {
      const result = multiply(2, 3);
      expect(result).toBe(6);
    });
  });
  describe('test for div', () => {
    test('should div', () => {
      const result = div(10, 5);
      expect(result).toBe(2);
    });

    test('should div for zero', () => {
      const result = div(6, 0);
      expect(result).toBeNull();
    });
  });
});
