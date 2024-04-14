// qus 1 
// const person = {name:'peter'};
// function sayHi(age){
//     return `${this.name} is ${age}`
// }

// console.log(sayHi.call(person, 21)); // perter is 21
// console.log(sayHi.bind(person, 21)); //return function bcz its called manually



// qus 2 
// function sayHi(){
//     return (()=>0)()
// }
// console.log(typeof sayHi()); //return number


// qus 3 
// function sayHi(){
//     return ()=>0;
// }
// console.log(typeof sayHi()); // return funtion 


// qus 4
// console.log(typeof typeof 1); //string


// qus 5 
// let arr = [1,2,3];
// arr[5]=8;
// console.log(arr);


// qus 6 
// let arr = [1,2,3];
// arr[5] = arr; //nested array banega  //har array me 5th psoition me wahi array hoga
// console.log(arr);


// qus 7
// everything in js """primitive or object"""


// qus 8
// console.log(!!null); //false
// console.log(!!''); //false
// console.log(!!1); //true


// qus 9

// console.log(setInterval(()=>console.log('hi'),1000));
// console.log(setInterval(()=>console.log('hi'),1000));
// console.log(setInterval(()=>console.log('hi'),1000));

//it gives differnt id



// qus 10
// console.log([..."Rohan"]); //break string 