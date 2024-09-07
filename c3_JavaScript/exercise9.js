/*
Exercise 9 -> make a faulty calculater

- takes 2 no. from user
- it perform wronf operation as folow

+ -> -
* -> +
- -> /
/ -> **

it's only perform 10% of the time 
*/

FaultFactor = Math.random()*100;

let FaultChange = {
    1:2,
    2:4,
    3:1,
    4:5
}

let a=prompt("Enter a first number");
let b=prompt("Enter a second number..");

let c=prompt("Enter a number for followinf operation: 1.+ 2.- 3.* 4./");

const FaultyCalculator = (a,b,c)=>{
    console.log(c);
    switch(c){
        case "1":
            return a+b
        case "2":
            return a-b
        case "3":
            return a*b
        case "4":
            return a/b
        case "5":
            return a**b
    }
    return 0;
}

const newFun = (a,b,c) => {
    return eval(`$(a) $(c) $(b)`);
}
let ans;
if(FaultFactor<=10){
    c=FaultChange.c;
}
ans=FaultyCalculator(a,b,c);
alert(ans);


