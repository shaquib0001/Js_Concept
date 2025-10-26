// =================================================


// Basic Numbers and Math Operations in JavaScript

   // Numbers can be written with or without decimals
    let num1 = 34.56;   // with decimals
    let num2 = 45;      // without decimals

 // Basic Number Operation
   const pi = 3.14;  // Pi constant
    let radius = 5;
    let area = pi * radius ** 2;  // Area of a circle: πr²
    // console.log("Area of Circle:", area);

    const num=12315;
   //  console.log(num.toLocaleString("en-IN"))
    // console.log(num.toLocaleString("en-US"))

   //  console.log(num.toPrecision(5))

   // console.log(num.toFixed(2))


   const balance= new Number(200)
   // console.log(typeof balance)
   // console.log(balance.toFixed(2))  

   // Converting Numbers to Strings
// console.log(balance.toString().length);


//++++++++++++++++++++ Math ++++++++++++++++++++++++

 // Math Concept in JavaScript
//  console.log(Math);


//  console.log(Math.abs(-8.5));       // Absolute value
//  console.log(Math.ceil(4.2));
//    console.log(Math.floor(4.5));


   // console.log(Math.round(4.78));     // Rounding to nearest integer


   // console.log(Math.max(3, 7, 1, 9, 4));  // Maximum value
   // console.log(Math.min(3, 7, 1, 9, 4));  // Minimum value


//    console.log(Math.random()*10);         // Random number between 0 and 1
//  console.log(Math.floor(Math.random()*10)+1);


//   const min= 10;
//   const max= 20;

//   console.log(Math.floor(Math.random()*(max-min+1)+min));


//   console.log(Math.floor(100000 + Math.random() * 900000).toString());

console.log((Math.random()+1));

console.log(Math.random()*10) 

console.log((Math.random()).toString(32))