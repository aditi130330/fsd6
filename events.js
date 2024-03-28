// let button = document.querySelector("#btn1");

// call back functions, pure function  block level function
// button.onclick = ()=>{
//     console.log("bonus button is clicked");
//     let salary = 10000;
//     salary = salary+1000;
//     alert('my final salary with bonus is'+ salary)
// }

// let box = document.querySelector(".dabba1");

// box.onmouseover = ()=>{
//    let pass = prompt("enter the valid password")
//    if(pass=='ram'){
//     alert('file is accessible')
//    }
// }

// button.onclick = (evt)=>{
//     console.log(evt)
//     console.log(evt.type)
//     console.log(evt.target)
// }

// event listener allows us to apply multiple actions on the same button. has two parameters-- event andthe callback function

// button.addEventListener("click", () => {
//     console.log("button is clickedx")
// })

// button.addEventListener("click", () => {
//     alert('thanks for visiting')
// })

// button.addEventListener("click", () => {
//     console.log("button is clickedx")
// })

// button.addEventListener("dblclick", () => {
//     alert('thanks for visiting')
// })

// button.addEventListener("click", () => {
//     console.log("button is clickedx")
// })

// const handlerFn = () => {
//     alert('thanks for visiting')
// }
// button.addEventListener("click",handlerFn )

// button.addEventListener("click", () => {
//     console.log("button is clickedx")
// })

// button.removeEventListener("click",handlerFn)

let Modebtn = document.querySelector("#mode")
let currmode = "light"

let body = document.querySelector("body")

Modebtn.addEventListener("click",()=>{
  if(currmode=="light"){
    currmode="dark"
    console.log(currmode)
    // document.querySelector("body").style.backgroundColor="black"
    body.classList.add("dark")
    body.classList.remove("light")
  }
  else{
    currmode="light"
    console.log(currmode)
    // document.querySelector("body").style.backgroundColor="white"
    body.classList.add("light")
    body.classList.remove("dark")
  }
})