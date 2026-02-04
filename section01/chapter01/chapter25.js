//1. 구조분해할닫(객체,배열을 분해해서 변수에 할당)
let array = [1,2,3];
let one = array[0];
let two = array[1];
let three = array[2];

let[_one,_two,_three=10,four=4]= array;
console.log(_one);
console.log(_two);
console.log(_three);
console.log(four);

//2. 구조분해할닫(객체를 분해해서 변수에 할당)
let person = { 
  name: "홍길동", 
  age: 27, 
  hobby: "테니스", 
};

let person3 = person;
console.log(person3 === person);

let person2 = {
    age : myAge,
    name : myName,
    hobby : myHobby,
    extra = "hello"
} = person;

let _myAge = person.age;
let _myName = person.name;

console.log(person2 === person);
console.log(myAge,myName,myHobby,extra)