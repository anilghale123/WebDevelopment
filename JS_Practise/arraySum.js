let arr = [2, 1, 0, 3, 0];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let sum = 0;
let sum2 = 0;
let sum3 = 0;
var arrayOfDigits;
var arrayOfDigits2;
var arrayOfDigits3;

// First loop
for (let i = 0; i < arr.length - 1; i++) {
   sum = arr[i] + arr[i + 1];
   
   
   if (sum >= 10) {
    arrayOfDigits = Array.from(String(sum), Number);
      arr2.push(arrayOfDigits);
   } else {
      arr2.push(sum);
   }
}

// Second loop
for (let i = 0; i < arr2.length - 1; i++) {
  
      sum2 = arr2[i] + arr2[i+1];
      if (sum2 >= 10) {
        arrayOfDigits2 = Array.from(String(sum2), Number);

         arr3.push(arrayOfDigits2);
      } else {
         arr3.push(sum2);
      }
   } 


// Third loop
for (let i = 0; i < arr3.length - 1; i++) {
 
      sum3 = arr3[i] + arr3[i+1];
      if (sum3 >= 10) {
        arrayOfDigits3 = Array.from(String(sum3), Number);

         arr4.push(arrayOfDigits3);
      } else {
         arr4.push(sum3);
      }
   } 

console.log(arr2);
console.log(arr3);
console.log(arr4);
