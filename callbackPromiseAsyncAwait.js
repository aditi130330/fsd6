

// console.log("one")
// console.log("two")
// console.log("three")


// set time out==============================

// setTimeout(()=>{
//     console.log("helloooo1")
// },3000)


// console.log("stories")

// // async function
// setTimeout(()=>{
//     console.log("helloooo2")
// },3000)

// console.log("body")

// setTimeout(()=>{
//     console.log("helloooo3")
// },3000)


//=============================================

// setInterval(()=>{
//     console.log("har har mahadev")
// },3000)


// CALLBACK FUNCTIONS-- function ke andar function

// function sum(a,b){
//     console.log(a+b)
// }

// calculator(1,3,(a,b)=>{
//     console.log(a+b)
// })
// function calculator(a,b,sumCallback){
//     sumCallback(a,b)
// }

// calculator(1,4,sum) // function as a parameter has to be passed


// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data",dataId)
//     },2000)
// }

// these are not interdependent theyre different functions

// getData(1)
// getData(2)
// getData(3)

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId)
//         if(getNextData()){
//             getNextData()
//         }
//     },2000)
// }


// // here all the functions are dependent on each other this is called pyramid of doom or callback hell 

// getData(1,()=>{
//     console.log("getting data 2...")
//     getData(2,()=>{
//         console.log("getting data 3...")
//         getData(3,()=>{
//             console.log("getting data 4...")
//              getData(4)
//         })
//     })
// })



// PROMISE =====================================================================
// promise will return an a
// promise is an object - either the promise will get resolved or revoked 
// three states of promises are rejected resolved and pending
// promise returns an object

// let promise = new Promise((resolve,reject)=>{
//     console.log("i am a promise")
//     resolve("network resolved") 
// })


//===========================================================
// function getData(dataId, getNextData) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("success")
//             if (getNextData) {
//                 getNextData()
//             }
//         }, 10000)
//     })
    
// }
// let result = getData(123)

//  Promise Fulfilled =========================================

// const getPromise = ()=>{
//     return new Promise ((resolve,reject)=>{
//         console.log("i am a promise")
//         // resolve("hehehehehe")
//         reject("baadh aa gyi")
//     })
// }

// let result = getPromise()
// result.then((res)=>{
// console.log("promise is resolved",res)
// })

// result.catch((err)=>{
//     console.log("refund",err)
// })

// PROMISE CHAINING
// function asyncfunc1(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         console.log("somedata1")
//         resolve("success")
//      },3000)
//     })
// }

// function asyncfunc2(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         console.log("somedata2")
//         resolve("success")
//      },3000)
//     })
// }


// console.log("fetching 1")
// let p1 = asyncfunc1()
// p1.then((res)=>{
//     console.log(res)
// })

// console.log("fetching 2")
// let p2 = asyncfunc2()
// p2.then((res)=>{
//     console.log(res)
// })



// console.log("fetching data1")
// let p1 = asyncfunc1()
// p1.then((res)=>{
//     console.log("fetching data 2")
//     let p2 = asyncfunc2()
//     p2.then((res)=>{

//     })
// })


// samll syntax

// console.log("fetching data 1")
// asyncfunc1().then((res)=>{
//     console.log("fetching data 2")
//     asyncfunc2().then((res)=>{

//     })
// })


// async await===========================================

    // async function hello(){
    //   console.log("namaste!!!")
    // }
    // hello();
    // async function apiDelhi() {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       console.log("waether data of delhi");
    //       resolve("balle balle");
    //     }, 2000);
    //   });
    // }
    // async function apiPune() {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       console.log("waether data pune");
    //       resolve("balle balle");
    //     }, 2000);
    //   });
    // }
    
    // async function getWeatherData() {
    //   const delhi = await apiDelhi();
    //   console.log(delhi);
    //   const pune = await apiPune();
    //   console.log(pune);
    // }
    
    // getWeatherData();
    
    // function getData(dataId) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       console.log("data", dataId);
    //       resolve("balle balle")
    //     }, 3000);
    //   });
    // }
    
    // async function getAlldata(){
    //   await getData(1)
    //   console.log("getting data 2")
    //   await getData(2)
    //   await getData(3)
    //   await getData(4)
    // }
    // console.log("getting data 1...")
    // getData(1).then((res)=>{
    //   console.log("getting data 2...")
    //   getData(2).then((res)=>{
    //     console.log("getting data 3...")
    //     getData(3).then(()=>{
    //       console.log("getting data 4...")
    //       getData(4)
    //     })
    //   })
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
    
    // getData(1,()=>{
    //   console.log("getting data 2.....")
    //   getData(2,()=>{
    //     console.log("getting data 3.....")
    //     getData(3,()=>{
    //       console.log("getting data 4.....")
    //       getData(4)
    //     })
    //   })
    // });