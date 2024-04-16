// 1.
console.log(typeof new String("")); //object
console.log(typeof String("")); //string


// 2.
// 3 ways to call a function without ()

const Obj = {
    // show : function(){
    //     console.log(`JS is 💜`);
    // }

   get show(){
        console.log(`JS is 💜`);
    }
}

// Obj.show`` //tagged template litteral 
// new Obj.show
// Obj.show;