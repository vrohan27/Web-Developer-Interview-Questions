// qus 1
// const first = new Promise((res, rej)=>{
//     setTimeout(res,500,'one');
// })

// const second = new Promise((res, rej)=>{
//     setTimeout(res,100,'two')
// })

// Promise.race([first,second]).then(res=>console.log(res));  // two



// qus 2

// let person = {name:'Rohan'};
// let member = [person];
// person = null;
// console.log(member); // we have array bcz object and arry differnt


// qus 3

// let person = {name : 'rohan', age:22};

// for(x in person){
//     console.log(x);
// } //this returns keys


// // qus 4
// let a = 3+6+'5';
// console.log(a);
// console.log(typeof a); //string


// qus 5
// console.log(typeof 5+4+'5'); number 45


// qus 6
// console.log(typeof(5+6+ +'2')); ///number 13


// qus 7
// console.log([]==[]);


// qus 8
// let data = [1,2,3].map(num=>{
//     if(typeof num === 'number') return;
//     return num * 2;
// })
// console.log(data); // all is undefiend


// qus 9

// function getInfo(member){
//     member.name = 'anil'
// }

// const person = {name : 'rohan'};

// getInfo(person);
// console.log(person); // new value anil 


// qus 10 
// function Car(){
//     this.name = 'tata';
//     return {name : 'kia'}
// }

// let final = new Car();
// console.log(final.name);  // ans is kia bcz return value overright bfr value


// qus 11
// (
//     ()=>{
//         let x =(y=10);
//     }
// )()
// console.log(typeof x); //undefined


// qus 12
// (()=>{
//     let x = y =10;
// })()

// console.log(typeof y); //return number


// qus 13
// (()=>{
//     let x = 10;
// })()

// (()=>{
//     let x = 10;
// })()

// console.log(typeof x);
