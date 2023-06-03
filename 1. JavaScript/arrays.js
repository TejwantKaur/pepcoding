let arr = [1,2,'hi',3,4,5];
console.log (arr);
console.log(arr.length);

let i=0;
while(i<arr.length){
    console.log('Element at ', i, 'is ', arr[i]);
    i++;
}
console.log ()

// push, unshift
// push -> atEnd, unshift -> atBeginning

arr.push('atEnd');
console.log('----------push----------');
console.log (arr);
arr.unshift('Start');
console.log('----------unshift----------')
console.log (arr);

arr.pop();
console.log ('----------pop----------')
console.log(arr);

arr.shift();
console.log ('----------shift----------')
console.log(arr);
console.log()
console.log ('----------Slice----------')
console.log ('------Starting-to-(ending-1)-------')
let partOfAnArray = arr.slice(2,4);
console.log(partOfAnArray);
console.log(arr.slice(2));

console.log()
console.log ('----------splice----------')
console.log(arr);
console.log ('----------splice(2,1)----------')
arr.splice(2,1); // goto index 2 and del 1 element
console.log(arr)
console.log ('----------splice(2,3)----------')
arr.splice(2,2); // goto index 2 and del 2 elements
console.log(arr);