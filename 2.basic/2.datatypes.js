let num = 123;
let big = BigInt(6541654148484);
let name =  "dheeraj kumar p    ";
let he_alive= false;
let income = null;
let mind ;
let uniqueSymbol = Symbol('description');
console.log(uniqueSymbol); // Symbol(description)


console.log(typeof num);
console.log(typeof big);
console.log(typeof name);
console.log(typeof  he_alive);
console.log(typeof income);
console.log(typeof mind);
console.log(typeof uniqueSymbol);



console.table([ num , name , big ,he_alive,income,mind,uniqueSymbol  ])