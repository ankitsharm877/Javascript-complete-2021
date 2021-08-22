console.log("-------------------sets-------------------");

const ids = new Set([1,2,3]);
ids.add(2);
console.log(ids, ids.has(1));

for (const entry of ids.entries()) {
    console.log(entry, entry[0], entry[1]);
}

console.log("-------------------maps-------------------");

const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

console.log(personData);
console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

console.log(personData.size);

console.log("-------------------weak sets-------------------");


let person = {name: 'Max'};
const persons = new WeakSet();
persons.add(person);

// ... some operations
// person = null;

console.log(persons);


console.log("-------------------weak maps-------------------");

const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null;

console.log(personData);