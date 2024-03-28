// const person = {
//     firstname: "aditi",
//     lastname : "damle",
//     job :"student",
//     age: 2024-2002,
//     salary: 40000,
//     friend:["aditi","ayaan","zaheer"]
    
// };

// const arr = [person,person,person]
// console.log(arr);


// console.log(person)


// dot vs bracket

// console.log(person.firstname)
// console.log(person.age)
// console.log(person.friend)


// console.log(person['firstname'])
// console.log(person['friend'])


// const nameKey = 'name'
// console.log(person['last' + nameKey])


// const interestedin = prompt("i have firstname, last name, age , job and salary");
// // console.log(person[interestedin])

// if(person[interestedin]){
//     console.log(person[interestedin])

// }
// else{
//     console.log("invalid request")
// }



// person.lpcation = "bhopal"
// person['instaid'] = "aditi.damle99"

// let interested  = prompt("enter salary");
// // console.log(person[interested]);

// if(person[interested]){
//    let sal=  person[interested];
//     if(sal>10000&&sal<20000){
//         let b = sal+sal*10/100;
//         console.log(b);
//     }
//     else if(sal>20000){
//         let b = sal+sal*20/100;
//         console.log(b);
//     }    
// }
// else{
//     console.log("invalid request");
// }



// const key = prompt("types salary");

// if(person[key] == person['salary']){
//     if(person.salary>10000 && person.salary>20000){
//         const bonus = person.salary*0.10;
//         const finalsalary = person.salary+bonus;
//         console.log(finalsalary);
//     }
//     else if(person.salary>20000){
//         const bonus = person.salary*0.20;
//         const finalsalary = person.salary+bonus;
//         console.log(finalsalary);
//     }
//     }
//     else{
//         console.log("not valid");
//     }


// for(let i=0; i<=15 ; i++){
//     let even = i%2;
//     if(even==0){
//         console.log(i)
//     }
// }

// for(let i=0; i<=20; i++){
//     let even1 = i%3;
//     let even2 = i%5;
//     if(even1==0 && even2==0){
//         console.log(i)
//     }
// }

// let number = 321;
// let reverse = 0
// while(number!=0){
//     let rem= number%10;
//     reverse=reverse*10+rem;
//     number=parseInt(number/10)
    
// }
// console.log(reverse)



let input;
let arr=[];

do{
    arr.push(Number(prompt('enter record'))) 
    console.log(arr);
    input = prompt('do you want to enter another entry yes or no ')
    console.log(input)

}
while(input!='no');







