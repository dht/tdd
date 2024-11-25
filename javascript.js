// primitive data types

// strings
let food = 'Pasta';
food = 'Salad2';
console.log(food);

const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
const age = 30;
const line = fullName + ' is ' + age + ' years old.';
console.log(line);

// numbers
let number = 3;
number = 4;
console.log(number);

// boolean
let isHappy = false;
isHappy = true;
console.log(isHappy);

// non-primitive data types

undefined;
null;

// arrays
let singers = ['Michael Jackson', 'Elvis Presley'];
singers[0] = 'Bob Dylan';
console.log(singers[0]);
console.log('length: ' + singers.length);
singers = ['David Bowie'];
console.log(singers[1]);
console.log('length: ' + singers.length);

// objects
const person = {
  firstName: 'James',
  lastName: 'Bond',
};
console.log(person.firstName);
