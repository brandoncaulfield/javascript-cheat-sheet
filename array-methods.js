/**
 * JavaScript Array Methods:
 *
 * Add a new object at the start - Array.unshift()
 * Add a new object at the end - Array.push()
 * Add a new object in the middle - Array.splice()
 *
 * ?????
 * Array.shift
 * Array.pop
 *
 * Looping through an array of objects:
 * - Find an object in an array by its values - Array.find()
 * - Get multiple items in an array that match a condition - Array.filter()
 * - Transform objects of an array - Array.map()
 * - Add a propert to every object of an array - Array.forEach()
 *
 * Sorting an array by a property - Array.sort()
 * Check if objects in an array fulfill a specific condition - Array.every(), Array.includes()
 *
 */

// Array of objects
let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];

// To add an object at the first position, use Array.unshift()
let car1 = {
  color: "red",
  type: "sedan",
  registration: new Date("2019-01-03"),
  capacity: 5,
};

cars.unshift(car1);

// To add an object at the last position, use Array.push()
let car2 = {
  color: "brown",
  type: "suv",
  registration: new Date("2019-02-08"),
  capacity: 5,
};

cars.push(car2);

/**
 * To add an object in the middle, use Array.splice()
 * Array.splice(
 *  (index where to start)
 *  (how many items to remove)
 *  (items to add)
 * )
 */

let car3 = {
  color: "green",
  type: "hatchback",
  registration: new Date("2018-02-08"),
  capacity: 3,
};

cars.splice(3, 0, car3);

console.table(cars);

/**
 * To find an object in an array by its values, use Array.find()
 */

// Search for one value
let redCar = cars.find((car) => car.color === "red");
console.log(redCar);

// Search for multiple values
let redStationWagon = cars.find(
  (car) => car.color === "red" && car.type === "station wagon"
);
console.log(redStationWagon);

/**
 * To search for multiple objects in an array with a condition, use Array.filter()
 */

let redCars = cars.filter((car) => car.color === "red");
console.table(redCars);

/**
 * To transform objects of an array, use Array.map()
 */

let sizes = cars.map((car) => {
  if (car.capacity <= 3) {
    return "small";
  }
  if (car.capacity <= 5) {
    return "medium";
  }
  return "large";
});
console.log(sizes);

/**
 * Create a new object
 */

let carsProperties = cars.map((car) => {
  let properties = {
    capacity: car.capacity,
    size: "large",
  };
  if (car.capacity <= 5) {
    properties.size = "medium";
  }
  if (car.capacity <= 3) {
    properties.size = "small";
  }
  return properties;
});

console.table(carsProperties);

/**
 * Add a property to every object of an array - Array.forEach()
 */
cars.forEach((car) => {
  car.size = "large";
  if (car.capacity <= 5) {
    car.size = "medium";
  }
  if (car.capacity <= 3) {
    car.size = "small";
  }
});

console.table(cars);

/**
 * Sorting items in an array based on a property - Array.sort()
 * It compares two objects and puts the first object in the
 * second place if the result of the sorting function is positive
 */

let sortedCars = cars.sort((c1, c2) =>
  c1.capacity < c2.capactity ? 1 : c1.capacity > c2.capacity ? -1 : 0
);
console.log("%c Sorted cars:", "color: green; font-weight: bold");
console.table(sortedCars);

/**
 * Checking if objects in an array fulfill a specific condition - Array.every(),
 * Array.some(), Array.includes()
 */

/**
 * Array.some() - checks is any of the items match the condition
 */
let purpleMinivanExists = cars.some(
  (car) => car.color === "purple" && car.type === "minivan"
);

console.log(
  `Do any purple minivans exists in the array: ${purpleMinivanExists}`
);
/**
 * Array.every() - checks if all items in an array satisfy the condition
 */
let canAllCarsCarryAtLeast4People = cars.every((car) => car.capacity >= 4);
console.log(
  `Can all cars carry at least 4 people: ${canAllCarsCarryAtLeast4People}`
);
