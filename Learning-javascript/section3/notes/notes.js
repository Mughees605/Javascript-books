/**
 * Associativity:
 * 	- what order operator functions get called in: left to right (called left associativity) or
 * 		right to left (called right associativity)
 * 	- when two or more operator functions have the same precedence
 * 	- ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 * 			- the one with the biggest number will get called first and the one with the smaller second as parameters
 * 				pdf in /notes folder and mdn link above
 *
 * Coercion:
 *  - converting a value from one type to another (you can coerce a string to a number ex: console.log(Number("3"))
 *  - this happens quite often in javascript because its dynamically typed.
 *  - operators are just functions so they are running code and is apart of the process of calling that function
 *  - check out example: c5 and c_10 folder
 *
 * Dynamic Typing:
 *  - you don't tell the engine what type of data a variable holds, it figures out while
 *    your code is running
 *  - variables can hold different types of values because it's all figured out during
 *    execution
 *  - figures it out on the fly
 *
 * Equality "... == ..." vs Strict Equality "... === ..."
 *  - Equality allows for coercion while strict equality doesn't
 *  - recommended to use strict equality 99.99% of the time to avoid unexpected errors caused by equality operators
 *    and makes it very difficult to anticipate what will happen
 *  - ex: See c_10 folder
 *  - ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 *      - as look at equalty-comparison-and-sameness.pdf
 *
 * Primitive Types:
 *  - a type of data that represents a single value
 *  - something that is not an object
 *  - there are 6 types of primitives
 *      - UNDEFINED: represents lack of existence, happens when we never set the value
 *      - Null: represents lack of existence, when you want your variable to equal nothing
 *      - BOOLEAN: true or false, one of two values
 *      - NUMBER: js only has one numeric type, "floating point number" (there's always some
 *        decimals) Unlike other programming languages, there's only one 'number' type and it
 *        can make math weird
 *      - STRING: a sequence of characters (both single '' and double "" quotes can be used)
 *      - SYMBOL: Used in ES6 (the next version of Javascript)
 *
 * Operator:
 *  - operators are functions
 *  - a special function that is syntactically (written) differently
 *  - generally, operators take two parameters and return one result
 *  - the js engine provides the ability to write whats is called infix notation, means the operator
 *    sits between two parameters
 *  - common operators are +, -, > (greater than), < (less than)
 *
 * Operator Precedence:
 * 	- which operator function gets called first
 *  - functions are called in order of precedence (HIGHER precedence wins)
 */
