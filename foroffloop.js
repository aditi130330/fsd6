
let strVar = "aditi"
let arr = [100,"aditi",2024-2002]
let arr1= [20000,10000,3000]
// console.log(strVar) // here traversing will not happen

// for(let val of strVar){
// console.log(val)
// }

// traverse of aditi will be the output

// for(let key of arr1){
//     console.log(key+1000)
// }
// let sum = 0;

// for(let key of arr1){
//     sum=sum+key;
// }
// console.log(sum)



//------------------>

//for-in

// let student = {
//     name1 :"aditi",
//     age:21,
//     cgpa : 7.8,
//     is_pass : true,
//     college: "uit rgpv"
// }
// for(let key in student){
//     // console.log(key)
    
//     console.log(student[key])
// }

// function PrintOnlyString(student){
//     for(let val in student){
//         if(typeof student[val]==='string'){
//             console.log(`${val} : ${student[val]}`)
//         }
//     }
// }
// PrintOnlyString(student)

let gameNum = prompt("give a number to be guessed");
let userNum = prompt("guess the number")
let count =0;
while(userNum!=gameNum){
    if(userNum>gameNum)
    {userNum = prompt("number is greater than actual,guess again")}
    else if(userNum<gameNum)
    {userNum = prompt("number is smaller than actual,guess again")}
    else if(userNum==gameNum){
    alert("congrats")
    }
    break;
}
// console.log("congrats")

