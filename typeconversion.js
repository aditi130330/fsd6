
// TYPE CONVERSION----------------

// const inputYear = '1999';
// console.log(inputYear+18);

// Number(inputYear);

// console.log(Number(inputYear)+18);
// // here we converted the number manually

// console.log(typeof NaN);

// TYPE COERSION--------------------

// console.log('i have ' + 2 + ' years of experience');

// console.log('23'-'10'+3)
// here - is doing a mathematical operation and + is concatinanting


// let n = '1'+1;
// console.log(n);
// n=n+1;

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))

// console.log(Boolean("ADITI"))

// const money=0;
//here 0 is a bug
// let money=0;
// if(money){
//     console.log("you can shop");

// }
// else{
//     console.log("udhaarrrr")
// }

// -----------------------------------------------
// == vs ===

// === is strictly tight different datatypes will not be considered
// == is losely type different datatypes can be equated

// const age = '18';

// if(age==18){
//     console.log("youre ready to marry")
// }


// ------------------------------------------------

// let age = Number (prompt("enter age"))
// console.log(age)

// if(age===18){
//     console.log("fuck you then")
// }
// else if(age===23){
//     console.log('bitch fuck you')
// }
// else{
//     console.log('udit ho kya')
// }

// BOOLEAN OPERATORS(AND OR NOT)-----------------------------------
// const hasdriverlicense = true;
// const hasgoodvision = false;

// console.log(hasdriverlicense && hasgoodvision);
// console.log(hasdriverlicense || hasgoodvision);
// console.log(!hasdriverlicense);


// if(hasdriverlicense&&hasgoodvision){
//     console.log("you can drive");
// }
// else if(hasdriverlicense||hasgoodvision){
//     console.log("cycle chala");
// }
// else{
//     console.log("pedal chal");
// }

//---------------------------------------------------------

// let day = prompt("enter day");

// switch(day){
//     case'monday':
//     console.log("chest and triceps");
//     break;
//     case'tuesday':
//     console.log("back biceps");
//     break;
//     case'wednesday':
//     case'thursday':
//     console.log("rest");
//     break;
//     case'friday':
//     console.log("mix");
//     break;
//     case'saturday':
//     console.log("legs and glutes");
//     break;
// }


//-----------------------------------------------

const age = 12

// age>=18?console.log("you need a job"):console.log("you are fine")
// age>=18?console.log("you need a job"):console.log("you have "+(18-age)+ " years left")

// ternary operator = condition ? true : false
const drink = age>=18?'wine':'water';
console.log(drink);