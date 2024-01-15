/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let being = "humantheman";

const collection = [4,'ghost',being];

// console.log(collection);

// collection.forEach(function (item) {      //collection is an array
//     item = `<li>${item}</li>`;
//     console.log(item)
// });

let long = collection.find(function(item) {   // find the index of that array which have chaaracter more than 8 or equal to 8
    if (item.length>= 8) {
        return item;
    }
})
 console.log('long',long);
