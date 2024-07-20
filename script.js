// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Andy';
let name2 = name;
console.log(name, name2);
name = 'Andrew';
console.log(name, name2);
 
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';

// however what happens when we update that array?

// now here is the problem!
console.log(players, team);

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
team2[3] = 'Fenix';
console.log(players, team, team2);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = 'Gilbert';
console.log(players, team, team2, team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'ahoy';
console.log(players, team, team2, team3, team4);

const team5 = Array.from(players);
team5[3] = 'Tony';
console.log(players, team, team2, team3, team4, team5);


// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 9;
console.log(person, captain);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(person, captain, cap2);

// We will hopefully soon see the object ...spread
const cap3 = {...person};
cap3.spread = 100;
console.log(person, captain, cap2, cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const lux = {
    name: 'Lux',
    age: 10,
    sports: {
        soccer: 'good',
        basketball: 'okay',
        swimming: 'bad'
    }
}
// console.clear();
console.log(lux);

// only the first level key value pairs are copied
const dev = Object.assign({}, lux);
dev.name = 'Fenix';
console.log(lux, dev);

// deeper level values are not copied, but referenced
dev.sports.swimming = 'great';
console.log(lux, dev);

// cheating way of deep cloning (potential issues with performance)
const dev2 = JSON.parse(JSON.stringify(lux));
dev2.sports.swimming = 'parse and stringify';
console.log(lux, dev, dev2);

// lodash cloneDeep() method (should think twice before using it)
// import cloneDeep from 'lodash/cloneDeep';

// const dev3 = cloneDeep(lux);
// dev3.sports.swimming = 'cloneDeep';
// console.log(lux, dev, dev2, dev3);

// structuredClone() (modern way)
const dev4 = structuredClone(lux);
dev4.sports.swimming = 'structuredClone';
console.log(lux, dev, dev2, dev4);