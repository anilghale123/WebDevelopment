


//promise --> for proper management of coden --> [promise of code execution]
/* console.log('This is promnise');
let prom1 =  new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Yes I am done');
        resolve("Anil")      //send data to be resolve network request
        
    },3000);
})

prom1.then((a) => {      //receive data to be resolved
    console.log(a);
    
}).catch((err)=> {
    console.log(err);  //if network not working user see this messages
    
})   */


//Promise API
/* Promise.all(promises) --> waits for all promise to resolve & return array
   Promise.allSettles(Promises) --> waits for all promise to settle and return
   Promise.race(Promises) --> waits for first promises to settle and return
   Promise.any(Promises)  --> waits for first promises to fulfill & not rejected return
   Promise.resolve(value) --> makes resolved promise with given value   
   Promise.reject(error)  --> makes rejected promise with error
   */





// async function getData(){
//     //simulate getting data from the server
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 resolve(455);
//             }, 3500);
//         })
// }

// async function main(){
// console.log("loading modules");
// console.log("do something else");
// console.log("Load data");

// let data = await getData();

// console.log(data);
//        console.log("process data");
//        console.log(" task 2");
// }

// main();
// data.then((v) =>{
//       console.log(data);
//       console.log("process data");
//       console.log(" task 2");
// })

