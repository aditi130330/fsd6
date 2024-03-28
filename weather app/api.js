const URL= "https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#fact")
const button = document.querySelector("#btn")
// async function returns a promise 

// await always comes inside async function
async function getFacts(){
   let response = await fetch(URL)              // fetch has a by default method hich is get and it returns a promise
   console.log(response)
   let data=await response.json();                             //array of objects
   console.log(data[0].text)
   factPara.innerText = data[0].text
}

button.addEventListener("click",getFacts)



// getFacts()
// console.log("body")
