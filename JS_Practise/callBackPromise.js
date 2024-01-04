console.log("swornim is a hacker");
console.log("haha is a hecker");

setTimeout(() => {
    console.log("i am inside setTimeOut");    //even though timedelay 0 it will execute at last due to async nature of js
}, 0);

console.log("The End");


//callBack function  --> we can use function as variable as pass to another function
const callBack = (arg) => {
    console.log(arg);
}
const loadScript = (src,callback) => {
    let sc = document.createElement('script');
    sc.src = src;
    sc.onload = callback("Anil");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callBack);
//promise --> for proper management of coden --> [promise of code execution]

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

