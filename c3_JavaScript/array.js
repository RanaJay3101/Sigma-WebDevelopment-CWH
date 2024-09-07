/* Array */

let a = [2, 4, 1, 7 ,8]

// console.log(a)
// console.log(a.length)
// console.log(a[0])

a[0] = 5
// we can do this in array but mot in string bc string are immutable

// let b=a.toString();
// let b=a.join('')
// console.log(b);
// console.log(b[1]);

// a.pop();
// a.push("jay");
// console.log(a)
// a.shift();
// a.unshift("rana");
// console.log(a);

// a.spilce(1,3);

// a.sort();
// a.reverse();

a = [1,4,5,2,6,2];

// a.forEach((val,index,arr) => {
//     console.log(val,index,arr);
// });

/*
Map filter and reduce 
*/

let square = a.map((e)=>{
    return e**2;
});

console.log(square);

let newArr = square.filter((e)=>{
    return (e<20)?true:false;
});

console.log(newArr);

const add = (a,b)=>{
    return a+b;
}
let addition = newArr.reduce(add);

console.log(addition);

let rj = Array.from("Rana Jay"
);

console.log(rj);

let n = 6;

let arr = Array.from(Array(n).keys());
console.log(arr);
arr[0]=1;
let mul = (a,b) => {
    return (a)*(b+1);
}
let ans = arr.reduce(mul);
console.log(ans);



