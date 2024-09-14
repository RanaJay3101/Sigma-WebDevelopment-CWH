class Animal{
    constructor(name){
        this.name = name;
        console.log("Animal constructor");
    }
    
    eats(){
        console.log("Animal eats");
    }


}

class Lion extends Animal{
    constructor(name){
        super(name);
        console.log("Lion constructor");
    }
    
    eats(){
        console.log("Lion eats");
    }
}

let a = new Lion("jay");
// ->first constructor of parent run and then child constructor run

console.log(a);
a.eats();