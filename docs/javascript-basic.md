````markdown
# JavaScript Basics for Beginners

Welcome to JavaScript! This guide introduces you to the foundational principles of the language, covering types, variables, functions, objects, and some essential methods.

---

## Data Types in JavaScript

JavaScript has **primitive** and **non-primitive** (reference) types.

### **Primitive Types**

1. **String**: Represents text (e.g., `"hello"`, `'world'`).
2. **Number**: Represents numbers (e.g., `42`, `3.14`).
3. **Boolean**: Represents `true` or `false`.
4. **Undefined**: A variable that has been declared but not assigned a value.
5. **Null**: Represents an empty or non-existent value.

### **Non-Primitive Types**

1. **Objects**: Key-value pairs or complex data structures (e.g., `{ name: "John" }`).
2. **Arrays**: Ordered lists of elements (e.g., `[1, 2, 3]`).

---

## Variables: Pass-by-Value vs. Pass-by-Reference

### **Pass-by-Value**

- **Primitive types** are copied when assigned to another variable.
- Example:
  ```javascript
  let a = 5;
  let b = a; // b gets a copy of a
  b = 10;
  console.log(a); // Output: 5
  ```
````

### **Pass-by-Reference**

- **Non-primitive types** (objects and arrays) share a reference.
- Example:
  ```javascript
  let obj1 = { name: 'Alice' };
  let obj2 = obj1; // obj2 references the same object
  obj2.name = 'Bob';
  console.log(obj1.name); // Output: Bob
  ```

---

## Functions

Functions are reusable blocks of code that perform a specific task.

### **Function Syntax**

1. **Function Declaration**:

   ```javascript
   function greet(name) {
     return `Hello, ${name}!`;
   }
   console.log(greet('Alice')); // Output: Hello, Alice!
   ```

2. **Arrow Function**:
   ```javascript
   const greet = (name) => `Hello, ${name}!`;
   console.log(greet('Alice')); // Output: Hello, Alice!
   ```

---

## Objects

Objects store related data and functions (called methods).

### **Object Syntax**

```javascript
const person = {
  name: 'John',
  age: 30,
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};
console.log(person.greet()); // Output: Hi, I'm John
```

---

## Useful Array and String Methods

| **Category** | **Method**      | **Description**                              | **Example**                             |
| ------------ | --------------- | -------------------------------------------- | --------------------------------------- |
| **Array**    | `push()`        | Adds an element to the end of an array.      | `[1].push(2) // [1, 2]`                 |
|              | `pop()`         | Removes the last element of an array.        | `[1, 2].pop() // [1]`                   |
|              | `shift()`       | Removes the first element of an array.       | `[1, 2].shift() // [2]`                 |
|              | `unshift()`     | Adds elements to the beginning of an array.  | `[1].unshift(0) // [0, 1]`              |
|              | `map()`         | Transforms each element in an array.         | `[1, 2].map(x => x * 2) // [2, 4]`      |
|              | `filter()`      | Filters elements based on a condition.       | `[1, 2].filter(x => x > 1) // [2]`      |
| **String**   | `toUpperCase()` | Converts a string to uppercase.              | `'hello'.toUpperCase() // 'HELLO'`      |
|              | `toLowerCase()` | Converts a string to lowercase.              | `'HELLO'.toLowerCase() // 'hello'`      |
|              | `includes()`    | Checks if a string contains a substring.     | `'hello'.includes('he') // true`        |
|              | `replace()`     | Replaces part of a string.                   | `'abc'.replace('a', 'x') // 'xbc'`      |
|              | `split()`       | Splits a string into an array of substrings. | `'a,b,c'.split(',') // ['a', 'b', 'c']` |

---

## Quick Tips for Beginners

1. **Use `const` and `let`**:

   - Use `const` for variables that won’t change.
   - Use `let` for variables that can change.
   - Avoid `var` (it has outdated behavior).

2. **Practice Debugging**:

   - Use `console.log()` to check your code step by step.

3. **Experiment**:
   - Play around in the browser console or an online tool like [JSFiddle](https://jsfiddle.net) or [CodeSandbox](https://codesandbox.io).

Happy coding! 🎉
