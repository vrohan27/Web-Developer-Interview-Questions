// qus 1 

// if([]){
//     console.log('💘');
// }

// if([] == false){
//     console.log('🍔');
// }else{
//     console.log('🍕');
// }

// bcz empty array is true value , (==) is convert array to the string 


//==================================


// qus 2

// console.log(2.awesome);

// sol.--
// console.log((2).awesome);
// console.log(2..awesome);

// const num = 2
// console.log(num.awesome);


// ==================================

// qus 3

// function sum(num1){
//     return (num2)=>{
//         if(num2 === undefined){
//             return num1;
//         }else{
//            return sum(num1+num2);
//         }
//     }
// }

// const res = sum(1)(2)(3)(4)();
// console.log(res);

// isFinite curring

// /================================


// qus 4

// console.log(0 == -0);
// console.log(0 === -0);
// console.log(Object.is(0,-0)); // this is right way


//==================================

// qus 5 

// let i = 0;
// function show(){
//     console.log(i++);
//     show();
// }
// show();

// sol//
// let i = 0;
// function show(){
//     console.log(i++);
//     setTimeout(()=>{
//         show();
//     })
// }
// show();

