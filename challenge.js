let mass_mark=78;
let mass_jhon=78;

let height_mark=1.67;
let height_jhon=1.67;

console.log("jhons height = "+height_jhon+" jhons mass = "+mass_jhon);
console.log("marks height = "+height_jhon+" marks mass = "+mass_jhon);

let bmi_jhon=mass_jhon/(height_jhon**2);
console.log("jhon bmi = "+bmi_jhon);

let bmi_mark= mass_mark/(height_mark**2);
console.log("marks bmi = "+bmi_mark);

// const mark_heigher_bmi = bmi_mark>bmi_jhon;
// console.log(mark_heigher_bmi);

if(bmi_jhon>bmi_mark){
    console.log("marks bmi is higher than john's bmi");
    console.log(`mark's bmi ${bmi_mark}`)
}
else{
    console.log("john's bmi is higher");
    console.log(`john's bmi ${bmi_jhon} is higher`);
}