/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */




const deskArray = [
    'pen',
    'camera',
    'phone',
    'notebook',
    'headphones',
    'light bulb',
    'usb drive',
    'elephant',
]

deskArray.pop(); // remove the last item from the array

deskArray.unshift(deskArray.pop())

deskArray.sort()

let removeItem = deskArray.find(function(item) {
    if (item==='notebook') {
        return item;
    }
})






console.log('Desktop',removeItem);