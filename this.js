// Understanding the context of "this"

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

function Horse(name) {
	This.name = name;
};

const myHorse = new Horse('Secretariat');

console.log(this);