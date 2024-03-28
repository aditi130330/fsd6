const friend = ["aditi","ayaan","zaheer"];
console.log(friend)
console.log(friend[1])
console.log(friend.length)

// arrays are mutable and strings are not mutable coz const works on primitive

friend[2]="saim";
console.log(friend)

//friend=["ipshita","richell","chetna"]
//when const is used the entire value cannot be changed

const person = ["ayaan",23,50,7000,(2222-33),false,friend]
console.log(person)

let birthYear1 = [2003,2001,2000,2004];

const calage3 = birthYear => 2024-birthYear;
