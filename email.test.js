const isValidEmail = require('./emailValidator');

test('Duzgun elektron poct unvanı', () => {
  expect(isValidEmail('example@email.com')).toBe(true);
  expect(isValidEmail('test.user@subdomain.example.co.uk')).toBe(true);
  expect(isValidEmail('user1234@example.co')).toBe(true);
});

test('Duzgun olmayan elektron poct unvani', () => {
  expect(isValidEmail('example.com')).toBe(false);
  expect(isValidEmail('user@.com')).toBe(false);
  expect(isValidEmail('test@example.')).toBe(false);
  expect(isValidEmail('@example.com')).toBe(false);
  expect(isValidEmail('user@example')).toBe(false);
  expect(isValidEmail('user@.')).toBe(false);
  expect(isValidEmail('user@.com')).toBe(false);
});

test('Bos setir', () => {
  expect(isValidEmail('')).toBe(false);
});
