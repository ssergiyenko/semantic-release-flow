const add = require('.');

test('add', () => {
  expect(add(1, 2)).toEqual(3);
  expect(add(-1, -2)).toEqual(-3);
});
