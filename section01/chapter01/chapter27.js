//1. 사용자 정의 정책
let object1 = { name :"최소영",age : 20}
let object2 = {...object1};
object2.hobby = "테니스";
console.log(object1 === object2);
console.log(JSON.stringify(object1));
console.log(JSON.stringify(object1)===JSON.stringify(object2));