const multiply = require('.');

test('multiply', () => {
  expect(multiply(2, 2)).toEqual(4);
  expect(multiply(3, 3)).toEqual(9);
});
