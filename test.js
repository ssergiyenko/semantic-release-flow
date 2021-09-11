const multiply = require('.');

test('multiply', () => {
  expect(multiply(1, 2)).toEqual(2);
  expect(multiply(-1, -2)).toEqual(2);
});
