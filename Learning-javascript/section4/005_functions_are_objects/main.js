/**
 * - In javascript functions are objects.
 * - FIRST CLASS FUNCTIONS:  * 	
 * - everything you can do with other types such as objects, strings, numbers, and booleans you can do with functions
 * 	- assign variables to have a value thats a function
 *  - pass functions around as parameters to other functions
 *  - create functions on the fly with a kind of literal syntax
 */
function greet(){
    console.log("hi")
}

// I added a property to function
greet.language = "english";

greet()