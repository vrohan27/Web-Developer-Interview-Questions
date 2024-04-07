// qus 1

// console.log([43,31] > [89]);
// console.log([3] > [2]);

//bcz when we are compare array by Comparison operators its convert array to string , and compare strings

//============================

// qus 2 

// function isPass(){
//     console.log(`inside isPass`);
//     return "Pass";
// }

// function isTopper(){
//     console.log('inside topper');
//     return 'Topper';
// }

// const msg = isPass && isTopper;
// console.log(`msg = ${msg}`);

// when we are combine two functions by && operator so its check first function is true, 
// if first function is true so its move to second function , and second function is true
// so the final value is return as second funciton's


//=================================


// qus 3 

// const x = (1,2,3,4,5);
// console.log('x =', x);

// in js we are separate multiple expression value by comma, and when we are console it so its return the last
// value

//===================================


// qus 4 

// let {x, x:y} = {x:2};

// console.log('x =', x);
// console.log('y =',y);


// x:y || here y is alternate name of x


//===================================

// qus 5 

// const name = "JS";

// function show(a,b){
//     console.log('a=',a);
//     console.log('b=',b);
// }

// show`hey ${name},welcome`;

// its call Tagged template literals
// first parameter is array of strings, and second is variable