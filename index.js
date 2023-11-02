
//for(let i=0; i<5; i=i+1){
//console.log(i);
//}
//let rectangle = {
// length:1,
   // breadth:2
//};
//let date = new Date();
//let date2 = new Date('august 2 2003 7:15');
//console.log(date);
//console.log(date2);

//function sum(a,b){
//    return a+b;
//}
//console.log(sum(1,5));

//-----------Default Parameter------------
//  function interest(p,r,y){
//     return p*r*y/100;
//  }
//  console.log (interest(1000,10,5));
 

// --------------------------------------------------------------------------------
//adding 100 para 
const t1 =performance.now();
for(let i=1;i<=100;i++){
   let newElement = document.createElement('p');
   newElement.textContent = 'this is Para' + i;

   document.body.appendChild(newElement);

}
const t2 = performance.now();
console.log("this took" + (t2-t1) + "ms");
//optimising a bit
const t3 =performance.now();
let myDiv = document.createElement('div');

for(let i=1;i<=100;i++){
   let element = document.createElement('p');
   element.textContent = 'this is Para' + i;
   myDiv.appendChild(element);

}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("this took" + (t4-t3) + "ms");






