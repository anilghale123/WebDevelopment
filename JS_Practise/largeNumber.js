
let a = document.getElementById('numOne');
let b = document.getElementById('numTwo');
let c = document.getElementById('numThree');


let result = document.getElementById("result");
 
 function input()
 {
    let x = parseInt(a.value);
    let y = parseInt(b.value);
    let z = parseInt(c.value);

      compare(x,y,z);

 }

 function compare(g,h,i)
 {
    if(g>h && g>i)
    {
        result.innerHTML = "Greatest number : " +g;
    }  
    
    else if(h>i)
    {
        result.innerHTML = "Greatest number : " +h;
    }

    else{
        result.innerHTML = "Greatest number : " +i;
    }


 }
 

 function test()
 {
    var k = 10;
    
 }
 console.log(k);

 test();
