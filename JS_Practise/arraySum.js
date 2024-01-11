let arr = [1, 1, 0, 0, 1];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let sum = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < arr.length -1; i++) {
   sum = arr[i] + arr[i + 1]; 
   arr2.push(sum);
}
   for (let i = 0; i < arr2.length -1; i++) {
   sum2 = arr2[i] + arr2[i + 1];
   arr3.push(sum2);
   }

   for (let i = 0; i < arr3.length -1; i++) {
    sum3 = arr3[i] + arr3[i + 1];
    arr4.push(sum3);
    }

console.log(arr2); 
console.log(arr3);
console.log(arr4);

