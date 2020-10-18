// Loops (Reduce, Map, Filter)

const orders = [500, 30, 99, 15, 223];

// let total = 0;
// let withtax = [];
// let highValue = [];

// Bad Code

// for ( i = 0; i < orders.length; i++ ) {
            
//     // Reduce
//     total += orders[i];

//     // Map 
//     withtax.push(orders[i] * 1.18);

//     // Filter
//     if (orders[i] > 100) {
//         highValue.push(orders[i])
//     }

// }


// 'Good Code'

// Reduce
const total = orders.reduce((acc, curr) => acc + curr);

// Map
const withTax = orders.map(v => v * 1.18);

// Filter
const highValue = orders.filter(v => v > 100)

console.log({total, withTax, highValue});