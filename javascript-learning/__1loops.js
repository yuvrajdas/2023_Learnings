/*  loops are used to print the single statement in multiple time
    There are 5 types of loops in JavaScript

    1. for(initial state; condition; increment/decrement) { body of the loop/your logic works}
    2. do while loop
    3. while
    4. for in
    5. for of
*/

//for loop
let i =0 ; // initial value
for(i; i<5; i++){
    console.log("foor loop",i);
}
console.log("---------------------------------------");

//do-while Loop
let j=6;//initial value
do{
    console.log("do while value",j);
    j--;
}while(j>2);
    
console.log("----------------------------------------")
//While Loops
let k=7;
while(k>0){
    console.log("while loop value", k);
    k--;
}

console.log("----------------------------------------")

// for of
let arr = [1,2,3,4,5];

for(let item of arr){
    console.log("for of loop value",item);
}

console.log("---------------------------------------");
// for in 
for(let item in arr){
    console.log("for in loop value", item);
}