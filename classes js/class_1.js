class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    changeName(name){
        this.name = name;
    }
    
    infoBio(bio){
        this.bio = bio;
        console.log(this.bio+this.name+this.age)
    }
}

const arhab = new Person('arhab', 56);
const person4 = new Person('ra',899);
const person7 = new Person('ra',89);
const person5 = new Person('rad',8599);
const person88 = new Person('ra',5679);
const person5456 = new Person('ra',8908999);

console.log(person4); 
console.log(person5); 
console.log(arhab); 
console.log(arhab); 
console.log(arhab); 

arhab.infoBio('Hello')