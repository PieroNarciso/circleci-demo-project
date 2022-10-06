import { add } from '.';

it('adds two values', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});
