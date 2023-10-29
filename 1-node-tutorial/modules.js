const names = require('./name');
const sayHi = require('./utils');
const data = require('./alternative-flavor');
const add = require('./mind-grenade');
console.log(names);

sayHi(names.john);
sayHi(names.peter);

console.log(data);
console.log(add);