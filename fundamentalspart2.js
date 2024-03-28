'use strict'; // used to define errors

// let hasdriverslicense = false;

// const passtest= true;

// if(passtest){
//     hasdriverslicense = true;
// }


//-------------------------------------------

// FUNCTIONS

// function logger(){
//     console.log("i am a function");
// }
// logger();

// these are user defined functions

// function foodProcessor(apples, oranges){
//     console.log(apples+" apples "+oranges+" oranges")
//     const juice = `juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }

// let glass = foodProcessor(2,4);
// console.log(glass);

// console.log(foodProcessor(0,5));

// const mixedjuice = foodProcessor(2,2)
// console.log(mixedjuice);

// FUNCTION DECLARATION VS EXPRESSION

// function calage1(birthYear){
//     return 2024-birthYear;
// }

// const age1 = calage1(2002)
// console.log(age1)

// // anonymous function
// const calage2 = function(birthYear){
//     return 2024-birthYear
// }

// const age2=calage2(2002)
// console.log(age2)

// -------------------------
// multiline arrow function


// const retirement = (birthYear,firstname) => { // this is a global variable
//  const age = 2024 - birthYear;
//  const retirement = 62 - age;
// //  return retirement; // this is local variable
//  return ` ${firstname} retires in ${retirement} years;`
// }

// console.log(retirement(2002));

// alert(retirement(2000,"aditi"));

const cutpieces = function(fruit){
    return fruit*4;
}

function foodProcessor(apples,oranges){
    const applepieces = cutpieces(apples);
    const orangepieces = cutpieces(oranges);
    console.log(apples +" apples "+oranges+" oranges");
    const juices =`juices with ${applepieces} applepieces and ${orangepieces} orange pieces `;
    return juices;

}

let glass = foodProcessor(2,4);
console.log(glass);