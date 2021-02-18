const convertStringToNum = require('./stringToNum');

test('Convert string to number', () => {
  const tests = [
    { ip: "42", expected: 42 },
    { ip: "0", expected: 0 },
    { ip: "42a", expected: 42 },
    { ip: "42a35", expected: 42 },
    { ip: "abc42", expected: 0 },
    { ip: "-42", expected: -42 },
  ]
  tests.forEach(test => {
    expect(convertStringToNum(test.ip)).toBe(test.expected);
  });
});