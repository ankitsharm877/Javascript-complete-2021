const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);


// creating array
const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetails: []}];

const analyticsData = [[1, 1.6], [-5.4, 2.1]];

for (const analytics of analyticsData) {
    for (const dataPoint of analytics) {
        console.log(dataPoint);
    }
}


// adding & removing in array
const hobbiesNew = ['Sports', 'Cooking'];
hobbiesNew.push('Reading');
console.log(hobbiesNew);
hobbiesNew.unshift('Coding');
console.log(hobbiesNew);
const poppedValue = hobbiesNew.pop();
console.log(hobbiesNew, poppedValue);
hobbiesNew.shift();
console.log(hobbiesNew);


//splice() method
hobbiesNew.splice(0, 0);
hobbiesNew.splice(0, 0, 'Good Food', 'Coding');
console.log(hobbiesNew);
hobbiesNew.splice(0);

//slice() method
const results = [1,2,3,5];
const newResults = results.slice();
results.push(9);
newResults.push(7);
console.log(newResults, results);
console.log(results.slice(2,4));

//concat() method
const test = [1,2,3,5];
const newtest = test.concat();

console.log(newtest, test);


//indexOf() & lastIndexOf() methods
console.log(results.indexOf(2), results.lastIndexOf(5));
const pData = [{name: 'ankit'}, {name: 'sharma'}];
console.log(pData.indexOf({name: 'ankit'}));

// find() & findIndex() methods
const val = pData.find((person) => {
    return person.name === 'ankit';
});
const index = pData.findIndex((person) => {
    return person.name === 'ankit';
});
console.log(val, index);

//includes method
console.log(test.includes(2));

//forEach() method
const prices = [10.99, 5.99, 3.99, 6.59];
prices.forEach((price, index) => console.log(index, price));

//map() method
const taxs = [10.99, 5.99, 3.99, 6.59];
const newTaxs = taxs.map((price, index) => {
    const t = {index: index, price: price};
    return t;
});
console.log(newTaxs);

//sort() & reverse() methods
prices.sort(); //convert value into string then sort
taxs.sort((a,b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log("sorted", prices);
console.log("sorted tax", taxs);
console.log("reverse tax", taxs.reverse());

// filter arrays
let filteredPrice = prices.filter((price, index, prices) => {
    return price > 6;
});
filteredPrice = prices.filter(price => price > 6);
console.log("filter arrays", filteredPrice);


//reduce() method
let totalPrice = taxs.reduce((prevValue, currValue, currIndex, prices) => {
    return prevValue + currValue;
}, 0);
totalPrice = taxs.reduce((prevValue, currValue) => prevValue + currValue, 0);
console.log("sum of price:", totalPrice);

// split() & join() methods
const str = "123;24;53";
const arrStr = str.split(";");
console.log(str, arrStr);

const names = ['ankit', 'sharma'];
console.log(names.join()); // add , after each value by default
console.log(names.join(" ")); // add whitespace after each value

// spread operator example
const newNames = [...names];
newNames.push('Kumar');
console.log(names, newNames);

console.log(Math.min(...prices));

const persons = [{name: 'ankit', age: 21}, {name: 'sharma', age: 32}];
const copyPersons = [...persons]; // copy by reference
const copyPersons2 = persons.map(person => ({
    name: person.name,
    age: person.age
})); // copy by value
console.log(persons, copyPersons, copyPersons2);

//array destructing
const nameData = ['ankit', 'sharma'];
const fName = nameData[0];
const lName = nameData[1];

const [firstName, lastName] = nameData;
console.log(fName, lName, firstName, lastName);

const nameData2 = ['ankit', 'sharma', 'mr', 30];
const [fn, ln, ...other] = nameData2;
console.log(fn, ln, ...other);