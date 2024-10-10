// 1. 

// let count = 0;
// const array = [0,1,2,4,5];
// array.forEach(num => {
//     if(num){
//         count+=1;
//     }
// });

// Output should be 5 but it will be 4 bzox if(num)-> will be false so condition will not run 
// console.log(count)  // 4



// 2.  
// const arr = [2,3,4,5];
// arr.slice(0,1);

// we are printing original array as slice will not modify the original array 
// console.log(arr);  // [2,3,4,5];


// 3.  

// const arr = [2,3,4,5];
// console.log(arr) // [2,3,4,5]
// console.log( arr.slice(0,1));   // 2 (sliced element will be printed)


// 4.
// const arr = [2,3,4,5];
// arr.unshift(8);   // this will modify the original array 
// console.log(arr);  // [8,2,3,4,5]


// 5.

// const arr = [2,3,4,5];
// arr.splice(0,1);
// arr.unshift(8);   
// console.log(arr);  // [8,3,4,5]


// 6.
// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     "a": 3,
//     b: 7
// }
// // here data type of a and "a"  is string only so both of the them will get over ridden with new values 
// console.log(obj);  //{ a: 3, b: 7, c: 3 }


// 7.
// console.log(!"harsh");  // false - string "harsh" is converting into a falsy value so we are getting false
// console.log(+false); // 0  // we are adding false in nothing so it will give us nothing 


// 8.
// console.log("" == false)  // true
// console.log("" === false)  // false


// 9.
// console.log(NaN == NaN);  // false
// console.log(NaN === NaN); //false


// 10.
// console.log("1" + undefined);
// console.log(1 + undefined);



// 11. 
// console.log(typeof typeof 1000);  // string
// bcoz: // typeof 1000  - Number
// // type of Number - string 


// 12. 
// const arr = [2,3,4,5,6];
// arr[10] = 100;
// console.log(arr);  [ 2, 3, 4, 5, 6, <5 empty items>, 100 ]


// 13.
// function myFunc(){
//      xyz = 100
//     console.log(xyz);
// }
// console.log(myFunc());  
// // 100
// // undefined


// 14.
// function myFunc(){
//     "use strict"
//     xyz = 100
//    console.log(xyz);
// }
// console.log(myFunc()); 
// if we use 'use strict' then we will get error because xyz has not assigned any value but if dont use xyz then 100 will be printed 


// 15. 
// var x = 1+abc;
// abc = 100;
// console.log(x);  // error -> abc is not defined


// 16. 
// var x = 1+abc;
// var abc = 100;
// console.log(x);   // Nan


// const data = {
//     name: "harsh",   
// }
// const abc = [1,2,3,4];
// console.log(delete data); // false
// console.log(delete abc);  //false

// // both are giving false becuase delete is used to delete the PROPERTIES of Object
// // for array - delete will delete the Elements of array not the complete array 
// console.log(delete data.name);  // true

// // so delete will always give true or false 


// 17.
// const abc = [1,2,3,4];
// const [x,y] = abc;
// console.log(x,y);  // [1,2] 


// 18.
// const a = []
// const b = [];
// console.log(a==b);  //false
// console.log(a===b);  //false
// // arrys are of reference type so both of the array are different ie why we are getting false 


// 19. Infinite currying
// A curried function
// function multiply(a) {
//     return function (b) {
//       return a * b;
//     };
//   }
  
//   // Using the curried function
//   const multiplyBy2 = multiply(2);  // Returns a function
//   console.log(multiplyBy2(5));   


// 20. HOC function 

// hoc function example 
// function greet(name, callback) {
//     return callback(name);
// }
// function sayHello(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("John", sayHello)); 


// 21. Babel ->
// Babel is a JavaScript compiler that transforms modern JavaScript (ES6+) code into backwards-compatible JavaScript for older browsers or environments.


// 22.The package-lock.json file in a React.js project (or any Node.js project) is used to lock the versions of the installed dependencies. It ensures that the exact same versions of packages are installed across all environments

// 23. Different types of list in HTML

// -> Ordered List (<ol>):
    
// This type of list displays items in a specific, numbered order.
{/* <ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol> */}


// -> Unordered List (<ul>):
// This type of list displays items in no particular order, with bullet points or other markers.

{/* <ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul> */}


// -> Description List (<dl>):

// This list is used to display terms and their definitions or descriptions. It consists of pairs of <dt> (definition term) and <dd> (definition description).

{/* <dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl> */}


// 24. 
// The <em> tag emphasizes text as well as semantic meaning (for emphasis), while the <i> tag simply italicizes text without adding any semantic importance.

// 25.In HTML, the following tags do not require closing tags (they are self-closing):

// <br> – Line break
// <hr> – Horizontal rule
// <img> – Image
// <input> – Input field
// <meta> – Metadata
// <link> – Link to external resources (like CSS)
// <area> – Defines an area inside an image map
// <source> – Specifies multiple media resources for elements like <audio> or <video>
// <base> – Specifies a base URL for relative URLs
// <col> – Specifies column properties for an HTML table
// <embed> – Embeds external content (e.g., multimedia)
// <wbr> – Suggests a line break opportunity


// 27. In CSS, keyframes are used to create animations by defining a sequence of styles at specific points in time. They allow you to specify intermediate steps in an animation, giving you control over how an element transitions between different styles over time.
// @keyframes slide {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(100px);
//     }
//   }
  
//   .box {
//     animation: slide 2s ease-in-out infinite;
//   }