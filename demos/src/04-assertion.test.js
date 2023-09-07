/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// mathers
test('test obj', () => {
  const data = { name: 'jota' };
  data.lastname = 'Martinez';
  expect(data).toEqual({ name: 'jota', lastname: 'Martinez' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('String', () => {
  expect('Christoph').toMatch(/stop/);
});

test('List / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
