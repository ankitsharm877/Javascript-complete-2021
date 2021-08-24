//class
class AgedPerson {
    printAge() {
        console.log(this.age);
    }
}
class Person extends AgedPerson {
    name = 'ankit';
    static showAge() {
        console.log(this.age);
    }
    constructor() {
        super();
        this.age = 20;
    }
    greet() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old');
    }
}

const person = new Person();
person.greet();
console.dir(person);
console.dir(person.__proto__);


//constructor function
function User() {
    //this = {} ;
    this.age = 30;
    this.name = 'Ankit';
    this.greet = function() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old');
    };
    //return this; //before add all fields
}
//static property and method
User.id = 1;
User.detail = function () {
    console.log(this.name + ", "+ this.age);
}
console.dir(User); //class has static method
// assign new prototype object and remove constructor object
// User.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// }

//edit existing prototype object which has constructor object
User.prototype.printAge = function() {
    console.log(this.age);
}
const user = new User();
user.greet();
user.printAge();
const user2 = new user.__proto__.constructor();
console.log(user2);
console.dir(user);
console.log(user.__proto__);
console.log(user.__proto__ == User.prototype); // true
console.log(user.__proto__ == User.__proto__); // false

//prototype chain
console.dir(Object);

//
const button = document.getElementById('btn');
button.addEventListener('click', person.greet.bind(person));

//getters & setters prototype
const course = {
  // new Object()
  title: 'JavaScript - The Complete Guide',
  rating: 5
};
console.log(course.__proto__);
console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function() {
    console.log(`${this.rating}/5`);
  }
});

const student = Object.create({
  printProgress: function() {
    console.log(this.progress);
  }
}, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Max',
    writable: true
  }
});

// student.name = 'Max';

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

student.printProgress();

console.log(student);

course.printRating();

