// qus 1

// JSON.parse() => convert JSON to js object 
// JSON.stringify() => convert js object to JSON format 

// qus 2
// let name = "Rohan";
// function getRun(){
//     console.log(name);
//     let name = "anil"; // its gives error bcz in hoisting first declear then initalie let scope is block level scope
// }
// getRun();


// // qus 3
// let name = "Rohan";
// function getRun(){
//     console.log(name);
// }
// getRun(); ///return Rohan


// qus 4
// console.log(`${(x=>x)('Rohan')} to program`);

// qus 5
//output should be 6
// function add(x,y,z){
//     return x+y+z;
// }
// console.log(add(...[1,2,3]));;


// qus 6
// let name = "i love coding";
// console.log(! typeof name === Object); //false
// console.log(! typeof name === String); //false
// console.log( ! typeof name === false); //true


// // qus 7
// let name = 'Rohan';
// let age = 23;

// console.log(isNaN(name));
// console.log(isNaN(age));


// qus 8
// let user = {name:"rohan"};
// Object.seal(user); //it mean this object not add other key value, but modified already availble
// console.log(user.name='sohan');


// qus 9 
// let arr = [2,6,5,8,7];
// arr.shift(); // del first element  unshift for adding ele in first
// console.log(arr);


// qus 10 
// let arr = [2,6,5,8,7];
// arr.pop() //del last ele //push for add in last
// console.log(arr);