let a = prompt("Enter a number");
let b = prompt("Enter a number");

sum = parseInt(a) + parseInt(b);

if(isNaN(sum)){
    throw new Error("This is not a number");
}

try{
    console.log(sum*x);
}
catch(e){
    console.log("This is error",e);
}
finally{
    console.log("This is finally block");
}

// what is significatnt of final? -> https://www.geeksforgeeks.org/why-finally-block-is-always-executed-in-java/

// console.log(sum);