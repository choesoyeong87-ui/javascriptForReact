//배열생성
let array2 = [];
//let array2 = new array();

let array = [ 
  1,  
  true, 
  "hello", 
  null, 
  undefined, 
  () => {}, 
  {}, 
  [10,true], 
]; 
//배열요소접근
console.log(`array[0] = ${array[0]}`);
array[0] = "소영잉";
console.log(`array[0] = ${array[0]}`);


console.log(`array[1] = ${array[1]}`);
console.log(`array[2] = ${array[2]}`);
console.log(`array[3] = ${array[3]}`);
console.log(`array[4] = ${array[4]}`);
console.log(`array[5] = ${array[5]}`);
console.log(`array[6] = ${array[6]}`);
console.log(`array[7] = ${array[7]}`);

console.log(array);


// 1. 배열 생성 
let arrA = new Array();  // 배열 생성자 
let arrB = [];           // 배열 리터럴 (대부분 사용) 
//배열에 올수 있는 타입들 
let arrC = [ 
  1, 
  2, 
  3, 
  true, 
  "hello", 
  null, 
  undefined, 
  () => {}, 
  {}, 
  [], 
]; 
 
// 2. 배열 요소 접근 
let item1 = arrC[0]; 
let item2 = arrC[1]; 
console.log(item1, item2); 
  
arrC[0] = "hello"; 
console.log(arrC); 

let array3 = new Array();
array3.push("소영");
console.log(array3);

arrC.pust(10);
console.log(arrC);s