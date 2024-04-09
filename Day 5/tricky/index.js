// qus 1
// let a = [];
// let b = [];
// console.log(a==b);
// console.log(a===b);

// both ans are false because its compared blank arrays memory location


// qus 2
// let a = [];
// let b = a;
// console.log(a==b);
// console.log(a===b);
//both ans is true bcz both memory location is same


// qus 3
// let a = [20];
// let b = [20];
// console.log(a[0]==b[0]); // true bcz we are chking values not arrays
// console.log(a==b);

// console.log(a[0]===b[0]); //true
// console.log(a===b);


// quss 4 
// let a = [1,2,3,4];
// let b = {name : 'rohan'};
// console.log(...a); //values get without array bcz spread operator


// qus 5
// console.log(typeof(NaN)); //its type is number 


// qus 6
// let a = 10 - -10;
// console.log(a); //bcz - - = + //20


// qus 7 
// let a = new Set([1,23,4,4,5]);
// console.log(a); //bcz set return unqiue values


// qus 8 
// let a = {name:'anill'};
// console.log(delete(a.name)); // return is true
// console.log(delete a); // its false bcz we dont delete object by delete mthd


// // qus 9 
// let dta = ['rohan','mohan','sohan'];
// let [a] = dta;
// console.log(a); //return is rohan 


// qus 10
// let dta = ['rohan','mohan','sohan'];
// let [,a] = dta; // , is for getting second value 
// console.log(a);