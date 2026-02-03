//1. 객체생성
let person = { 
  name: "홍길동", 
  age: 30, 
  hobby: "축구", 
  job: "Developer", 
extra: {},   //객체도 들어올수 있음 
extra2: function () {},  //함수도 들어올수 있음 
  "like cat": true,  //한칸띄는 변수가 있으면 “”  
};
console.log(person);
delete person.job;
console.log(person);

let result1 = "name" in person;
console.log(result1);

person.nation = "한국";
console.log(console);
// console.log(person.name);
// console.log(person["name"]);
// person.extra2 = (index)=>{console.log(index)};
// console.log(person.extra2("화살표함수"));
// person.extra = {
//     with : 10,
//     height : 20
// };
// console.log(person.extra);
// console.log(person);

