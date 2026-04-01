const { capitalizeWords, filterActiveUsers, logAction } = require('../index');// const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('Utility Function Tests', () => {
  
  // 1. Tests for capitalizeWords
  describe('capitalizeWords()', () => {
    test('should capitalize the first letter of every word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('should return an empty string if input is empty', () => {
      expect(capitalizeWords('')).toBe('');
    });

    test('should handle single words correctly', () => {
      expect(capitalizeWords('javascript')).toBe('Javascript');
    });
  });

  // 2. Tests for filterActiveUsers
  describe('filterActiveUsers()', () => {
    test('should filter out inactive users', () => {
      const users = [
        { name: 'Alice', isActive: true },
        { name: 'Bob', isActive: false },
        { name: 'Charlie', isActive: true },
      ];
      const result = filterActiveUsers(users);
      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('Alice');
      expect(result[1].name).toBe('Charlie');
    });

    test('should return an empty array if no users are active', () => {
      const users = [{ name: 'Bob', isActive: false }];
      expect(filterActiveUsers(users)).toEqual([]);
    });

    test('should return an empty array when input is empty', () => {
      expect(filterActiveUsers([])).toEqual([]);
    });
  });

  // 3. Tests for logAction
  describe('logAction()', () => {
    test('should return a string containing the username and action', () => {
      const result = logAction('login', 'Alice');
      expect(result).toContain('Alice');
      expect(result).toContain('login');
    });

    test('should contain a valid ISO timestamp', () => {
      const result = logAction('logout', 'Bob');
      // Matches the "T" and "Z" found in 2026-04-01T10:00:00.000Z
      expect(result).toMatch(/\d{4}-\d{2}-\d{2}T/);
    });
  });
});
