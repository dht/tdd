````markdown
# Advanced JavaScript: Loops and Classes

This guide provides a concise explanation of **loops** and **classes** in JavaScript, focusing on their advanced usage and best practices.

---

## Loops in JavaScript

Loops are used to repeatedly execute a block of code. Advanced usage often involves understanding iterables, generators, and loop control techniques.

### **1. For-of Loop**

- Used to iterate over **iterable objects** (e.g., arrays, strings, maps, sets).
- Example:
  ```javascript
  const fruits = ['apple', 'banana', 'cherry'];
  for (const fruit of fruits) {
    console.log(fruit); // Output: apple, banana, cherry
  }
  ```
````

### **2. For-in Loop**

- Iterates over the **enumerable properties** of an object.
- Example:
  ```javascript
  const person = { name: 'John', age: 30 };
  for (const key in person) {
    console.log(`${key}: ${person[key]}`); // Output: name: John, age: 30
  }
  ```
- ⚠️ Avoid using `for-in` for arrays; it iterates over keys, not values.

---

## Classes in JavaScript

Classes are blueprints for creating objects. They were introduced in ES6 and provide a cleaner, more structured way to handle object-oriented programming.

### **1. Defining a Class**

- Classes are defined using the `class` keyword.
- Example:

  ```javascript
  class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }

  const dog = new Animal('Dog');
  dog.speak(); // Output: Dog makes a noise.
  ```

## Summary

- **Loops**: Useful for iterating over arrays, objects, and other iterable data structures.
- **Classes**: Create reusable, structured code using constructors, methods, inheritance, and private fields.

Explore these concepts with hands-on coding to solidify your understanding. 🚀
