let person = {
    name: 'Ankit',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {
        alert('Hi There!');
    },
    temp: 12,
    'last name': 'sharma',
    1.2: '3'
};
person.greet();
console.log(person);

//add properties
person.isAdmin = true;
//modify properties
person.age = 31;
//delete properties
delete person.temp;
console.log(person);

console.log(person['last name']);
console.log(person[1.2], person['1.2']);

//Special Key names & Square Bracket Property Access
const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style['background-color'] = 'blue';

//propery order
const numbers = {5: '5th', 1:'1st'};
console.log(numbers);


//Dynamic property access & Setting Properties Dynamically
const keyName = 'last name';
const user = {
    name: 'ankit',
    age: 23,
    [keyName]: 'sharma' //setting dynamic property
}
console.log(person[keyName]); //access dynamic property


//property & method chaining
const ur = {
    info : {
        name: 'ankit'
    },
    age: 20
}
console.log(ur.info.name);
Math.random().toString();

//The Object spread operator
const user2 = {...user}; // create deep copy of user object
const user3 = {...user, age:30}; // overide age property
console.log(user2, user3);

//Object.assign() method
const user4 = Object.assign({}, user);
console.log(user4);

// object destructuring
const movie = {
    info: {
      title,
      extraName: 'extraValue'
    },
    id: Math.random(),
    getFormattedTitle: function() {
        return this.info.title.toUpperCase();
    }
};
const { info, ...other } = movie;
console.log(info, other);

//Checking for property existence

if ('info' in movie) {
    console.log(movie.info);
}

//getters & setters
const newmovie = {
    set title(val) {
        if (val.trim() === '') {
            this._title = 'default value';
        }
        this._title = val;
    },
    get title() {
        return this._title;
    },
    extraName: 'extraValue'
};