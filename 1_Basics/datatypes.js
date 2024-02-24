// Primitive Data type- 7 type
//String,number,boolean,null,undefined,BigInt,symbol

// const score=100
// const score1 ="Thirty three"
// const isLoggedIn=false
// const outsidetemp=null
// let userEmail;
// const id=symbol('123')
// const anotherId=symbol('123')

// console.log(id=== anotherId); //false -> because symbol convert
// it as unique.


// Refrenced type ya non primitive data type
// Array,Objects,Functions

// const heros=["shaktiman","nagraj","daga"] // array
// let myObj=    // objects
// {
//     name:"kamal",
//     age:22,
// }

// const myFunction= function(){   // function
//     console.log("Hello World");
// }


// memory in JS

// Stack (primitive)-> yha se copy milta hai , Heap (Non-primitive)-> yha se reference milta hai

let myname="kamal"
let anothername=myname
anothername="Kamal nath"
console.log(anothername); // Kamal nath
console.log(myname); // Kamal -> original value change nhi hogi 

let userOne={
    email:'xyz@gmail.com',
    upi:'abs@ybl',
}
let userTwo=userOne;
userTwo.email='qwe@google.com'
console.log(userOne.email); // qwe@google.com
console.log(userTwo.email); // qwe@google.com
//  Heap refrence ko point krta hai isiliye agr value change krni hogi toh dono jagah se change ho jayegi