// store various types of data in Arrays

const list = [1, 'hello', { age: 31 }, true, null, undefined, () => {
}];


const people = [
  { firstName: 'Tyler', lastName: 'Garlick' },
  { firstName: 'Bob', lastName: 'The Builder' },
  { firstName: 'Donald', lastName: 'Trump' }
];


// retrieve data from precise locations in an Array

// How do we get the first one?
// const tyler = people[0];
const tyler = people.slice(0, 1);



// How do we get the last one?

// 3 item - 1 = 2
// const elPresidente = people[2];
// const elPresidente = people[people.length - 1];



// retrieve subsets of data from an Array

// last two people
// const lastTwo = people.slice(1);
// const lastTwo = people.slice(1, 2);

// const lastTwo = people.filter((person) => {
//   return person.firstName !== 'Tyler';
// });



// combine, copy, add items and subtract from an Array

// people.concat([{ firstName: 'Hillary', lastName: 'Clinton'}]);
const result = [{ firstName: 'Hillary', lastName: 'Clinton'}, ...people];



// Copy array
const copied = [...people];



// Add
// people.push({ firstName: 'Hillary', lastName: 'Clinton'});
// const result = [{ firstName: 'Hillary', lastName: 'Clinton'}, ...people];
// people.splice(0, 0, { firstName: 'Hillary', lastName: 'Clinton'});

// Removing

// Removes bob the builder
people.splice(1, 1);

const newPeople = [...people.filter(p => p.firstName !== 'Tyler')];




