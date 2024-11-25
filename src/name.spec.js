const { analyzeName } = require('./name');

it('analyze firstName and lastName', () => {
  const input = 'James Bond';
  const output = analyzeName(input);

  const expected = {
    firstName: 'James',
    middleName: '',
    lastName: 'Bond',
  };

  expect(output).toEqual(expected);
});

it('analyze firstName and lastName #2', () => {
  const input = 'David Bowie';
  const output = analyzeName(input);

  const expected = {
    firstName: 'David',
    middleName: '',
    lastName: 'Bowie',
  };

  expect(output).toEqual(expected);
});

it('should support middle names', () => {
  const input = 'John Quincy Adams';
  const output = analyzeName(input);

  const expected = {
    firstName: 'John',
    middleName: 'Quincy',
    lastName: 'Adams',
  };

  expect(output).toEqual(expected);
});
/*
TDD: 
1. write a test
2. implement just enough code to make the test pass
3. refactor
4. repeat
*/
