/**
 * loop are the statamet that execute code which is inside of the loop's body 
 * it take three parameter 
 * 1. initial value
 * 2. condition 
 * 3. increment/decrement
 * 
 * Types of loop in javascript
 * 
 * 1. For loop
 * 2. For of 
 * 3. For in
 * 
 * 
 * 
 */

let arr = [1, 2, 3, 4, 5];

// Normal loop old strategy
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " ");
}

// Modern style
for (let data of arr) {
    console.log(data);
}

// for in loop used to iterate over the object 
let obj = {javascirpt:"angular", python:"djngo", php:"Laravel", java:"spring boot"};
for(let objData in obj){
    console.log(objData+" "+obj[objData]);
}



