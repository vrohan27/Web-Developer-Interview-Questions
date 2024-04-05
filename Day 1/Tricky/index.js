// question 1

// function ShowMessage(marks){
//     const msg = marks || 'absent'; // const msg = marks ?? 'absent';
//     console.log(`Marks ${msg}`);
// }

// ShowMessage(50);
// ShowMessage(0);
// ShowMessage(90);

// result //
// Marks 50
// Marks absent  // bcz 0 is a false value in js
// Marks 90

//this error bcz of || (or operator) its check value is true or false and in js 0 is false value
// so we use ?? (null operator) its check value is null or undefined only.



// ------------------------------------------------------------------------------


// question 2

var fun = "🦁";

function showName(){
    fun = "🐼"; // local variable
    return;
    function fun(){};
}

showName();
console.log(fun);

// js gives priority to function 


// -----------------------------------------

// question 3 
//count the vowels

// const str = "HEY JS You ARE AMAZING";

// const vowels = ['a','e','i','o','u'];

// function countVowels(data) {
//     let count = 0;
    
//     data.toLowerCase().split("").forEach(element => {
//         vowels.includes(element) && count++;
//     });
//     return count;
// }

// const numOfVowels = countVowels(str);
// console.log(numOfVowels);


//-------------------------------------------

// question 4

// check the timers are suspended or not wehen we are change the tab

// let num =0;

// setInterval(()=>{
//     console.log(num++);
// },100);

// when we are change the tab for some time, browser suspend the timer 

//-------------------------------------------

// question 5 
// what if we log a undefined variable

console.log(readvar);

// its throw a error, of undefined