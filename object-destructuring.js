// Object destructuring

class car {
    constructor(name, year, topSpeed) {
        this.name = name;
        this.year = year;
        this.topSpeed = topSpeed;
    }
    getName() {
        return this.name;
    };
    getYear() {
        return this.year
    }
}

let Volvo = new car('Volvo', 2020, 260);
let BMW = new car('BMW', 2020, 320);
let Mercedes = new car('Mercedes', 2020, 330)

function carSpecs({name, year, topSpeed}) {
    return `My car is a ${name} and was bought in ${year} with a top speed of ${topSpeed}.`
}

console.log(carSpecs(Volvo));

// OR

function carSpecs2(car) {
    const {name, year, topSpeed} = car;
    return `My car is a ${name} and was bought in ${year} with a top speed of ${topSpeed}.`
}

console.log(carSpecs2(Volvo));