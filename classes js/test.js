import car from "./car.js";
import book from "./book.js";

const lambo = new car("Lamborghini", "blue", 319, "Suv", "Sedan", 50, 4, false);

console.log("This is the status:", lambo);
console.log("Sun Roof status:", lambo.sunRoof);

const book1 = new book("Atomic",'Charles',99881111,1982,"Done");

console.log('Book 1',book1);
