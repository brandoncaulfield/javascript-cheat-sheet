// Spread-Syntax (Objects and arrays)

const pickachu = { name: 'pickachu' };
const stats = { hp: 40, attack: 60, defense: 45 }

// const lvl10 = Object.assign(pickachu, stats);
// console.log(lvl10);

// const lvl1 = Object.assign(pickachu, { hp: 45 });
// console.log(lvl1);

// Object {}
// Array []

// 'Good Object Code with spread syntax'

const lvl10 = { ...pickachu, ...stats };
console.log(lvl10);
const lvl1 = { ...pickachu, hp:45 };
console.log(lvl1);


// Arrays

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];



// array.push()

// 'Bad Array Code'
// pokemon.push('Bulbasaur');
// pokemon.push('Metapod');
// pokemon.push('Weedle');

// 'Good Array Code'
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle', ];


// array.unshift()

// 'Bad Array Code'
// pokemon.unshift('Weedle');
// pokemon.unshift('Metapod');
// pokemon.unshift('Bulbasaur');

// 'Good Array Code'
pokemon = [ 'Bulbasaur', 'Metapod', 'Weedle', ...pokemon,];

console.log(pokemon);
