// create function definitions
function hello() {
}

// create function expressions including anonymous ones
const hello2 = function () {
};

// Tyler's preferred syntax... booyah.

const hello2 = () => {
};

const hello3 = function (callback) {
  return callback();
};

// The callback is a use of an anonymous function
hello3(function () {
  return 'Hello';
});

hello3(() => {
  
});

// properly call functions
hello();
hello2();

// demonstrate nested functions and closures
function Person() {
  
  return {
    age: 32
  };
  
  // this.age = 32;
}

const person = new Person();


function add(x, y) {
  const closure = function (x1) {
    // x1 own variable
    // y outer variables
    // global e.g. Person
    return x1 + y;
  };
  
  return closure(x);
}

add(2);

// The this is not screwed up...
const subtract = (x, y) => {
  this.result = x + y;
  
  return () => {
    return this.result;
  }
};


// create a recursive function
// A function that calls itself when a certain condition is met.

function fibonacci(num) {
  
  // Condition
  if (num <= 1) return 1;
  
  return fibonacci(num - 1) + fibonacci(num - 2);
}


// use the arguments object
function hello4() {
  // this.arguments = [1,2,3,4];
}

hello4(1, 2, 3, 4);

const hello5 = (...args) => args;
hello5(1, 2, 3, 4);


// demonstrate function parameters including default ones
function hello6(hello, world = 1, blah = '') {
  
}

hello6({}, [], 1); // hello = {}, world = [], blah = 1
hello6(hello1, hello2, hello3); // hello = function, world = function, blah = function
hello6('arg'); // hello = 'arg', world = 1, blah = ''
hello6('arg', 10); // hello = 'arg', world = 10, blah = ''

const greet = (greeting = '') => console.log(greeting);
greet('Hi');
greet('Booyah');
greet({});

function save(person = {}) {
  // return person;
  // person will always be an object by default
  
}

save();

const save = (person = {}) => {
  if (person.isActive) {
    //
  }
  console.log(person);
};

save();

// use Arrow functions

function save1(person = {}) {
  // return person;
  // person will always be an object by default
  
}

const save2 = (person = {}) => {
  
};

const getAge = (person = {}) => person.age;

const getName = () => {
  return {
    age: 23
  }
};

getName({ name: 'bob' });

// {
//   age: 23
// }

// const getAge = (person = {}) => {
//   return person.age;
// };

// defining a function on an object with shorthand syntax

const dog = {
  
  // Shorthand syntax
  bark() {
    return 'woof woof'
  }
  
  // bark: () => 'woof woof'
  
};

dog.bark();


class Cat {
  
  
  meow() {
    return 'Meow!!!!';
  }
}



