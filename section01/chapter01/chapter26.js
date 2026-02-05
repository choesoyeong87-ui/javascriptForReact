//1. spread 연산자
let array1 = [1,2,3,4,5]
let array2 = [10, ...array1,20,30]
let array3 = array1; // 얕은 복사
console.log(array2);
/*
//깊은복사
let array4 = []
array1.forEach(value => {
    array4.push(value);
});

let array5 = array1.map((value)=>(value*2));
let array6 = array1.filter((value)=>value<Infinity);
console.log(array6);
*/
/*
let array4 = []

for (let i = 0; i < array1.length; i++) {
    array4.push(array1[i]);
}
console.log(array4);
*/
/*
let array4 =[...array1]
console.log(array4);


//2. 객체 스프레드 연산자 깊은복사
let obj1 = { 
  a: 1, 
  b: 2, 
}; 
let obj2 = {
    k:10,
    ...obj1,
    c:4,
    d:5
};
//console.log(obj2);
*/

//3. 구조분해할당, 스프레드 연산자
function funcA(p1,p2,p3){
    console.log(p1+10,p2,p3);
}
const arr5=[1,2,3]
funcA(arr5);
//3.1 스프레드 연산자
function funcA(p1,p2,p3){
    console.log(p1+10,p2*10,p3/10);
}
const arr6=[1,2,3]
funcA(...arr6);
//rest 매개변수
const array7 = [11,12,13]
function funcC(p1,...rest){
    console.log(p1)
    console.log(rest)
};
funcC(...array7);