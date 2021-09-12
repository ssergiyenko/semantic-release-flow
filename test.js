const multiply = require('.');

test('multiply', () => {
  expect(multiply(2, 2)).toEqual(4);
  expect(multiply(3, 2)).toEqual(6);
});
