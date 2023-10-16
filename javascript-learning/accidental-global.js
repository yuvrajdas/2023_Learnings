function foo(){
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y);
 
/**
 * Output
 * 1 undefined number 
 * 
 * Eplaination :
 *              variable x is a block level variable and declared using let keyword so it's accessability is inside of foo() only
 *              y is not defined using any keyword(let, const, var) so it bocomes a global variable that's why its give number.
 * 
 * 
 */