const multiply = require('.');

test('multiply', () => {
  expect(multiply(0, 0)).toEqual(0);
  expect(multiply(1, 1)).toEqual(1);
  expect(multiply(2, 2)).toEqual(4);
});
