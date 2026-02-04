//상수객체
const animal = {
    //맴버변수
    type: "고양이",
    age: 2
    //맴버함수
};
animal["age"]=10;
animal.color="노란색";
delete animal.age;
animal.type = (index)=> index * 10;
let value = animal.type(10);
console.log(`value = ${value}`);
console.log(animal);

console.log(animal);


const animal2 = {
    name: "호랑이",
    age: 10,
    sayHi(){
        console.log("안녕1");
    },
    sayHi2(){
        console.log("안녕2");
    },
    sayHi3:()=>console.log("안녕3"),
    
}
console.log(animal2);
animal2.sayHi();
animal2.sayHi2();
animal2.sayHi3();