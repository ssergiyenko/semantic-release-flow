const multiply = require('.');

test('multiply', () => {
  expect(multiply(1, 1)).toEqual(1);
  expect(multiply(2, 2)).toEqual(4);
});
